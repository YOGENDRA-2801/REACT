import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  // "pageSize" = 12;
  // "totalResults" = 60;
  disabled = false;

  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=80f64c0432cc41cca042f8817bbbd5d5&page=${this.state.page}&pageSize=12`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      article: parseData.articles,
      loading: false,
      totalResults: parseData.totalResults,
    });
  }

  nextPage = async () => {
    console.log("Next Page Button Function Started");
    if (this.state.page + 1 >= Math.ceil(this.state.totalResults / 12)) {
      this.disabled = true;
    } else {
      this.setState({
        page: this.state.page + 1,
      });
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=80f64c0432cc41cca042f8817bbbd5d5&page=${this.state.page}&pageSize=12`;
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        article: parseData.articles,
        loading: false,
      });
    }

    console.log("Next Page Button Function Ended");
  };

  previousPage = async () => {
    console.log("Previous Page Button Function Started");
    this.setState({
      page: this.state.page - 1,
    });
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=80f64c0432cc41cca042f8817bbbd5d5&page=${this.state.page}&pageSize=12`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      article: parseData.articles,
      loading: false,
    });
    console.log("Previous Page Button Function Ended");
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h1>Top Headlines of the day</h1>
          <div className="row">
            {this.state.article.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
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
              disabled={this.state.page <= 1}
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
              disabled={this.disabled}
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
