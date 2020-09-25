class TransformingFish extends Fish {

  constructor(options) {
    super(options);
    this.imageUri = '/images/fish03.png';
  }
  onClick(event) {
    this.imageUri === '/images/fish03.png' ? this.imageUri = '/images/fish04.jpeg' 
      : this.imageUri = '/images/fish03.png';
  }
  
}