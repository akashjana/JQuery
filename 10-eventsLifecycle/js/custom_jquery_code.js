$(function () {
  $("#books_div>.book").on("click", "button", function (event) {
    var price = $(this).closest(".book").data("price");
    var author = $(this).closest(".book").data("author");
    var details = $(
      "<p>price: " + price + "<br>Author: <b>" + author + "</b></p>"
    );
    $(this).parent().append(details);
    $(this).closest(".book").css({ "background-color": "pink" });
    $(this).remove();
    event.stopPropagation();
  });

  $("div.book").on("click", function () {
    alert("Click on the 'See Details' button to see the price of the book");
  });

  $("#books_completed>.book").on("click", "button", function (event) {
    var date = $(this).closest(".book").data("purchase");
    var author = $(this).closest(".book").data("author");
    var rating = $(this).closest(".book").data("myrating");
    var details = $(
      "<p>Purchased Date: " +
        date +
        "<br>Author: <b>" +
        author +
        "</b><br>Rating: " +
        rating +
        "</p>"
    );
    $(this).parent().append(details);
    $(this).closest(".book").css({ "background-color": "pink" });
    $(this).remove();
    event.stopPropagation();
  });
});
