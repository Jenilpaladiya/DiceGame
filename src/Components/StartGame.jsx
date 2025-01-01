import React from 'react'
import styled from "styled-components"

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="Dices" />
      </div>
      <div className='titleSection'>
        <h1>Dice Game</h1>
        <Button onClick={toggle} className='button PlayNowButton'>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
      max-width:1180px;
      margin:auto;
      height:100vh;
      display:flex;
      flex-direction:raw;
      align-items: center;
      justify-content: center;
    .titleSection {
      width:100%;
      display: flex;
      flex-direction:column;
      align-items: center;
      justify-content: center;
  }
  `;

const Button = styled.button`
      background-color: #000;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;

   &:hover {
    background-color: #333;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #555;
    transform: translateY(1px);
  }

  `;