import React from 'react'
import {
  View,
  Button,
  Text,
  StyleSheet,
  Linking
} from 'react-native'

// Line separator for UI components 
const Separator = () => (
  <View style={styles.separator} />
)

/**
 * Reusable component to map sources data to from API call
 * @param {PROPS} props - Sources Data to be passed to each component
 */
export default function SourcesTemplateMap(props) {
  return (
    <View
      style={styles.cardContainer}
    >
      <View>
        <Text
          style={[styles.header, styles.text, { fontFamily: 'roboto-bold' }]}
        >{props.name}</Text>
      </View>
      <View>
        <Text
          style={[styles.body, styles.text, { fontFamily: 'roboto-light' }]}
        >{props.description}</Text>
        <View style={styles.buttonContainer}>
          <Button 
            title="Get News"
            color="#2AD9F0"
            onPress={() => {
              Linking.openURL(props.url)
            }}
          />
        </View>
        <Separator />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    paddingTop: 15,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  header: {
    fontSize: 22,
    marginBottom: 10
  },
  body: {
    fontSize: 18
  },
  text: {
    paddingLeft: 10,
    paddingRight: 10,
    lineHeight: 25
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 15
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
})

// used in SourcesTemplate.js