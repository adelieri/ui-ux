let isBurgerClicked = false;
let isModalVisible = false;

function burgerClick() {
    if (isBurgerClicked) {
        burger.classList.remove("is-active");
    } else {
        burger.classList.add("is-active");
    }

    isBurgerClicked = !isBurgerClicked;
}

function modalToggle() {
    if (isModalVisible) { // здесь проверяется условие видимости модалки
        modal.classList.remove("visible"); // если модалка было отображена, мы её скрываем
    } else {
        modal.classList.add("visible");
    }

    isModalVisible = !isModalVisible;
}

function modalInnerClick(event) {
    event.stopPropagation();
}


let aaa = prompt('aaaaaaa');
console.log(aaa);
alert('aaaaaaa'); {


    //в этой переменной номер видимого кадра
    let = currentSlide = 0;

    //direction 1 или -1*
    function doSlide(direction) {
        //предыдущий кадр - прерывание
        if (currentSlide === 0 && direction < 0) {
            return;
        }

        if (currentSlide === 2 && direction > 0) {
            return;
        }
    }
    currentSlide = currentSlide + direction;
    carousel.style.transform = `translateX(calc(-${currentSlide}00% - ${currentSlide * 3}0px))`
}