var SuperDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
};
var leftTopMultplied = false;
/*
Creating the SDprototype as a subClass of MDprototype. 
*/
  SuperDancer.prototype = Object.create(makeDancer.prototype);
  /*
Setting the constructor back to SuperDancer
  */
  SuperDancer.prototype.constructor = SuperDancer;

  SuperDancer.prototype.interact = function(nearbyDancers) {
    var topDistance = this.top - nearbyDancers.top; //what is around it in vertical distance
    var leftDistance = this.left - nearbyDancers.left;/// what is around it in horizontal distance
    if (topDistance < 50 && topDistance > -50 || leftDistance > -50 && leftDistance < 50) {
      //if they are touching return true; 
      return true;
    }
    return false;
  };
  SuperDancer.prototype.step = function(){
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
   
    for (var i =  0; i < window.dancers.length; i++) {
      if (this.__proto__.constructor !== window.dancers[i].__proto__.constructor){
        if (this.interact(window.dancers[i])) {
          //have the SPD move to where the other dancer is. 
          this.top = window.dancers[i].top;
          this.left = window.dancers[i].left;
          this.setPosition(this.top,this.left);
        }              
      }
    }
    setTimeout(this.step.bind(this), this.timeBetweenSteps);//contstantly run

  };