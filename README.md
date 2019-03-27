# JS

Basic JS info

##Factory function and Constructor function

>another.constructor
    ƒ Circle(radius){
        this.radius = radius;
        this.draw = function(){
            console.log('drawing');
        }
    }
    
>circle.constructor

    ƒ Object() { [native code] }
    
    Built-in constructor fct. in JavaScript

Every object has a constructor property and that references the function that was used to create that object.

##Functions are objects

>Circle.name
    "Circle"
>Circle.length
    1
>Circle.constructor
    ƒ Function() { [native code] }

