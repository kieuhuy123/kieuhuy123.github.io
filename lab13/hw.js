// 1.viết hàm tạo Rectangle(wide, long, unit)  nhận vào 3 tham số tương ứng với chiều rộng/dài/đơn vị (m, km) của hình chữ nhật
// 2.Triển khai các phương thức getter, setter cho wide/long (phải lơn hơn 0), unit (phải là một trong các đơn vị m, km)

// 3. Triển khai phương thức phù hợp đẻ in dc object ra theo mẫu: String(rect) --> Hình chữ nhật, chiều dài x m , rộng y m

// 4. Triển khai phương thức phù hợp để so sánh đc 2 object: rect1 > rect2 --> true/false

// 5. Triển khau các phương thức trả về chu vi, diện tích hình chữ nhật

function Retangle(wide, long, unit ) {
  
    return {
        //  _wide = wided,
        //  _long = long,
        // _unit = unit,
        get unit() {
            return this._unit;
        },
        set unit(newValue) {
            if (newValue == "m" || newValue == "km") {
                this._unit = newValue;
            }
        },
        get wide() {
            return this._wide;
        },
        set wide(newValue) {
            if (newValue > 0) {
                this._wide = newValue
            }
        },
         get long() {
            return this._long;
        },
        set long(newValue) {
            if (newValue > 0) {
                this._long = newValue
            }
        },
        toString() {
            return 
        },
        valueOf() {
           
            
        }
    }

}
