import { useState } from 'react'
import styled from 'styled-components'
import ArticleList from './components/ArticleList'
import ArticleToDisplay from './components/ArticleToDisplay'

const MainWrapper = styled.div`
/* background-color: green; */
height: 98vh;
display: grid;
grid-template-columns: 5fr 1fr;
padding: 24px 68px 0 68px;
box-sizing: border-box;
overflow: hidden;
`

function App() {

  return (
    <MainWrapper>
    <ArticleToDisplay/>
    <ArticleList/>
    </MainWrapper>
  )
}

export default App
