class BiteFish extends Fish {

  constructor(options) {
    super(options);
    this.imageUri = '/images/fish02.gif';
    this.maxSurge = 10.0;
    this.surgeSecondsLeft = 0;
    this.surgMult = 3.0;
  }
  onClick(event) {
    this.surgeSecondsLeft = this.maxSurge;
  }
  updateOneTick() {
    var delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S * (1 + this.surgeSecondsLeft * this.surgMult));
    this.position.addMut(delta);
    this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
    if (this.timeUntilSpeedChange < 0) {
      this.makeNewVelocity();
    }
    this.surgeSecondsLeft = Math.max(0, this.surgeSecondsLeft - PHYSICS_TICK_SIZE_S);
  }

}