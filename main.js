console.log("ciao");

//seleziono il tag attraverso la classe e lo salvo nella varibile
var hamburger = $('.fa-bars');
//var stateHamburgerMenu = "hidden";
//apriamo l'hamburger
hamburger.click(
  function () {
  //  $(".hamburger-menu").fadeIn();
    //stateHamburgerMenu = "visible";
    $(".hamburger-menu").addClass('fadeIn');
  }
)
//chiudiamo il menu
$('.fa-times').click(
  function () {
    //$(".hamburger-menu").fadeOut();
    //stateHamburgerMenu = "hidden";
    $(".hamburger-menu").removeClass('fadeIn');
  }
)
