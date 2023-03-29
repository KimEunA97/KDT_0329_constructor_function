// function c(year, month, day) {
//   this.year = year;
//   this.month = month;
//   this.day = day;
// }


// const test = c(2023, 3, 29).year;
// console.log(test)

// // const b = {

// //   year: 2023,
// //   month: 3,
// //   day: 29,

// // }

const fs = require('fs');






function user(id, password, email) {

  this.id = id,
    this.password = this.password,
    this.email = this.email
}

const d = new user("kong", "1234", "kimg@mai.com");
console.log(d);

const e = new user("dalj", "213123", "dla2@ga");
const f = new user("lllsadsda", "213123", "dla2@ga");
console.log(e);
console.log(f);

let names = ["kong", "daljae", "jieun"]
let passwords = ["1234", "1234", "4546"]
let emails = ["kim@gmail.com", "sad@gmail.com", "jie@gmail.com"]

let members = [];
for (let i = 0; i < 3; i++) {

  members.push(new user(names[i], passwords[i], emails[i]));

}


fs.writeFileSync("member.JSON", JSON.stringify(members, null, 2), "utf-8");


console.dir(members);
