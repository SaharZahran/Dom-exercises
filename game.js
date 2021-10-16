/* TODO implement game logic here */
const body = document.querySelector("body");
const map = document.getElementById("map");
let counter = 0;
const map_matrix = [
    [0, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 0, 0],
    [1, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1, 0],
];

const rightPath = [];

function determinePath() {
    for (let i = 0; i < map_matrix.length; i++) {
        for (let j = 0; j < map_matrix[i].length; j++) {
            if (map_matrix[i][j] === 0 && map_matrix[i][j + 1] === 0 && i !== 4) {
                rightPath.push('*');
            } else if (map_matrix[i][j] === 0 && map_matrix[i][j + 1] === 1 && map_matrix[i][j - 1] !== 1 && i !== 4) {
                rightPath.push('*');
            } else if (i >= 2 && j === 5 && map_matrix[i][j] === 0) {
                rightPath.push('*');
            } else {
                rightPath.push(" ")
            }
        }

    }

    return rightPath;
}
determinePath();

function printMap() {

    for (let i = 0; i < map_matrix.length; i++) {
        for (let j = 0; j < map_matrix[i].length; j++) {
            const div = document.createElement("div");
            div.classList.add("block");
            div.classList.add(map_matrix[i][j]);
            if (map_matrix[i][j] === 1) {
                div.classList.add("wall");
            }
            map.appendChild(div);
        }
    }
}

printMap();
const allBlocks = document.querySelectorAll(".block");
const character = document.createElement("img");
character.src = "hero.jpg";
const place = map.querySelectorAll(".block")[0];
place.appendChild(character);

const start_button = document.querySelector('button');
start_button.addEventListener('click', moveOneBlock);



function moveOneBlock() {
    body.addEventListener('keyup', move)
}

function move(e) {
    if (e.keyCode === 39 || e.keyCode === 40) {
        for (let i = counter; i < allBlocks.length; i++) {
            if (rightPath[i] === '*') {
                allBlocks[i].appendChild(character);
                counter++;
                break;
            }
            if (i === allBlocks.length - 1) {
                alert('Woooooooooooow!!! You won the game');
            }
        }
    }
    if (counter === 30) {
        alert('jgkdfjg;kdfjagk')
    }
}