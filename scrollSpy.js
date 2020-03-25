// $(function() {

//   let sections = Array.from($("section"));
//   let navbar = Array.from($(".nav").children());

//   $(document).scroll( function() {
//     sections.map((section) => {
//       let coords = section.getBoundingClientRect();
//       console.log(coords);
//       let sectionPositionStart = coords.top + window.pageYOffset;
//       let sectionPositionEnd = coords.top + window.pageYOffset + coords.height;
//       if( sectionPositionStart <= (window.pageYOffset + (document.documentElement.clientHeight / 2))) {
//         let index = sections.findIndex((sec) => section === sec);
//         let spyOn = navbar[index].firstChild;
//         $(spyOn).addClass("active");
//         if( sectionPositionEnd < (window.pageYOffset) || sectionPositionEnd  ) {
//           $(spyOn).removeClass("active");
//         }
//       } 
//     });
//   });
// });