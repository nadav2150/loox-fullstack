import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import apiService from "../services/apiService";

const Test = () => {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log('asdsadasd');
    const {data} = await apiService.get(`/articles?limit=20&skip=${skip}`)
    setData(data)
  };

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={fetchData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      {data.map((item) => {
        return (
          <div className="card" key={item.id}>
            <h4>Comment for postId: {item.postId}</h4>
            <p>{item.body}</p>
          </div>
        );
      })}
            {data.map((item) => {
        return (
          <div className="card" key={item.id}>
            <h4>Comment for postId: {item.postId}</h4>
            <p>{item.body}</p>
          </div>
        );
      })}
            {data.map((item) => {
        return (
          <div className="card" key={item.id}>
            <h4>Comment for postId: {item.postId}</h4>
            <p>{item.body}</p>
          </div>
        );
      })}
            {data.map((item) => {
        return (
          <div className="card" key={item.id}>
            <h4>Comment for postId: {item.postId}</h4>
            <p>{item.body}</p>
          </div>
        );
      })}
            {data.map((item) => {
        return (
          <div className="card" key={item.id}>
            <h4>Comment for postId: {item.postId}</h4>
            <p>{item.body}</p>
          </div>
        );
      })}
            {data.map((item) => {
        return (
          <div className="card" key={item.id}>
            <h4>Comment for postId: {item.postId}</h4>
            <p>{item.body}</p>
          </div>
        );
      })}
    </InfiniteScroll>
  );
};

export default Test;
