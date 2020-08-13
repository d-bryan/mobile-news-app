import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/img/man-reading-paper.jpg')}
      style={styles.background}
    >
      <View style={styles.headerContainer} >
        <Text style={styles.headerText}>News Your Way</Text>
      </View>
      <View style={[styles.button, styles.categoryButton]}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate('Categories')}
        >Categories</Text>
      </View>
      <View style={[styles.button, styles.topHeadlinesButton]}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate('TopHeadlines')}
        >Top Headlines</Text>
      </View>
      <View style={[styles.button, styles.newsFeedButton]}>
        <Text 
          style={styles.buttonText}
          onPress={() => navigation.navigate('NewsFeed')}
        >News Feed</Text>
      </View>
    </ImageBackground>
  )
}

// component styles
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  headerContainer: {
    width: '75%',
    height: 75,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    position: 'absolute',
    top: 75,
    alignItems: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30,
    top: 20,
    color: '#F04714'
  },
  button: {
    width: '100%',
    height: 80,
  },
  categoryButton: {
    backgroundColor: '#2AD9F0',
  },
  newsFeedButton: {
    backgroundColor: '#F04714'
  },
  topHeadlinesButton: {
    backgroundColor: '#110014'
  },
  buttonText: {
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8
  }
})

// used in App.js