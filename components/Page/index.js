import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class Page extends Component {
  render() {
    const { title, children } = this.props;
    
    return (
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, textAlign: 'center' }}>{title}</Text>
        {children}
      </View>
    );
  }
}