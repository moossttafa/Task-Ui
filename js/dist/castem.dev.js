"use strict";

var sideNav = document.querySelector('.side-nav');
var toggler = document.querySelector('.toggler');
var closeBtn = document.querySelector('.close-btn');
toggler.addEventListener('click', function () {
  sideNav.style.left = '0';
});
closeBtn.addEventListener('click', function () {
  return sideNav.style.left = '-100%';
}); // Testimonials opent details  
// $(document).ready(function(){
//     $(".reviews").on("click" , function(){
//         $(this).find(".comment").toggleClass("active"); 
//     });
// });

var reviews = $('.reviews');
var imgWrapper = $(".img-wrapper");
var DROPDOWN = {
  localEl: null,

  get el() {
    return this.localEl;
  },

  set el(v) {
    this.localEl = v;
  }

};
$(document).on('click', '.reviews', function (e) {
  e.preventDefault();
  DROPDOWN.el = $(this).closest('.reviews');
  DROPDOWN.el.addClass('review--active');
}).mouseup(function (e) {
  if (!DROPDOWN.el) return;

  if (!DROPDOWN.el.is(e.target) && DROPDOWN.el.has(e.target).length === 0 || DROPDOWN.el.hasClass('dropdown--close-on-click')) {
    DROPDOWN.el.removeClass('review--active');
    DROPDOWN.el = null;
  }
});