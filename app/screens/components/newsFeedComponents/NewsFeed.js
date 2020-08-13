import React, { Component } from 'react'
import { 
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import {
  Container,
  Content,
  Header,
  Item,
  Icon,
  
} from 'native-base'
import NewsAPI from 'newsapi'
import config from '../../../../config'
import NewsFeedTemplate from './NewsFeedTemplate'

export default class NewsFeed extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     articles: ['articles'],
  //     language: 'en',
  //     // country: 'us',
  //     value: ''
  //   }
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  state = {
    articles: [],
    searchValue: '',
    language: 'en',
    country: 'us',
    error: {
      message: '',
      code: '',
    },
  }

  handleSearch = (text) => {
    this.setState({ searchValue: text })
  }

  search = (query, language) => {
    const newsapi = new NewsAPI(config.API_KEY);
    newsapi.v2.everything({
      q: query,
      language: language,
      sortBy: 'relevancy'
    })
    .then(res => {
      this.setState({
        articles: res.articles
      })
    })
    .catch(err => {
      console.error("ERROR: ", err)
      this.setState({
        error: {
          code: err.code,
          message: err.message
        }
      })
    });
  }

  render() {
    // console.log(this.state.articles)
    return (
      <Container>
        <Content>
          <View
            style={styles.container}
          >
            <TextInput 
              style={styles.input}
              placeholder="Search for some news..."
              placeholderTextColor="#000"
              autoCapitalize="none"
              underlineColorAndroid="transparent"
              onChangeText={this.handleSearch}
            />
            <TouchableOpacity 
              style={styles.submitButton}
              onPress={() => this.search(this.state.searchValue, this.state.language)}
            >
              <Text style={styles.submitButtonText}>Search</Text>
            </TouchableOpacity>
          </View>
          <NewsFeedTemplate 
            articles={this.state.articles}
            errors={this.state.error}
          />
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  input: {
    width: '70%',
    fontSize: 16,
    backgroundColor: 'grey',
    borderRadius: 12,
    padding: 10,
    margin: 10
  },
  submitButton: {
    backgroundColor: '#2AD9F0',
    margin: 10,
    padding: 10,
    borderRadius: 12
  },
  submitButtonText: {
    color: '#fff',
    fontFamily: 'roboto-regular'
  }
})


// "articles": Array [
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
//   Object {
//     "author": null,
//     "content": "US Sen. Kamala Harris speaks during an economic forum in Las Vegas in April 2019.
// US Sen. Kamala Harris is Joe Biden's pick for vice president.
// Biden, the presumptive Democratic nominee, announced … [+952 chars]",
//     "description": "US Sen. Kamala Harris is Joe Biden's pick for vice president. Biden, the presumptive Democratic nominee, announced Harris as his running mate on Tuesday, August 11.",
//     "publishedAt": "2020-08-11T20:42:16Z",
//     "source": Object {
//       "id": "cnn",
//       "name": "CNN",
//     },
//     "title": "In photos: Vice presidential pick Kamala Harris",
//     "url": "https://www.cnn.com/2019/04/10/politics/gallery/kamala-harris/index.html",
//     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/200729122210-kamala-harris-april-2019-super-tease.jpg",
//   },
//   Object {
//     "author": null,
//     "content": "Chat with us in Facebook Messenger. Find out what's happening in the world as it unfolds.",
//     "description": "Sen. Kamala Harris has built her political career as a progressive Democrat, pushing for justice reform. But her record as an attorney general for California was controversial.",
//     "publishedAt": "2020-08-11T20:31:57Z",
//     "source": Object {
//       "id": "cnn",
//       "name": "CNN",
//     },
//     "title": "Harris made history, then controversy, as an AG",
//     "url": "https://www.cnn.com/videos/politics/2019/07/28/kamala-harris-profile-attorney-general-orig.cnn",
//     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/190727213236-kamala-harris-profile-attorney-general-orig-00000313-super-tease.jpg",
//   },
//   Object {
//     "author": null,
//     "content": "Chat with us in Facebook Messenger. Find out what's happening in the world as it unfolds.",
//     "description": "After months of speculation, presumptive Democratic presidential nominee Joe Biden revealed that Sen. Kamala Harris (D-CA) will be his running mate. CNN's SE Cupp analyzes the decision.",
//     "publishedAt": "2020-08-11T22:02:17Z",
//     "source": Object {
//       "id": "cnn",
//       "name": "CNN",
//     },
//     "title": "Watch SE Cupp's reaction to Biden's VP pick",
//     "url": "https://www.cnn.com/videos/politics/2020/08/11/kamala-harris-joe-biden-vice-president-pick-se-cupp-unfiltered-from-home-vpx.cnn",
//     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/200811174623-se-cupp-kamala-harris-split-vpx-super-tease.jpg",
//   },
//   Object {
//     "author": null,
//     "content": "Chat with us in Facebook Messenger. Find out what's happening in the world as it unfolds.",
//     "description": "President  Donald Trump called Sen. Kamala Harris (D-CA) his \"number one draft pick\" after presumptive Democratic presidential candidate Joe Biden named her as his running mate.",
//     "publishedAt": "2020-08-11T22:57:23Z",
//     "source": Object {
//       "id": "cnn",
//       "name": "CNN",
//     },
//     "title": "Trump on Biden's VP pick: Harris was my 'number one draft pick'",
//     "url": "https://www.cnn.com/videos/politics/2020/08/11/trump-reacts-biden-vp-kamala-harris-press-briefing-van-jones-tsr-vpx.cnn",
//     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/200811183805-trump-harris-split-super-tease.jpg",
//   },
//   Object {
//     "author": "Taylor Hatmaker",
//     "content": "Joe Biden’s decision to name California Senator Kamala Harris as his running mate in the quest to unseat President Trump means that the next White House could be occupied not only by a Black woman a … [+7683 chars]",
//     "description": "Joe Biden’s decision to name California Senator Kamala Harris as his running mate in the quest to unseat President Trump means that the next White House could be occupied not only by a Black woman — a historic milestone by any account — but also by someone wh…",
//     "publishedAt": "2020-08-12T00:18:53Z",
//     "source": Object {
//       "id": "techcrunch",
//       "name": "TechCrunch",
//     },
//     "title": "Kamala Harris brings a view from tech’s epicenter to the presidential race",
//     "url": "http://techcrunch.com/2020/08/11/kamala-harris-tech-vp-policies/",
//     "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/08/kamala-harris-GettyImages-1160492610.jpg?w=600",
//   },
//   Object {
//     "author": "Tim Marcin",
//     "content": "Everybody freaked out about who it would be, then he just... tweeted it out. 
// We're talking, of course, about former Vice President and presumptive Democratic nominee Joe Biden picking California Se… [+1308 chars]",
//     "description": "Everybody freaked out about who it would be, then he just..tweeted it out. 
// We're talking, of course, about former Vice President and presumptive Democratic nominee Joe Biden picking California Sen. Kamala Harris as his running mate in the 2020 presidential e…",
//     "publishedAt": "2020-08-11T20:46:44Z",
//     "source": Object {
//       "id": "mashable",
//       "name": "Mashable",
//     },
//     "title": "Joe Biden built up the VP hype and then just... tweeted it out",
//     "url": "https://mashable.com/article/biden-kamala-harris-vp-tweet/",
//     "urlToImage": "https://mondrian.mashable.com/2020%252F08%252F11%252F6c%252F0dfa1f51f435474bbc93c3bb0fae12d7.cf203.jpg%252F1200x630.jpg?signature=_rmzgd04QuQtOLfSl2wasHoc4-o=",
//   },
//   Object {
//     "author": "Amir Vera and Hollie Silverman, CNN",
//     "content": null,
//     "description": "The former wrestler's career spanned more than two decades, during which he battled some of the sport's biggest names.",
//     "publishedAt": "2020-08-10T04:44:26Z",
//     "source": Object {
//       "id": "cnn",
//       "name": "CNN",
//     },
//     "title": "Former WWE wrestler James 'Kamala' Harris dies at 70",
//     "url": "https://www.cnn.com/2020/08/10/us/wwe-kamala-james-harris-death/index.html",
//     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/200810002336-james-kamala-harris-pro-wrestler-passes-away-super-tease.jpg",
//   },
//   Object {
//     "author": "Opinion by David Axelrod, CNN Senior Political Commentator",
//     "content": "David Axelrod, a senior CNN political commentator and host of \"The Axe Files,\" was senior adviser to President Barack Obama and chief strategist for the 2008 and 2012 Obama presidential campaigns. Th… [+5959 chars]",
//     "description": "David Axelrod writes that Joe Biden chose Kamala Harris, the charismatic and telegenic Black politician, as his vice president because, as a former prosecutor, she is best prepared to play a lead role in bringing the case against Donald Trump.",
//     "publishedAt": "2020-08-11T20:39:12Z",
//     "source": Object {
//       "id": "cnn",
//       "name": "CNN",
//     },
//     "title": "Opinion: Why Kamala Harris won the VP contest",
//     "url": "https://www.cnn.com/2020/08/11/opinions/why-kamala-harris-won-vp-content-axelrod/index.html",
//     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/200801174111-01a-kamala-harris-lead-image-super-tease.jpg",
//   },
//   Object {
//     "author": "Devan Cole, CNN",
//     "content": "Washington (CNN)Eric Trump, the son of President Donald Trump, liked a tweet on Wednesday that used a sexist slur to refer to California Sen. Kamala Harris and former Vice President Joe Biden's decis… [+1621 chars]",
//     "description": "Eric Trump, the son of President Donald Trump, liked a tweet on Wednesday that used a sexist slur to refer to California Sen. Kamala Harris and former Vice President Joe Biden's decision to pick her as his running mate.",
//     "publishedAt": "2020-08-13T11:35:43Z",
//     "source": Object {
//       "id": "cnn",
//       "name": "CNN",
//     },
//     "title": "Eric Trump likes tweet calling Harris a sexist slur",
//     "url": "https://www.cnn.com/2020/08/13/politics/eric-trump-kamala-harris-tweet/index.html",
//     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/200812173031-08-biden-harris-event-super-tease.jpg",
//   },
//   Object {
//     "author": "Analysis by Chris Cillizza, CNN Editor-at-large",
//     "content": "THE POINT -- NOW ON YOUTUBE! 
// In each episode of his weekly YouTube show, Chris Cillizza will delve a little deeper into the surreal world of politics. Click to subscribe!",
//     "description": "President Donald Trump was up bright and early Thursday morning -- calling in to Maria Bartiromo's show on the Fox Business Network to riff on everything from Kamala Harris to Bill Barr to cows. (Yes, cows.)",
//     "publishedAt": "2020-08-13T15:52:11Z",
//     "source": Object {
//       "id": "cnn",
//       "name": "CNN",
//     },
//     "title": "Analysis: The 42 most shocking lines from Donald Trump's Fox Business interview",
//     "url": "https://www.cnn.com/2020/08/13/politics/donald-trump-maria-bartiromo-coronavirus/index.html",
//     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/200812191930-trump-alaimo-super-tease.jpg",
//   },

// used in App.js