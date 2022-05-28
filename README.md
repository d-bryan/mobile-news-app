# Mobile News Application

## Getting Started with This Project

## Dependencies

- Expo
- Nodejs
- NPM

### Clone the repository to your machine

`git clone https://github.com/d-bryan/mobile-news-app.git`

Change directories into the new project

`cd mobile-news-app`

### Get API Key from News API

Go to the following URL and retrieve your [API KEY](https://newsapi.org/)

Create a `config.js` file at the root of the project - this will contain the API key retrieved from [News API](https://newsapi.org/)

Fill this file with the following information:

```js
export default {
    API_KEY: 'YOUR API KEY GOES HERE',
    BASE_URL: 'https://newsapi.org/v2/'
}
```
