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



  let divElement=document.getElementById('parent');
  let h2element=document.createElement('h2');
  divElement.appendChild(h2element);
  h2element.textContent=`${Seattle.name}`

   function render() {
    let ulElement = document.createElement('ul');
    divElement.appendChild( ulElement);
    
    for (let i = 0; i < hours.length; i++) {
      // create i
     let liElement= document.createElement('li');
    
      // append li
      ulElement.appendChild(liElement);
      
    
      // text content:
      liElement.textContent=` ${hours[i]} ${Seattle.avgCookiesperHour[i]}  cookies.`;
     }
    }

Seattle.fullRandomAvgCookiesperHourArray();
Seattle.fullRandomCustomerAeeay();
Seattle.Total();
render();




// Tokyo
let Tokyo = {
  name: 'Tokyo',
  Min: 3,
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



  

   
  
  
  render:function () {
    divElement=document.getElementById('parent');
    h2element=document.createElement('h2');
   divElement.appendChild(h2element);
   h2element.textContent=`${Tokyo.name}`
    let ulElement = document.createElement('ul');
    divElement.appendChild( ulElement);
    
    for (let i = 0; i < hours.length; i++) {
      // create i
     let liElement= document.createElement('li');
    
      // append li
      ulElement.appendChild(liElement);
      
    
      // text content:
      liElement.textContent=` ${hours[i]} ${Tokyo.avgCookiesperHour[i]}  cookies.`;
     }
    }
}
    Tokyo.fullRandomAvgCookiesperHourArray();
    Tokyo.fullRandomCustomerAeeay();
    Tokyo.Total();
    Tokyo.render();



    // Dubai
let Dubai = {
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



  

   
  
  
  render:function () {
    divElement=document.getElementById('parent');
    h2element=document.createElement('h2');
   divElement.appendChild(h2element);
   h2element.textContent=`${Dubai.name}`
    let ulElement = document.createElement('ul');
    divElement.appendChild( ulElement);
    
    for (let i = 0; i < hours.length; i++) {
      // create i
     let liElement= document.createElement('li');
    
      // append li
      ulElement.appendChild(liElement);
      
    
      // text content:
      liElement.textContent=` ${hours[i]} ${Dubai.avgCookiesperHour[i]}  cookies.`;
     }
    }
}
Dubai.fullRandomAvgCookiesperHourArray();
Dubai.fullRandomCustomerAeeay();
Dubai.Total();
Dubai.render();




   // Paris
   let Paris = {
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
  
  
  
    
  
     
    
    
    render:function () {
      divElement=document.getElementById('parent');
      h2element=document.createElement('h2');
     divElement.appendChild(h2element);
     h2element.textContent=`${Paris.name}`
      let ulElement = document.createElement('ul');
      divElement.appendChild( ulElement);
      
      for (let i = 0; i < hours.length; i++) {
        // create i
       let liElement= document.createElement('li');
      
        // append li
        ulElement.appendChild(liElement);
        
      
        // text content:
        liElement.textContent=` ${hours[i]} ${Paris.avgCookiesperHour[i]}  cookies.`;
       }
      }
  }
  Paris.fullRandomAvgCookiesperHourArray();
  Paris.fullRandomCustomerAeeay();
  Paris.Total();
  Paris.render();




  
   // Lima
   let Lima = {
    name: 'Lima',
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
  
  
  
    
  
     
    
    
    render:function () {
      divElement=document.getElementById('parent');
      h2element=document.createElement('h2');
     divElement.appendChild(h2element);
     h2element.textContent=`${Lima.name}`
      let ulElement = document.createElement('ul');
      divElement.appendChild( ulElement);
      
      for (let i = 0; i < hours.length; i++) {
        // create i
       let liElement= document.createElement('li');
      
        // append li
        ulElement.appendChild(liElement);
        
      
        // text content:
        liElement.textContent=` ${hours[i]} ${Lima.avgCookiesperHour[i]}  cookies.`;
       }
      }
  }
  Lima.fullRandomAvgCookiesperHourArray();
  Lima.fullRandomCustomerAeeay();
  Lima.Total();
  Lima.render();

