import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const [point, setPoint] = useState(0);
  const [xCurrent, setXCurrent] = useState(0);
  const [yCurrent, setyCurrent] = useState(1000);
  const [level, setLevel] = useState(1);
  const [oke, setOke] = useState(false)
  const animatedValue = useRef(
    new Animated.ValueXY({
      x: xCurrent,
      y: yCurrent,
    }),
  ).current;

  if (xCurrent != 0) {
    let move = setInterval(() => {

      Animated.timing(animatedValue, {
        toValue: {
          x: Math.floor(Math.random() * 400),
          y: Math.floor(Math.random() * 460),
        },
        duration: 1000,
        useNativeDriver: false,
      }).start();
      // console.log(animatedValue.x)


    }, 1000);
    setTimeout(() => {
      clearInterval(move)
      setXCurrent(0)
      setOke(true)
    }, 10000)
  }
  if (oke) {
    const a =  alert("Game Over, You have " + point + " score")
    if(a){
      setPoint(0);
    }
  }

  return (
    <View>
      <Text style={{
        color: 'red',
        fontSize: 20,
        textAlign: 'center'
      }}>Score: {point}</Text>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          transform: [
            { translateX: animatedValue.x },
            { translateY: animatedValue.y }
          ],
          backgroundColor: 'red'
        }}
      >
        <TouchableOpacity style={
          {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }
        } onPress={() => {
          setPoint(point + 1)
        }}>
          <Text style={{
            color: 'white',
          }}>
            Trái Bóng
          </Text>
        </TouchableOpacity>
      </Animated.View>
      <TouchableOpacity onPress={() => {
        setXCurrent(100)
        setyCurrent(100)
      }} style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: 'blue',
        position: 'relative',
        top: 480
      }}>
        <Text style={{ color: 'white' }}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})