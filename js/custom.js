 
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


/* Add a class to accordion 
function accordionContent() {
  var menuItems = document.getElementsByClassName(".accordion");
  menuItems.classList.toggle("is-active");
}*/