let salaries = {
  anna: 1000,

  john: 1200,
  phoebe: 2000,
  brian: 1500,
  diana: 1100,
};

// Ex1:
// function remove(obj, key) {
//   let copy = Object.assign({}, obj);
//   delete copy[key];
//   return copy;
// }
// console.log(remove(salaries,"john",))
// console.log(salaries);




// Ex2 : Viet ham isEqua so sanh gia tri giua 2 object
let a = { x: 1, y: 2 };
let b = { x : 1, y : 2, z : 3, h : 5}

function isEqua(obj1, obj2) {
    for (let k in obj1) {
        if (!(k in obj2) || obj1[k] != obj2[k]) {
            return false;
        }
    }
    for (let k in obj2) {
        if (!(k in obj1) || obj1[k] != obj2[k]) {
            return false;
        }
       
    }
     return true;
}
console.log(isEqua(a, b));

// Ex3:Viet ham intersection(obj1,obj2) nhan vao tham so la 2 obj tra ve 1 obj mot obj moi co thuoc tinh chung

function intersection(obj1, obj2) {
    let objReturn = {};
    for (let k in obj1) {
        if (k in obj2 && obj1[k] == obj2[k]) {
            objReturn[k] = obj1[k];

        }
    }
    return objReturn;
    
}
console.log(intersection(a,b))

