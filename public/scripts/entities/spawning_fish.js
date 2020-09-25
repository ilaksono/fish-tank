class SpawningFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = '/images/fish05.jpeg';
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
}