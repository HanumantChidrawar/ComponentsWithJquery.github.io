// Writing the function for Modal. This Modal needs data-target attribute to be set.
$('document').ready(() =>{

  $('.btn').click(function(){// function to display modal when clicked on button.
    let modalName= $(this).attr("data-target");
    $(modalName).css("display","flex");
  });//registering click event on button

  $('.modal').click(function(){
    let modalName= $(this).attr("id");
    let modalId= '#'+ modalName;
    $(modalId).css("display","none");//function to close the modal when clicked on it.
  });

  $('.close-button').click(function(){// closing modal on clicking close button
    $('.modal').css("display","none");
  });

});//end of document ready function.
