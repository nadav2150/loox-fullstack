import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  padding: 10px;
`;

const TextContainer = styled.div`
  flex-grow: 1;
  padding: 10px;
`;
const StyledImage = styled.img`
  width: 300px;
  height: 260px;
  border-radius: 20px;
`;

const StyledHeader = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const StyledDescription = styled.div`
  font-size: 18px;
  font-weight: 300;
  max-height: 90vh;
  overflow: hidden;
  line-height: 1.6;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledButton = styled.button`
  width: 125px;
  height: 38px;
  background: white;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  color: black;
  font-weight: 600;
  font-size: 18px;
  &:hover {
    background-color: #ebebeb;
  }
`;

const StyledReadMoreWrapper = styled.div`
  background-color: transparent;
  backdrop-filter: blur(1.5px);
  bottom: 14%;
  height: 130px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { StyledButton, StyledReadMoreWrapper, StyledDescription, StyledHeader,StyledImage,TextContainer,ImageContainer,Wrapper}
