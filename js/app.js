'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// random number fun from W3shools
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


let shops=[];



function CookiesShope (location,minCustmoer,maxCustmoer,avgCookies){
  this.locationName=location;
  this.minCustmoerNum=minCustmoer;
  this.maxCustmoerNum=maxCustmoer;
  this.avgCookiesPerhour=avgCookies;
  this.coustomerNumPerhour=[];
  
 shops.push(this);
  console.log(shops);
}

CookiesShope.prototype.calcCustomerNumPerHour=function(){
  
  for (let i = 0; i < hours.length; i++) {
    
    this.coustomerNumPerhour.push(Math.floor(randomNum(this.minCustmoerNum,this.maxCustmoerNum)*this.avgCookiesPerhour));
    
  }
 console.log(this.coustomerNumPerhour);
 
}


//  Seattle	23	65	6.3
let Seattle= new CookiesShope('Seattle',23,65,6.3);

// Tokyo	3	24	1.2
let Tokyo= new CookiesShope( 'Tokyo',3,	24,	1.2	);

// Dubai	11	38	3.7
let Dubai= new CookiesShope( 'Dubai',11,	38	,3.7	);
// Paris	20	38	2.3

let  Paris= new CookiesShope( 'Paris',20,	38	,2.3	);

// Lima	2	16	4.6
let  Lima	= new CookiesShope(  'Lima',2	,16	,4.6	);


CookiesShope.prototype.calcDailyTotal=function(){
  let dailyTotalLocation=0;
  
  for (let i = 0; i < this.coustomerNumPerhour.length; i++) {
    
    dailyTotalLocation += this.coustomerNumPerhour[i];
    
  }
  this.coustomerNumPerhour.push(dailyTotalLocation);
}



// table 
let parent =document.getElementById('pearnt');
// console.log(parent);

let table=document.createElement('table');
parent.appendChild(table);

// Header of the table 
let headings=[' ','6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','Daily Location Total'];
function Header(){
  let headingRow=document.createElement('tr');
table.appendChild(headingRow);


for (let i = 0; i < headings.length; i++) {
    // make th element
    let thElement=document.createElement('th');

    // append
    headingRow.appendChild(thElement);

    // text conent
    thElement.textContent=headings[i];
    
}
}
Header();

// main of the table
CookiesShope.prototype.render=function() {
  let rowelement=document.createElement('tr');
   table.appendChild(rowelement);
    let dataRow1= document.createElement('td');
    rowelement.appendChild(dataRow1);
    dataRow1.textContent=this.locationName;
   for (let i = 0; i < this.coustomerNumPerhour.length; i++) {
      let dataRow=document.createElement('td');
      rowelement.appendChild(dataRow);
      dataRow.textContent=this.coustomerNumPerhour[i];
   }
  }

  for (let i = 0; i < shops.length; i++) {
    shops[i].calcCustomerNumPerHour();
    shops[i].calcDailyTotal();
    shops[i].render();
  

  }
   
  // console.log(shops[0].coustomerNumPerhour[0]);
  
  function footer(){
    let headingRow=document.createElement('tr');
    table.appendChild(headingRow);
    // make th element
    let thElement=document.createElement('th');

    // append
    headingRow.appendChild(thElement);

    // text conent
    thElement.textContent='Totals';
let totalTotal=0;
    for (let i = 0; i <hours.length; i++) {
      let Totalperhour=0;
      for (let j = 0; j < shops.length; j++) {
       Totalperhour+=shops[j].coustomerNumPerhour[i];
      totalTotal+=shops[j].coustomerNumPerhour[i];
        
      }
      let thElement=document.createElement('th');

      // append
      headingRow.appendChild(thElement);
  
      // text conent
      thElement.textContent=Totalperhour;

      

      
    }


    let lastthElement=document.createElement('th');

    // append
    headingRow.appendChild(lastthElement);

    // text conent
    lastthElement.textContent=totalTotal;




  }
  footer();