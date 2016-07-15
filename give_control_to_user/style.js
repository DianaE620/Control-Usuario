

$("#style_editor").on("submit", function(event){
  event.preventDefault();
  //alert();
  var selector = $("#selector").val()
  var propiedad = $("#property").val()
  var valor = $("#value").val()

  $(selector).css( propiedad, valor );

  $("#selector").val("");
  $("#property").val("");
  $("#value").val("");

});


