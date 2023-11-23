import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import socket from './service/connector';
import {FAB} from 'react-native-paper';
import {nanoid} from 'nanoid';
import {v4 as uuidv4} from 'uuid';

const Intro = () => {
  useEffect(() => {
    socket.on('connect', () => {
      console.log('trying to connect', socket.id);
    });

    return () => {};
  }, []);

  let userId = (Math.random() * 100).toString();

  function joinRoom() {
    socket.emit('addUser', {name: 'damilola', userId});
  }

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Text style={{color: 'white', fontSize: 22, textAlign: 'center'}}>
        Join a call
      </Text>

      <FAB icon="plus" style={styles.fab} onPress={joinRoom} />
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
