import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 10px;
  gap: 8px;
  border-radius: 8px;
  height: 128px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
`;

const StyledImage = styled.img`
  width: 108px;
  border-radius: 8px;
`;

const PreviewCardHeader = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const PreviewCardDescription = styled.div`
  margin-top: 10px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  font-size: 13px;
  font-weight: 300;
`;

export { PreviewCardHeader, PreviewCardDescription, StyledImage, Wrapper };
