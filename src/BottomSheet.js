import React, {useContext} from 'react';
import {Button} from 'react-native';
import {Context} from './Context';

const BottomSheet = () => {
  const {setCount} = useContext(Context);
  return (
    <Button
      title="add"
      onPress={() => {
        setCount((count) => count + 1);
      }}
    />
  );
};

export default BottomSheet;
