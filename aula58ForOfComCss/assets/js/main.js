const divParagraph = document.querySelector('.paragrafos');
const paragraph = divParagraph.querySelectorAll('p');


const stylesBody = getComputedStyle(document.body);
const backgroundColorBody = stylesBody.backgroundColor;

for ( let p of paragraph) {
    p.style.backgroundColor = '#F9DD3C';
    p.style.margin = '10px';
    p.style.padding = '10px';
    p.style.borderRadius = '6px';
    p.style.boxShadow = '0px 0px 5px 0px rgba(0,0,0,0.2)';
}

