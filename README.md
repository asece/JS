# JS

Basic JS info

**Factory function and Constructor function**

```javascript

>another.constructor
    ƒ Circle(radius){
        this.radius = radius;
        this.draw = function(){
            console.log('drawing');
        }
    }
```

```javascript
  
>circle.constructor

    ƒ Object() { [native code] }
    
    Built-in constructor fct. in JavaScript
```
Every object has a constructor property and that references the function that was used to create that object.

**Functions are objects**

```javascript
>Circle.name
    "Circle"
>Circle.length
    1
>Circle.constructor
    ƒ Function() { [native code] }
```

```javascript
Circle.call ({}, 1)     /* the same as */     cosnt another = new Circle(1);
```
When new is used it internally creates an empty obj and passes it as the first arg to the call method an this obj will determine the context of this.

If new is not used this will point to the global obect, the window. 
```javascript
Circle.apply({},[1,2,3])    ->    pass an array 
```
**Value types**

Number, String, Boolean, Symbol, undefined, null

**Reference types**

Object, Function, Array

- primitives:
```javascript
    let x = 10;
    let x = {value: 10}; // we use an aobject
    let y = x;  //y will point to the same object as x
```
Primitives are copie by value.
Objects are copied by reference.

```javascript
let number = 10;

function increase(number)
{
    number++;
}

increase(number);       // the value of number is copied into the local param of the fct. 
console.log(number);    // output will be 10
```
Using an object:
```javascript
let obj = {value: 10};

function increase(obj)
{
    obj++;
}

increase(obj);
console.log(obj);    // output will be 11
```

**Adding/Removing Properties**

```javascript
function Circle(radius)
{
    this.radius = radius;
    this.draw = function()
    {
        console.log('draw');
    }
}

const circle = new Circle(10);
```
Properties can be added anytime, because there are no classes in JavaScript.

```javascript
circle.location = { x:1 };
// or
circle['location'] = { x:1 };   //better for dynamic access of property name

delete circle.location
//or
delete circle['location'];
```
**Enumerating Properties**

```javascript
for (let key in circle)
{
    console.log(key);
}
//  output: 
//  radius
//  draw
```
To get the values:

```javascript
for (let key in circle)
{
    // filtering can be done
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key]);
}
//  or
console.log(Object.keys(circle));
/////////////////////////////////
if ('radius' in circle)
    //do something
```

**Abstraction**

Hide the details, show only the essentials.


