const palette = document.getElementById('colors');
const select_color = document.getElementById('selected');


function initGrid() {
    var colors = [];
    var range = ["00", "33", "66", "99", "cc", "ff"];

    for (var r = 0; r < range.length; r++) {
        for (var g = 0; g < range.length; g++) {
            for (var b = 0; b < range.length; b++) {
                colors.push("#" + range[r] + range[g] + range[b]);
            }
        }
    }
    for (let i = 1; i <= 216; i++) {
        const div = document.createElement('div');
        div.classList.add('choice');
        palette.appendChild(div);
    }
    palette.style.display = 'grid';
    palette.style.gridTemplateColumns = 'repeat(24, 1fr)';
    palette.style.gridTemplateRows = 'repeat(9, 1fr)';
    const boxes = document.querySelectorAll('.choice');

    boxes.forEach((box, index) => {
        box.style.backgroundColor = colors[index];
    });

    boxes.forEach(box => {
        box.addEventListener('click', (e) => {
            select_color.style.background = e.target.style.backgroundColor;
            select_color.innerText = e.target.style.backgroundColor;
        })
    });

}
window.onload = function() {
    initGrid();
}