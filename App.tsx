import React from 'react';

import { SafeAreaView} from 'react-native';
import { CounterScreen } from './src/presentation/screens/CounterScreen';
// import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <HelloWorldScreen name='Nestor Bardel'/> */}
      <CounterScreen/>
    </SafeAreaView>
  );
};




