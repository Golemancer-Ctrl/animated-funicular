// TODO: this refers to the window
console.log(this);

// this refers to the object window
function helloThis() { 
   console.log("Inside this function, this is " + this); 
   }

// TODO: this will log 20 or 10+10
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};

// this will log 5750, or 5000 * 1.15
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();
