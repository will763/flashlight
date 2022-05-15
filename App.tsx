import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Torch from 'react-native-torch';

import imageOff from './assets/eco-light-off.png';
import imageOn from './assets/eco-light.png';
import dioWhite from './assets/logo-dio-white.png';
import dio from './assets/logo-dio.png';
import {useToggleSlow} from './hooks/useToggleSlow';

const App = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);

  function handleClick() {
    setCounter(oldCounter => {
      if (oldCounter === 6) {
        setToggle(false);
        Torch.switchState(false);
        return 0;
      }
      return oldCounter + 1;
    });
  }

  useToggleSlow(setToggle, toggle, counter);

  return (
    <View style={toggle ? styles.containerLight : styles.container}>
      <TouchableOpacity onPress={handleClick}>
        <Image
          style={toggle ? styles.lightingOn : styles.lightingOff}
          source={toggle ? imageOn : imageOff}
        />
        <Image style={styles.dioLogo} source={toggle ? dio : dioWhite} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightingOff: {
    resizeMode: 'contain',
    tintColor: 'white',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
});

export default App;
