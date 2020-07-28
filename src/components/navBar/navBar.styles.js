import styled from "styled-components";

export const Nav = styled.nav`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: white;
	height: 8vh;

	@media (max-width: 768px) {
		padding: 0 1rem 0 1rem;
		justify-content: space-between;
	}
`;

export const Logo = styled.div`
	color: black;
	font-weight: bold;
	letter-spacing: 3px;
	font-size: 18px;
`;

export const Button = styled.a`
	display: none;
	padding: .5rem 1rem .5rem 1rem;
	background-color: tomato;
	color: white;
	font-weight: bold;
	border-radius: 15px;
	font-size: 14px;

	@media (max-width: 768px) {
		display: block;
	}
`;

export const Menu = styled.ul`
	display: flex;
	list-style: none;
	margin: 0;
	padding: 0;
	background-color: white;

	&.menuActive {
		transform: translateX(0%);
	}

	@media (max-width: 768px) {
		flex-direction: column;
		position: absolute;
		top: 8vh;
		right: 0;
		height: 92vh;
		width: 60vw;

		transform: translateX(100%);
		transition: transform 0.3s ease;
	}
`;

export const MenuItem = styled.li`
	letter-spacing: 2px;
	padding-left: 0.5rem;
	padding-right: 0.5rem;

	:hover {
		cursor: pointer;
		color: tomato;
	}

	@media (max-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		margin: 0;
		height: 20%;

		:hover {
			background-color: tomato;
			color: white;
			font-weight: bold;
		}
	}
`;

export const BurguerMenu = styled.div`
	display: none;

	:hover {
		cursor: pointer;
	}

	@media (max-width: 768px) {
		display: block;
	}
`;

export const MenuLine = styled.div`
	background-color: black;
	margin: 5px;
	height: 2px;
	width: 25px;
	transition: all 0.3s ease;

	&.toggle {
		background-color: tomato;
	}

	&.toggle.line1 {
		transform: rotate(-45deg) translate(-5px, 5px);
	}

	&.toggle.line2 {
		opacity: 0;
	}

	&.toggle.line3 {
		transform: rotate(45deg) translate(-5px, -5px);
	}
`;
