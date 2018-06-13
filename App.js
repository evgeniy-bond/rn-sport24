import React, { Component } from 'react';
import RootStack from './screens';
import { Font } from 'expo';

export default class App extends Component {
  componentDidMount() {
    Font.loadAsync({
      'PTSansCaption': require('./assets/fonts/PT_Sans_Caption/PT_Sans-Caption-Web-Regular.ttf'),
      'PTSansCaptionBold': require('./assets/fonts/PT_Sans_Caption/PT_Sans-Caption-Web-Bold.ttf'),
    });
  }
  render() {
    return <RootStack/>;
  }
}