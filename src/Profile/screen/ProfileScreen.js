import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';

export default class extends Component {
  render() {
    return (
      <View>
        <Text>Hello from ProfileScreen</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}>
          <Text>Go to Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  friendItem: {
    marginVertical: 100,
  },
});
