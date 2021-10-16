const box = document.getElementById('mydiv');
let counter = 0;

box.style.background = 'blue';

box.addEventListener('click', () => {
    counter++;
    changeColor();
});

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


// const box = document.getElementById('mydiv');
// box.style.backgroundColor = 'blue';
// box.addEventListener('click', change);
// let counter = 1;

// function change() {
//     changeColor();
//     counter++;
// }

// function changeColor() {
//     if (counter === 1)
//         box.style.backgroundColor = "green";

//     else if (counter === 2)
//         box.style.backgroundColor = "red";
//     else if (counter === 3)
//         box.style.backgroundColor = "blue";

//     else
//         counter = 0;
// }