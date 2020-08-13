import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ImageBackground,
  Platform
} from 'react-native'
import {
  Container,
  Content,
} from 'native-base'

export default function CategoryScreen({ navigation }) {
  const window = useWindowDimensions();
  const androidImageHeight = (window.height / 6) - 12;
  const iosImageHeight = (window.height / 6) - 15;

  return (
    <Container>
      <Content>
        {/* business */}
        <View style={styles.categoryItem}>
          <ImageBackground
            source={require('../assets/img/skyscraper.jpg')}
            style={[{
              width: window.width,
              height: Platform.OS === 'android' ? androidImageHeight : iosImageHeight
            },
            styles.image
            ]}
          >
            <View>
              <Text
                style={[{
                  color: '#fff',
                  paddingTop: Platform.OS === 'ios' ? iosImageHeight / 6 : androidImageHeight / 6,
                }, styles.categoryText]}
                onPress={() => {
                  navigation.navigate('BusinessSource', {
                    subcategory: 'business'
                  })
                }}
              >Business</Text>
            </View>
          </ImageBackground>
        </View>
        {/* entertainment */}
        <View style={styles.categoryItem}>
          <ImageBackground
            source={require('../assets/img/entertainment.jpg')}
            style={[{
              width: window.width,
              height: Platform.OS === 'android' ? androidImageHeight : iosImageHeight
            },
            styles.image
            ]}
          >
            <View>
              <Text
                style={[{
                  color: '#FFF744',
                  paddingTop: Platform.OS === 'ios' ? iosImageHeight / 6 : androidImageHeight / 6,
                }, styles.categoryText]}
                onPress={() => {
                  navigation.navigate('EntertainmentSource', {
                    subcategory: 'entertainment'
                  })
                }}
              >Entertainment</Text>
            </View>
          </ImageBackground>
        </View>
        {/* health */}
        <View style={styles.categoryItem}>
          <ImageBackground
            source={require('../assets/img/health.jpg')}
            style={[{
              width: window.width,
              height: Platform.OS === 'android' ? androidImageHeight : iosImageHeight
            },
            styles.image
            ]}
          >
            <View>
              <Text
                style={[{
                  color: '#EB3343',
                  paddingTop: Platform.OS === 'ios' ? iosImageHeight / 6 : androidImageHeight / 6,
                }, styles.categoryText]}
                onPress={() => {
                  navigation.navigate('HealthSource', {
                    subcategory: 'health'
                  })
                }}
              >Health</Text>
            </View>
          </ImageBackground>
        </View>
        {/* science */}
        <View style={styles.categoryItem}>
          <ImageBackground
            source={require('../assets/img/science.jpg')}
            style={[{
              width: window.width,
              height: Platform.OS === 'android' ? androidImageHeight : iosImageHeight
            },
            styles.image
            ]}
          >
            <View>
              <Text
                style={[{
                  color: '#fff',
                  paddingTop: Platform.OS === 'ios' ? iosImageHeight / 6 : androidImageHeight / 6,
                }, styles.categoryText]}
                onPress={() => {
                  navigation.navigate('ScienceSource', {
                    subcategory: 'science'
                  })
                }}
              >Science</Text>
            </View>
          </ImageBackground>
        </View>
        {/* sports */}
        <View style={styles.categoryItem}>
          <ImageBackground
            source={require('../assets/img/sports.jpg')}
            style={[{
              width: window.width,
              height: Platform.OS === 'android' ? androidImageHeight : iosImageHeight
            },
            styles.image
            ]}
          >
            <View>
              <Text
                style={[{
                  color: '#F09B6A', 
                  paddingTop: Platform.OS === 'ios' ? iosImageHeight / 6 : androidImageHeight / 6,
                }, styles.categoryText]}
                onPress={() => {
                  navigation.navigate('SportsSource', {
                    subcategory: 'sports'
                  })
                }}
              >Sports</Text>
            </View>
          </ImageBackground>
        </View>
        {/* technology */}
        <View style={styles.categoryItem}>
          <ImageBackground
            source={require('../assets/img/technology.jpg')}
            style={[{
              width: window.width,
              height: Platform.OS === 'android' ? androidImageHeight : iosImageHeight
            },
            styles.image
            ]}
          >
            <View>
              <Text
                style={[{ 
                  color: '#fff', 
                  paddingTop: Platform.OS === 'ios' ? iosImageHeight / 6 : androidImageHeight / 6,
                }, styles.categoryText]}
                onPress={() => {
                  navigation.navigate('TechnologySource', {
                    subcategory: 'technology'
                  })
                }}
              >Technology</Text>
            </View>
          </ImageBackground>
        </View>
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  categoryItem: {
    justifyContent: 'center'
  },
  buttonContainer: {
    backgroundColor: Platform.OS === "ios" ? "#EEEEEE" : "#000",
    borderRadius: 10,
    marginLeft: 100
  },
  image: {
    opacity: 0.8
  },
  categoryText: {
    fontSize: 38,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: Platform.OS === 'android' ? { width: 1, height: 2 } : { width: 0, height: 0 },
    textShadowRadius: Platform.OS === 'android' ? 5 : 0,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.75
  }
})
