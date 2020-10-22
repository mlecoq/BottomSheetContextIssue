import {TouchableHighlight} from '@gorhom/bottom-sheet';
import React, {useContext} from 'react';
import {Text} from 'react-native';
import {Context} from './Context';

const BottomSheet = () => {
  const {setCount} = useContext(Context);
  return (
    <TouchableHighlight
      onPress={() => {
        setCount((count) => count + 1);
      }}>
      <Text>add</Text>
    </TouchableHighlight>
  );
};

export default BottomSheet;
