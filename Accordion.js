// Writing the function for Accordion. This Accordion needs data-target and data-parent attribute to be set.
$('document').ready(() =>{

  $('.btn').click(function(){
    let identity= $(this).attr("data-target");//retriving the attribute data-target.
    let parent=$(identity).attr("data-parent");
    let value=($(identity).css("display"));
    $(parent).find(".dummy-text").not(identity).css("display","none");
    (value === "none")?($(identity).css("display","block")):($(identity).css("display","none"));
  });//registering click event on button

});//end of document ready function.
