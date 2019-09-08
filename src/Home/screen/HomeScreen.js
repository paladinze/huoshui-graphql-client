import React, {Component, useState} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import SearchBar from './SearchBar';

const HomeScreen = () => {
  const [term, setTerm] = useState('');

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} />
      <Text>Hello from Home</Text>
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('Profile');
        }}>
        <Text>Go to Profile Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('Rank');
        }}>
        <Text>Go to Rank Screen</Text>
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  friendItem: {
    marginVertical: 100,
  },
});
