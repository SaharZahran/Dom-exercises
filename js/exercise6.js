const paragraphs = document.querySelectorAll('.text');
const longPara = document.getElementById('p3_text');
const showLinks = document.querySelectorAll('.showlink');
const hideLinks = document.querySelectorAll('a');
longPara.getElementsByTagName('p')[1].style.display = 'none';

paragraphs.forEach(paragraph => {
    paragraph.querySelector('p').style.display = 'none';
})
hideLinks.forEach(link => {
    if (!link.parentElement.hasAttribute('class')) {
        link.style.display = 'none';
    }
})


showLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (link.id === 'p1_show') {
            document.getElementById('p1_text').getElementsByTagName('p')[0].style.display = 'block';
            document.getElementById('p1_show').style.display = 'none';
            link.nextElementSibling.children[1].children[0].style.display = 'block';

        } else if (link.id === 'p2_show') {
            document.getElementById('p2_text').getElementsByTagName('p')[0].style.display = 'block';
            document.getElementById('p2_show').style.display = 'none'
            link.nextElementSibling.children[1].children[0].style.display = 'block';

        } else {
            document.getElementById('p3_text').getElementsByTagName('p')[0].style.display = 'block';
            document.getElementById('p3_text').getElementsByTagName('p')[1].style.display = 'block';
            document.getElementById('p3_show').style.display = 'none'
            link.nextElementSibling.children[2].children[0].style.display = 'block';

        }

    })
})
hideLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (link.parentElement.parentElement.id === 'p1_text') {
            document.getElementById('p1_text').getElementsByTagName('p')[0].style.display = 'none';
            document.getElementById('p1_show').style.display = 'block';
            document.getElementById('p1_text').children[1].children[0].style.display = 'none';


        } else if (link.parentElement.parentElement.id === 'p2_text') {
            document.getElementById('p2_text').getElementsByTagName('p')[0].style.display = 'none';
            document.getElementById('p2_show').style.display = 'block';
            document.getElementById('p2_text').children[1].children[0].style.display = 'none';




        } else {
            document.getElementById('p3_text').getElementsByTagName('p')[0].style.display = 'none';
            document.getElementById('p3_text').getElementsByTagName('p')[1].style.display = 'none';
            document.getElementById('p3_show').style.display = 'block'
            document.getElementById('p3_text').children[2].children[0].style.display = 'none';




        }
    })
})