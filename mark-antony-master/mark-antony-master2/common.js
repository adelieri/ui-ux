let isBurgerClicked = false;
let isModalVisible = false;

function burgerClick() {
    if (isBurgerClicked) {
        burger.classlist.remove("is-active");
    } else {
    burger.classlist.add("is-active");
    }

    isBurgerClicked = !isBurgerClicked
}

function modalToggle() {
    if (isModalVisible) {
        modal.classlist.remove("visible");
    } else {
    modal.classlist.add("visible");
    }

    isModalVisible = !isModalVisible
}

function modalInnerClick (event) {
    event.stopPropagation();
}