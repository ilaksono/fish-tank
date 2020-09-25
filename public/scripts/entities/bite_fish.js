class BiteFish extends Fish {

  constructor(options) {
    super(options);
    this.imageUri = '/images/fish02.gif';
    this.maxSurge = 10.0;
    this.surgeSecondsLeft = 0;
    this.surgMult = 3.0;
    this.type = 'bitefish';
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
    this.eatFish();
  }

  eatFish() {
    let nearbyDenizens = this.tank.getProximateDenizens(this.position, 100);
    // console.log(nearbyDenizens);
    for (const fish of nearbyDenizens) {
      if(fish.id !== this.id && fish.type !== 'bitefish' && fish.type !== 'volcano')
        this.tank.removeDenizen(fish.id, 0);
    }
  }
  // kill(target) {
  //   if(Vector.distance(this.position, anotherFish.position) < 1)
  //     return true;
  // }

}
//kill other fish