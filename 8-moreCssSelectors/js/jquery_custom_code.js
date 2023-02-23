$(function () {
  //   $(":header").css({ border: "1px solid red" });
  //   $("ul#steps ~ div").css({ border: "1px solid green" }); //sibling div target
  //   $("ul#steps + div").css({ border: "1px solid magenta" }); //immidiate adjacent div target
  //   $("p[class!='instruct_title']").css("color", "brown");
  //   $("[class^='imp']").css("background-color", "yellow");
  //   $("[id$='steps']").css("background-color", "pink");
  //   //$("[id~='closing_statement']").css("background-color", "grey");
  //   $("[id*='osing']").css("background-color", "grey");
  //   $("div:has(p)").css({ border: "1px solid red" });
  //   $("div:has(:header)").css({ border: "1px solid red" });
  $("li:not(.important)").css({ "background-color": "green" });
  $("div:not(:has(:header))").css({ "background-color": "pink" });
});
