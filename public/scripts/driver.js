$(() => {

  window.fishtank = new Fishtank('fishtank');             // making it global to make debugging 1% easier.  shhhh.
  window.fishtank.registerSpecies(SwitchFish,SpawningFish, GoFish, BiteFish, TransformingFish);
  var starter = new Starter({
    tank: window.fishtank,     // look, it's Dependency Injection!  Pretend you care!
    position: new Vector(0, 0)
  });

  for (let i = -400; i <= 400; i+=80) {
    var rock = new Rock({
      tank: window.fishtank,
      position: new Vector(i, 80)
    });
  }

});



