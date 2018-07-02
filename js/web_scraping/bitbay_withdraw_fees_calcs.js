//WITDHRAW FEE 1/2
function bitbayWithdrawFeesFirst(){
    firstWithdrawFees = [];
    for(let i=42; i<46; i++){
        var string = x[i];
        var slicer = string.slice(4);
        var sliceIt = Number(slicer);
        firstWithdrawFees.push(sliceIt)
    }
    return firstWithdrawFees
};

var showWithdrawBitbay1 = bitbayWithdrawFeesFirst();
console.log(showWithdrawBitbay1)

//WITHDRAW FEE 2/2
function bitbayWithdrawFeesSecond(){
    secondWithdrawFees = [];
    for(let i=47; i<49; i++){
        var string = x[i];
        var slicer = string.slice(5);
        var sliceIt = Number(slicer);
        secondWithdrawFees.push(sliceIt)
    }
    return secondWithdrawFees
};

var showWithdrawBitbay2 = bitbayWithdrawFeesSecond();
console.log(showWithdrawBitbay2)

//WITHDRAW FEE FULL
function bitbayWithdraws(){
    var array1 = showWithdrawBitbay1;
    var array2 = showWithdrawBitbay2;
    var bitbayWD = array1.concat(array2)
    return bitbayWD
}

var showWithdrawsBitbay = bitbayWithdraws();
console.log(showWithdrawsBitbay)