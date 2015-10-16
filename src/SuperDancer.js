var SuperDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
 // this.$node = $('<span class="DeathDancer"></span>');

};
var leftTopMultplied = false;
  SuperDancer.prototype = Object.create(makeDancer.prototype);
  SuperDancer.prototype.constructor = SuperDancer;
  SuperDancer.prototype.interact = function(nearbyDancers) {
    var topDistance = this.top - nearbyDancers.top; 
    var leftDistance = this.left - nearbyDancers.left;
    if (topDistance < 50 && topDistance > -50 || leftDistance > -50 && leftDistance < 50) {
      return true;
    }
    return false;
  }
  SuperDancer.prototype.step = function(){
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // debugger;
    // debugger;
    // this.setPosition(this.top, this.left);
    // this.$node.toggle();
    for (var i =  0; i < window.dancers.length; i++) {
      if (this.__proto__.constructor !== window.dancers[i].__proto__.constructor){
        if (this.interact(window.dancers[i])) {
          this.top = window.dancers[i].top;
          this.left = window.dancers[i].left;
          this.setPosition(this.top,this.left);
        }              
      }
    }
    setTimeout(this.step.bind(this), this.timeBetweenSteps);

  };