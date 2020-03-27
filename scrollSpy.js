$(function() {

  let sections = Array.from($("section"));
  let height = document.documentElement.clientHeight;

  $(window).scroll(function() {

    sections.forEach((section, index) => {
      let top = section.getBoundingClientRect().top;
      if( top < (height/2) ) {
        $(".nav li a.active").removeClass("active");
        $(".nav li a")[index].classList.add("active");
      }
    })

  });

})