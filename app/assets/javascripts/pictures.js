$(document).on('ready', function() {
  var turn = 0;

  $(".next-button").on('click', function() {
    turn++

    if( turn === 1 ) {
      $(".first-set").css('display', 'none')
      $(".second-set").css('display', 'block')
      console.log(turn);
    }
    else if( turn === 2 ) {
      $(".second-set").css('display', 'none')
      $(".third-set").css('display', 'block')
      console.log(turn);
    }
    else if( turn === 3 ) {
      $(".third-set").css('display', 'none')
      $(".fourth-set").css('display', 'block')
      $(".next-button").off('click')
      console.log(turn);
    };
  });


  $('.food-image').on('click', likeImage)

  function likeImage(ev) {
    console.log("Clicked")
      if ($(this).hasClass('dislike')){
        $(this).removeClass('dislike');
        $(this).addClass('like');
        $(this).css('border', '5px solid green');
      }
      else if ($(this).hasClass('like')){
        $(this).removeClass('like');
        $(this).addClass('dislike');
        $(this).css('border', 'transparent');
      }
  };


  // $('#next-button').on('click', function(){
  //
  //   var picture = $(".food-image").hasClass("like")
  //   //send the pictures that have the
  //
  //   $.ajax {
  //     url: "/votes/update",
  //     method: "post",
  //     dataType: "html",
  //     data: // Picture id
  //     success: function(){
  //       // maybe do something, maybe not
  //     }
  //
  //   }

  // })
  // Post request to vote update

});