
$(window).on("load resize scroll", function() {
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    $(".animation_slideUp").each(function() {
      var offset = $(this).offset().top;
      var delay = $(this).data("delay") || 0;
      if (scrollTop + windowHeight > offset + delay) {
        $(this).addClass("is-visible");
      }
    });
});

$(document).ready(function() {
    $('#calculate-btn').click(function() {
      var weight = parseFloat($('#weight').val());
      var heightFeet = parseFloat($('#height-feet').val());
      var heightInches = parseFloat($('#height-inches').val());
      var _height = ((heightFeet*12)+heightInches)*0.0254;
      
      if (heightFeet > 0 && heightInches >= 0 && weight > 0) {
        _height = _height * _height;
        var bmi = weight / _height;
        $('#bmi-value').text(bmi.toFixed(2));
        $('.bmi-result').removeClass('d-none');
        
        $('.bmi-result').addClass('d-block');
        $('.bmi-result').show();

        // Check BMI value and categorize
        if (bmi < 18.5) {
          $('#bmi_result_notification').text("Underweight");
          $('.bmi-result').css('background-color', 'yellow');
        } else if (bmi >= 18.5 && bmi < 25) {
          $('#bmi_result_notification').text("Normal Weight");
          $('.bmi-result').css('background-color', 'green');
        } else if (bmi >= 25 && bmi < 30) {
          $('#bmi_result_notification').text("Overweight");
          $('.bmi-result').css('background-color', 'orange');
        } else {
          $('#bmi_result_notification').text("Obese");
          $('.bmi-result').css('background-color', 'red');
        }
      }
    });
  });

  $("#myModal").on("hidden.bs.modal", function () { 
    $("#height-feet").val("");
    $("#height-inches").val("");
    $("#weight").val("");
    $(".bmi-result").addClass("d-none");
    $('.bmi-result').removeClass('d-block');

    });

    $(window).on("load resize scroll", function() {
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      $(".animation_slideUp").each(function() {
        var offset = $(this).offset().top;
        var delay = $(this).data("delay") || 0;
        if (scrollTop + windowHeight > offset + delay) {
          $(this).addClass("is-visible");
        }
      });
      $(".animation_slideLeft").each(function() {
        var offset = $(this).offset().top;
        var delay = $(this).data("delay") || 0;
        if (scrollTop + windowHeight > offset + delay) {
          $(this).addClass("is-visible");
        }
      });
  });


  $(window).scroll(function() {
    var bannerHeight = $('#banner-section').outerHeight();
    var bannerOffset = $('#banner-section').offset().top;
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();

    if (scrollTop > bannerOffset + bannerHeight - windowHeight) {
        $('.banner-text').addClass('animated');
    } else {
        $('.banner-text').stop().animate({opacity: 0, translateY: '50px'}, 200, function() {
            $(this).removeClass('animated').removeAttr('style');
        });
    }
});






  
  
  
  


  

    
  
    


