//  Last sanity check: 2020-04-28

console.log("Hello Alex");
let name = 'Alex';
console.log(name);
const rate = 0.3;
console.log(rate);
console.log('--------------------------');

function out(name)
{
    console.log('Hello ' + name);
}

out('Iulian');

function sq(x)
{
    return x * x;
}

console.log(sq(34));

let v = [] ; 
v[v.length] = 11;
console.log(v[0]);
console.log(v.length);

console.log('--------------------------');

// Factory function
function createCircle(radius)
{
    return {
        radius,
        draw: function()
        {
            console.log('drawing');
        }
    };
}

const circle = createCircle(1);
// circle.draw();

// Constructor Funciton
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('drawing');
    }
}
const another = new Circle(10);