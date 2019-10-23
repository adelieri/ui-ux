let isBurgerClicked = false;

function burgerClick() {
    if (isBurgerClicked) {
        burger.classlist .remove("is-active");
    } else {
    burger.classlist .add("is-active");
    }

    isBurgerClicked= !isBurgerClicked
}