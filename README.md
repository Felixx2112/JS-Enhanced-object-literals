## Giúp làm được những việc sau

1. Định nghĩa key: value cho object
2. Định nghĩa method cho object
3. Định nghĩa key cho object dưới dạng biến

### VD1:

```bash
var name = 'Javascript';
var price = 1000;

var course = {
name,
price,
};

console.log(course);
```

### VD2:

```bash
var name = 'Javascript';

var course = {
name,
getName(){
    return name;
}

};
console.log(course.getName());

```

### VD3:

```bash
const fieldName = "name";
const fieldPrice = "price";

const course = {
  [fieldName]: "Javascript",
  [fieldPrice]: 1000,
};

console.log(course);
```
