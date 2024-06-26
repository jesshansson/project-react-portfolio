import styled from 'styled-components';

export const OuterWrapper = styled.section`
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
    background-color: ${(props) => (props.grey ? '#F4F4F4;' : 'white')}
`;

export const InnerWrapper = styled.section`
    width: 80%;
    padding-top: 4vh;
    padding-bottom: 6vh;
    display: flex; 
    flex-direction: column;

  @media (min-width: 668px) and (max-width: 1024px) {
    width: 60%;
  }
  @media (min-width: 1025px){ 
    width: 60%;
  }
  @media (min-width: 1600px) {
    width: 50%;
  }
`;

export const P = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 29px;
`

export const A = styled.a`
  text-decoration: none;
  outline: none;
  color: inherit;

`