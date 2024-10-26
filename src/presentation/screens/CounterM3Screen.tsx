import React, { useState } from 'react';

import { View, Text} from 'react-native';
import { globalStyles } from '../theme/global.styles';
import { FAB } from 'react-native-paper';


export const CounterM3Screen = () => {

  const [count, setCount] = useState<number>(10);



  return (
    <View style={globalStyles.centerContainer}>
        <Text style={globalStyles.title}>{count}</Text>
        <FAB
          // icon="plus"
          label="+1"
          style={globalStyles.fab}
          onPress={() => setCount(count + 1)}
          onLongPress={() => setCount(0)}
        />
    </View>
  );
};

