var DeathDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
 this.$node = $('<span class="DeathDancer"></span>');

};
  DeathDancer.prototype = Object.create(makeDancer.prototype);
  DeathDancer.prototype.constructor = DeathDancer;
  DeathDancer.prototype.step = function(){
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
   setTimeout(this.step.bind(this), this.timeBetweenSteps);

  };