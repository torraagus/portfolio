import styled from "styled-components";

export const Nav = styled.nav`
	position: fixed;
	width: 100vw;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: white;
	min-height: 8vh;
	-webkit-box-shadow: 10px 10px 5px 0px #651a1b31;
	-moz-box-shadow: 10px 10px 5px 0px #651a1b2f;
	box-shadow: 5px 5px 5px 0px #651a1b27;
	z-index: 3;

	@media (max-height: 768px) {
		min-height: 10vh;
	}

	@media (max-height: 512px) {
		min-height: 12vh;
	}

	@media (max-width: 768px) {
		width: 96vw;
		padding: 0 1rem 0 1rem;
		justify-content: space-between;
	}

	@media (max-width: 512px) {
		width: 94vw;
		padding: 0 1rem 0 1rem;
		justify-content: space-between;
	}

	@media (max-width: 384px) {
		width: 92vw;
		padding: 0 1rem 0 1rem;
		justify-content: space-between;
	}
`;

export const BlackScreen = styled.div`
	position: absolute;
	display: none;
	height: 600vh;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 2;

	@media (max-width: 768px) {
		display: ${(props) => (props.show ? "block" : "none")};
	}
`;

export const Logo = styled.div`
	color: black;
	font-weight: bold;
	letter-spacing: 3px;
	font-size: 18px;

	animation: myAnimation infinite 5s;

	@keyframes myAnimation {
		0% {
			color: #21e6c1;
		}
		25% {
			color: #278ea5;
		}
		50% {
			color: #1f4287;
		}
		75% {
			color: #278ea5;
		}
		100% {
			color: #21e6c1;
		}
	}
`;

export const NavButtons = styled.div`
	display: flex;

	animation: move infinite 10s ease;

	@keyframes move {
		1% {
			transform: translateX(5px);
		}
		2% {
			transform: translateX(-5px);
		}
		3% {
			transform: translateX(3px);
		}
		4% {
			transform: translateX(-3px);
		}
		5% {
			transform: translateX(1px);
		}
		6% {
			transform: translateX(0px);
		}
		100% {
			transform: translate(0px);
		}
	}
`;

export const Button = styled.a`
	display: none;
	padding: 0.5rem 1rem 0.5rem 1rem;
	background-color: #21e6c1;
	color: white;
	font-weight: bold;
	border-radius: 15px 0 0 15px;
	font-size: 14px;
	text-decoration: none;

	:hover {
		cursor: pointer;
		opacity: 90%;
	}

	@media (max-width: 768px) {
		display: block;
	}
`;

export const ResumeBtn = styled(Button)`
	background-color: #278ea5;
	color: white;
	border-radius: 0 15px 15px 0;
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

	:nth-child(1) {
		font-weight: 700;
	}

	@media (max-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		margin: 0;

		:hover {
			font-weight: bold;
			cursor: pointer;
			background-color: #21e6c1;
		}

		:hover > a {
			color: white;
		}
	}
`;

export const Item = styled.a`
	color: #1f4287;
	text-decoration: none;
	padding: 1rem 0 1rem 0;
	width: 100%;

	:hover {
		cursor: pointer;
		color: #21e6c1;
	}

	@media (max-width: 768px) {
		border-bottom: 1px solid #eee;
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
		background-color: #21e6c1;
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
