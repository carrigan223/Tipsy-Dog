import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import tipsyDog23 from "../images/tipsyDog2.png"
import {
  EstDate,
  BouncyDiv,
  ComingSoonText,
  PageHeader,
  TextContainer,
  SubText,
  LandingContainer,
  ImageStyled,
} from "../styles/indexStyles.js"

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
        <BackgroundImage
          Tag="section"
          // Spread bgImage into BackgroundImage:
          style={{height: "100vh"}}
          {...bgImage}
          preserveStackingContext
        >
          {/* <div style={{ minHeight: 1000, minWidth: 1000 }}>
            <GatsbyImage image={image} alt={"testimage"} />
          </div> */}
          <TextContainer>
            <BouncyDiv>
              <ImageStyled src={tipsyDog23} alt="tipsy dog logo" />
              {/* <StaticImage src="../images/tipsyDog23.png" alt="Tipsy Dog Logo" /> */}
            </BouncyDiv>
            <PageHeader>Tipsy Dog Beverage Co.</PageHeader>
            <EstDate>Est. 2020</EstDate>
            <SubText>Great Tasting Canned Cocktails For Any Adventure</SubText>
            <ComingSoonText>Coming Soon To A Cooler Near You...</ComingSoonText>
          </TextContainer>
        </BackgroundImage>{" "}
      </LandingContainer>
    </div>
  )
}
