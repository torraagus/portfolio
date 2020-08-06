import { useState } from "react";

function useModal() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const openModal = () => {
		setIsModalOpen(true);
	};

	return { isModalOpen, closeModal, openModal };
}

export default useModal;
