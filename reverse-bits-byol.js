/* 
https://leetcode.com/problems/reverse-bits/description/

Reverse bits of a given 32 bits unsigned integer.

Note:
Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.
*/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

// Approach 1:
var reverseBits = function (n) {
  return parseInt(
    n.toString(2).padStart(32, "0").split("").reverse().join(""),
    2
  );
};
/*
1. parseInt('10',2) -> '10'을 2진수로 해석하고 그 결과를 10진수 정수로 반환한다.
2. n.toString(2) -> n을 2진수 문자열로 변환한다.
3. padStart(32, '0') -> 2진수 문자열의 길이를 32로 맞추고, 부족한 부분은 '0'으로 채운다.
4. split('') -> 문자열을 문자 배열로 변환한다.
5. reverse() -> 배열의 요소를 반대로 정렬한다.
6. join('') -> 배열의 요소를 문자열로 결합한다.
*/

// Approach 2:
var reverseBits = function (n) {
  let result = 0;

  for (let i = 0; i < 32; i++) {
    // result를 왼쪽으로 1칸 밀기
    result <<= 1;

    // n의 마지막 비트를 result의 오른쪽 끝에 추가
    result |= n & 1;

    // n을 오른쪽으로 1칸 밀기
    n >>>= 1;
  }

  // >>> 0을 하면 부호 없는 32비트 정수로 반환됨
  return result >>> 0;
};
/*
1. <<= : 왼쪽으로 한 칸 밀어!
let x = 2;      // 00000010
x <<= 1;        // 00000100 → x는 이제 4가 됨
곱하기 2와 비슷한 효과

2. |= : 이진수끼리 OR 해서 저장해!
let x = 5;      // 00000101
x |= 2;         // 00000010
// OR 연산 → 00000111 → x는 이제 7
각 비트를 비교해서 하나라도 1이면 1이 됨

3. >>>= : 오른쪽으로 한 칸 밀고, 앞은 0으로 채워!
let x = 8;      // 00001000
x >>>= 1;       // 00000100 → x는 4가 돼요
>>>는 항상 0으로 채움
(>>는 음수일 때 앞을 1로 채우기 때문에 차이가 있어요)
*/
