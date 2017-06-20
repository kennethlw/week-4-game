$(document).ready(function () {

      //this will be the number to compare against
      var randNumber = 0;

      //random numbers for each gem on each instance
      var gem1 = 0;
      var gem2 = 0;
      var gem3 = 0;
      var gem4 = 0;

      var numWins = 0;
      var numLosses = 0;
      var sum = 0;

      function reset() {
      
      sum = 0;
      gem1 = 0;
      gem2 = 0;
      gem3 = 0;
      gem4 = 0;
      randNumber = 19 + Math.floor((Math.random() * (120-19)) + 1);
      gem1 = Math.floor(Math.random() * 12) + 1;
      gem2 = Math.floor(Math.random() * 12) + 1;
      gem3 = Math.floor(Math.random() * 12) + 1;
      gem4 = Math.floor(Math.random() * 12) + 1;

      
      $("#top").html("The random number is: <br><br> " + randNumber);
      $("#playerScore").html("<br>Your score is: <br><br> 0");

      };

      $("#button1").on("click", function() {
        //alert("Gem 1 is " + gem1);
        sum = sum + gem1;
        $("#playerScore").html("<br>Your score is: <br><br>" + sum);
        gameOver();
        //$("#button1").html("<img id='PBJ' src='http://allthingsd.com/files/2012/08/peanut_butter_jelly430x300.jpeg'/>");
      });

      $("#button2").on("click", function() {
        //alert("Gem 2 is " + gem2);
        sum = sum + gem2;
        $("#playerScore").html("<br>Your score is: <br><br>" + sum);
        gameOver();
        //$("#button2").html("<img id='Grilled Cheese' src='http://cdn.funcheap.com/wp-content/uploads/2014/04/The-Perfect-Grilled-Cheese-Sandwich-800-158111.jpg' />");
      });

      $("#button3").on("click", function() {
        //alert("Gem 3 is " + gem3);
        sum = sum + gem3;
        $("#playerScore").html("<br>Your score is: <br><br>" + sum);
        gameOver();
         //$("#button3").html("<img id='Roast Beef' src='https://www.cscassets.com/recipes/wide_cknew/wide_25336.jpg' />");
      });

      $("#button4").on("click", function() {
       //alert("Gem 4 is " + gem4);
        sum = sum + gem4;
        $("#playerScore").html("<br>Your score is: <br><br>" + sum);
        gameOver();
      });

      
      //checks if the total sum is equal to random num. if it is
      //game is over and update the wins. if its more than the random num, then
      //player loses and updates the losses
      function gameOver() {
        if (sum === randNumber) {
          alert("Congratulations. You win!");
          numWins++;
          $("#wins").html("<br>" + numWins + "<br>");
          //console.log(sum);
          reset();
        }
        else if(sum > randNumber) {
          alert("Uh oh, you lost. Press OK to continue");
          numLosses++;
          $("#losses").html("<br>" + numLosses + "<br>");
          
          reset();
          //console.log("after" + sum);
        }
      };


    reset();
  
});

