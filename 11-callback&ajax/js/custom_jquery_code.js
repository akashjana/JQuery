// You'll need the below URLs while following along with the lecture for practice.
// var root = "https://jsonplaceholder.typicode.com/posts/1";
// var root = "https://jsonplaceholder.typicode.com/comments";
// var url = "https://raw.githubusercontent.com/imtiazahmad007/resources/master/some_random_text.txt";
// var url = "https://raw.githubusercontent.com/imtiazahmad007/resources/master/sample_table.html"

$(function () {
  $("button").on("click", function () {
    // var url =
    //   "https://raw.githubusercontent.com/imtiazahmad007/resources/master/some_random_text.txt";
    // $("div.main").load(url);
    // var url =
    //   "https://raw.githubusercontent.com/imtiazahmad007/resources/master/sample_table.html table fieldset:last";
    var url =
      "https://raw.githubusercontent.com/imtiazahmad007/resources/master/sample_table.html";
    // $("div.main").load(url);
    // $("p").hide(4000, function () {
    //   alert("Image has been hidden");
    // });
    // $.ajax(url, {
    //   dataType: "html",
    //   method: "GET",
    //   success: function (response) {
    //     $("div.main").html(response);
    //   },
    //   error: function (request, errorType, errorMsg) {
    //     alert("There was an issue with ajax call: ", errorMsg);
    //   },
    // });
    // var root = "https://jsonplaceholder.typicode.com/posts/1";
    var root = "https://jsonplaceholder.typicode.com/comments";

    $.ajax(root, {
      dataType: "json",
      method: "GET",
      success: function (response) {
        console.log(response);
        var userId = response[0].postId;
        var title = response[0].email;
        var $info = $("<p></p>");
        $info.text("Post id is: " + userId + " Emain is: " + title);
        $("div.main").append($info);
      },
      error: function (request, errorType, errorMsg) {
        alert("There was an issue with ajax call: ", errorMsg);
      },
      data: { postId: 1 },
      beforeSend: function () {},
      complete: function () {},
    });
  });
});
