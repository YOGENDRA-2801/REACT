import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'

// topheadlines -- articles
// topheadlines/sources -- sources

export class News extends Component {

  static defaultProps = {
    country : "us",
    category : "general"
  }

  static propTypes = {
    country: PropTypes.string.isRequired ,
    category: PropTypes.oneOf([
      'business', 'entertainment', 'general', 
      'health', 'science', 'sports', 'technology'
    ]).isRequired
  }

  constructor() {
    super();
    this.state = {
      article: [],
      // loading: false,
      page: 1,
      totalResults: 0,
      pageSize: 12,
      /* 
        Agar aap state ko initialize karte waqt props ka value use kar rahe ho:
        constructor(props) { super(props); } 
        props ka value state me daala
      */
    };
  }

  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=80f64c0432cc41cca042f8817bbbd5d5&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      article: parseData.articles,
      totalResults: parseData.totalResults,
    });
  }

  nextPage = async () => {
    const newPage = this.state.page + 1;
    if (newPage > Math.ceil(this.state.totalResults / this.state.pageSize)) {
      return;
    }
    this.setState({
      page: newPage,
    });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=80f64c0432cc41cca042f8817bbbd5d5&page=${newPage}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      article: parseData.articles,
    });
  };

  previousPage = async () => {
    const newPage = this.state.page - 1;
    if (newPage < 1) {
      return;
    }
    this.setState({
      page: newPage,
    });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=80f64c0432cc41cca042f8817bbbd5d5&page=${newPage}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      article: parseData.articles,
    });
  };

  render() {
    const isFirstPage = this.state.page <= 1;
    const isLastPage =
      this.state.page >=
      Math.ceil(this.state.totalResults / this.state.pageSize);
    return (
      <>
        <div className="container my-3">
          <h1 className="text-center" style={{margin: '30px 0px'}}>Top Headlines of the day</h1>
          <div className="row">
            {this.state.article.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    tarik={element.publishedAt} 
                    source={element.source.name} 
                    reporter={element.author}
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://i.insider.com/68b0ee1e194a2d49b8af66c4?width=1200&format=jpeg"
                    }
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-between">
            <button
              disabled={isFirstPage}
              type="button"
              className="btn btn-dark"
              onClick={this.previousPage}
            >
              &laquo; Previous Page
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.nextPage}
              disabled={isLastPage}
            >
              Next Page &raquo;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
