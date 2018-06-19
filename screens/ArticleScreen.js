import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Page from '../components/Page';
import parseContentJson from '../utils/parseContentJson2';

export default class ArticleScreen extends Component {
  static navigationOptions = {
    title: 'Статья',
  };

  state = {
    article: null
  } 

  componentDidMount() {
    this.fetchNews()
  }

  fetchNews = async () => {
    const urn = this.props.navigation.getParam('urn');
    const resp = await fetch(`https://sport24.ru/api/8news/news/${urn}`);
    const data = await resp.json();
    const article = data.list[0];
    this.setState({article});
  }

  parseContent = () => {
    const {article} = this.state;
    console.log(article);
  }

  render() {
    this.parseContent();

    return (
      <Page>

      </Page>
    )
  }
}