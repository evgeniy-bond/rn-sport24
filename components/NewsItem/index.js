import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import s from './styles.js';
import time from '../../utils/time';

export default class NewsItem extends Component {
  getDate(publishDate) {
    return time(publishDate, "relativeReverse")
  }

  render() {
    const { title, sport, publishDate } = this.props;

    return (
      <View style={{...s.item}}>
        <Text style={{...s.header}}>{title}</Text>
        <View style={{...s.container}}>
          <Text style={{...s.subTitle}}>{sport.title}</Text>
          <Text style={{ ...s.time }}>{this.getDate(publishDate)}</Text>
        </View>
      </View>
    );
  }
}