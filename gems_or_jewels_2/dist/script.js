!function(e){var t={};function r(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(i,s,function(t){return e[t]}.bind(null,s));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var i=()=>{$(document).ready((function(){$(".advantages__cards").slick({slidesToShow:1,infinite:!0,variableWidth:!0,arrows:!1,centerMode:!0,initialSlide:1,swipeToSlide:!0})}))};var s=()=>{const e=document.querySelector(".hamburger"),t=e.querySelectorAll(".hamburger__item"),r=document.querySelector(".menu-mobile"),i=document.querySelectorAll(".menu__link"),s=document.querySelector(".menu__wrapper");i.forEach(e=>{e.addEventListener("click",e=>{r.classList.remove("menu-mobile_active"),s.classList.remove("menu__wrapper_active"),t[1].classList.remove("hide"),t[0].classList.remove("hamburger__item_left"),t[2].classList.remove("hamburger__item_right")})}),e.addEventListener("click",e=>{r.classList.contains("menu-mobile_active")?(r.classList.remove("menu-mobile_active"),s.classList.remove("menu__wrapper_active"),t[1].classList.remove("hide"),t[0].classList.remove("hamburger__item_left"),t[2].classList.remove("hamburger__item_right")):(r.classList.add("menu-mobile_active"),s.classList.add("menu__wrapper_active"),t[1].classList.add("hide"),t[0].classList.add("hamburger__item_left"),t[2].classList.add("hamburger__item_right"))}),s.addEventListener("click",e=>{e.target.classList.contains("menu__wrapper_active")&&(r.classList.remove("menu-mobile_active"),s.classList.remove("menu__wrapper_active"),t[1].classList.remove("hide"),t[0].classList.remove("hamburger__item_left"),t[2].classList.remove("hamburger__item_right"))})};(()=>{$(document).ready((function(){$(".gallery__slider").slick({slidesToShow:3,infinite:!0,slidesToScroll:1,autoplay:!0,speed:500,variableWidth:!0,arrows:!1,swipeToSlide:!0})}))})(),i(),s()}]);