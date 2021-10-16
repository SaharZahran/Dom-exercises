const text = document.getElementById('mydiv');

text.addEventListener('mouseover', () => {
    text.innerHTML = "Can I help you?";
})
text.addEventListener('mouseout', () => {
    text.innerHTML = "Hello world!";
})