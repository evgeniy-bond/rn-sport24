import React from 'react';
import { View, Text, Image, WebView } from 'react-native';

export default function parseContentJson(element, key = Math.random()) {
  const tag = element[0];
  const children = element[1] || [];
  const props = element[2];

  let tags = {
    'img': () => {
      let {title} = props;

      if (title && title.substr(0, 1) === '(' && title.substr(-1) === ')') {
        title = title.substr(1, title.length - 2);
      }
    },
    'h2': () => (
      <Text key={key} style={{fontSize: 18}}>
        {children.map(parseContentJson)}
      </Text>
    ),
    'h3': () => (
      <Text key={key} style={{ fontSize: 16 }}>
        {children.map(parseContentJson)}
      </Text>
    ),
    'p': () => {
      if (props.class === 'infographics') {
        return (
          <View key={key}>
            {children.map(parseContentJson)}
          </View>
        );
      }

      if (props.class === 'image') {
        return (
          <View key={key}>
            {children.map(parseContentJson)}
          </View>
        );
      }

      if (children[0] && children[0][0] && ['instagram', 'twitter', 'youtube', 'test', 'timeline', 'storymap'].indexOf(children[0][0]) !== -1) {
        return (
          <View key={key}>
            {children.map(parseContentJson)}
          </View>
        );
      }

      return (
        <Text key={key} style={{fontSize: 12}}>
          {children.map(parseContentJson)}
        </Text>
      );
    },
    'br': () => (
      '\n'
    ),
    'footer': () => (
      <View key={key}>
        {children.map(parseContentJson)}
      </View>
    ),
    'h4': () => (
      <Text key={key} style={{ fontSize: 14 }}>
        {children.map(parseContentJson)}
      </Text>
    ),
    'h6': () => (
      <Text key={key} style={{ fontSize: 12 }}>
        {children.map(parseContentJson)}
      </Text>
    ),
    'a': () => (
      <Text key={key} style={{ textDecorationLine: 'underline'}}>
        {children.map(parseContentJson)}
      </Text>
    ),
    'span': () => (
      <Text key={key} >
        {children.map(parseContentJson)}
      </Text>
    ),
    // 'blockquote': () => (
    //   <Blockquote key={key}>
    //     {children.map(parseContentJson)}
    //   </Blockquote>
    // ),
    'twin': () => (
      <View key={key}>
        {children.map(parseContentJson)}
      </View>
    ),
    // 'youtube': () => (
    //   <Youtube key={key} url={props.url}/>
    // ),
    // 'iframe': () => (
    //   <div key={key} className="media--video embed-responsive embed-responsive-16by9">
    //     <iframe src={props.url} allowFullScreen/>
    //   </div>
    // ),
    // 'test': () => (
    //   <Test key={key} id={props.id} url={props.url}/>
    // ),
    // 'timeline': () => (
    //   <div key={key} className="timeline">
    //     <iframe src={props.url} width="100%" height="650px" allowFullScreen/>
    //   </div>
    // ),
    // 'storymap': () => (
    //   <div key={key} className="storymap">
    //     <iframe src={props.url} width="100%" height="600px" allowFullScreen/>
    //   </div>
    // ),
    // 'instagram': () => (
    //   <InstagramEmbed key={key} url={props.url} hideCaption/>
    // ),
    // 'twitter': () => {
    //   const url = props.url.split('/');
    //   const id = url[url.length - 1];
    //   return (
    //     <TweetEmbed key={key} id={id} options={{align: "center"}}/>
    //   );
    // },
    'ol': () => (
      <View key={key}>
        {children.map(parseContentJson)}
      </View>
    ),
    'ul': () => (
      <View key={key}>
        {children.map(parseContentJson)}
      </View>
    ),
    'li': () => (
      <View key={key}>
        {children.map(parseContentJson)}
      </View>
    ),
    // 'gallery': () => (
    //   <Gallery key={key} images={children}/>
    // ),
    'strong': () => (
      <Text key={key} style={{fontWeight: 'bold'}}>
        {children.map(parseContentJson)}
      </Text>
    ),
    'i': () => (
      <Text key={key}>
        {children.map(parseContentJson)}
      </Text>
    ),
    // 'banner': () => (
    //   <Banner key={key} content={props} position={props.position} className="banner__article"/>
    // ),
    // 'fact': () => (
    //   <Fact key={key} value={props.shortText} text={props.longText}/>
    // ),
  };

  return tags[tag] ? tags[tag]() : <WebView key={key} source={{html: tag}}/>;
}
