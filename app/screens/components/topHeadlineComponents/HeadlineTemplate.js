import React from 'react'
import HeadlineTemplateMap from './HeadlineTemplateMap'
import Error from '../Error'
import Loading from '../Loading'

export default function HeadlineTemplate(props) {

  var headline;
  var data = props.headlines
  const errors = props.errors;

  if (errors.length) {
    headline = <Error 
                errors={errors}
                />
  } else if (data.length) {
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
    headline = <Loading />
  }

  return (
    <>
      { headline }
    </>
  )
}

// used in HeadlineFeed.js