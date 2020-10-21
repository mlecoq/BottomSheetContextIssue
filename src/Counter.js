import React, {useContext} from 'react';
import {Text, Button} from 'react-native';
import BottomSheet from './BottomSheet';
import {Context} from './Context';
import {BottomSheetView, useBottomSheetModal} from '@gorhom/bottom-sheet';

const Counter = () => {
  const {count} = useContext(Context);

  const {present} = useBottomSheetModal();

  return (
    <>
      <Text style={{fontSize: 26}}>{count}</Text>
      <Button
        title="Show Bottom Sheet"
        onPress={() => {
          present(
            <BottomSheetView>
              <BottomSheet />
            </BottomSheetView>,
            {
              snapPoints: [300, '50%'],
              animationDuration: 250,
              overlayOpacity: 0.5,
              dismissOnOverlayPress: true,
            },
          );
        }}
      />
    </>
  );
};

export default Counter;
