import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm pb-8`}
`;

const Card = styled.div`
  ${tw`flex flex-col items-center sm:items-start text-center sm:text-left h-full mx-8 mx-2 border shadow-md rounded-lg overflow-hidden`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`px-4 py-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({ cards = null, heading = "Amazing Features", subheading = "Features", description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: '/images/camera.jpg',
      title: "Camera",
      description: "We Do Install New Cameras and do the services of old camera and security System like analog, Digital cameras."
    },
    {
      imageSrc: '/images/networkimage.png', title: "Routers & Access points",
      description: "We Do Installations and Services Of Routers, Access points ( Unifi, Aruba, Omada TP Link, Ruckus etc)"
    },
    {
      imageSrc: '/images/avimage.jpg', title: "AV System ",
      description: "We do Installations & Services of Amplifiers ( Denon, marantz, Anthem, Yamaha ), projectors, Speakers, TV and Tatasky."
    },
    {
      imageSrc: '/images/vdpimage.jpg', title: "Video Door Phones",
      description: "We do installation & Services of  Commax, Akuvox, Onetouch VDP."
    },
    {
      imageSrc: '/images/electicalimage.png', title: "Electrical Work",
      description: "We Do Wiring Of Homes and offices and light installations."
    },
    {
      imageSrc: '/images/smoke.jpg', title: "Fire Alarm & Smoke Detector",
      description: "We do installation and services of fire alarm system and smoke detector."
    },
    {
      imageSrc: '/images/amcimage.jpg', title: "AMC",
      description: "We Take AMC Of Camera, AV System, Electrical Work, VDP etc."
    }
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card class="max-w-sm rounded overflow-hidden shadow-lg">
              <img class="w-full h-45" src={card.imageSrc} alt={card.title + ' Image'}></img>
              <div className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Our  Services Include Automation , Security System , AMC and  New Installations . Our Technician Reaches in 24 Hours After Complaints Locked"}
                </p>
              </div>
              {/* <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div> */}
            </Card>
            {/* <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Our  Services Include Automation , Security System , AMC and  New Installations . Our Technician Reaches in 24 Hours After Complaints Locked"}
                </p>
              </span>
            </Card> */}
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
