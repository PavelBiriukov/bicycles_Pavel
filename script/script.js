//Из-за не грамотного тайм-менеджмента и наверное лени не хвтило времени так что не успел довести до ума,
// но обезательно доведу, а пока вот что есть. Не успел точки под слайдером и мелкие баги. 
// Все слайдеры работают но нужно обнавлять страницу.

const bicyclesNav = document.querySelector(".bicycles__nav");
const burger = document.querySelector(".header__burger");
const bicyclesGroupBicycles = document.querySelector(".bicycles__group-bicycles");
const trackLiner = document.querySelector(".track__liner");
const windowInnerWidth = document.documentElement.clientWidth;
const footerSwitch = document.querySelectorAll(".switch__checkbox");
const popupSwitch = document.querySelector(".popup__checkbox");
const footerIconSun = document.querySelectorAll(".footer__icon_sun");
const footerIconMoon = document.querySelectorAll(".footer__icon_moon");
const page = document.querySelector(".page");
const trackButtonleft = document.querySelector("#left");
const trackButtonRight = document.querySelector("#right");
const footerEmail = document.querySelector(".footer__email");
const footerOk = document.querySelector(".footer__ok");
const trackRide = document.querySelector(".track__ride");
const trackRideGo = document.querySelector(".track__ride_go");
const trackTitle = document.querySelector(".track__title");
const trackText = document.querySelector(".track__text");
const shose = document.querySelector("#track_one");
const graviy = document.querySelector("#track_two");
const tt = document.querySelector("#track_three");
const bicyclesCard = document.querySelectorAll(".bicycles__card");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");
const trackPopup = document.querySelector("#trackPopup");
const bicyclesPopup = document.querySelector("#bicyclesPopup");
const trainingPopup = document.querySelector("#trainingPopup");
const footerThemePopup = document.querySelector(".footer__theme_popup");
const bicyclesTrack = document.querySelectorAll(".bicycles__track");
const a = "Круто!";

function form(){
    footerOk.classList.add("footer__ok_on");
    footerEmail.value = " ";
}
footerEmail.addEventListener("click", form);

function formClos(){
    footerOk.classList.remove("footer__ok_on");
    footerEmail.value = a;
}
footerOk.addEventListener("click", formClos);

function switchButton() {
    footerIconSun[1].classList.toggle("footer__icon_sun-dark");
    footerIconMoon[1].classList.toggle("footer__icon_moon-dark");
    footerIconSun[0].classList.toggle("footer__icon_sun-dark");
    footerIconMoon[0].classList.toggle("footer__icon_moon-dark");
    trackButtonleft.classList.toggle("track__button_dark");
    trackButtonRight.classList.toggle("track__button_dark");
} 
//------ 

//-----
function openClose() {
    switchButton();
} 
footerSwitch[1].addEventListener("click", openClose);
footerSwitch[0].addEventListener("click", openClose);

footerSwitch[1].addEventListener('change', function(){
  transition();
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})
popupSwitch.addEventListener('change',function (){
  burgOpenClose(popup);
  transition();
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})

function transition() {
  document.documentElement.classList.add('transition');
  setTimeout(function() {
    document.documentElement.classList.remove('transition');
  }, 250)
}

//___________
//Довести до ума ниже до ******
function graviyFun(){
  tt.setAttribute("id", "");
  tt.id = 'track_two';
  graviy.setAttribute("id", "");
  graviy.id = 'track_one';
  shose.setAttribute("id", "");
  shose.id = 'track_three';
//_______________
  shose.innerHTML = "Грэвел";
  graviy.innerHTML = "TT";
  tt.innerHTML = "Шоссе";
  bicyclesCard[0].hidden = true;
  bicyclesCard[1].hidden = true;
  bicyclesCard[2].hidden = true;
  bicyclesCard[3].hidden = false;
  bicyclesCard[4].hidden = false;
  bicyclesCard[5].hidden = false;
  bicyclesCard[6].hidden = true;
  bicyclesCard[7].hidden = true;
  bicyclesCard[8].hidden = true;
}
graviy.addEventListener("click",graviyFun);
function ttFun(){
  tt.setAttribute("id", "");
  tt.id = 'track_one';
  graviy.setAttribute("id", "");
  graviy.id = 'track_three';
  shose.setAttribute("id", "");
  shose.id = 'track_two';
  //_______________
  shose.innerHTML = "TT";
  graviy.innerHTML = "Шоссе";
  tt.innerHTML = "Грэвел";
  bicyclesCard[0].hidden = true;
  bicyclesCard[1].hidden = true;
  bicyclesCard[2].hidden = true;
  bicyclesCard[3].hidden = true;
  bicyclesCard[4].hidden = true;
  bicyclesCard[5].hidden = true;
  bicyclesCard[6].hidden = false;
  bicyclesCard[7].hidden = false;
  bicyclesCard[8].hidden = false;
}
tt.addEventListener("click",ttFun);

let text = "На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно."
let title = "Шоссе"
let svip = 0;
function shoseFun(){
  if(windowInnerWidth <= 800){
    tt.setAttribute("id", "");
    tt.id = 'track_three';
    graviy.setAttribute("id", "");
    graviy.id = 'track_two';
    shose.setAttribute("id", "");
    shose.id = 'track_one';
    //_______________
    shose.innerHTML = "Шоссе";
    graviy.innerHTML = "Грэвел";
    tt.innerHTML = "TT";
    bicyclesCard[0].hidden = false;
    bicyclesCard[1].hidden = false;
    bicyclesCard[2].hidden = false;
    bicyclesCard[3].hidden = true;
    bicyclesCard[4].hidden = true;
    bicyclesCard[5].hidden = true;
    bicyclesCard[6].hidden = true;
    bicyclesCard[7].hidden = true;
    bicyclesCard[8].hidden = true; 
  }
}
shoseFun();
shose.addEventListener("click",shoseFun);
//************************** 
// Вроде не плохо но могу лучше НАВЕРНО. до *************
let svipmin = 0;
let widthSlider = trackRide.clientWidth + 40;
function slider(){
  if(windowInnerWidth <= 800){
    widthSlider = trackRide.clientWidth + 23;
    svipmin += widthSlider;
    if(svipmin > (widthSlider * 2)){
      svipmin = 0;
    }
    trackRide.style.left = -svipmin + "px";
  }
  else{
    svip += (widthSlider / 2);
    if(svip > widthSlider){
      svip = 0;
    }
    trackRide.style.left = -svip + "px";
  }
  if(svip == 0 || svipmin == 0){
    trackLiner.classList.remove("track__ikon_two");
    trackLiner.classList.remove("track__ikon_threy");
    trackLiner.classList.add("track__ikon_one");
    title = "Шоссе"
    trackTitle.textContent = trackTitle.textContent.replace('Грэвел', title);
    trackTitle.textContent = trackTitle.textContent.replace('Шоссе', title);
    trackTitle.textContent = trackTitle.textContent.replace('ТТ', title);
    //----
    text = "На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно."
    trackText.textContent = trackText.textContent.replace('На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.', text);
    trackText.textContent = trackText.textContent.replace('Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.', text);
    trackText.textContent = trackText.textContent.replace('ТТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.', text);
    //-----
    shose.classList.add("choice-track");
    graviy.classList.remove("choice-track");
    tt.classList.remove("choice-track");
  }
  if(svip == (widthSlider / 2) || svipmin == widthSlider){
    trackLiner.classList.remove("track__ikon_one");
    trackLiner.classList.remove("track__ikon_threy");
    trackLiner.classList.add("track__ikon_two");
    title = 'Грэвел'
    trackTitle.textContent = trackTitle.textContent.replace('ТТ', title);
    trackTitle.textContent = trackTitle.textContent.replace('Грэвел', title);
    trackTitle.textContent = trackTitle.textContent.replace('Шоссе', title);
    text = "Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью."
    trackText.textContent = trackText.textContent.replace('На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.', text);
    trackText.textContent = trackText.textContent.replace('Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.', text);
    trackText.textContent = trackText.textContent.replace('ТТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.', text);
    //-----
    shose.classList.remove("choice-track");
    tt.classList.remove("choice-track");
    graviy.classList.add("choice-track");
  }
  if(svip == widthSlider || svipmin == (widthSlider * 2)){
    trackLiner.classList.remove("track__ikon_one");
    trackLiner.classList.remove("track__ikon_two");
    trackLiner.classList.add("track__ikon_threy");
    title = 'ТТ'
    trackTitle.textContent = trackTitle.textContent.replace('Шоссе', title);
    trackTitle.textContent = trackTitle.textContent.replace('ТТ', title);
    trackTitle.textContent = trackTitle.textContent.replace('Грэвел', title);
    text = "ТТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный."
    trackText.textContent = trackText.textContent.replace('На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.', text);
    trackText.textContent = trackText.textContent.replace('Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.', text);
    trackText.textContent = trackText.textContent.replace('ТТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.', text);
    //-----
    graviy.classList.remove("choice-track");
    shose.classList.remove("choice-track");
    tt.classList.add("choice-track");
  }
}
trackButtonRight.addEventListener("click",slider);

function sliderBack(){
  if(windowInnerWidth <= 800){
    widthSlider = trackRide.clientWidth + 23;
    svipmin -= widthSlider;
    if(svipmin < 0){
      svipmin = (widthSlider * 2);
    }
    trackRide.style.left = -svipmin + "px";
  }
  else{
    svip -= (widthSlider / 2);
    if(svip < 0){
      svip = widthSlider;
    }
    trackRide.style.left = -svip + "px";
  }
  if(svip == 0 || svipmin == 0){
    trackLiner.classList.remove("track__ikon_two");
    trackLiner.classList.remove("track__ikon_threy");
    trackLiner.classList.add("track__ikon_one");
    title = "Шоссе"
    trackTitle.textContent = trackTitle.textContent.replace('Грэвел', title);
    trackTitle.textContent = trackTitle.textContent.replace('Шоссе', title);
    trackTitle.textContent = trackTitle.textContent.replace('ТТ', title);
    text = "На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно."
    trackText.textContent = trackText.textContent.replace('На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.', text);
    trackText.textContent = trackText.textContent.replace('Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.', text);
    trackText.textContent = trackText.textContent.replace('ТТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.', text);
    //-----
    shose.classList.add("choice-track");
    graviy.classList.remove("choice-track");
    tt.classList.remove("choice-track");
  }
  if(svip == (widthSlider / 2) || svipmin == widthSlider){
    trackLiner.classList.remove("track__ikon_one");
    trackLiner.classList.remove("track__ikon_threy");
    trackLiner.classList.add("track__ikon_two");
    title = 'Грэвел'
    trackTitle.textContent = trackTitle.textContent.replace('Грэвел', title);
    trackTitle.textContent = trackTitle.textContent.replace('Шоссе', title);
    trackTitle.textContent = trackTitle.textContent.replace('ТТ', title);
    text = "Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью."
    trackText.textContent = trackText.textContent.replace('На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.', text);
    trackText.textContent = trackText.textContent.replace('Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.', text);
    trackText.textContent = trackText.textContent.replace('ТТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.', text);
    //-----
    shose.classList.remove("choice-track");
    tt.classList.remove("choice-track");
    graviy.classList.add("choice-track");
  }
  if(svip == widthSlider || svipmin == (widthSlider * 2)){
    trackLiner.classList.remove("track__ikon_one");
    trackLiner.classList.remove("track__ikon_two");
    trackLiner.classList.add("track__ikon_threy");
    title = 'ТТ'
    trackTitle.textContent = trackTitle.textContent.replace('Грэвел', title);
    trackTitle.textContent = trackTitle.textContent.replace('Шоссе', title);
    trackTitle.textContent = trackTitle.textContent.replace('ТТ', title);
    text = "ТТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный."
    trackText.textContent = trackText.textContent.replace('На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.', text);
    trackText.textContent = trackText.textContent.replace('Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.', text);
    trackText.textContent = trackText.textContent.replace('ТТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.', text);
    //----
    graviy.classList.remove("choice-track");
    shose.classList.remove("choice-track");
    tt.classList.add("choice-track");
  }
}
trackButtonleft.addEventListener("click",sliderBack);
//__________________
let bicy = 0;
function sliderBicy(){
  if(windowInnerWidth >= 800){
    bicy += 101;
    if(bicy > 202){
      bicy = 0;
    }
    bicyclesGroupBicycles.style.left = -bicy + "%";
  }
  
}
trackButtonRight.addEventListener("click",sliderBicy);
function sliderBicyLeft(){
  bicy -= 101;
  if(bicy < 0){
    bicy = 202;
  }
  bicyclesGroupBicycles.style.left = -bicy + "%";
}
trackButtonleft.addEventListener("click",sliderBicyLeft);

//**********************************************************
// По мелочи 
function burgOpenClose(button){
  button.classList.toggle("popup__opened");
  footerThemePopup.style.display = "flex";
}

function burgOpen(){
  burgOpenClose(popup);
}
burger.addEventListener("click",burgOpen);

function burgClose(){
  burgOpenClose(popup);
}
popupClose.addEventListener("click",burgClose);
trackPopup.addEventListener("click",burgClose);
bicyclesPopup.addEventListener("click",burgClose);
trainingPopup.addEventListener("click",burgClose);


function bykeTrack(){
  bicyclesNav.classList.toggle("bicycles__nav_click")
}
bicyclesNav.addEventListener("click", bykeTrack);

