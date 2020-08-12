import React, { Component } from 'react'
import {
  Container,
  Content,
} from 'native-base'
import NewsAPI from 'newsapi'
import config from '../../../../config'
import SourcesTemplate from './SourcesTemplate'

export default class SourcesFeed extends Component {

  // language and country always US and English
  // sources will be determined by which subcategory is
  // passed into the component from category screen
  state = {
    sources: [],
    language: 'en',
    country: 'us',
  }

  // fetch the data from the api and set the sources in state
  componentDidMount() {
    const subcategory = this.props.route.params.subcategory;
    const newsapi = new NewsAPI(config.API_KEY);
    newsapi.v2.sources({
      category: subcategory,
      language: this.state.language,
      country: this.state.country
    })
      .then(res => {
        this.setState({
          sources: res.sources
        })
      })
      .catch(err => console.error("ERROR: ", err));
  }

  render() {
    return (
      <Container>
        <Content style={{
          marginTop: 10,
        }}>
          <SourcesTemplate 
            sources={this.state.sources}
            style={{
              fontFamily: 'roboto-medium'
            }}
          />
        </Content>
      </Container>
    )
  }
}

// used in App.js