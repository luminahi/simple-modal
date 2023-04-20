window.onload = () => {
    const modal = document.getElementById("my-modal");
    const btnOpenModal = document.getElementById("btn-open-modal");
    const btnCloseModal = document.getElementById("btn-close-modal");

    if (btnOpenModal && btnCloseModal && modal) {
        function toggleModal(condition) {
            modal.style.visibility = condition ? "visible" : "hidden";
            modal.style.opacity = condition ? "1" : "0";
        }

        modal.style.visibility = "hidden";
        modal.style.opacity = "0";

        modal.onclick = (e) => {
            if (e.target.className === "modal") toggleModal(false);
        };

        btnOpenModal.onclick = () => {
            if (modal.style.visibility === "hidden") toggleModal(true);
        };

        btnCloseModal.onclick = () => {
            if (modal.style.visibility === "visible") toggleModal(false);
        };
    }
};
