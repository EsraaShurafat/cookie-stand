'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','Total'];

let Seattle = {
  name: 'Seattle',
  Min: 23,
  Max: 65,
  AvgCookie: 6.3,
  randomCustomers: [],
  avgCookiesperHour: [],
  random:function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  },


  fullRandomCustomerAeeay:function(){
for(let i=0 ; i<hours.length ; i++ ) {
  this.randomCustomers.push(this.random(this.Min,this.Max));
  
}
console.log(this.randomCustomers);
},

// console.log(Seattle.fullRandomCustomerAeeay());


fullRandomAvgCookiesperHourArray:function() {
  for(let i=0 ; i<hours.length; i++ ) {
    this.avgCookiesperHour.push(Math.floor(this.random(this.Min,this.Max)*this.AvgCookie));
    
  }
console.log(this.avgCookiesperHour);
},

// console.log(Seattle.fullRandomAvgCookiesperHourArray());

Total:function() {
    let sum = 0;
    this.fullRandomAvgCookiesperHourArray();

for (let i = 0; i < this.avgCookiesperHour.length ; i++) {
    sum+= this.avgCookiesperHour[i];
}
this.avgCookiesperHour.push(sum);
console.log(sum);
},

}
Seattle.fullRandomAvgCookiesperHourArray();
Seattle.fullRandomCustomerAeeay();
Seattle.Total();
// console.log(Seattle.avgCookiesperHour);
// console.log(Seattle.Total());


let ulElement = document.createElement('ul');
for (let i = 0; i < hours.length; i++) {
  // create i
 let liElement= document.createElement('li');

  // append li
  ulElement.appendChild(liElement);
  

  // text content:
  liElement.textContent=Seattle.avgCookiesperHour[i];
  
}

// Tokyo object 

let Tokyo = {
  name: 'Tokyo',
  Min:3,
  Max: 24,
  AvgCookie: 1.2,
  randomCustomers: [],
  avgCookiesperHour: [],
  random:function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  },


  fullRandomCustomerAeeay:function(){
for(let i=0 ; i<hours.length ; i++ ) {
  this.randomCustomers.push(this.random(this.Min,this.Max));
  
}
console.log(this.randomCustomers);
},

// console.log(Seattle.fullRandomCustomerAeeay());


fullRandomAvgCookiesperHourArray:function() {
  for(let i=0 ; i<hours.length; i++ ) {
    this.avgCookiesperHour.push(Math.floor(this.random(this.Min,this.Max)*this.AvgCookie));
    
  }
console.log(this.avgCookiesperHour);
},

// console.log(Seattle.fullRandomAvgCookiesperHourArray());

Total:function() {
    let sum = 0;
    this.fullRandomAvgCookiesperHourArray();

for (let i = 0; i < this.avgCookiesperHour.length ; i++) {
    sum+= this.avgCookiesperHour[i];
}
this.avgCookiesperHour.push(sum);
console.log(sum);
},

}
Tokyo.fullRandomAvgCookiesperHourArray();
Tokyo.fullRandomCustomerAeeay();
Tokyo.Total();
// console.log(Seattle.avgCookiesperHour);
// console.log(Seattle.Total());


let ulElement = document.createElement('ul');
for (let i = 0; i < hours.length; i++) {
  // create i
 let liElement= document.createElement('li');

  // append li
  ulElement.appendChild(liElement);
  

  // text content:
  liElement.textContent=Tokyo.avgCookiesperHour[i];
  
}


// Dubai

let Seattle = {
  name: 'Dubai',
  Min: 11,
  Max: 38,
  AvgCookie: 3.7,
  randomCustomers: [],
  avgCookiesperHour: [],
  random:function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  },


  fullRandomCustomerAeeay:function(){
for(let i=0 ; i<hours.length ; i++ ) {
  this.randomCustomers.push(this.random(this.Min,this.Max));
  
}
console.log(this.randomCustomers);
},

// console.log(Seattle.fullRandomCustomerAeeay());


fullRandomAvgCookiesperHourArray:function() {
  for(let i=0 ; i<hours.length; i++ ) {
    this.avgCookiesperHour.push(Math.floor(this.random(this.Min,this.Max)*this.AvgCookie));
    
  }
console.log(this.avgCookiesperHour);
},

// console.log(Seattle.fullRandomAvgCookiesperHourArray());

Total:function() {
    let sum = 0;
    this.fullRandomAvgCookiesperHourArray();

for (let i = 0; i < this.avgCookiesperHour.length ; i++) {
    sum+= this.avgCookiesperHour[i];
}
this.avgCookiesperHour.push(sum);
console.log(sum);
},

}
Dubai.fullRandomAvgCookiesperHourArray();
Dubai.fullRandomCustomerAeeay();
Dubai.Total();
// console.log(Seattle.avgCookiesperHour);
// console.log(Seattle.Total());


let ulElement = document.createElement('ul');
for (let i = 0; i < hours.length; i++) {
  // create i
 let liElement= document.createElement('li');

  // append li
  ulElement.appendChild(liElement);
  

  // text content:
  liElement.textContent=Dubai.avgCookiesperHour[i];
  
}

// Paris


let Seattle = {
  name: 'Paris',
  Min: 20,
  Max: 38,
  AvgCookie: 2.3,
  randomCustomers: [],
  avgCookiesperHour: [],
  random:function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  },


  fullRandomCustomerAeeay:function(){
for(let i=0 ; i<hours.length ; i++ ) {
  this.randomCustomers.push(this.random(this.Min,this.Max));
  
}
console.log(this.randomCustomers);
},

// console.log(Seattle.fullRandomCustomerAeeay());


fullRandomAvgCookiesperHourArray:function() {
  for(let i=0 ; i<hours.length; i++ ) {
    this.avgCookiesperHour.push(Math.floor(this.random(this.Min,this.Max)*this.AvgCookie));
    
  }
console.log(this.avgCookiesperHour);
},

// console.log(Seattle.fullRandomAvgCookiesperHourArray());

Total:function() {
    let sum = 0;
    this.fullRandomAvgCookiesperHourArray();

for (let i = 0; i < this.avgCookiesperHour.length ; i++) {
    sum+= this.avgCookiesperHour[i];
}
this.avgCookiesperHour.push(sum);
console.log(sum);
},

}
Paris.fullRandomAvgCookiesperHourArray();
Paris.fullRandomCustomerAeeay();
Paris.Total();
// console.log(Seattle.avgCookiesperHour);
// console.log(Seattle.Total());


let ulElement = document.createElement('ul');
for (let i = 0; i < hours.length; i++) {
  // create i
 let liElement= document.createElement('li');

  // append li
  ulElement.appendChild(liElement);
  

  // text content:
  liElement.textContent=Paris.avgCookiesperHour[i];
  
}


// Lima


let Lima = {
  name: 'PLima',
  Min: 2,
  Max: 16,
  AvgCookie: 4.6,
  randomCustomers: [],
  avgCookiesperHour: [],
  random:function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  },


  fullRandomCustomerAeeay:function(){
for(let i=0 ; i<hours.length ; i++ ) {
  this.randomCustomers.push(this.random(this.Min,this.Max));
  
}
console.log(this.randomCustomers);
},

// console.log(Seattle.fullRandomCustomerAeeay());


fullRandomAvgCookiesperHourArray:function() {
  for(let i=0 ; i<hours.length; i++ ) {
    this.avgCookiesperHour.push(Math.floor(this.random(this.Min,this.Max)*this.AvgCookie));
    
  }
console.log(this.avgCookiesperHour);
},

// console.log(Seattle.fullRandomAvgCookiesperHourArray());

Total:function() {
    let sum = 0;
    this.fullRandomAvgCookiesperHourArray();

for (let i = 0; i < this.avgCookiesperHour.length ; i++) {
    sum+= this.avgCookiesperHour[i];
}
this.avgCookiesperHour.push(sum);
console.log(sum);
},

}
Lima.fullRandomAvgCookiesperHourArray();
Lima.fullRandomCustomerAeeay();
Lima.Total();
// console.log(Seattle.avgCookiesperHour);
// console.log(Seattle.Total());


let ulElement = document.createElement('ul');
for (let i = 0; i < hours.length; i++) {
  // create i
 let liElement= document.createElement('li');

  // append li
  ulElement.appendChild(liElement);
  

  // text content:
  liElement.textContent=Lima.avgCookiesperHour[i];
  
}