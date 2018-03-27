// Writing the function for Navbar. This function needs data-target attribute and navbar-toggler and nav-link class to be set.
$('document').ready(() =>{

  let listClass= $('.navbar-toggler').attr("data-target");// fetching the attribute value for the class.
  let menuList= $(listClass).html();// fetching the html of the above class.
  let array=$(listClass).find(".nav-link");//finding the element with nav-link class.
  let test = "<div class='my'>"; // declaring the variable to store all the html for new block.
  for( a of array){
    test= test + a.outerHTML;// creating the html foe new block through concatenation.
  }
  test= test +"</div>";//completing the html for the block.
  $("nav").after(test);//Adding the html to desired location.

  $('.btn').click(function(){
  $(".my").toggleClass("show");//using toggleClass function for toggling the show class on button click.
  });//registering click event on button

});//end of document ready function.
