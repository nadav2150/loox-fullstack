import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PreviewCard from "./shared/PreviewCard";
import apiService from "../services/apiService";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  /* background-color: red; */
  padding: 16px;
  overflow: auto;
  padding-bottom: 40px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

// const PreviewCardWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 16px;
//   overflow: auto;
//   height: 100%;
//   &::-webkit-scrollbar {
//     display: none;
//   }
// `;

export default function ArticleList() {
  const navigate = useNavigate();
  const [hasMore, setHasMore] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
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
          return <PreviewCard article={article} />;
        })}
      </InfiniteScroll>
    </Wrapper>
  );
}
