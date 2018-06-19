import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import s from './styles';

export default class Page extends Component {
  render() {
    const { title, children } = this.props;
    
    return (
      <View style={s.container}>
        {title && <Text style={s.text}>{title}</Text>}
        {children}
      </View>
    );
  }
}