/**
 * - ให้เขียน Function ที่ชื่อว่า `validatePIN` ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ `pin` มี Value Type เป็น String
    - Function นี้จะ Return ค่าออกมาดังนี้
        - ถ้า PIN ที่รับเข้ามาถูกต้อง (มีเฉพาะตัวเลข 4 หลักหรือ 6 หลักเท่านั้น) จะ Return `true`
        - ถ้า PIN ไม่ถูกต้อง จะ Return `false`
    - เงื่อนไขเพิ่มเติม:
        - PIN ต้องประกอบด้วยตัวเลขเท่านั้น
        - PIN ต้องมีความยาวเป็น 4 หลักหรือ 6 หลักเท่านั้น
 */
function validatePIN(pin) {
  //Start coding here

  if (!Number(pin)) {
    console.log("this not num");
    return false;
  } else {
    if (pin.length === 4 || pin.length === 6) {
      return true;
    } else {
      return false;
    }
  }
}

let result1 = validatePIN("1234");
console.log(result1); // true

let result2 = validatePIN("12345");
console.log(result2); // false

let result3 = validatePIN("a234");
console.log(result3); // false
