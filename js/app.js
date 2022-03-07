const skillBox = document.querySelectorAll('.skills__box');
const iconBox = document.querySelectorAll('i.icon-box');
const mouseIn = document.querySelectorAll('.skills__box--mousein');

skillBox.forEach(function (el, index) {
  el.addEventListener('mouseover', () => {
    mouseIn[index].classList.toggle('active');
    iconBox[index].classList.toggle('active');
  });
  el.addEventListener('mouseout', () => {
    mouseIn[index].classList.remove('active');
    iconBox[index].classList.remove('active');
  });
});
