import React from 'react';
import { Animated } from 'react-native';
import { useAnimation } from './hook';
import logo from './logo.png';

const AnimatedComponent = ({ doAnimation }) => {
  const animation = useAnimation({ doAnimation, duration: 300 });
  return (
    <Animated.Image 
    source={logo}
    style={{
      width: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [50, 100],
      }),
      height: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [50, 100],
      }),
    }} /> 
  )
}

export default AnimatedComponent;