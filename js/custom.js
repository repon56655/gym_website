
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
      var heightFeet = $('#height-feet').val();
      var heightInches = $('#height-inches').val();
      var weight = $('#weight').val();
      
      if (heightFeet > 0 && heightInches >= 0 && weight > 0) {
        var height = (heightFeet * 12) + parseInt(heightInches);
        var bmi = (weight / (height * height)) * 703;
        $('#bmi-value').text(bmi.toFixed(2));
        $('.bmi-result').show();
      }
    });
  });

  $("#myModal").on("hidden.bs.modal", function () { 
        console.log("ok");
    });
    


