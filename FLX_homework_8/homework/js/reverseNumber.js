function reverseNumber(int) {
    let intRev = "";
    let start = int < 0 ? 1 : 0;
    for (let i = start; i < int.length; i++) {
        intRev = int[i] + intRev;
    }
    return int < 0 ? '-' + intRev : intRev;
}

reverseNumber("123");
reverseNumber("-456");
reverseNumber("10000");