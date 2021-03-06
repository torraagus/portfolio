import styled from "styled-components";
import colors from "../../colors";
import { Section } from "../shared/components.styles";

export const MyWork = styled(Section)``;

export const Projects = styled.div`
  margin-top: 3rem;
`;

export const Project = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Image = styled.img`
  max-width: 90vw;
  height: 200px;
  margin-bottom: 1rem;

  @media (max-width: 1920px) {
    height: 300px;
  }

  @media (max-width: 1024px) {
    height: 250px;
  }

  @media (max-width: 768px) {
    height: 225px;
  }

  @media (max-width: 512px) {
    height: 200px;
  }

  @media (max-width: 384px) {
    height: 150px;
  }
`;

export const Description = styled.p`
  color: white;
`;
export const ProjectInfo = styled.div`
  text-align: left;
  max-width: 90%;

  @media (min-width: 768px) {
    padding-left: 2rem;
    max-width: 35%;
  }

  @media (max-width: 768px) {
    max-width: 60%;
  }

  @media (max-width: 512px) {
    max-width: 90%;
  }
`;

export const Technologies = styled.ul`
  color: white;
  display: flex;
  flex-flow: wrap;
  list-style: none;
  margin: 0 0 1rem 0;
  padding: 0;
`;

export const TechItem = styled.li`
  margin: .25rem;
  padding: 0.5rem;
  border-radius: 15px;
  background-color: ${colors.primary};
`;

export const Buttons = styled.div`
  display: flex;
  max-width: 90vw;

  @media (min-width: 768px) {
    max-width: 60%;
  }

  @media (min-width: 512px) {
    max-width: 75%;
  }
`;

export const GithubBtn = styled.a`
  height: 50px;
  width: 50%;
  color: ${colors.primary};
  background-color: white;
  text-align: center;
  line-height: 50px;
  font-weight: bold;
  border-radius: 5px;
  text-decoration: none;

  :hover {
    cursor: pointer;
    opacity: 75%;
  }

  :active {
    cursor: pointer;
    opacity: 90%;
  }
`;

export const LiveVersionBtn = styled(GithubBtn)`
  background-color: ${colors.primary};
  color: white;
  margin-right: 0.25rem;
`;
