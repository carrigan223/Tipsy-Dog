import React, { useState, useEffect } from "react"
import styled, { keyframes } from "styled-components"
import { fadeInDown, hinge } from "react-animations"
import tipsyDog23 from "../images/tipsyDog2.png"

const bounceAnimation = keyframes`${fadeInDown}`
const hingeAnimation = keyframes`${hinge}`

const BouncyDiv = styled.div`
  animation: 5s ease-in ${bounceAnimation}, 5s ease-in 3s ${hingeAnimation};
  height: 300px;
  width: 300px;
  border-radius: 100%;
  box-shadow: 2px 2px 20px grey;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
`

const PageHeader = styled.h1`
  color: #ffd700;
  text-align: center;
  font-family: "montserrat";
  font-weight: 700;
  font-size: 4rem;
  -webkit-text-stroke: 4px #324473;
  text-shadow: 5px 5px 10px #84e0f5;
  text-transform: uppercase;
`

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SubText = styled.span`

`
// const ImageContainer = styled.div`
//   height: 300px;
//   width: 300px;
//   border-radius: 100%;
//   box-shadow: 2px 2px 20px grey;
//   background-color: #84e0f5;
// `

export default function Home() {
  return (
    <div>
      <LandingContainer>
        <BouncyDiv>
          <img
            style={{ width: "500px", height: "500px" }}
            src={tipsyDog23}
            alt="tipsy dog logo"
          />
          {/* <StaticImage src="../images/tipsyDog23.png" alt="Tipsy Dog Logo" /> */}
        </BouncyDiv>
        <TextContainer>
          <PageHeader>Tipsy Dog Beverage Company</PageHeader>
          <SubText>Sometimes the best medicine is hair of the dog</SubText>
        </TextContainer>
      </LandingContainer>
    </div>
  )
}
