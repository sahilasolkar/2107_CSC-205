$("button").click(function () {
  $.getJSON("JSON_data.json", function (data) {
    //1st para takes url of the json file

    console.log(data);

    $.each(data.person, function () {
      //key value are variable names
      $("ul").append(
        "<li>Name: " +
          this["name"] +
          "</li><li>Age: " +
          this["age"] +
          "</li><li>Company: " +
          this["company"]
      ); 
    });
  });
});

