import styled from 'styled-components'
import ArticleList from './components/ArticleList'
import ArticleToDisplay from './components/ArticleToDisplay'

const MainWrapper = styled.div`
height: 98vh;
display: grid;
grid-template-columns: 3fr 1fr;
padding: 24px 68px 0 68px;
box-sizing: border-box;
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
