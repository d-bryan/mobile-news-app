import React from 'react'
import { 
  View, 
  Text,
  StyleSheet,
  Platform,
  useWindowDimensions,
  Image,
  Button
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import standardNewsImage from '../../../assets/img/man-reading-paper.jpg'

const Separator = () => (
  <View style={styles.separator} />
)

export default function newsFeedTemplateMap(props) {
  const navigation = useNavigation();
  const window = useWindowDimensions();
  const androidImageHeight = (window.height / 6) - 12;
  const iosImageHeight = (window.height / 6) - 15;
  console.log(props)

  // get the date published
  let month = props.publishedAt.slice(5,7);
  let day = props.publishedAt.slice(8,10);
  let year = props.publishedAt.slice(0,4);
  
  // get image url
  let image;
  if (props.urlToImage !== null) {
    image = { uri: props.urlToImage }
  } else {
    image = standardNewsImage
  }

  // shorten author name
  let author;
  if (props.author != null &&
     props.author.length >= 37) {
    author = props.author.slice(0, 37);
    author += '...';
  } else if (props.author === null) {
    author = 'No Attribution Mentioned'
  } else {
    author = props.author;
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>{props.title}</Text>
      <View style={styles.dateAndAuthorContainer}>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.date}>{`${month}-${day}-${year}`}</Text>        
      </View>
      <Image
          source={image}
          style={[{
            width: '100%',
            height: Platform.OS === 'android' ? androidImageHeight : iosImageHeight,
            borderRadius: 10,
            borderColor: '#E86256',
            borderWidth: 2,
          }]}
        />
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{props.description}</Text>
        <Button 
            title="Read Full Article"
            color="#2AD9F0"
            onPress={() => {
              navigation.navigate('HeadlinesFullArticle', {
                  author: props.author,
                  content: props.content,
                  description: props.description,
                  publishedAt: props.publishedAt,
                  source: props.source,
                  title: props.title,
                  url: props.url,
                  urlToImage: props.urlToImage,
                  key: `${props.source}-${props.publishedAt}`
                })
              }}
          />
      </View>
      <Separator />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 15,
    paddingBottom: 10,
  },
  header: {
    fontSize: 16,
    marginBottom: 6,
    paddingLeft: 15,
    paddingRight: 15,
    fontFamily: 'roboto-medium',
    textAlign: 'justify'
  },
  dateAndAuthorContainer: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 12,
    marginBottom: 6,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'space-evenly'
  },
  author: {
    flexGrow: 2,
    fontFamily: 'roboto-light-italic',
  },
  date: {
    fontFamily: 'roboto-light',
  },
  descriptionContainer: {
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  description: {
    fontFamily: 'roboto-regular',
    fontSize: 16,
    marginBottom: 15
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})

//   Object {
//     "author": "Ricki Harris",
//     "content": "On Tuesday, following weeks of speculation, Joe Bidens campaign texted supporters to let them know that hed selected Senator Kamala Harris as his running mate. The news was hardly a surprise, but it … [+4105 chars]",
//     "description": "The senator and her team have earned a reputation for savvy online organizing. That could come in handy for a socially distanced presidential campaign.",
//     "publishedAt": "2020-08-12T01:04:53Z",
//     "source": Object {
//       "id": "wired",
//       "name": "Wired",
//     },
//     "title": "With VP Kamala Harris, Joe Biden Gets a Digital Juggernaut",
//     "url": "https://www.wired.com/story/kamala-harris-vp-joe-biden-gets-digital-juggernaut/",
//     "urlToImage": "https://media.wired.com/photos/5f330b1072813d78d50b73bd/191:100/w_1280,c_limit/business_kamala_1174337881.jpg",
//   },

// used in NewsFeedTemplate.js