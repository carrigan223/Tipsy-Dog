import styled, { keyframes } from "styled-components"
import { hinge, fadeIn } from "react-animations"

//keyframes addressing animations of logos
const fadeAnimation = keyframes`${fadeIn}`
const hingeAnimation = keyframes`${hinge}`

const ImageStyled = styled.img`
  height: 500px;
  width: 500px;
`

const BouncyDiv = styled.div`
  animation: 7s ease-in ${fadeAnimation}, 5s ease-in 9s ${hingeAnimation};
  height: 300px;
  width: 300px;
  border-radius: 100%;
  box-shadow: 5px 5px 20px black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;

  @media (max-width: 768px) {
    margin-top: 4vh;
  }
`

const PageHeader = styled.h1`
  color: white;
  text-align: center;
  font-family: "oswald";
  font-weight: 700;
  font-size: 5rem;
  -webkit-text-stroke: 4px #324473;
  text-shadow: 5px 5px 5px black;
  text-transform: uppercase;
  margin-bottom: 0px;
  margin-top: 0px;

  @media (max-width: 768px) {
    color: white;
    text-align: center;
    font-family: "oswald";
    font-weight: 700;
    font-size: 3rem;
    -webkit-text-stroke: 4px #324473;
    text-shadow: 5px 5px 5px black;
    text-transform: uppercase;
    margin-bottom: 0px;
    margin-top: 0px;
  }
`

const LandingContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    display: flex;
    flex-direction: column;

    justify-content: flex-start;
    align-items: center;
    background-color: blue;
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  height: 150%;
  background-image: linear-gradient(to bottom, white 10%, transparent);
`

const SubText = styled.span`
  font-family: "montserrat";
  font-size: 2.25rem;
  text-decoration: underline #84e0f5;
  color: white;
  text-transform: uppercase;
  -webkit-text-stroke: 2px black;

  /* background-color: #324473; */
  padding: 5px 20px;
  border-radius: 4px;
  /* text-shadow: 5px 5px 5px black; */

  @media (max-width: 768px) {
    text-align: center;
    font-size: 2rem;
  }
`

const ComingSoonText = styled.span`
  -webkit-text-stroke: 1px black;
  color: black;
  font-size: 1.5rem;
  font-family: "montserrat";

  @media (max-width: 768px) {
    -webkit-text-stroke: 1px black;
    color: black;
    font-size: 1.5rem;
    font-family: "montserrat";
    text-align: center;
  }
`

const EstDate = styled.span`
  -webkit-text-stroke: 2px #324473;
  color: black;
  font-size: 2rem;
  font-family: "lobster";
  padding: 5px 0px;
`

export {
  EstDate,
  BouncyDiv,
  ComingSoonText,
  PageHeader,
  TextContainer,
  SubText,
  LandingContainer,
  ImageStyled,
}

// @media (max-width: 768px) {

// }
