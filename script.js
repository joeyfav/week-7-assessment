class Animal {
    constructor(species, sound) {
      this.species = species;
      this.sound = sound;
    }
  
    makeSound() {
      console.log(this.sound);
    }
  }
  class Dog extends Animal {
    constructor(species, sound, color) {
      super(species, sound);
      this.color = color;
    }
    makeSound() {

      super.makeSound();
      console.log(`Color: ${this.color}`);
    }
  }
  // here we create an instance of the Dog class
  const dog = new Dog('Dog', 'Woof woof!', 'grey');
  
  // here, so that the dog can make a sound
  dog.makeSound();
  