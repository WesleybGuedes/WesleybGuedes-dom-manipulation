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
