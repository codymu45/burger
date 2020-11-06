$(function() {
  $(".eat").on("click", function(event) {
    var id = $(this).data("id");

    // Send the PUT request.
    $.ajax("https://mullenburger.herokuapp.com/api/burgers/" + id, {
      type: "PUT"
    }).then(
      function() {
        console.log("Devoured Burger ", id, "!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".submitBurger").on("click", function(event) {
    console.log("hit");
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $(".typeBurger").val().trim(),
    };

    // Send the POST request.
    $.ajax("https://mullenburger.herokuapp.com/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Created new burger!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
