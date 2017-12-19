$(document).ready(function() {
  console.log("load");

});
$(document).ready(function() {
  /*desktop estilos css */
  if ($(window).width() > 992) {
    var heights = $(".list-subcat").map(function() {
        return $(this).height();
      }).get(),
      maxHeight = Math.max.apply(null, heights);
    $(".list-subcat").height(maxHeight);
    $('.cont-interna ').css('background-image', 'url(assets/img/logo-fondo-desktop.png)');
  }
});

$('.collapse').on('show.bs.collapse', function() {
		console.log("abierto");

		$(this).siblings('div').find('i').removeClass('glyphicon glyphicon-plus');
		$(this).siblings('div').find('i').addClass('glyphicon glyphicon-minus');
	})
	$('.collapse').on('hide.bs.collapse', function() {
		$(this).siblings('div').find('i').removeClass('glyphicon glyphicon-minus');
		$(this).siblings('div').find('i').addClass('glyphicon glyphicon-plus');
	})
