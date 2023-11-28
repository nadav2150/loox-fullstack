import React, { useCallback } from "react";
import {useNavigate} from "react-router-dom";
import {Wrapper,StyledImage,PreviewCardHeader,PreviewCardDescription} from './PreviewCardStyle'

export default function PreviewCard({article}) {
  const navigate = useNavigate();
  const handleCardClick = useCallback(() => {
    navigate(`/article/?id=${article.id}`);
  },[])
  
  return (
    <Wrapper onClick={handleCardClick}>
      <StyledImage
        src={article.img}
        alt=""
      />
      <div>
        <PreviewCardHeader>{article.name}</PreviewCardHeader>
        <PreviewCardDescription>
          {article.description}
        </PreviewCardDescription>
      </div>
    </Wrapper>
  );
}
