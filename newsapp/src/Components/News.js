import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

// topheadlines -- articles
// topheadlines/sources -- sources

export class News extends Component {
  static defaultProps = {
    country: "us",
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string.isRequired,
    category: PropTypes.oneOf([
      "business",
      "entertainment",
      "general",
      "health",
      "science",
      "sports",
      "technology",
    ]).isRequired,
  };

  capitalize = (str) =>
    str ? str[0].toUpperCase() + str.slice(1).toLowerCase() : "";

  constructor(props) {
    super(props);
    this.state = {
      article: [],
      page: 1,
      totalResults: 0,
      pageSize: 6,
    };
    document.title = `Newsapp -- ${this.capitalize(this.props.category)}`;
  }

  update = async (pageNumber) => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=80f64c0432cc41cca042f8817bbbd5d5&page=${pageNumber}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      article: parseData.articles,
      totalResults: parseData.totalResults,
    });
  };

  async componentDidMount() {
    const newPage = this.state.page;
    this.props.setProgress(40)
    this.update(newPage);
    this.props.setProgress(100)
  }

  /* Next Button function for going to next page 
    nextPage = async () => {
      const newPage = this.state.page + 1;
      if (newPage > Math.ceil(this.state.totalResults / this.state.pageSize)) {
        return;
      }
      this.setState({
        page: newPage,
      });
      this.update(newPage);
    };
  */

  /* Previous Button function for going to previous page 
    previousPage = async () => {
      const newPage = this.state.page - 1;
      if (newPage < 1) {
        return;
      }
      this.setState({
        page: newPage,
      });
      this.update(newPage);
    };
  */

  fetchMoreData = async () => {
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
      article: this.state.article.concat(parseData.articles),
    });
  };

  render() {
    /* ----- BUTTON BASED NAVIGATION FOR MORE NEWS -----
      const isFirstPage = this.state.page <= 1;
      const isLastPage =
        this.state.page >=
        Math.ceil(this.state.totalResults / this.state.pageSize);
    */
    return (
      <>
        
          <h2 className="text-center" style={{ margin: "30px 0px" }}>
            Top {this.capitalize(this.props.category)} Category Headlines
          </h2>

          <InfiniteScroll
            dataLength={this.state.article.length}
            next={this.fetchMoreData}
            hasMore={this.state.article.length !== this.state.totalResults}
            loader={<Spinner></Spinner>}
          >
            
            <div className="container"> {/* niche row class k sath daal rha tha to kaam nahi kr rha tha */}
            <div className="row ">
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
              })}{" "}
            </div></div>
          </InfiniteScroll>
          {/* ----- BUTTON BASED NAVIGATION FOR MORE NEWS -----
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
          */}
        
      </>
    );
  }
}

export default News;
