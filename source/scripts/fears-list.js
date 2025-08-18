const buttons = document.querySelectorAll('.fears__question');

buttons.forEach((button)=>button.addEventListener('click', () =>{
  const parent = button.closest('.fears__wrap');
  const answer = parent.querySelector('.fears__answer');
  answer.classList.toggle('fears__answer--opened');
  button.classList.toggle('fears__question--close');
}));
