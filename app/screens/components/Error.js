import React from 'react'
import { 
  View, 
  Text,
  StyleSheet 
} from 'react-native'

export default function Error(props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>There was an Issue retieving the Data</Text>
      <Text 
        style={styles.text}
      >{(props.message !== null || props.message !== undefined) ? props.message : "Could not load the data"}</Text>
    </View>
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
    fontSize: 24,
  }
})

// used in SourcesTemplate.js, HeadlineTemplate.js, NewsFeedTemplate.js