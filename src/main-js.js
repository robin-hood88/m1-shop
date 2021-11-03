/*Бургер меню*/
(function() {
    let body = document.body;
    let burgerMenu = document.getElementsByClassName('b-menu')[0];
    let burgerContain = document.getElementsByClassName('b-container')[0];
    let burgerNav = document.getElementsByClassName('b-nav')[0];
    let burgerLink = document.getElementsByClassName('b-nav')[0].children;
  
    burgerMenu.addEventListener('click', function toggleClasses() {
      [body, burgerContain, burgerNav].forEach(function (el) {
        el.classList.toggle('open');
      });
    }, false);
    for (let i = 0; i < burgerLink.length; i++) {
      burgerLink[i].addEventListener('click', function toggleClasses() {
        [burgerLink[i],body, burgerContain, burgerNav].forEach(function (el) {
          el.classList.toggle('open');
        });
      }, false);
    }
  })();

  let promoFooter = document.querySelector('.promo-footer').children;
  let tabWrap = document.querySelectorAll('.btn-tub');
  let sizeElements = document.querySelectorAll('label:not([class^="card-color__name"])');
  let btnOrder = document.querySelectorAll('.btn-primary');
  let colorBtn = document.querySelectorAll('.card-color__name');
  let catalogList = document.querySelectorAll('.catalog-list');

    /*Функция добавления класса у элементов*/
  let addClassFunction = function(element, className) {
    for(let j = 0; j < element.length; j++ ) {
      element[j].classList.add(className);
    }
  }

    /*Функция очистки класса у элементов*/
  let removeClassFunction = function(element, className) {
    for(let j = 0; j < element.length; j++ ) {
       element[j].classList.remove(className);
    }
  }

/*Слушаем клик по табу*/
  for(let i = 0; i < tabWrap.length; i++) {
    tabWrap[i].addEventListener('click', function(){
      for(let j = 0; j < tabWrap.length; j++ ) {
       removeClassFunction(tabWrap, 'btn-tub_active');
      }
      tabWrap[i].classList.toggle('btn-tub_active');
      showCard(tabWrap,catalogList);
    })
    
  }

  /*Слушаем клик по размеру*/
  for(let i = 0; i < sizeElements.length; i++) {
    sizeElements[i].addEventListener('click', function(){
        removeClassFunction(sizeElements, 'size_active');
        sizeElements[i].classList.toggle('size_active');
    })
  }

    /*Слушаем клик по кнопки заказать*/
    let popup = document.querySelector('.popup');

    for(let i = 0; i < btnOrder.length; i++) {
      btnOrder[i].addEventListener('click', function(){
        popup.classList.toggle('popup_open');
      })
    }


     /*Выбираем цвет товара*/
     for(let i = 0; i < colorBtn.length; i++) {
      colorBtn[i].addEventListener('click', function(){
        colorBtn[i].classList.toggle('card-color__name_active');
      })
    }
 
   /*Функция показа карточек*/ 
let showCard = function(tab, catalog) {
  for (let i = 0; i < tab.length; i++) {
    if ( (tab[i].classList.contains('btn-tub_active')) && (i % 2 === 0)) {
      catalog[i].style.display = 'block';
      catalog[i + 1].style.display = 'none';
    }

    if ( (tab[i].classList.contains('btn-tub_active')) && (i % 2 !== 0)) {
      catalog[i].style.display = 'block';
      catalog[i - 1].style.display = 'none';
    }
  }
}

  /*Прячем неактивные товары*/
  for(let i = 0; i < tabWrap.length; i++) {
    showCard(tabWrap,catalogList);
}


/*close popup*/

let closePopup =  document.querySelector('.close-popup');

closePopup.addEventListener('click',function(){
  popup.classList.toggle('popup_open');
});