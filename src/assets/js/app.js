let mainSection = document.querySelector('.section-main');
let headerSticky = document.querySelector('.header-sticky');
let headerStatic = document.querySelector('.section-header');
let openModalBtn = document.querySelectorAll('.open-modal-js');
let modalWindow = document.querySelector('.modal-outer');
let closeModal = document.querySelector('.close');

openModalBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        modalWindow.classList.add('__visible');
    })
})

closeModal.addEventListener('click', (e) => {
    modalWindow.classList.remove('__visible');
})





document.onscroll = function (e) {
    console.log(window.scrollY); // Value of scroll Y in px
};

document.onscroll = function() {scrollHeaderFunction()};

function scrollHeaderFunction() {
    if (window.scrollY < 130) {
        headerSticky.classList.add('hidden-header');
    } else {
        headerSticky.classList.remove('hidden-header');

    }
}





let acc = document.getElementsByClassName("accordion");



for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        [].forEach.call(acc, function(el) {
            el.classList.remove("active");
            let panel = el.nextElementSibling;
            panel.style.maxHeight = null;
        });

        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}






// var x, i, j, l, ll, selElmnt, a, b, c;
// /* Look for any elements with the class "custom-select": */
// x = document.getElementsByClassName("custom-select");
// l = x.length;
// for (i = 0; i < l; i++) {
//     selElmnt = x[i].getElementsByTagName("select")[0];
//     ll = selElmnt.length;
//     /* For each element, create a new DIV that will act as the selected item: */
//     a = document.createElement("DIV");
//     a.setAttribute("class", "select-selected");
//     a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
//     x[i].appendChild(a);
//     /* For each element, create a new DIV that will contain the option list: */
//     b = document.createElement("DIV");
//     b.setAttribute("class", "select-items select-hide");
//     for (j = 1; j < ll; j++) {
//         /* For each option in the original select element,
//         create a new DIV that will act as an option item: */
//         c = document.createElement("DIV");
//         c.innerHTML = selElmnt.options[j].innerHTML;
//         c.addEventListener("click", function(e) {
//             /* When an item is clicked, update the original select box,
//             and the selected item: */
//             var y, i, k, s, h, sl, yl;
//             s = this.parentNode.parentNode.getElementsByTagName("select")[0];
//             sl = s.length;
//             h = this.parentNode.previousSibling;
//             for (i = 0; i < sl; i++) {
//                 if (s.options[i].innerHTML == this.innerHTML) {
//                     s.selectedIndex = i;
//                     h.innerHTML = this.innerHTML;
//                     y = this.parentNode.getElementsByClassName("same-as-selected");
//                     yl = y.length;
//                     for (k = 0; k < yl; k++) {
//                         y[k].removeAttribute("class");
//                     }
//                     this.setAttribute("class", "same-as-selected");
//                     break;
//                 }
//             }
//             h.click();
//         });
//         b.appendChild(c);
//     }
//     x[i].appendChild(b);
//     a.addEventListener("click", function(e) {
//         /* When the select box is clicked, close any other select boxes,
//         and open/close the current select box: */
//         e.stopPropagation();
//         closeAllSelect(this);
//         this.nextSibling.classList.toggle("select-hide");
//         this.classList.toggle("select-arrow-active");
//     });
// }

// function closeAllSelect(elmnt) {
//     /* A function that will close all select boxes in the document,
//     except the current select box: */
//     var x, y, i, xl, yl, arrNo = [];
//     x = document.getElementsByClassName("select-items");
//     y = document.getElementsByClassName("select-selected");
//     xl = x.length;
//     yl = y.length;
//     for (i = 0; i < yl; i++) {
//         if (elmnt == y[i]) {
//             arrNo.push(i)
//         } else {
//             y[i].classList.remove("select-arrow-active");
//         }
//     }
//     for (i = 0; i < xl; i++) {
//         if (arrNo.indexOf(i)) {
//             x[i].classList.add("select-hide");
//         }
//     }
// }

// /* If the user clicks anywhere outside the select box,
// then close all select boxes: */
// document.addEventListener("click", closeAllSelect);





var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);





let contentHeight = document.querySelector('.section-main-text.__injuries-first-section');

let lineHeight = document.querySelector('.section-main-text.__injuries-first-section');

let readMoreBtn = document.getElementsByClassName('read-more');



let scrollToTop = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";
    }
}


// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }

function animateToTop() {
  
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}




scrollToTop.addEventListener('click', animateToTop);

