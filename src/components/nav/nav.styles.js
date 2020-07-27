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

export const Menu = styled.ul`
	display: flex;
	list-style: none;
	margin: 0;
	padding: 0;
	background-color: white;

	@media (max-width: 768px) {
		flex-direction: column;
		position: absolute;
		top: 8vh;
		right: 0;
		height: 92vh;
		width: 60vw;
	}
`;

export const MenuItem = styled.li`
	letter-spacing: 2px;
	padding-left: 0.5rem;
	padding-right: 0.5rem;

	@media (max-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		margin: 0;
		height: 20%;
	}
`;

export const BurguerMenu = styled.div`
	display: none;

	@media (max-width: 768px) {
		display: block;
	}
`;

export const MenuLine = styled.div`
	background-color: black;
	margin: 5px 1px;
	height: 3px;
	width: 25px;
`;
