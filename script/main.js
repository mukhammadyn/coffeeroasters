let elBurgerBtn = document.querySelector('.site-header__burger');

let elBurgerActive = document.querySelector('.site-header__burger--active');

let elModal = document.querySelector('.header-modal');

function removeActiveBtn() {
  elBurgerBtn.classList.remove('site-header__burger--active')
}

function addActiveBtn() {
  elBurgerBtn.classList.add('site-header__burger--active');
}

elBurgerBtn.addEventListener('click', function() {
  elModal.classList.toggle('header-modal__open')
  elBurgerBtn.classList.toggle('site-header__burger--active')
})








// elBurgerBtn.forEach(function(click){
//   click.addEventListener('click', function(){
//     elModal.forEach(function (deleteActive){
//       deleteActive.classList.remove('header-modal__open');
//     });
//     click.closest('.site-header__burger').classList.add('.site-header__burger--active')
//   })
// })


// elsFaqButton.forEach(function (button) {
//   button.addEventListener('click', function () {
//     elsFaqItem.forEach(function (removeActive) {
//       removeActive.classList.remove('article-card--active');
//     });

//     button.closest('.useful-articles__item').classList.add('article-card--active');
//   });
// });
