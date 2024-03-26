// Exercise: 1
const changeParagraph = () => {
  const paragraph = document.getElementById('paragraph');
  paragraph.innerHTML = 'Working like a boss!';
};

changeParagraph();

// Exercise: 2
const changeColor = () => {
  const colorContent = document.getElementsByClassName('main-content');
  colorContent[0].style.backgroundColor = 'rgb(76,164,109)';
};

changeColor();

// Exercise: 3
const changeSecondColor = () => {
  const colorContent = document.getElementsByClassName('center-content');
  colorContent[0].style.backgroundColor = 'white';
};

changeSecondColor();

// Exercise: 4

const changeTitle = () => {
  const title = document.getElementsByTagName('h1');
  title[0].innerHTML = 'Desafio - JavaScript';
};

changeTitle();

// Exercise: 5
const uperCase = () => {
  const paragraph = document.getElementsByTagName('p');
  paragraph[0].innerHTML = paragraph[0].innerHTML.toUpperCase();
};

uperCase();

// Exercise: 6
const showAllParagraph = () => {
  const allParagraphs = document.getElementsByTagName('p');
  let paragraph = '';
  for (let i = 0; i < allParagraphs.length - 1; i += 1) {
    paragraph += `${allParagraphs[i].innerHTML} `;
  }
  allParagraphs[3].innerHTML = paragraph;
};

showAllParagraph();
