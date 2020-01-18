//FIRST TIMER
  // Set the date we're counting down to
  var countDownDate1 = new Date("November 1, 2020 12:00:00").getTime();

  // Update the count down every 1 second
  var countdownfunction1 = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance1 = countDownDate1 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance1 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance1 % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo1"
    document.getElementById("demo1").innerHTML = "Due in " + days + "d " + hours + "h " +
      minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance1 < 0) {
      clearInterval(countdownfunction1);
      document.getElementById("demo1").innerHTML = "EXPIRED";
    }
  }, 1000);


//SECOND TIMER
  // Set the date we're counting down to
  var countDownDate1 = new Date("November 1, 2019 12:00:00").getTime();

  // Update the count down every 1 second
  var countdownfunction1 = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance1 = countDownDate1 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance1 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance1 % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo3"
    document.getElementById("demo2").innerHTML = "Due in " + days + "d " + hours + "h " +
      minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance1 < 0) {
      clearInterval(countdownfunction1);
      document.getElementById("demo2").innerHTML = "EXPIRED";
    }
  }, 1000);


//THIRD TIMER
  // Set the date we're counting down to
  var countDownDate1 = new Date("November 1, 2019 12:00:00").getTime();

  // Update the count down every 1 second
  var countdownfunction1 = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance1 = countDownDate1 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance1 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance1 % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo3"
    document.getElementById("demo3").innerHTML = "Due in " + days + "d " + hours + "h " +
      minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance1 < 0) {
      clearInterval(countdownfunction1);
      document.getElementById("demo3").innerHTML = "EXPIRED";
    }
  }, 1000);

//FOURTH TIMER
  // Set the date we're counting down to
  var countDownDate1 = new Date("November 1, 2019 12:00:00").getTime();

  // Update the count down every 1 second
  var countdownfunction1 = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance1 = countDownDate1 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance1 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance1 % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo4"
    document.getElementById("demo4").innerHTML = "Due in " + days + "d " + hours + "h " +
      minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance1 < 0) {
      clearInterval(countdownfunction1);
      document.getElementById("demo4").innerHTML = "EXPIRED";
    }
  }, 1000);

//FIFTH TIMER
  // Set the date we're counting down to
  var countDownDate1 = new Date("November 1, 2019 12:00:00").getTime();

  // Update the count down every 1 second
  var countdownfunction1 = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance1 = countDownDate1 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance1 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance1 % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo5"
    document.getElementById("demo5").innerHTML = "Due in " + days + "d " + hours + "h " +
      minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance1 < 0) {
      clearInterval(countdownfunction1);
      document.getElementById("demo5").innerHTML = "EXPIRED";
    }
  }, 1000);

//SIXTH TIMER
  // Set the date we're counting down to
  var countDownDate1 = new Date("November 1, 2020 12:00:00").getTime();

  // Update the count down every 1 second
  var countdownfunction1 = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance1 = countDownDate1 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance1 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance1 % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo5"
    document.getElementById("demo6").innerHTML = "Due in " + days + "d " + hours + "h " +
      minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance1 < 0) {
      clearInterval(countdownfunction1);
      document.getElementById("demo6").innerHTML = "EXPIRED";
    }
  }, 1000);

  //SEVENTH TIMER
    // Set the date we're counting down to
    var countDownDate1 = new Date("November 1, 2020 12:00:00").getTime();

    // Update the count down every 1 second
    var countdownfunction1 = setInterval(function() {

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance1 = countDownDate1 - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance1 / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance1 % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo5"
      document.getElementById("demo7").innerHTML = "Due in " + days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

      // If the count down is over, write some text
      if (distance1 < 0) {
        clearInterval(countdownfunction1);
        document.getElementById("demo7").innerHTML = "EXPIRED";
      }
    }, 1000);

    //EIGHT TIMER
      // Set the date we're counting down to
      var countDownDate1 = new Date("November 1, 2020 12:00:00").getTime();

      // Update the count down every 1 second
      var countdownfunction1 = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance1 = countDownDate1 - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance1 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance1 % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo5"
        document.getElementById("demo8").innerHTML = "Due in " + days + "d " + hours + "h " +
          minutes + "m " + seconds + "s ";

        // If the count down is over, write some text
        if (distance1 < 0) {
          clearInterval(countdownfunction1);
          document.getElementById("demo8").innerHTML = "EXPIRED";
        }
      }, 1000);

      //NINETH TIMER
        // Set the date we're counting down to
        var countDownDate1 = new Date("November 1, 2020 12:00:00").getTime();

        // Update the count down every 1 second
        var countdownfunction1 = setInterval(function() {

          // Get todays date and time
          var now = new Date().getTime();

          // Find the distance between now an the count down date
          var distance1 = countDownDate1 - now;

          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance1 / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance1 % (1000 * 60)) / 1000);

          // Output the result in an element with id="demo5"
          document.getElementById("demo9").innerHTML = "Due in " + days + "d " + hours + "h " +
            minutes + "m " + seconds + "s ";

          // If the count down is over, write some text
          if (distance1 < 0) {
            clearInterval(countdownfunction1);
            document.getElementById("demo9").innerHTML = "EXPIRED";
          }
        }, 1000);
