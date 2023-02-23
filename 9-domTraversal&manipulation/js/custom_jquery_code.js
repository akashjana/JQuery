$("#courses")
  .children("li")
  .children()
  .children()
  .css({ border: "1px solid red" });

$("#courses")
  .children("li")
  .children()
  .children()
  .first()
  .css({ border: "1px solid green" });

$("#courses")
  .children("li")
  .children()
  .children()
  .first()
  .closest("ul")
  .css({ border: "1px solid violet" });

$("#courses")
  .children("li")
  .children()
  .children()
  .first()
  .parents("ul")
  .css({ border: "1px solid orange" });

// $("#courses")
//   .children("li")
//   .children()
//   .children()
//   .first()
//   .parent("ul")
//   .css({ border: "1px solid orange" });
$("li ul#math_subjects").append("<li>New Course</li>");
var $newCourse = $("<li>Trignometry</li>");
var newCourse2 = "<li>Trignometr</li>";

// $("li ul#math_subjects").prepend($newCourse);
// $("li ul#math_subjects").after(newCourse2);
// $("li ul#math_subjects").before(newCourse2);
$("li ul#math_subjects").parent().append($newCourse);
$newCourse.remove();
