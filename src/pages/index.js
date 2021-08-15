import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import { GatsbyImage } from "gatsby-plugin-image"
import styled, { keyframes } from "styled-components"
import { fadeInDown, hinge } from "react-animations"
import tipsyDog23 from "../images/tipsyDog2.png"
import sanDieogoBay from "../images/sandiegobay.jpg"

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
  font-family: "oswald";
  font-weight: 700;
  font-size: 5rem;
  -webkit-text-stroke: 4px #324473;
  text-shadow: 5px 5px 10px #84e0f5;
  text-transform: uppercase;
  margin-bottom: 0px;
`

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
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
  justify-content: flex-start;
  width: 100vw;
  height: 50vh;
  padding-top: 100px;
`

const SubText = styled.span`
  font-family: "pacifico";
  font-size: 2rem;
  text-decoration: underline #84e0f5;
  color: white;
  background-color: #324473;
  padding: 10px 20px;
  border-radius: 33px;
  box-shadow: 5px 5px 10px #84e0f5;
`
// const ImageContainer = styled.div`
//   height: 300px;
//   width: 300px;
//   border-radius: 100%;
//   box-shadow: 2px 2px 20px grey;
//   background-color: #84e0f5;
// `

export default function Home() {
  const { backgroundImage123 } = useStaticQuery(
    graphql`
      query {
        backgroundImage123: file(relativePath: { eq: "sandiegobay.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 2000
              quality: 50
              webpOptions: { quality: 70 }
            )
          }
        }
      }
    `
  )

  const image = getImage(backgroundImage123)
  const bgImage = convertToBgImage(image)

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
        <BackgroundImage
          Tag="section"
          // Spread bgImage into BackgroundImage:
          {...bgImage}
          preserveStackingContext
        >
          {/* <div style={{ minHeight: 1000, minWidth: 1000 }}>
            <GatsbyImage image={image} alt={"testimage"} />
          </div> */}
          <TextContainer>
            <PageHeader>Tipsy Dog Beverage Company</PageHeader>
            <SubText>Sometimes the best medicine is hair of the dog</SubText>
          </TextContainer>
        </BackgroundImage>{" "}
      </LandingContainer>
    </div>
  )
}
