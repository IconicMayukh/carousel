const slider = document.querySelector('.slider');
const front = document.querySelector('.front');
const nav = document.querySelector('.nav');
const button = document.querySelector('.front-content button');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0]);
  e.target.matches('.prev') && slider.append(items[items.ngth -1]);
}
document.addEventListener('click',activate,false);

button.addEventListener('click', ()=>{
    front.classList.add('hide');
    slider.classList.add('show');
    nav.classList.add('show');
})