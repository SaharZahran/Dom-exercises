const text = document.getElementById('text');
const options = document.querySelectorAll('option');
const font_size = document.getElementById('font_size');
const font_family = document.getElementById('font_family');

const italic = document.getElementById('font_italic');
const bold = document.getElementById('font_bold');
const underline = document.getElementById('font_underline');

font_family.addEventListener('click', (e) => {
    options.forEach(option => {
        if (e.target.value === option.value) {
            text.style.fontFamily = option.value;
        }
    })
})

font_size.addEventListener('click', (e) => {
    options.forEach(option => {
        if (e.target.value === option.value) {
            text.style.fontSize = option.value;
        }
    })
})
italic.addEventListener('click', () => {
    text.style.fontStyle = "italic";
})
bold.addEventListener('click', () => {
    text.style.fontWeight = "bold";
})
underline.addEventListener('click', () => {
    text.style.textDecoration = "underline";
})