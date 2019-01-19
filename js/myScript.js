//set up gloabal variables for 'click' function
var facerow=false;
var straprow = false;
//Make sure the DOM is loaded and ready
$(document).ready(function() {
   console.log( "ready!" );
//Check loacal storage is available
   if (localStorage && localStorage.getItem(face))
{
   //set up variable for watch face img
var face = localStorage.getItem(face);

}

$('.faceRow .column img').click(function (e) {
   facerow=true;
   $(this).toggleClass('selected');
   console.log('Face clicked');
   var myFace =$(this).attr('src');
   
   //set up local storage
   localStorage.setItem('face', myFace);
   console.log(myFace,$(this),straprow,facerow, localStorage);
  //show saved images in loacl storage in the second Overlay
   $('#overlayface2').attr('src', myFace);
   $('.overlay2').show();
   //use logic to test if both face and strap are selected
   if(facerow && straprow){
  
   console.log('condition yes');
    
   //change overlay src
   $('#overlayface').attr('src', myFace);
   //get selected strap src

   
    $('.overlay').show();
  
   }
});

$('.stapRow .column img').click(function (e)  {
   straprow = true;
   console.log('Strap function');
   $(this).toggleClass('selected');
   console.log('Strap clicked');
   var myStrap =$(this).attr('src');
    
   localStorage.setItem('stap', myStrap);
   console.log(myStrap,$(this),straprow,facerow, localStorage);
   
  //show saved images in loacl storage in the second Overlay
  $('#overlaystrap2').attr('src', myStrap);
    $('.overlay2').show()
   
    //set up local storage for the strap img
    localStorage.setItem('strap', myStrap);
   
    //use logic to test if both face and strap are selected
    if(facerow && straprow){
    console.log('condition yes');
       //get selected strap src
       $('#overlaystrap').attr('src', myStrap);
        $('.overlay').show();
       }
});



 /* Close when someone clicks on the close button inside the overlay */
 $('#closeButton').on('click', function(e){
   $('.overlay, overlay2').fadeOut(400);
   $('.overlay2').fadeOut(400);
  
   straprow =false; // set vaiebles to false to unselect and close overlay
   facerow =false;
   $('.column img').removeClass('selected');
   console.log('close');
 });
});

