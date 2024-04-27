function GF3() {
  while (true) {
      let num = Math.floor(Math.random() * 999) + 1;
      if (![333, 444, 555, 666, 777, 888, 999].includes(num)) {
          return num;
      }
  }
}
let F3 = GF3();
let U4 = "-";
function GL7() {
  while (true) {
      let number = Array.from({ length: 7 }, () => Math.floor(Math.random() * 9));
      if (number.reduce((a, b) => a + b, 0) % 7 === 0) {
          return parseInt(number.join(''));
      }
  }
}
let L7 = GL7();
let F3_str = F3.toString().padStart(3, '0');
let FPK = F3_str + U4 + L7;
console.log(FPK);