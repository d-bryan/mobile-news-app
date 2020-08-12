import React from 'react'
import HeadlineTemplateMap from './HeadlineTemplateMap'
import Error from '../Error'

export default function HeadlineTemplate(props) {

  var headline;
  var data = props.headlines

  if (data.length >= 1) {
    headline = data.map(item => 
      <HeadlineTemplateMap 
        author={item.author}
        content={item.content}
        description={item.description}
        publishedAt={item.publishedAt}
        source={item.source.name}
        title={item.title}
        url={item.url}
        urlToImage={item.urlToImage}
        key={`${item.source.name}-${item.publishedAt}`}
      />  
    )
  } else {
    headline = <Error />
  }


  return (
    <>
      { headline }
    </>
  )
}

// used in HeadlineFeed.js