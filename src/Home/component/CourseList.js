import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';

export default class extends Component {
  render() {
    const friends = [
      {name: 'Friend #1'},
      {name: 'Friend #2'},
      {name: 'Friend #3'},
      {name: 'Friend #4'},
      {name: 'Friend #5'},
      {name: 'Friend #6'},
    ];

    return (
      <View>
        <Text>Hello from CourseList</Text>
        <FlatList
          keyExtractor={friend => friend.name}
          data={friends}
          renderItem={({item}) => {
            return <Text style={styles.friendItem}>{item.name}</Text>;
          }}
        />
        <Image
          style={{width: 250, height: 250}}
          source={require('../../../assets/nadia.jpg')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  friendItem: {
    marginVertical: 100,
  },
});
