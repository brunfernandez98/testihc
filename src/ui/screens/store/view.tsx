import { observer } from "mobx-react"
import React, { useMemo } from 'react'
import { View, Button } from 'react-native'
import { useContainer } from "../../../config/injectonProvider";
import { StoreViewModel } from "./viewModel";
import { container } from "../../../config/di";


const Store = () => {
    const viewModel = useMemo(() => {
        const storeViewModel = container.get<StoreViewModel>(StoreViewModel);
        return storeViewModel;
    }, []);

   

    if(viewModel.isLoading) {
        return (
           <Button title="test" onPress={() => viewModel.getStores()} />
        )
    }

  

    return (
        <>
        <View>
            <Button
                onPress={() => viewModel.getStores()}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            </View>
            </>
    )
}

export default observer(Store);