"use strict";
const users = {
  name: "Halam",
  secondName: "Balam",
  age: 40,
  city: "Toronto",
  citizenship: "canadian",
  nationality: "indian",
  returnData: function () {
    console.log(
      `This is ${this.name} ${this.secondName}. Age is: ${this.age}. Citizenship: ${this.citizenship}. Nationality: ${this.nationality}.`
    );
  },
};

users.returnData();
