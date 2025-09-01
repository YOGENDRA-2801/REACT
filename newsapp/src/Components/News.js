import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor() {
    super();
    // console.log(" ----- CONSTRUCTOR ----- ");
    this.state = {
      article: [], 
      loading: false
    }
  }

  async componentDidMount() {
    // console.log(" ----- COMPONENT-DID-MOUNT ----- ");    
    const url = process.env.REACT_APP_US
    console.log(url);
    
    let data = await fetch(url) ;
    let parseData = await data.json() ;
    this.setState({
      article: parseData.articles,
      loading: false
    });
  }

  // key = newsUrl => given array made from json data me article ko uniquely identify krne k liye kuch aur relevant tha nahi hence newsUrl use kiya
  render() {
    // console.log(" ----- RENDER ----- ") ;
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
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default News;
