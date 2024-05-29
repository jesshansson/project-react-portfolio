import React from 'react';
import styled from 'styled-components/macro'
import { InnerWrapper, OuterWrapper } from 'StyledComponents/GlobalStyles';
import { SectionHeading } from 'StyledComponents/HeadlineStyles';

const Skills = () => {
  return (
    <OuterWrapper grey>
      <InnerWrapper>
        <SectionHeading>SKILLS</SectionHeading>
        <SkillsWrapper>
          <SkillsList>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript ES6</li>
              <li>React</li>
              <li>Redux</li>
            </ul>
          </SkillsList>
          <SkillsList>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Styled components</li>
              <li>GitHub</li>
            </ul>
          </SkillsList>
          <SkillsList>
            <ul>
              <li>Visual Studio Code</li>
              <li>Figma</li>
              <li>Codewars</li>
              <li>CodePen</li>
              <li>Postman</li>
            </ul>
          </SkillsList>

        </SkillsWrapper>
      </InnerWrapper>
    </OuterWrapper>
  )
}

const SkillsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2vh;
    margin-bottom: 25px;
    text-align: center;
    font-family: "Roboto";
    font-size: 17px;
    letter-spacing: 0em;
    
    @media (min-width: 668px) {
      grid-gap: 6vh;
    }
`

const SkillsList = styled.li`
    font-weight: 400;
    line-height: 29px;
    list-style-type: none;
`

export default Skills;