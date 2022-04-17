let sideNav = document.querySelector('.side-nav');
let  toggler = document.querySelector('.toggler');
let closeBtn = document.querySelector('.close-btn');

toggler.addEventListener('click', ()=>{
    sideNav.style.left = '0';
})


closeBtn.addEventListener('click', ()=> sideNav.style.left = '-100%');

// Testimonials opent details  
// $(document).ready(function(){
//     $(".reviews").on("click" , function(){
//         $(this).find(".comment").toggleClass("active"); 
//     });
// });
var reviews = $('.reviews');
var	imgWrapper = $(".img-wrapper");

 
const DROPDOWN = {
  localEl: null,
  get el() {
    return this.localEl
  },
  set el(v) {
    this.localEl = v
  }
}

$(document)
  .on('click', '.reviews', function (e) {
    e.preventDefault()
    DROPDOWN.el = $(this).closest('.reviews')
    DROPDOWN.el.addClass('review--active')
  })
  .mouseup(function (e) {
    if (!DROPDOWN.el) return
    if ((!DROPDOWN.el.is(e.target) && DROPDOWN.el.has(e.target).length === 0) || DROPDOWN.el.hasClass('dropdown--close-on-click')) {
      DROPDOWN.el.removeClass('review--active')
      DROPDOWN.el = null
    }
  })
 