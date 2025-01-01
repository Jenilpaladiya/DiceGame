import React, {useState} from 'react'
import styled from 'styled-components'

const RoleDice = ({randomNumber, SetCurrentDice, currentDice}) => {
    
    return (
        <DiceContainer>
            <div className='dice'
            onClick={()=>randomNumber(1,6)}>
                {/* <p>{currentDice}</p> */}
                <img src={ `/images/Dices/dice_${currentDice}.png`} alt={`Dice ${currentDice}`}/>
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    )
}

export default RoleDice

const DiceContainer = styled.div`
display:flex;
align-items:center;
margin-top:48px;
flex-direction:column;
p{
font-size:24px;
}
.dice{
cursor:pointer;
}
`;
