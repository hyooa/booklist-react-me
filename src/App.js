import './App.css';
import {createGlobalStyle} from 'styled-components';
import BookTemplate from './Component/BookTemplate';
import BookTitle from './Component/BookTitle';
import BookButton from './Component/BookButton';
import BookCreate from './Component/BookCreate';
import { BookProvider } from './Component/BookListContext';
import BookItem from './Component/BookItem';

const GlobalStyle = createGlobalStyle `
  body {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background : #eee;
  }
`;

function App() {
  return (
    <BookProvider>
      <GlobalStyle></GlobalStyle>

      <BookTemplate>
        <BookTitle></BookTitle>
        <BookButton></BookButton>
        <BookItem></BookItem>
        <BookCreate></BookCreate>
      </BookTemplate>
    </BookProvider>
  );
}

export default App;
