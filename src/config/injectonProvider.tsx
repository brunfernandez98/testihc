import React, { ReactNode } from 'react';
import { Container } from 'inversify';
import {container} from './di';
const InversifyContext = React.createContext<{ container: Container | null }>({ container: null });

type Props = {
    children: ReactNode;
};

export const Provider: React.FC<Props> = (props) => {
    if (container === null) throw new Error('container is null');
    return (
        <InversifyContext.Provider value={{ container }}>
            {props.children}
        </InversifyContext.Provider>
    );
};

export const useContainer = () => {
    const { container } = React.useContext(InversifyContext);
    if (container === null) throw new Error('container is null');
    return container;
}

