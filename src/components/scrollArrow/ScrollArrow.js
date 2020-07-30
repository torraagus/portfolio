import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
// import styles from "./scrollArrow.module.scss";
import useScroller from "../../hooks/UseScroller";
import styled from "styled-components";

const Arrow = styled.div`
	position: fixed;
	right: 2rem;
	bottom: 2rem;
	z-index: 100;
	cursor: pointer;
	animation: fadeIn 1s;
	transition: opacity 1s;
	opacity: 0.5;
	border-radius: 45px;
	background-color: #21e6c1;
	color: #278ea5;
	-webkit-box-shadow: 10px 10px 5px 0px #651a1b31;
	-moz-box-shadow: 10px 10px 5px 0px #651a1b2f;
	box-shadow: 5px 5px 5px 0px #651a1b27;

	:hover {
		opacity: 1;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 0.5;
		}
	}

	@media screen and (max-width: 768px) {
		opacity: 1;
		animation: none;
		transition: none;
	}
`;

const ScrollArrow = () => {
	const { showScroll, scrollTop } = useScroller();

	return (
		<Arrow>
			<MdKeyboardArrowUp
				onClick={scrollTop}
				size={60}
				style={{ display: showScroll ? "flex" : "none" }}
			/>
		</Arrow>
	);

	// return (
	// 	<>
	// 		<MdKeyboardArrowUp
	// 			className={styles.scrollTop}
	// 			onClick={scrollTop}
	// 			size={60}
	// 			style={{ display: showScroll ? "flex" : "none" }}
	// 		/>
	// 	</Arrow>
	// );
};

export default ScrollArrow;
