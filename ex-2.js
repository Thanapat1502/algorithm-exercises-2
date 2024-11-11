/**
 * - ให้เขียน Function ที่ชื่อว่า `countPositivesSumNegatives` ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ `input` มี Value Type เป็น Array ที่บรรจุตัวเลข
    - Function นี้จะ Return ค่าออกมาเป็น Array ที่มีสมาชิก 2 ตัว
        - สมาชิกตัวแรกคือจำนวนของตัวเลขที่เป็นจำนวนบวกใน `input`
        - สมาชิกตัวที่สองคือผลรวมของตัวเลขที่เป็นจำนวนลบใน  `input`
    - เงื่อนไขเพิ่มเติม:
        - 0 ไม่ถือว่าเป็นทั้งจำนวนบวกหรือจำนวนลบ
        - ถ้า `input` เป็น Array ว่างหรือเป็น `null` ให้ Return `[]`
--------------------------------------------------------
    เช่น
    function countPositivesSumNegatives(input) {
      //Start coding here
    }
    
    let result1 = countPositivesSumNegatives([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
    ]);
    console.log(result1); // [10, -65]
    
    let result2 = countPositivesSumNegatives("");
    console.log(result2); // []
    ```
 * 
 */
function countPositivesSumNegatives(input) {
  //Start coding here
  /**
   * 1.กรองเลข +
   * 2.กรองเลข -
   * 3.ถ้าเป็น [] รีเทิร์น []
   * 4.เอาเลขบวกมารวมกัน // เอาเลขลบมารวมกัน
   * 5. push ใส่ result
   */
  const result = [];
  if (input == null || input == "" || input == []) {
    return [];
  } else {
    const positive = input
      .filter((n) => {
        return n > 0;
      })
      .reduce((arr, cur) => {
        return arr + cur;
      });

    const negative = input
      .filter((n) => {
        return n < 0;
      })
      .reduce((arr, cur) => {
        return arr + cur;
      });

    result.push(positive, negative);
  }
  return result;
}

let result1 = countPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);
console.log(result1); // [10, -65]

let result2 = countPositivesSumNegatives("");
console.log(result2); // []
