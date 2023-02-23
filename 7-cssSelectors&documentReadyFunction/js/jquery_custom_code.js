$(document).ready(function () {
  $("#steps > li").css("color", "blue");
  $("#steps li:first").css("color", "orange");
  $("#steps li:first, #nested_steps li:first").css("color", "orange");
  $("#steps li:nth-child(3)").css({ border: "1px solid red" });
  $("p[class]").css({ border: "1px solid green" });
  $('ul[id="steps"]').hide();
});
