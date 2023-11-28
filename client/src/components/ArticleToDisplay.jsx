import React ,{useRef,useEffect,useState} from 'react'
import styled from 'styled-components'
import { useLocation,useSearchParams } from 'react-router-dom';
import apiService from '../services/apiService';
import Lottie from "react-lottie-player";
import noDataFound from '../assets/lottie/noDataFound.json'
const Wrapper = styled.div`
/* background-color: blue; */
display: flex;
gap: 16px;
overflow: hidden;
`

const ImageContainer = styled.div`
/* background-color: green; */
padding: 10px;
`

const TextContainer = styled.div`
/* background-color: purple; */
flex-grow: 1;
padding: 10px;
`
const StyledImage = styled.img`
width: 300px;
height: 260px;
border-radius: 20px;
`

const StyledHeader = styled.div`
font-size: 24px;
font-weight: bold;
`

const StyledDescription = styled.div`
font-size: 18px;
font-weight: 300;
max-height: 90vh;
overflow: hidden;
line-height: 1.6;
&::-webkit-scrollbar {
    display: none;
  }
`

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
`

const StyledReadMoreWrapper = styled.div`
background-color: transparent;
backdrop-filter: blur(1.5px);
    bottom: 14%;
    height: 130px;
    position: relative;
    /* width: 100%; */
    display: flex;
    align-items: center;
    justify-content: center;
`


export default function ArticleToDisplay() {
  const articleRef = useRef(null)
  const [isShowMore, setIsShowMore] = useState(false)
  const [article, setArticle] = useState(null)
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetchData();
  }, [searchParams]);

  const fetchData = async () => {
    const idToSend=searchParams.get("id") || 0
    const {data}= await apiService.get(`articles/${idToSend}`)
    Object.keys(data).length === 0 ?    setArticle(null) :setArticle(data)

  };

  useEffect(()=>{
    if(articleRef.current.scrollHeight > articleRef.current.clientHeight){
      setIsShowMore(true)
    }
    else{
      articleRef.current.style.overflow='hidden'
      setIsShowMore(false)
    }
  },[])

const handleReadMore=()=>{
  articleRef.current.style.overflow='scroll'
  setIsShowMore(false)
}

  return (
    <Wrapper>
{article &&         <ImageContainer>
            <StyledImage src={article?.img} alt=""/>
        </ImageContainer> }

        <TextContainer>
       {!article && <Lottie
              loop
              animationData={noDataFound}
              play
              style={{
                width: "100%",
                height: "400px",
                zIndex: 2,
              }}
            /> } 
            <StyledHeader>{article?.name}</StyledHeader>
            <StyledDescription ref={articleRef}>
              {article?.description}
            </StyledDescription>
            {isShowMore &&<StyledReadMoreWrapper >
              <StyledButton onClick={handleReadMore}>Read More</StyledButton>
            </StyledReadMoreWrapper>}
        </TextContainer>
    </Wrapper>
  )
}
