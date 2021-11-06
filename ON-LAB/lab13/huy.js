// getter va setter :

// let student = {
//   name: "hdzz",

//   get age() {
//     return this._age;
//   },
//   set age(value) {
//     if (15 < value && value < 25) {
//       this._age = value;
//     } else {
//       console.log(" Tuoi khong hop le!");
//     }
//   },
// };
// student.age = 19;
// console.log(student.age);

// Constructor Function:

function Student(name, age, gendar, address, phone) {
  this.name = name;
  this.age = age;
  this.gendar = gendar;
  this.address = address;
  this.phone = phone;
  this.hello = function () {
    console.log("Hi I'm " + this.name);
  };
  this.toString = function () {
    return "Object: " + this.name + "-" + this.age + " tuoi";
  };
  this.valueOf = function () {
    return this.age;
  };
}

let huy = new Student("Huy", 19, "F", "123", "0865");
let hoang = new Student("Hoang", 25, "F", "234", "1900");
let trang = new Student("Trang", 19, "M", "456", "0927");
console.log("xin chao " + huy);
// Ex

// Viết hàm khởi tạo Weapon(name, type, damage) khởi tạo các object weapon
// function Weapon(name, type, damage, speed) {
// VD
// name = Thợ Săn
// type = Súng
// damage = 1000
// speed = 1.5
// }

// 1. Thêm phương thức toString() cho Weapon trả về loại - tên vũ khí. VD: Súng Thợ Săn

// 2. Thêm phương thức valueOf() cho Weapon trả về damage * speed

// Viết hàm khởi tạo Character(name, level, weapon) khởi tạo các object character, weapon là một object được tạo từ Weapon()

// function Character(name, level, weapon) {
// VD
// name = phoebe
// level = 1
// weapon = sungThoSan
// }

// 3. Thêm phương thức attack() cho Character in ra lượng sát thương gây ra tương ứng với weapon damage và speed

// 4. Thêm phương thức changeWeapon(newWeapon) cho Character thay đổi weapon cho character tương ứng với tham số newWeapon

function Weapon(name, type, damage, speed) {
  this.name = name;
  this.type = type;
  this.damage = damage;
  this.speed = speed;
  this.toString = function () {
    return this.type + this.name;
  };
  this.valueOf = function () {
    return this.damage * this.speed;
  };
}

let sungThoSan = new Weapon("Tho san", "sung ", 2000, 2.0);
let mocDietThuyQuai = new Weapon("Diet thuy quai", " Moc", 3000, 1.0);

// // //
function Character(name, level, weapon) {
  this.name = name;
  this.level = level;
  this.weapon = weapon;
  this.attack = function () {
    console.log(" Sat thuong gay ra " + this.weapon.valueOf());
  };
  // this.changeWeapon = function(newWeapon) {

  // }
}

let lucian = new Character("lucian", 300, sungThoSan);

// Viết hàm khởi tạo Calculator(), có các phương thức:
// get(a, b) nhận vào 2 số a, b lưu vào 2 prop a, b tương ứng
// add() trả về tổng a + b
// sub() trả về hiệu a - b
// div(), mul(), rem(), exp(), … trả về kết quả phép tính tương ứng

// Làm thế nào để cho phép gọi hàm theo chuỗi
// VD cal.get(4,5).add(); // 9

function Calculator() {
  this.get = function (a, b) {
    this.a = a;
    this.b = b;

    return this; // them chuoi thi minh phai return ve this !
  };
  this.add = function () {
    return this.a + this.b;
  };
  this.sub = function () {
    return this.a - this.b;
  };
}

let cal = new Calculator();
cal.get(10, 20);
cal.add();
cal.sub();

// Viết hàm tạo Counter(count), count mặc định = 0, và các phương thức
// up() tăng count lên 1
// down() giảm count 1
// get() in ra count hiện tại

// Làm thế nào để cho phép gọi hàm theo chuỗi VD counter.up().up().get().down().get();

// function Counter(count) {
//   this.count = count || 0;
//   this.up = function () {
//     this.count++;
//     return this;
//   };
//   this.down = function () {
//     this.count--;
//     return this;
//   };
//   this.get = function () {
//     console.log("Current: " + this.count);
//     return this;
//   };
// }

// let n = new Counter(20);

// BTVN : tim hieu ve mang va cac phuong thuc cua mang

// 1.viết hàm tạo Rectangle(wide, long, unit)  nhận vào 3 tham số tương ứng với chiều rộng/dài/đơn vị (m, km) của hình chữ nhật
// 2.Triển khai các phương thức getter, setter cho wide/long (phải lơn hơn 0), unit (phải là một trong các đơn vị m, km)

// 3. Triển khai phương thức phù hợp đẻ in dc object ra theo mẫu: String(rect) --> Hình chữ nhật, chiều dài x m , rộng y m

// 4. Triển khai phương thức phù hợp để so sánh đc 2 object: rect1 > rect2 --> true/false

// 5. Triển khau các phương thức trả về chu vi, diện tích hình chữ nhật

function Retangle(_wide, _long, _unit) {
  
  this._long;
  this._unit;

  this.wide = {
    get measure() {
      return this._long;
    },
    set measure(_value) {
      if (_value > 0) {
        this._wide = _value;
      } else {
        console.log("nhap lai ikk");
      }
    },
  };

}

let hcn = new Retangle(10, 20, "km");