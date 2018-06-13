import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import s from './styles.js';
import time from '../../utils/time';

export default class ArticleItem extends Component {
  getDate(publishDate) {
    return time(publishDate, "relativeReverse")
  }

  render() {
    const { title, sport, publishDate, previewImage } = this.props;
    return (
      <View style={s.item}>
      <Image
          source={{uri: `https://s74794.cdn.ngenix.net${previewImage.thumbnail}`}}
          style={s.img}
      />
        <Text style={s.header}>{title}</Text>
        <View style={s.container}>
          <Text style={s.subTitle}>{sport.title}</Text>
          <Text style={s.time}>{this.getDate(publishDate)}</Text>
        </View>
      </View>
    );
  }
}