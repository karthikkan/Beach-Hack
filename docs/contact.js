ar __sf = $(".sponsorsFooter ul span");
var __sf_cont = $(".sponsorsFooter ul");
var __title = $("#sponsorTitle");

__sf.mouseenter(function() {
  $(this).addClass('hover');
  __sf_cont.addClass('enter');
  var __setTitle = $(this).attr("data-group-title");
  __title.html(__setTitle);
}).mouseleave(function() {
  $(this).removeClass('hover');
  __sf_cont.removeClass('enter');
  var __setTitle = $(__title).attr("data-default-title");
  __title.html(__setTitle);
});

$(document).ready(function() {
  $('#regisOpen').click(function() {
      $('#FunnuBone').toggle();

          })


          


          $('#GameRegis').click(function() {
            $('#Game1').toggle();
      
                })


                $('#upCominTog').click(function() {
                  $('#UpCominList').toggle();
            
                      })
          

          $('#Schedule').click(function() {
            $('#tmLine').toggle();
      
                })
          
          
          
          })
          


document.getElementById('TheQueryForm').addEventListener('submit', formSubmit);

//Submit form
function formSubmit(e) {
    console.log("got here\n\n");
  e.preventDefault();
  // Get Values from the DOM
  console.log("got here\n\n");
  let message = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
//   let password = document.querySelector('#password').value;
//   let bio = document.querySelector('#bio').value;
//   let job = document.querySelector('#job').value;
//   let interest = document.querySelector('#interest').value;}







  console.log("36 got here\n\n 3");
let formMessage = firebase.database().ref('register');
let newFormMessage = formMessage.push();
newFormMessage.set({
  message: message,
  email: email,
});

console.log("works")




}
