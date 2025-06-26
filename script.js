'use strict'
// ハンバーガーメニュー
const nav = document.querySelector('.header-area');
const btn = document.querySelector('.hamburger')

btn.addEventListener('click', function() {
nav.classList.toggle('open')
});
const btnToTop = document.querySelector('.btn-to-top')
console.log(btn)

// toTopボタン
window.addEventListener('scroll', () => {
  let scrolly = window.scrollY;
  if(scrolly > 1300){
    btnToTop.classList.add('active')
  }else{
    btnToTop.classList.remove('active')
  }
  console.log(window.scrollY);
});

// fade
gsap.registerPlugin(ScrollTrigger);

const contents = gsap.utils.toArray('.fade')
console.log(contents)

contents.forEach((content) => {
  gsap.to(content, {
  
scrollTrigger: {
  trigger: content,
  start: 'top 70%',
  //  markers: true
},
  y: 0,
  opacity: 1,
  })
  });