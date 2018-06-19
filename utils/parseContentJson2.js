export default function parseContentJson(element, key = Math.random()) {
  const tag = element[0];
  const children = element[1] || [];
  const props = element[2];

  let tags = {
    'img': () => {
      let {src, title, ...other} = props;

      if (title && title.substr(0, 1) === '(' && title.substr(-1) === ')') {
        title = title.substr(1, title.length - 2);
      }
    },
    'h2': () => (
      <h2 key={key} {...props}>
        {children.map(parseContentJson)}
      </h2>
    ),
    'h3': () => (
      <h3 key={key} {...props}>
        {children.map(parseContentJson)}
      </h3>
    ),
    'p': () => {
      if (props.class === 'infographics') {
        return (
          <div key={key}>
            {children.map(parseContentJson)}
          </div>
        );
      }

      if (props.class === 'image') {
        return (
          <p key={key} className={`media media--image ${children[0] && children[0][2] && children[0][2]['alt'] && 'media--with-signature'}`}>
            {children.map(parseContentJson)}
          </p>
        );
      }

      if (children[0] && children[0][0] && ['instagram', 'twitter', 'youtube', 'test', 'timeline', 'storymap'].indexOf(children[0][0]) !== -1) {
        return (
          <div key={key}>
            {children.map(parseContentJson)}
          </div>
        );
      }

      return (
        <p key={key}>
          {children.map(parseContentJson)}
        </p>
      );
    },
    'br': () => (
      <br key={key}/>
    ),
    'footer': () => (
      <div key={key} className="blockquote-footer">
        {children.map(parseContentJson)}
      </div>
    ),
    'h4': () => (
      <h4 key={key}>
        {children.map(parseContentJson)}
      </h4>
    ),
    'h6': () => (
      <h6 key={key}>
        {children.map(parseContentJson)}
      </h6>
    ),
    'a': () => (
      <a key={key} {...props} className="a--underline">
        {children.map(parseContentJson)}
      </a>
    ),
    'span': () => (
      <span key={key} {...props} className="media__signature">
        {children.map(parseContentJson)}
      </span>
    ),
    // 'blockquote': () => (
    //   <Blockquote key={key}>
    //     {children.map(parseContentJson)}
    //   </Blockquote>
    // ),
    'twin': () => (
      <div key={key}>
        {children.map(parseContentJson)}
      </div>
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
      <ul key={key} {...props}>
        {children.map(parseContentJson)}
      </ul>
    ),
    'ul': () => (
      <ul key={key} {...props}>
        {children.map(parseContentJson)}
      </ul>
    ),
    'li': () => (
      <li key={key} {...props}>
        {children.map(parseContentJson)}
      </li>
    ),
    // 'gallery': () => (
    //   <Gallery key={key} images={children}/>
    // ),
    'strong': () => (
      <strong key={key} {...props}>
        {children.map(parseContentJson)}
      </strong>
    ),
    'i': () => (
      <i key={key} {...props}>
        {children.map(parseContentJson)}
      </i>
    ),
    // 'banner': () => (
    //   <Banner key={key} content={props} position={props.position} className="banner__article"/>
    // ),
    // 'fact': () => (
    //   <Fact key={key} value={props.shortText} text={props.longText}/>
    // ),
  };

  return tags[tag] ? tags[tag]() : <span key={key} dangerouslySetInnerHTML={{__html: tag}}/>;
}
