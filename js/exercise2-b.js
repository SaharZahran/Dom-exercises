const box = document.getElementById('mydiv');
let counter = randomNum(3, 0);

const arr = ['red', 'green', 'blue'];
box.style.background = arr[counter];

box.addEventListener('click', () => {
    counter++;
    changeColor();
});

function randomNum(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}

function changeColor() {
    if (counter === 1)
        box.style.background = 'red';
    else if (counter === 2)
        box.style.background = 'green';
    else if (counter === 3)
        box.style.background = 'blue';
    else
        counter = 0;
}