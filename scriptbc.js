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
console.log(FPKX);
