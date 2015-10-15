var DeathDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
 // this.$node = $('<span class="DeathDancer"></span>');

};
var leftTopMultplied = false;
  DeathDancer.prototype = Object.create(makeDancer.prototype);
  DeathDancer.prototype.constructor = DeathDancer;
  DeathDancer.prototype.step = function(){
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    console.log("Hah")
    // debugger;
    if (leftTopMultplied) {
      // debugger;
      this.top = this.top * 1.1;//Math.random();
      this.left = this.left * 1.1;//Math.random();
      leftTopMultplied = false;      
      // debugger;
    }else {
      // debugger;
      this.top = this.top / 1.1;//Math.random();
      this.left = this.left / 1.1;//Math.random();
      leftTopMultplied = true;  
      // debugger;    

    }
    // debugger;
    this.setPosition(this.top, this.left);
    // this.$node.toggle();
   setTimeout(this.step.bind(this), this.timeBetweenSteps);

  };