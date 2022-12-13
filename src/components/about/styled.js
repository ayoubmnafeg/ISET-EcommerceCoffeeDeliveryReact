import styled from "styled-components";

export const ContainerText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
    text-align: center;
  }

  .circle4 {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    padding: 4px;
    margin-right: 0.6rem;
    background: ${(props) => props.theme.lilas2};
    color: ${(props) => props.theme.body};
  }

  .circle1 {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    padding: 5px;
    margin-right: 0.6rem;
    background: ${(props) => props.theme.laranja1};
    color: ${(props) => props.theme.body};
  }

  .circle2 {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    padding: 4px;
    margin-right: 0.6rem;
    background: ${(props) => props.theme.laranja2};
    color: ${(props) => props.theme.body};
  }

  .circle3 {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    padding: 4px;
    margin-right: 0.6rem;
    background: ${(props) => props.theme.subtitulo};
    color: ${(props) => props.theme.body};
  }
`;

export const Container = styled.div`
  margin: 1rem;
`;

export const BackgroundC = styled.img`
  position: absolute;
  top: 4rem;
  left: 0;
  width: 100%;
`;

export const Coffee = styled.img`
  width: 24rem;
  @media (max-width: 800px) {
    width: 20rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 290px 290px;
  @media (max-width: 800px) {
    grid-template-columns: 100%;
  }
`;

export const Set = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  width: 25rem;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Information = styled.text`
  margin-bottom: 1rem;
`;

export const Caption = styled.text`
  width: 33rem;
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  margin-top: 1rem;
  color: ${(props) => props.theme.Caption};
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Title2 = styled.h1`
  margin-top: 6rem;
  display: flex;
  justify-content: center;
  width: 15rem;
  @media (max-width: 800px) {
    text-align: center;
  }
`;
