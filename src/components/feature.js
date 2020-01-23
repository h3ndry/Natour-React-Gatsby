import React from 'react'
import styled from 'styled-components'

import Card from './featureCard'
import bgImage from '../images/nat-4.jpg'

export default function feature() {

  const featureContent = [
    {
      icon: `icon icon-basic-world`,
      title: `Explore the world`,
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.`
    },
    {
      icon: `icon icon-basic-compass`,
      title: `Meet nature`,
      text: `Aperiam, ipsum sapiente aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. `
    },
    {
      icon: `icon icon-basic-map`,
      title: `Find your way`,
      text: `Consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur. Lorem ipsum dolor sit amet `
    },
    {
      icon: `icon icon-basic-heart`,
      title: `Live a healthier life`,
      text: `Elit. Aperiam, ip Lorem ipsum dolor sit amet consectetur adipisicing sum sapiente aspe rnatur.`
    }
  ]

  return (
    <FeatureWrapper>
      <div className="row">
        {featureContent.map((feature, i) => <Card
          icon={feature.icon}
          title={feature.title}
          text={feature.text}
          key={i}
        />)}
      </div>
    </FeatureWrapper>
  )
}


const FeatureWrapper = styled.section`
  padding: 12.5rem 0;
  background-image: linear-gradient(to right bottom, rgba(126,213,111,0.8), rgba(40,180,133,0.8)),
  url(${bgImage});
  background-size: cover;
  transform: skewY(-7deg);
  margin-top: -6.25rem;

    > * {
    transform: skewY(7deg);
  }
`

