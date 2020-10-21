/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Counter from './src/Counter';

import 'react-native-gesture-handler';
import {Provider} from './src/Context';
import {View} from 'react-native';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import BottomSheet from './src/BottomSheet';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <Provider>
          <BottomSheetModalProvider>
            <Counter />
            <View style={{height: 40}} />
            <BottomSheet />
          </BottomSheetModalProvider>
        </Provider>
      </SafeAreaView>
    </>
  );
};

export default App;
