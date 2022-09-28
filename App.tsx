import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { Provider } from './src/config/injectonProvider';
import Navigation from './src/ui/navigation';
import { container } from './src/config/di';
import { ApolloProvider } from '@apollo/client';
import { client } from './src/configApollo';


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApolloProvider client={client}>
      <Provider>
      <SafeAreaProvider>
          
          <Navigation colorScheme={colorScheme} />
        
        <StatusBar />
        </SafeAreaProvider>
        </Provider>
        </ApolloProvider>
    );
  }
}
