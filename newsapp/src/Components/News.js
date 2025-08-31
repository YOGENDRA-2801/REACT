import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <>
        <div className="container">
            <NewsItem title="cricket" description="Some random facts"/>
        </div>
        <div className="container">
            <NewsItem title="cricket" description="Some random facts"/>
        </div>
        <div className="container">
            <NewsItem title="cricket" description="Some random facts"/>
        </div>
      </>
    );
  }
}

export default News;
