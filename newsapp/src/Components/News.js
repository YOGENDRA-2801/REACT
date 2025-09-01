import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  article = [] ;

  constructor() {
    super();
    // console.log(" ----- CONSTRUCTOR ----- ");
    this.state = {
      article: this.article,
      loading: false
    }
  }

  async componentDidMount() {
    // console.log(" ----- COMPONENT-DID-MOUNT ----- ");    
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=80f64c0432cc41cca042f8817bbbd5d5"
    let data = await fetch(url) ;
    let parseData = await data.json() ;
    this.setState = {
      article : parseData.articles ,
    }
  }

  // key = newsUrl => given array made from json data me article ko uniquely identify krne k liye kuch aur relevant tha nahi hence newsUrl use kiya
  render() {
    // console.log(" ----- RENDER ----- ") ;
    return (
      <>
        <div className="container my-3">
          <h1>Top Headlines of the day</h1>
          <div className="row">
            {this.article.map((element) => {
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
