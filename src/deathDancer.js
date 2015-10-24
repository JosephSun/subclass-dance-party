var DeathDancer = function(top, left, timeBetweenSteps){
  /*
Runs the variable declarations for top left and timeBetweenSteps in makeDancer
except that the this will be deathDancer. So its as if saying this.top = top
  */
  makeDancer.call(this, top, left, timeBetweenSteps);

};
var leftTopMultplied = false;
/*creates DD.prototye as a subClass of makeDancer */
  DeathDancer.prototype = Object.create(makeDancer.prototype);
  /*Sets the DD.prototye constructor to DD. It was changed with Object.create*/
  DeathDancer.prototype.constructor = DeathDancer;
  DeathDancer.prototype.step = function(){
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.

    if (leftTopMultplied) {
      
      this.top = this.top * 1.1;//Math.random();Move to this position
      this.left = this.left * 1.1;//Math.random();Move to this position
      leftTopMultplied = false;      //alternate between downRight
      
    }else {
      
      this.top = this.top / 1.1;//Math.random();move to this position
      this.left = this.left / 1.1;//Math.random();move to this position
      leftTopMultplied = true;  //alternate to upLeft
          

    }
    
    this.setPosition(this.top, this.left);//set the new position
    // this.$node.toggle();
   setTimeout(this.step.bind(this), this.timeBetweenSteps);//Keep doing this

  };