import React from 'react'
import SourcesTemplateMap from './SourcesTemplateMap'
import Error from '../Error'
import Loading from '../Loading'

/**
 * Maps the sources data to the template map for each one of the
 * news sources to complete the UI 
 * @param {PROPS} props - Sources data passed from Sources feed
 */
export default function SourcesTemplate(props) {
  var source;
  var data = props.sources;
  const errors = props.errors;
  
  if (errors.length) {
    source = <Error 
                errors={errors}
              />
  } else if (data.length >= 1) {
    source = data.map(item => 
      <SourcesTemplateMap 
        category={item.category}
        country={item.country}
        description={item.description}
        id={item.id}
        language={item.language}
        name={item.name}
        url={item.url}
        key={item.id}
      />
    )
  } else {
    source = <Loading />
  }

  return (
    <>
      { source }
    </>
  )
}

// used in SourcesFeed.js