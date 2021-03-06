// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){

  /* new keyword has invisible executions
        this = Object.create(makeDancer.prototype)
        return this 
  */
  // use jQuery to create an HTML <span> tag

  this.top = top; 
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // debugger;
  console.log(DeathDancer === this.__proto__.constructor);
    if(DeathDancer === this.__proto__.constructor){
      this.$node = $('<span class="DeathDancer"></span>');

    }else if(makeBlinkyDancer === this.__proto__.constructor){
      this.$node = $('<span class="dancer"></span>');  
    }

  this.step();
  this.setPosition(top, left);
  //console.log()
};

makeDancer.prototype.step = function(){
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  };

makeDancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    
    //Variable for css
    var styleSettings = {
      top: top,
      left: left
    };

    this.$node.css(styleSettings);
  };

// <script src="spec/dancerSpec.js"></script>
