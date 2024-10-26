import React, { useState } from 'react';

import { View, Text} from 'react-native';
import { globalStyles } from '../theme/global.styles';
import { FAB } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';


export const CounterM3Screen = () => {

  const [count, setCount] = useState<number>(10);



  return (
    <View style={globalStyles.centerContainer}>
        <Text style={globalStyles.title}>{count}</Text>

        {/* <Icon name="accessibility-outline" size={25}/> */}

        <FAB
          icon="add"
          // label="+1"
          style={globalStyles.fab}
          onPress={() => setCount(count + 1)}
          onLongPress={() => setCount(0)}
        />
    </View>
  );
};

