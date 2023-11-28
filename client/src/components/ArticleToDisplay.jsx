import React, { useRef, useEffect, useState, useCallback } from "react";
import {useSearchParams } from "react-router-dom";
import apiService from "../services/apiService";
import Lottie from "react-lottie-player";
import noDataFound from "../assets/lottie/noDataFound.json";
import {
  Wrapper,
  ImageContainer,
  TextContainer,
  StyledImage,
  StyledHeader,
  StyledDescription,
  StyledButton,
  StyledReadMoreWrapper,
} from "./ArticleToDisplayStyle";

export default function ArticleToDisplay() {
  const articleRef = useRef(null);
  const [isShowMore, setIsShowMore] = useState(false);
  const [article, setArticle] = useState(null);
  let [searchParams] = useSearchParams();

  useEffect(() => {
    fetchData();
  }, [searchParams]);

  const fetchData = async () => {
    const idToSend = searchParams.get("id") || 0;
    const { data } = await apiService.get(`articles/${idToSend}`);
    Object.keys(data).length === 0 ? setArticle(null) : setArticle(data);
  };

  useEffect(() => {
    if (articleRef.current.scrollHeight > articleRef.current.clientHeight) {
      setIsShowMore(true);
    } else {
      articleRef.current.style.overflow = "hidden";
      setIsShowMore(false);
    }
  }, [article]);

  const handleReadMore = useCallback(() => {
    articleRef.current.style.overflow = "scroll";
    setIsShowMore(false);
  },[]);

  return (
    <Wrapper>
      {article && (
        <ImageContainer>
          <StyledImage src={article?.img} alt={article?.name} />
        </ImageContainer>
      )}

      <TextContainer>
        {!article && (
          <Lottie
            loop
            animationData={noDataFound}
            play
            style={{
              width: "100%",
              height: "400px",
              zIndex: 2,
            }}
          />
        )}
        <StyledHeader>{article?.name}</StyledHeader>
        <StyledDescription ref={articleRef}>
          {article?.description}
        </StyledDescription>
        {isShowMore && (
          <StyledReadMoreWrapper>
            <StyledButton onClick={handleReadMore}>Read More</StyledButton>
          </StyledReadMoreWrapper>
        )}
      </TextContainer>
    </Wrapper>
  );
}
