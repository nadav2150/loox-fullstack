import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PreviewCard from "./shared/PreviewCard";
import apiService from "../services/apiService";
import InfiniteScroll from "react-infinite-scroll-component";

const Wrapper = styled.div`
  padding: 16px;
  overflow: auto;
  padding-bottom: 40px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function ArticleList() {
  const [hasMore] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // get articles by limit 20 can be changed in the request to demonstrate infinite scroll easy can add
    // can easy add start index  `/articles?limit=20&startIndex=0` -> `/articles?limit=20&startIndex=20`
    const { data } = await apiService.get(`/articles?limit=20`);
    setArticles(data);
  };

  return (
    <Wrapper>
      <div>More Stuff</div>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {articles.map((article) => {
          return <PreviewCard key={`article${article.id}`} article={article} />;
        })}
      </InfiniteScroll>
    </Wrapper>
  );
}
