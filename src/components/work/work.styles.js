import styled from "styled-components";

export const MyWork = styled.div`
	min-height: 100vh;
	padding-top: 5rem;
	padding-bottom: 2rem;
`;

export const Title = styled.h1`
	color: white;
	text-transform: uppercase;
	margin: 0;
    padding: 0;
	font-size: ${(props) => props.size}px;
`;

export const Subtitle = styled.p`
	color: #21e6c1;
	margin: 0;
	padding: 0;
`;

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
	width: 150px;
	height: 150px;
	background-color: tomato;
	margin-bottom: 1rem;

	@media (max-width: 768px) {
		width: 90vw;
	}
`;

export const Description = styled.p`
	color: white;
`;
export const ProjectInfo = styled.div`
	padding-left: 2rem;
	text-align: left;
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
	padding: 0;
	margin: 0;
	padding-right: 0.5rem;
`;

export const Buttons = styled.div`
	display: flex;
`;

export const GithubBtn = styled.div`
	height: 50px;
	width: 150px;
    color: #071e3d;
	background-color: white;
	text-align: center;
	line-height: 50px;
    font-weight: bold;
    
    :hover {
        cursor: pointer;
        opacity: 90%;
    }
`;

export const LiveVersionBtn = styled(GithubBtn)`
    background-color: #21e6c1;
    margin-right: .25rem;
`;
