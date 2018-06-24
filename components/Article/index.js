import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import parseContentJson from '../../utils/parseContentJson2';
// import s from './styles.js';

export default class Article extends Component {
  parseContent = () => {
    const { article } = this.props;
    if (!article) {
      return null
    };
    // console.log(article);
    const { content } = article.list[0];
    // const parsedContent = content.map(parseContentJson);
    // console.log('parsed', parsedContent);
    const parsedContent = parseContentJson(1)
    return null
    // return parsedContent;
  }
  render() {
    return (
      <View>
        {this.parseContent()}
        <Text>
          Статья
        </Text>
      </View>
    );
  }
}