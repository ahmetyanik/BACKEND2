//On click of the 'next' anchor
$('.accordion--form__next-btn').on('click touchstart', function() {

    var parentWrapper = $(this).parent().parent();
    var nextWrapper = $(this).parent().parent().next('.accordion--form__fieldset');
    var sectionFields = $(this).siblings().find('.required');
  
  
    //Validate the .required fields in this section
    var empty = $(this).siblings().find('.required').filter(function() {
  
      return this.value === "";
  
    });
  
    if (empty.length) {
  
      $('.accordion--form__invalid').show();
  
    } else {
  
      $('.accordion--form__invalid').hide();
  
      //If valid
      //On the next fieldset -> accordion wrapper, toggle the active class
      nextWrapper.find('.accordion--form__wrapper').addClass('accordion--form__wrapper-active');
  
      //Close the others
      parentWrapper.find('.accordion--form__wrapper').removeClass('accordion--form__wrapper-active');
  
      //Add a class to the parent legend
      nextWrapper.find('.accordion--form__legend').addClass('accordion--form__legend-active');
  
      //Remove the active class from the other legends
      parentWrapper.find('.accordion--form__legend').removeClass('accordion--form__legend-active');
  
    }
  
    return false;
  });
  
  //On click of the 'prev' anchor
  $('.accordion--form__prev-btn').on('click touchstart', function() {
  
    parentWrapper = $(this).parent().parent();
    prevWrapper = $(this).parent().parent().prev('.accordion--form__fieldset');
  
    //On the prev fieldset -> accordion wrapper, toggle the active class
    prevWrapper.find('.accordion--form__wrapper').addClass('accordion--form__wrapper-active');
  
    //Close the others
    parentWrapper.find('.accordion--form__wrapper').removeClass('accordion--form__wrapper-active');
  
    //Add a class to the parent legend
    prevWrapper.find('.accordion--form__legend').addClass('accordion--form__legend-active');
  
    //Remove the active class from the other legends
    parentWrapper.find('.accordion--form__legend').removeClass('accordion--form__legend-active');
  
  
    return false;
  });