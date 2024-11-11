/**
 * - รับ Parameter 1 ตัวคือ `n` เป็นจำนวนเต็มบวก
- Function นี้จะ Return ค่าเป็น Array ที่มีสมาชิกเป็น String จำนวน `n` ตัว โดยสมาชิกใน Array จะเป็นไปตามกฎต่อไปนี้:
    - ถ้าตำแหน่งของสมาชิกหารด้วย 3 ลงตัว ให้ใส่ `"Fizz"` แทนตัวเลข
    - ถ้าตำแหน่งของสมาชิกหารด้วย 5 ลงตัว ให้ใส่ `"Buzz"` แทนตัวเลข
    - ถ้าตำแหน่งของสมาชิกหารด้วยทั้ง 3 และ 5 ลงตัว ให้ใส่ `"FizzBuzz"` แทนตัวเลข
    - ในกรณีอื่นๆ ให้ใส่ตัวเลขของตำแหน่งนั้นเป็น String
 */
function fizzBuzz(n) {
  //Start coding here
  let newArray = [];
  for (let i = 0; i < n; i++) {
    let num = i + 1;
    //ถ้าหารได้ทั้งคู่ได้ fizzbuzz
    //ถ้าหาร 5 ได้ buzz
    //หาร 3 ได้ fizz
    //ถ้าไม่เกี่ยวได้เลข
    if (num % 3 === 0 && num % 5 === 0) {
      newArray.push("FizzBuzz");
    } else if (num % 5 === 0) {
      newArray.push("Buzz");
    } else if (num % 3 === 0) {
      newArray.push("Fizz");
    } else {
      newArray.push(num.toString());
    }
  }
  return newArray;
}

let result1 = fizzBuzz(3);
console.log(result1); // ["1","2","Fizz"]

let result2 = fizzBuzz(5);
console.log(result2); // ["1","2","Fizz","4","Buzz"]

let result3 = fizzBuzz(15);
console.log(result3); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
