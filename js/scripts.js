(function ($) {
    "use strict"; // Start of use strict

    // Show the navbar when the page is scrolled up
    var MQL = 992;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('#mainNav').height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function () {
                var currentTop = $(window).scrollTop();
                //check if user is scrolling up
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
                        $('#mainNav').addClass('is-visible');
                    } else {
                        $('#mainNav').removeClass('is-visible is-fixed');
                    }
                } else if (currentTop > this.previousTop) {
                    //if scrolling down...
                    $('#mainNav').removeClass('is-visible');
                    if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
                }
                this.previousTop = currentTop;
            });
    }

})(jQuery); // End of use strict

//ScrollUp
const scrollUp = document.querySelector('.scrollUp');

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        scrollUp.classList.add("active");
    } else {
        scrollUp.classList.remove("active");
    }
  
});

//Load More
 $(".card").slice(0,3).show()
        $(".button-load").on("click", function(){
            $(".card:hidden").slice(0,3).slideDown()
            if ($(".card:hidden").length == 0) {
                $(".button-load").fadeOut('slow')
            }
        });

//loader
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'complete') {
         document.getElementById('interactive');
         document.getElementById('loader').style.visibility="hidden";
  }
};

//Filter
function myFunction() {
    var input, filter, ul, li, h1, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("list-horizontal");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        h1 = li[i].getElementsByTagName("h1")[0];
        txtValue = h1.textContent || h1.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
};

//animation search bar
$(function() {
  $("input").on("click", function(e) {
    $("input").addClass("active");
  });
  $(document).on("click", function(e) {
    if ($(e.target).is("input") === false) {
      $("input").removeClass("active");
    }
  });
});

/*===== MOUSEMOVE HOME IMG =====*/
document.addEventListener('mousemove', move);
function move(e){
    this.querySelectorAll('.move').forEach(layer =>{
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerHeight - e.pageY*speed)/120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

// LightSlider
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

//Link URL Share
const facebook = document.querySelector(".facebook");
const twitter = document.querySelector(".twitter");
const whatsapp = document.querySelector(".whatsapp");
const prvFacebook = document.querySelector('meta[property="og:image"');

function init() {
    const img = document.querySelector(".masthead").style.backgroundImage.slice(5,-2);
    const title = document.querySelector('title');

    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI(document.title);
    let postImg = img;

    prvFacebook.setAttribute (
        "content", `https://seuntaikertas.com/${postImg}`);

    facebook.setAttribute(
        "href",
        `https://www.facebook.com/sharer.php?u=${postUrl}$text=${postTitle}`
    );

    twitter.setAttribute(
        "href",
        `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
        );
    whatsapp.setAttribute(
        "href",
        `https://api.whatsapp.com/send?text=${postTitle} ${postUrl}`
        )
}

init();


//PopUp Share media social
const sharebutton = document.querySelector('.share-button');

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 300) {
        sharebutton.classList.add("active");
    } else {
        sharebutton.classList.remove("active");
    }

    if(window.pageYOffset > 1300) {
        sharebutton.classList.remove("active");
    }
  
});