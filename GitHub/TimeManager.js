var Manager = me.InvisibleEntity.extend({
  init: function() {
    // 5 minutes in milliseconds, count down to true
  //  this.timer = new TimerObject(5 * 60 * 1000, true, 10, 10, "timer");
    // start at 0, count up
    this.clock = new TimerObject(0, false, 700, 10, "clock");
  },
 
  update: function() {
    me.video.clearSurface(me.video.getScreenCanvas().getContext('2d'), '#000000');
 //   this.timer.update();
    this.clock.update();
  }
});
 
var TimerHUD = me.HUD_Item.extend({
  init: function(x, y) {
    this.parent(x, y);
   this.font = new me.Font("Arial", 16, "white");
 },
    drw: function(ctx, x, y) {
    this.font.draw(ctx, this.value, this.pos.x + x, this.pos.y + y);
  }}); 
var TimerObject = (function() {
  function TimerObject(time, countdown, x, y, name) {
    this.time = time;
    this.countdown = countdown;
    this.x = x;
    this.y = y;
    this.name = name;
    me.game.HUD.addItem(name, new TimerHUD(this.x, this.y));
    me.game.HUD.setItemValue(name, this.convert());
    this.start_time = me.timer.getTime();
  }
 
  TimerObject.prototype.convert = function() {
    var x = this.time / 1000;
 
    x = (x/ 60);
    seconds = x % 60;
    minutes = x /60;
    return Math.floor(minutes) + ":" + Math.floor(seconds);
  }
 
  TimerObject.prototype.update = function() {
    if(this.countdown) {
      this.time -= (me.timer.getTime() - this.start_time);
    }
    else {
      this.time += 1000;
    }
    me.game.HUD.setItemValue(this.name, this.convert());
  }
 
  return TimerObject;
})();
var seconds;
var minutes;
