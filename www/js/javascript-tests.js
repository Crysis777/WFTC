#!/usr/bin/env node

/*
 * This is for testing some javascript code
 * 
 */

let name = "Jessinator";
console.log("\nHallo "+name+"!\n");

name = `Hasinator`;
console.log(`This is ${name}.`);

name = `bla`;

switch (name) {
    case "Hasinator":
        console.log("Erster Fall");
        break;
 
    default:
        console.log("Ich war nicht vorgesehen");
        break;
}

let Hase = {name : "Jess",
            age : 26,
            birthday : "18.01.1991",
            food : ["soup","meat","no veggies"]};
console.log(`\n\nThis is my Hase: ${Hase.name}`);
Hase.pooped = true;
console.log(`\n\nDid my Hase poop? ${Hase.pooped}`);

function Retangular(length, width) {
    this.length = length;
    this.width = width;

    this.getSurface= function(){return this.length * this.width;};
    this.getDimension = function(){return this.length*2+this.width*2;};
}
Retangular.prototype.getValues = function(){return [this.length, this.width];};

const square = new Retangular(2,5);

console.log(`\nThis are the values: ${square.length} + ${square.width}`);
console.log(`\nThis are the values2: ${square.getDimension()} + ${square.getSurface()}`);
console.log(`\nThis are the values3: ${square.getValues()}`);

function Cuboid(length, width, height) {
    Retangular.call(this, length, width);
    this.height = height;
}
Cuboid.prototype = Object.create(Retangular.prototype);
Cuboid.prototype.getVolume = function() {return this.getSurface()*this.height;};

const cube = new Cuboid(2,5,3);
console.log(`\nThis is my Cuboid's Volume: ${cube.getVolume()}`);

