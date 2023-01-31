 
 /* Menu burger */
 document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {
      const target = el.dataset.target;
      const $target = document.getElementById(target);
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');
      });
    });
    }
});

/* Add a class to menu */
// function burgerMenu() {
//   var menuItems = document.getElementById("navbar");
//   menuItems.classList.toggle("is-responsive");
//   var elBody = document.getElementById("body");
//   elBody.classList.toggle("no-scroll");
// }


//Reveal
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 20;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

reveal();


/* Sticky anchors */
myAnchor = document.getElementById("anchors");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 180) {
    myAnchor.className = "anchors-top show"
  } else {
    myAnchor.className = "anchors-top hide"
  }
};

window.addEventListener("scroll", myScrollFunc);


gsap.registerPlugin(ScrollTrigger);
let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".skew", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-2, 2); // don't let the skew go beyond 20 degrees. 

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);
    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    }
  }
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".skew", {transformOrigin: "right center", force3D: true});



//progress
gsap.registerPlugin(ScrollTrigger);
gsap.to('progress', {
  value: 100,
  ease: 'none',
  scrollTrigger: { scrub: 0.3 }
});


/* Sticky main navbar */
// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyNavbar()};
// Get the navbar
var navbar = document.getElementById("navbar");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}