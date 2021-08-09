import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { Animated, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {

  const opacityVal = useRef(new Animated.Value(0)).current
  const widthVal = useRef(new Animated.Value(0)).current

  const animatedViewStyle = {
    width: opacityVal * 100,
    height: 100,
    backgroundColor: 'green',
    opacity: opacityVal
  }

  const animate = () => {
    Animated.timing(opacityVal, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false
    }).start()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.startAnimBtn} onPress={animate}>
        <Text style={styles.startAnimText}>Start Animation</Text>
      </TouchableOpacity>
      <Animated.View style={animatedViewStyle}>
      </Animated.View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  startAnimBtn: {
    height: 40,
    width: 200,
    backgroundColor: "blue"
  },
  startAnimText: {
    fontSize: 20,
    fontWeight: "100",
    color: 'white',
  }
});
