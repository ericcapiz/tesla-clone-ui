import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Section = ({title, description, backgroundImg, leftBtnText,  rightBtnText, }) => {
    return (
        <Wrap bgImage={backgroundImg}>
            
            <Fade left>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {rightBtnText && 
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    
`

const ItemText = styled.div `
    margin-top: 60%;
`

const ButtonGroup = styled.div `
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction: column;
       
    }
`

const LeftButton = styled.button `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 256px;
    background-color: rgba(23,26,32,0.8);
    color: white;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor:pointer;
    margin: 0 20px;
    border: none;
    -webkit-box-shadow: 0px 0px 4px 5px #000000; 
    box-shadow: 0px 0px 4px 5px #000000;
    
    @media (max-width: 768px){
        flex-direction: column;
        margin: 10px 0;
    }
`

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`

const Buttons = styled.div``

const DownArrow = styled.img`
    margin-bottom: 20px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.2s;
`