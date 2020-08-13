import React from 'react'
import { 
  View, 
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  Platform,
  Linking,
  Button
} from 'react-native'
import {
  Container,
  Content,
} from 'native-base'
import standardNewsImage from '../../../assets/img/man-reading-paper.jpg'

export default function HeadlinesFullArticle(props) {
  const data = props.route.params ;
  const window = useWindowDimensions();
  const androidImageHeight = (window.height / 3) - 20;
  const iosImageHeight = (window.height / 3) - 20;
  
  // get the date published
  let month = data.publishedAt.slice(5,7);
  let day = data.publishedAt.slice(8,10);
  let year = data.publishedAt.slice(0,4);

  // get image url
  let image;
  if (props.urlToImage !== null) {
    image = { uri: data.urlToImage };
  } else {
    image = standardNewsImage ;
  }

  return (
    <Container>
      <Content
        style={{
          marginTop: 20,
        }}
      >
        <View style={styles.wrapper}>
         <Text style={styles.header}>{data.title}</Text>
         <View style={styles.dateAndAuthorContainer}>
          <Text style={styles.author}>{data.author}</Text>
          <Text style={styles.date}>{`${month}-${day}-${year}`}</Text>
         </View>
         <View>
          <Image 
            source={image}
            style={{
              height: Platform.OS === 'android' ? androidImageHeight : iosImageHeight,
            }}
          />
          <Button 
            title="Original Article"
            color="#F04714"
            onPress={() => Linking.openURL(data.url)}
          />
         </View>
         <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{(data.content === null) ? data.description : data.content}</Text>
         </View>
        </View>
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  wrapper: {

  },
  header: {
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: 'justify',
    marginBottom: 10,
    fontFamily: 'roboto-medium',
    fontSize: 22
  },
  author: {
    flexGrow: 2,
    fontFamily: 'roboto-light-italic',
    marginLeft: 15
  },
  date: {
    fontFamily: 'roboto-light',
    marginRight: 15
  },
  dateAndAuthorContainer: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 12,
    marginBottom: 10,
    justifyContent: 'space-evenly'
  },
  descriptionContainer: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    textAlign: 'justify'
  },
  description: {
    fontFamily: 'roboto-regular',
    fontSize: 16,
    lineHeight: 22
  }
})

// used in App.js - Referenced in HeadlineTemplateMap.js