import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import s from './styles.js';

export default class NewsItem extends Component {
  render() {
    return (
      <View style={{...s.item}}>
        <Text style={{...s.header}}>«Монако» объявил о согласии продать Лемара в «Атлетико»</Text>
        <View style={{...s.container}}>
          <Text style={{...s.subTitle}}>Футбол</Text>
          <Text style={{...s.time}}>22:40</Text>
        </View>
      </View>
    );
  }
}