import React, { Component } from 'react';
import axios from 'axios'; // for async requests

import ArticleList from './ArticleList';
import DataApi from './../state-api';

// import { data } from './../testData';
// import DataApi from '../state-api/lib/index';
// const api = new DataApi(data);

export default class App extends Component {
  state = {
    articles: {},
    authors: {}
  };

  async componentDidMount() {
    // Fetch the data
    // No se puede en el constructor por ser Async
    const response = await axios.get('/data');
    const api = new DataApi(response.data);

    this.setState(() => ({
      articles: api.getArticles(),
      authors: api.getAuthors()
    }));
  }

  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId]
  };

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions}
      />
    );
  }
}
