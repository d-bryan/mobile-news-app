import React, { Component } from 'react'
import {
  Container,
  Content,
} from 'native-base'
import NewsAPI from 'newsapi'
import config from '../../../../config'
import HeadlineTemplate from './HeadlineTemplate'

export default class HeadlineFeed extends Component {

  state = {
    headlines: [],
    language: 'en',
    country: 'us'
  }

  handleQuery() {

  }

  componentDidMount(query, source) {
    const newsapi = new NewsAPI(config.API_KEY);
    newsapi.v2.topHeadlines({
      language: this.state.language,
      country: this.state.country
    })
    .then(res => {
      this.setState({
        headlines: res.articles
      })
    })
    .catch(err => console.error("ERROR: ", err))
  }

  render() {
    return (
      <Container>
        <Content
          style={{
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20
          }}
        >
          <HeadlineTemplate 
            headlines={this.state.headlines}
          />
        </Content>
      </Container>
    )
  }
}

// used in App.js