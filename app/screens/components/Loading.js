import React from 'react'
import { 
  View, 
  Text,
  StyleSheet 
} from 'react-native'

export default function Error() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Loading...</Text>
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
    fontSize: 28,
  }
})

// used in SourcesTemplate.js, HeadlineTemplate.js, NewsFeedTemplate.js