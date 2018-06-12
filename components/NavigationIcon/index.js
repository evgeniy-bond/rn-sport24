import React, { Component } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';

import feed from './icons/feed.png';
import feed_hov from './icons/feed_hov.png';
import articles from './icons/articles.png';
import articles_hov from './icons/articles_hov.png';
import news from './icons/news.png';
import news_hov from './icons/news_hov.png';
import matches from './icons/matches.png';
import matches_hov from './icons/matches_hov.png';
import media from './icons/media.png';
import media_hov from './icons/media_hov.png';

const images = {
  feed,
  articles,
  news,
  matches,
  media,
  feed_hov,
  articles_hov,
  news_hov,
  matches_hov,
  media_hov
};

const NavigationIcon = ({ name, focused }) => (
  <Image
    source={focused ? images[`${name}_hov`] : images[name]}
    style={{ width: 24, height: 24 }}
    resizeMode="contain"
  />
)

export default NavigationIcon;
