const name = "Javascript";
const price = 1000;

//Định nghĩa key: value cho object
// const course = {
//   name: name,
//   price: price,
// };

//Định nghĩa method cho object
// const course = {
//   name,
//   price,
//   getName: function () {
//     return name;
//   },
// };

const course = {
  name,
  price,
  getName() {
    return name;
  },
};

console.log(course.getName());
//---

const fieldName = "name";
const fieldPrice = "price";

const course2 = {
  [fieldName]: "Javascript",
  [fieldPrice]: 1000,
};

console.log(course2);
