import React from 'react';

import { SafeAreaView} from 'react-native';
// import { CounterScreen } from './src/presentation/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';
// import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen';

export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWorldScreen name='Nestor Bardel'/> */}
        {/* <CounterScreen/> */}
        <CounterM3Screen/>
      </SafeAreaView>
    </PaperProvider>
  );
};




