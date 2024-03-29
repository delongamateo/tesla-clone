import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section(props) {
    return (
      <Wrap bgImage={props.backgroundImg}>
        <Fade bottom>
          <ItemText>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </ItemText>
        </Fade>
        <Buttons>
          <Fade bottom>
            <ButtonGroup>
              <LeftButton>{props.leftBtnText}</LeftButton>
              {props.rightBtnText && (
                <RightButton>{props.rightBtnText}</RightButton>
              )}
            </ButtonGroup>
          </Fade>
          <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
      </Wrap>
    );
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    z-index: -1;

`;

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const LeftButton = styled.div`
    background-color: rgb(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 10px;
`;

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1s;
  overflow-x: hidden;
`;

const Buttons = styled.div`
    text-align: center;
`;



export default Section
