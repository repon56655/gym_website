
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
        $('.bmi-result').show();
      }
    });
  });

  $("#myModal").on("hidden.bs.modal", function () { 
        console.log("ok");
    });
    


