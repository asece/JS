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