import 'react-native-gesture-handler'
import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// screen imports
import WelcomeScreen from './app/screens/WelcomeScreen'
import CategoryScreen from './app/screens/CategoryScreen'
import SourcesFeed from './app/screens/components/sourceComponents/SourcesFeed'
import HeadlineFeed from './app/screens/components/topHeadlineComponents/HeadlineFeed';
import HeadlinesFullArticle from './app/screens/components/topHeadlineComponents/HeadlinesFullArticle';


const Stack = createStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-black': require('./app/assets/fonts/Roboto-Black.ttf'),
    'roboto-black-italic': require('./app/assets/fonts/Roboto-BlackItalic.ttf'),
    'roboto-bold': require('./app/assets/fonts/Roboto-Bold.ttf'),
    'roboto-bold-italic': require('./app/assets/fonts/Roboto-BoldItalic.ttf'),
    'roboto-italic': require('./app/assets/fonts/Roboto-Italic.ttf'),
    'roboto-light': require('./app/assets/fonts/Roboto-Light.ttf'),
    'roboto-light-italic': require('./app/assets/fonts/Roboto-LightItalic.ttf'),
    'roboto-medium': require('./app/assets/fonts/Roboto-Medium.ttf'),
    'Roboto_medium': require('./app/assets/fonts/Roboto-Medium.ttf'),
    'roboto-medium-italic': require('./app/assets/fonts/Roboto-MediumItalic.ttf'),
    'roboto-regular': require('./app/assets/fonts/Roboto-Regular.ttf'),
    'roboto-thin': require('./app/assets/fonts/Roboto-Thin.ttf'),
    'roboto-thin-italic': require('./app/assets/fonts/Roboto-ThinItalic.ttf')
  });
};

function App() {
  const [ dataLoaded, setDataLoaded ] = useState(false)

  if (!dataLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    )
  }

  return (
    <NavigationContainer
      linking={{
        prefixes: ['exp://192.168.0.11:19000'],
        config: {
          screens: {
            Home: {
              path: 'home'
            },
            Categories: {
              path: 'categories'
            },
            TopHeadlines: {
              path: 'topheadlines'
            },
            BusinessSource: {
              path: 'categories/:subcategory',
              parse: {
                subcategory: 'business',
              }
            },
            EntertainmentSource: {
              path: 'categories/:subcategory',
              parse: {
                subcategory: 'entertainment',
              }
            },
            HealthSource: {
              path: 'categories/:subcategory',
              parse: {
                subcategory: 'health',
              }
            },
            ScienceSource: {
              path: 'categories/:subcategory',
              parse: {
                subcategory: 'science',
              }
            },
            SportsSource: {
              path: 'categories/:subcategory',
              parse: {
                subcategory: 'sports',
              }
            },
            TechnologySource: {
              path: 'categories/:subcategory',
              parse: {
                subcategory: 'technology',
              }
            },
            HeadlinesFullArticle: {
              path: 'topheadlines/details'
            }
          },
        },
      }}
    >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{
            title: "Home",
            headerStyle: styles.headerStyles
          }}
        />
        <Stack.Screen
          name="Categories"
          component={CategoryScreen}
          options={{
            title: "Categories",
            headerStyle: styles.headerStyles
          }}
        />
        <Stack.Screen 
          name="TopHeadlines"
          component={HeadlineFeed}
          options={{
            title: "Top Headlines",
            headerStyle: styles.headerStyles
          }}
        />
        <Stack.Screen
          name="BusinessSource"
          component={SourcesFeed}
          options={{
            title: "Business",
            subcategory: "business",
            headerStyle: styles.headerStyles
          }}
        />
        <Stack.Screen
          name="EntertainmentSource"
          component={SourcesFeed}
          options={{
            title: "Entertainment",
            subcategory: "entertainment",
            headerStyle: styles.headerStyles
          }}
        />
        <Stack.Screen
          name="HealthSource"
          component={SourcesFeed}
          options={{
            title: "Health",
            subcategory: "health",
            headerStyle: styles.headerStyles
          }}
        />
        <Stack.Screen
          name="ScienceSource"
          component={SourcesFeed}
          options={{
            title: "Science",
            subcategory: "science",
            headerStyle: styles.headerStyles
          }}
        />
        <Stack.Screen
          name="SportsSource"
          component={SourcesFeed}
          options={{
            title: "Sports",
            subcategory: "sports",
            headerStyle: styles.headerStyles
          }}
        />
        <Stack.Screen
          name="TechnologySource"
          component={SourcesFeed}
          options={{
            title: "Technology",
            subcategory: "technology",
            headerStyle: styles.headerStyles
          }}
        />
        <Stack.Screen 
          name="HeadlinesFullArticle"
          component={HeadlinesFullArticle}
          options={{
            title: "Full Article",
            headerStyle: styles.headerStyles
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerStyles: {
    shadowColor: '#000',
    shadowOffset: { height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 15
  }
})

export default App;
