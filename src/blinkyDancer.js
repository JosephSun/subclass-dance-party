var makeBlinkyDancer = function(top, left, timeBetweenSteps){

/*
Runs the variable declarations of makeDancer, but for MakeBlinkyDancer
*/
  makeDancer.call(this, top, left, timeBetweenSteps);


};

/*
making makeBlinkyDancer inherit from makeDancer
*/
  makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

  /*Setting the constructor of makeBlinkyDancer back to make Blinky dnace. 
  it was changed with the Object.create*/
  makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
  makeBlinkyDancer.prototype.step = function(){
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
   setTimeout(this.step.bind(this), this.timeBetweenSteps);

  };