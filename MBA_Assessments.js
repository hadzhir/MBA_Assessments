//FIRST TIMER
  // Set the date we're counting down to
  var countDownDate1 = new Date("February 11, 2020 12:00:00").getTime();

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
  var countDownDate2 = new Date("March 13, 2020 12:00:00").getTime();

  // Update the count down every 1 second
  var countdownfunction2 = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance2 = countDownDate2 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance2 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance2 % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo2"
    document.getElementById("demo2").innerHTML = "Due in " + days + "d " + hours + "h " +
      minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance2 < 0) {
      clearInterval(countdownfunction2);
      document.getElementById("demo2").innerHTML = "EXPIRED";
    }
  }, 1000);


//THIRD TIMER
  // Set the date we're counting down to
  var countDownDate3 = new Date("March 23, 2020 9:00:00").getTime();

  // Update the count down every 1 second
  var countdownfunction3 = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance3 = countDownDate3 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance3 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance3 % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo3"
    document.getElementById("demo3").innerHTML = "Due in " + days + "d " + hours + "h " +
      minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance3 < 0) {
      clearInterval(countdownfunction3);
      document.getElementById("demo3").innerHTML = "EXPIRED";
    }
  }, 1000);

//FOURTH TIMER
  // Set the date we're counting down to
  var countDownDate4 = new Date("March 10, 2020 12:00:00").getTime();

  // Update the count down every 1 second
  var countdownfunction4 = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance4 = countDownDate4 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance4 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance4 % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo4"
    document.getElementById("demo4").innerHTML = "Due in " + days + "d " + hours + "h " +
      minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance4 < 0) {
      clearInterval(countdownfunction4);
      document.getElementById("demo4").innerHTML = "EXPIRED";
    }
  }, 1000);

//FIFTH TIMER
  // Set the date we're counting down to
  var countDownDate5 = new Date("March 10, 2020 12:00:00").getTime();

  // Update the count down every 1 second
  var countdownfunction5 = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance5 = countDownDate5 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance5 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance5 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance5 % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo5"
    document.getElementById("demo5").innerHTML = "Due in " + days + "d " + hours + "h " +
      minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance5 < 0) {
      clearInterval(countdownfunction5);
      document.getElementById("demo5").innerHTML = "EXPIRED";
    }
  }, 1000);

//SIXTH TIMER
  // Set the date we're counting down to
  var countDownDate6 = new Date("March 25, 2020 12:00:00").getTime();

  // Update the count down every 1 second
  var countdownfunction6 = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance6 = countDownDate6 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance6 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance6 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance6 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance6 % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo5"
    document.getElementById("demo6").innerHTML = "Due in " + days + "d " + hours + "h " +
      minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance6 < 0) {
      clearInterval(countdownfunction6);
      document.getElementById("demo6").innerHTML = "EXPIRED";
    }
  }, 1000);

  //SEVENTH TIMER
    // Set the date we're counting down to
    var countDownDate7 = new Date("March 25, 2020 12:00:00").getTime();

    // Update the count down every 1 second
    var countdownfunction7 = setInterval(function() {

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance7 = countDownDate7 - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance7 / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance7 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance7 % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance7 % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo5"
      document.getElementById("demo7").innerHTML = "Due in " + days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

      // If the count down is over, write some text
      if (distance7 < 0) {
        clearInterval(countdownfunction7);
        document.getElementById("demo7").innerHTML = "EXPIRED";
      }
    }, 1000);

    //EIGHT TIMER
      // Set the date we're counting down to
      var countDownDate8 = new Date("March 2, 2020 12:00:00").getTime();

      // Update the count down every 1 second
      var countdownfunction8 = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance8 = countDownDate8 - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance8 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance8 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance8 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance8 % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo5"
        document.getElementById("demo8").innerHTML = "Due in " + days + "d " + hours + "h " +
          minutes + "m " + seconds + "s ";

        // If the count down is over, write some text
        if (distance8 < 0) {
          clearInterval(countdownfunction8);
          document.getElementById("demo8").innerHTML = "EXPIRED";
        }
      }, 1000);

      //NINETH TIMER
        // Set the date we're counting down to
        var countDownDate9 = new Date("March 27, 2020 12:00:00").getTime();

        // Update the count down every 1 second
        var countdownfunction9 = setInterval(function() {

          // Get todays date and time
          var now = new Date().getTime();

          // Find the distance between now an the count down date
          var distance9 = countDownDate9 - now;

          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance9 / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance9 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance9 % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance9 % (1000 * 60)) / 1000);

          // Output the result in an element with id="demo5"
          document.getElementById("demo9").innerHTML = "Due in " + days + "d " + hours + "h " +
            minutes + "m " + seconds + "s ";

          // If the count down is over, write some text
          if (distance9 < 0) {
            clearInterval(countdownfunction9);
            document.getElementById("demo9").innerHTML = "EXPIRED";
          }
        }, 1000);
