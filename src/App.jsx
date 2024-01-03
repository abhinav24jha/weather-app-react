import SearchBar from "./components/SearchBar";
import styled, { keyframes } from "styled-components";
import './App.css';

export default function App(){
  return(
    <>
      <MainContainer>
        <MovingBackground>
          <img src="/src/sky.png" alt="" />
        </MovingBackground>
        <h1>Weather Project</h1>
      </MainContainer>

      <SearchBarBg>
        <SearchBar />
      </SearchBarBg>
      

  </>
  );
}

const MainContainer = styled.div`
  position: relative; 
  h1 {
    position: absolute; 
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    font-size: 120px;
    text-transform: uppercase;
    font-family: 'Gambetta', serif;
    letter-spacing: -3px;
    font-variation-settings: "wght" 311;
    margin-bottom: 0.8rem;
    background-color: #fff690;
    color: #372d2d;
    outline: none;
    text-align: center;
    z-index: 2; 
  }
`;

const MovingBackground = styled.div`
  position: relative;
  img {
    width: 100vw;
    height: 45vh;
    object-fit: cover; /* Ensure the image covers the entire container */
  }
`;

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const SearchBarBg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55vh;
    background: linear-gradient(-45deg, #223037, #67828b, #647f8a, #224953);
    background-size: 400% 400%;
    animation: ${gradientAnimation} 15s ease infinite;
`

