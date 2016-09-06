$("document").ready(function(){
  $('article:odd').css("color", "black");
  $('.post:last').css("font-weight", "bold");
  $('.post:first').css("font-weight", "bold");
  setTimeout(function(){
    $('article:odd').css("color", "red");
    $('article:even').css("color", "black");
  }, 3000);
  $("button").click(function(){
    var inputValue = $("input").eq(0).val();
    var textareaValue = $("textarea").eq(0).val();
      $("section") .prepend("<article class='post'>" +
                            "<h2>" +inputValue +
                            "</h2>"+
                            "<p>" +textareaValue +
                            "</p>" +
                            "</article>");
  });
})
