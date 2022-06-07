const a ={
    value:1,
}

const b ={
    value:2,
}
const c ={
    value:3,
}

const d ={
    value:4,
}
const e ={
    value:5,
}

const f ={
    value:6,
}
const g ={
    value:7,
}

const h ={
    value:8,
}
const i ={
    value:9,
}

const j ={
    value:10,
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item){
       return item * this.value;
    }, thisArg);
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(mapComThis(nums, a));
console.log(mapComThis(nums, b));
console.log(mapComThis(nums, c));
console.log(mapComThis(nums, d));
console.log(mapComThis(nums, e));
console.log(mapComThis(nums, f));
console.log(mapComThis(nums, g));
console.log(mapComThis(nums, h));
console.log(mapComThis(nums, i));
console.log(mapComThis(nums, j));