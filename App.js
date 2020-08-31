import React, { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  Text,
  ScrollView,
  Animated,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

import AnimatedComponent from './AnimatedComponent';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from './styles';
import logo from './logo.png';

export default function Demo(props) {
  const [doAnimation, setDoAnimation] = useState(true);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", keyboardDidHide);
    return () => {
      Keyboard.removeListener("keyboardDidShow", keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", keyboardDidHide);
    };
  }, []);

  const keyboardDidShow = () => {
    console.log("Keyboard Shown");
    setDoAnimation(false);
  };

  const keyboardDidHide = () => {
    console.log("Keyboard Hidden");
    setDoAnimation(true);
  };



  return (
    <View style={{ flex: 1, backgroundColor: '#4c69a5', alignItems: 'center' }}>

      <AnimatedComponent doAnimation={doAnimation} />
      <ScrollView style={{ flex: 1 }}>

        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
        >

          <TextInput
            placeholder="Name"
            style={styles.input}
          />

          <TextInput
            placeholder="Surname"
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
          />


          <TextInput
            placeholder="Password"
            style={styles.input}
          />
          <TextInput
            placeholder="Confirm Password"
            style={styles.input}
          />

        </KeyboardAvoidingView>
      </ScrollView>
      <View>
        <TouchableOpacity style={styles.register}><Text>Done</Text></TouchableOpacity>
      </View>
    </View>
  );
}


