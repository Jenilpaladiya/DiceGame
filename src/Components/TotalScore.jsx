import React from 'react'
import styled from 'styled-components'

const TotalScore = ({score,setScore}) => {
  return (
    
    <ScoreContainer>
    <h1 className='score'>{score}</h1>
    <p className='text'>Total Score</p>
  </ScoreContainer>
  )
}

export default TotalScore



const ScoreContainer=styled.div`
text-align:center;
max-width:200px;
padding:10px;

  .score{
  font-size:50px;
  }
  h1{
  font-size:100px;
  line-height:10px;
  }
  p{
  font-size:24px;
  font-weight:800;
  }
  `;