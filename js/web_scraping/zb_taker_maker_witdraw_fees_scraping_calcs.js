
//BTC
var string1 = x[1];
var slicer1 = string1.slice(70,75);
var WDfee1 = Number(slicer1)
console.log(WDfee1)

//ETH
var string2 = x[4];
var slicer2 = string2.slice(64,68);
var WDfee2 = Number(slicer2)
console.log(slicer2)
console.log(WDfee2)

//LTC
var string3 = x[3];
var slicer3 = string3.slice(67,72);
var WDfee3 = Number(slicer3)
console.log(slicer3)
console.log(WDfee3)

//XRP
var string4 = x[10];
var slicer4 = string4.slice(65,68);
var WDfee4 = Number(slicer4)
console.log(slicer4)
console.log(WDfee4)

//DASH
var string5 = x[12];
var slicer5 = string5.slice(66,71);
var WDfee5 = Number(slicer5)
console.log(slicer5)
console.log(WDfee5)

//BCC
var string6 = x[2];
var slicer6 = string6.slice(67,73);
var WDfee6 = Number(slicer6)
console.log(slicer6)
console.log(WDfee6)

//TAKERMAKERFEE
var string7 = x[1];
var slicer7 = string7.slice(16,19);
var TMfee = Number(slicer7);
console.log(TMfee)



function feesSplitZB(){
	var zbwd = [WDfee1,WDfee2,WDfee3,WDfee4,WDfee5,WDfee6];
	return zbwd
}

var zbWithdraw = feesSplitZB();
console.log(zbWithdraw)

function takerMakerFeeZB(){
	var takMakFee = [TMfee];
	return takMakFee;
}

var zbTakerMakerFee = takerMakerFeeZB()
console.log(zbTakerMakerFee)


