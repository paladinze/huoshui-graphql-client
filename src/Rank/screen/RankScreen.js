import React, {Component, useState} from 'react';
import {Text, Button, View, FlatList, StyleSheet} from 'react-native';

const RankScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="add 1"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="minus 1"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>{counter}</Text>
    </View>
  );
};

export default RankScreen;
