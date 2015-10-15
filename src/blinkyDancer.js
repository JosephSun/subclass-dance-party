var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  this.oldStep = this.step;
  console.log("this.oldstep before MAKER DANCER CALL",this.oldStep);
  console.log("Before MakeDancer")
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // return this;
};
  makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
  makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
  makeBlinkyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    console.log("this", this, "this.oldstep", this.oldStep);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
    // this.oldStep();
    // console.log("this", this);
   setTimeout(this.step.bind(this), this.timeBetweenSteps);//this.timeBetweenSteps);

  };