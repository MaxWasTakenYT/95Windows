function generateProductKey() {
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
  
  return FPK;
}

function generateSecondProductKey() {
    function GF3X() {
        var firstone = Math.floor(Math.random() * 366);
        return firstone;
    }
    var F3X = GF3X();
    function GO2() {
        var othertux = Math.floor(Math.random() * 2) + 95;
        return othertux;
    }
    var O2X = GO2();
    var AX = "-OEM-";
    function GMD7() {
        while (true) {
            var mgsvn = Math.floor(Math.random() * 8888889);
            var mgsvn_sum = Array.from(String(mgsvn)).reduce((sum, digit) => sum + parseInt(digit), 0);
            if (mgsvn_sum % 7 === 0) {
                return mgsvn;
            }
        }
    }
    var MD7 = GMD7();
    var A2X = "-";
        
    function GLRD() {
        var lstrndm = Math.floor(Math.random() * 100000);
        return lstrndm;
    }
    var LRDX = GLRD();
    var FPKX = F3X.toString() + O2X.toString() + AX + MD7.toString() + A2X + LRDX.toString();
    return FPKX;
}

function handleGenerateButtonClick() {
  let productKey = generateProductKey();
  let secondProductKey = generateSecondProductKey();

  let productKeyElement = document.getElementById('productKey');
  let secondProductKeyElement = document.getElementById('secondProductKey');

  productKeyElement.textContent = "Generated type 'A' Product Key: " + productKey;
  secondProductKeyElement.textContent = "Generated type 'B/C' Product Key: " + secondProductKey;
}

document.getElementById('generateBtn').addEventListener('click', handleGenerateButtonClick);
