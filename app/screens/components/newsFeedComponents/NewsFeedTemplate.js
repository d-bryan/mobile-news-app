import React from 'react'
import { 
  View, 
  Text,
  StyleSheet
} from 'react-native'

import NewsFeedTemplateMap from './NewsFeedTemplateMap'
import Error from '../Error'
import Loading from '../Loading'

const SearchForNews = () => {
  return(
    <View style={styles.wrapper}>
      <Text style={styles.text}>Latest News From</Text>
      <Text style={styles.text}>Around the World</Text>
    </View>
  )
}

export default function NewsFeedTemplate(props) {

  var headline;
  var data = props.articles;
  const errors = props.errors;

  if (errors.length) {
    headline = <Error 
                  errors={errors}
                />
  } else if (data.length >= 1) {
    headline = data.map(item =>
      <NewsFeedTemplateMap 
        author={item.author}
        content={item.content}
        description={item.description}
        publishedAt={item.publishedAt}
        name={item.source.name}
        key={`${item.source.name}-${item.publishedAt}`}
        title={item.title}
        url={item.url}
        urlToImage={item.urlToImage}
      />
    )
  } else if (data.length === 0) { 
    headline = <SearchForNews />
  } else {
    headline = <Loading />
  }

  return (
    <>
      { headline }
    </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'roboto-medium',
    textAlign: 'center',
    fontSize: 28,
  }
})

// used in NewsFeed.js