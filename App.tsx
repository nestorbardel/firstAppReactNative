import React from 'react';

import { SafeAreaView} from 'react-native';
// import { CounterScreen } from './src/presentation/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';
// import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';
// import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FlexScreen from './src/presentation/screens/FlexScreen.tsx';
// import PositionScreen from './src/presentation/screens/PositionScreen';
// import { BoxObjectModelScreen } from './src/presentation/screens/BoxObjectModelScreen';
// import { DimensionScreen } from './src/presentation/screens/DimensionScreen';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <IonIcon {...props} />,
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWorldScreen name='Nestor Bardel'/> */}
        {/* <CounterScreen/> */}
        {/* <CounterM3Screen/> */}
        {/* <BoxObjectModelScreen/> */}
        {/* <DimensionScreen/> */}
        {/* <PositionScreen/>*/}
        <FlexScreen/>
      </SafeAreaView>
    </PaperProvider>
  );
};




