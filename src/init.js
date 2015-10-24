$(document).ready(function(){
  window.dancers = [];

/*When someone clicks any dom element with the class name addDancerButton*/
  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    dancerMakerFunctionName = dancerMakerFunctionName.split(" ");//the name of dancers into an array of string
    // get the maker function for the kind of dancer we're supposed to make
    var element = Math.floor(Math.random() * dancerMakerFunctionName.length);
    var aDancerType = dancerMakerFunctionName[element];//get a random dancer
    var dancerMakerFunction = window[aDancerType];//pull out the function of the dancer

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  

  //lines up the dancers
  $(".LineUpButton").on("click", function(event){
     for (var i = 0; i < dancers.length; i++) {
      dancers[i].lineUp(dancers[i].top, 0);//calls the line up function for each dancer
     }

  });


  var mouseOverFunction = function() {
    $(".DeathDancer").on('mouseover', function(){//when something is mouseovered
     var colorStyle = {//set a height.
      height: 300
     };
     for (var i = 0; i < dancers.length; i++) {
      if (dancers[i].__proto__.constructor === SuperDancer) {//search for dancers with this constructor
        dancers[i].$node.css(colorStyle);
      }
     }
     setTimeout(mouseOverFunction,2000);//Have this function keep on running
  });
  }
  setTimeout(mouseOverFunction,5000);

});



