class SpawningFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = '/images/fish05.jpeg';
    // setInterval(function () {
    //   var s = new Seed({
    //     tank: this.tank,
    //     position: this.position,
    //     velocity: new Vector(xVel, yVel),
    //     type: this.tank.getRandomSpecies()
    //   });
    // }, 5000)();
    this.startSpawn();
  }
  onClick(event) {
    var xVel = randRangeInt(-300, 300);
    var yVel = 400 - Math.abs(xVel);
    var s = new Seed({
      tank: this.tank,
      position: this.position,
      velocity: new Vector(xVel, yVel),
      type: this.tank.getRandomSpecies(),
    });
  }
  updateOneTick() {
    var delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S);
    this.position.addMut(delta);
    this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
    if (this.timeUntilSpeedChange < 0) {
      this.makeNewVelocity();
    }
  }
  /* 
    constructor(options) {
      super(options);
      this.imageUri = '/images/spawnfish.gif';
      this.type = "spawnfish";
      this.startSpawn();
    }
    
  } */
  startSpawn() {
    setInterval(this.spawn(), 3000);
  }

  spawn() {
    var xVel = randRangeInt(-300, 300);
    var yVel = 400 - Math.abs(xVel);
    console.log('f', this.tank);
    var s = new Seed({
      tank: this.tank,
      position: this.position,
      velocity: new Vector(xVel, yVel),
      type: this.tank.getRandomSpecies(),
    });
  }
}
