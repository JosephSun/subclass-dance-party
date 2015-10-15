// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){

  // var dancer = {};
  /* new keyword has invisible executions
        this = Object.create(makeDancer.prototype)
        return this 
  */
  // use jQuery to create an HTML <span> tag

  this.top = top; 
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  // console.log("This", this);
  console.log("before this.step() in dancer");
  this.step();
  console.log("AFTER THIS>STEP");
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
 this.setPosition(top, left);
};
// makeDancer.prototype = Object.create(makeDancer.prototype);
// makeDancer.prototype.constructor = makeDancer;
makeDancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    // console.log("In prototype.step This", this);
    setTimeout(this.step.bind(this), this.timeBetweenSteps);//this.timeBetweenSteps);//this.timeBetweenSteps);//this.timeBetweenSteps.bind(this);//30000);//this.timeBetweenSteps);
  };
makeDancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

// <script src="spec/dancerSpec.js"></script>
