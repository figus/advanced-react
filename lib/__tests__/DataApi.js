import DataApi from './../state-api';
import { data } from './../testData';

const api = new DataApi(data);

describe('DataApi', () => {
  it('exposes articles as an object', () => {
    const articleId = data.articles[0].id;
    const articleTitle = data.articles[0].title;

    const articles = api.getArticles();

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });

  it('exposes authors as an object', () => {
    const authorId = data.authors[0].id;
    const authorFirstName = data.authors[0].firstName;

    const authors = api.getAuthors();

    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].firstName).toBe(authorFirstName);
  });
});
