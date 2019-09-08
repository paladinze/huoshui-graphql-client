import React, {Component} from 'react';
import {Text, TextInput, View, FlatList, StyleSheet} from 'react-native';
import {Container, Header, Content, Icon} from 'native-base';

const SearchBar = ({term, onTermChange}) => {
  return (
    <View style={styles.background}>
      <Icon name="search" style={styles.icon} />
      <TextInput
        placeholder="search"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={term}
        onChangeText={newTerm => {
          onTermChange(newTerm);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f0eeee',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginVertical: 5,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  icon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 10,
    color: 'grey',
  },
});

export default SearchBar;
