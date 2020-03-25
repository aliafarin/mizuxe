$(function() {

  let navbar = $(".navbar");
  let navIcon = $(".bars");
  let nav = $(".nav");
  $(navIcon).click(function() {
    $(nav).toggleClass("nav-down");
  });
})

