//TAKER FEE
function bitbayTakerFee(){
	takerFees = [];
	for(let i=0; i<parse.length; i+=3){
		var string = parse[i];
		var sliceIt = Number(string.slice(0,4));
		takerFees.push(sliceIt)
	}
	return takerFees
};

var showTakerBitbay = bitbayTakerFee();
console.log(showTakerBitbay)

//MAKER FEE
function bitbayMakerFee(){
	makerFees = [];
	for(let i=2; i<parse.length; i+=3){
		var string = parse[i];
		var sliceIt = Number(string.slice(0,4));
		makerFees.push(sliceIt)
	}
	return makerFees
};

var showMakerBitbay = bitbayMakerFee();
console.log(showMakerBitbay);

//TRESHOLDS 1/2
function bitbayTresholdsFirstHalf(){
	bitbayTH = [];
	for(let i=1; i<9; i+=3){
		var string = parse[i];
		var result = string.split(' ').join('')
		var sliceIt = Number(result.slice(1,5));
		bitbayTH.push(sliceIt);
	}
	return bitbayTH
};
var showThresholdsFirstBitbay = bitbayTresholdsFirstHalf();
console.log(showThresholdsFirstBitbay);

//TRESHOLDS 2/2
function bitbayTresholdsSecondHalf(){
	bitbayTHS = [];
	for(let i=10; i<parse.length; i+=3){
		var string = parse[i];
		var result = string.split(' ').join('')
		var sliceIt = Number(result.slice(1,6));
		bitbayTHS.push(sliceIt);
	}
	return bitbayTHS
};

var showThresholdsSecond = bitbayTresholdsSecondHalf();
console.log(showThresholdsSecond);

//TRESHOLDS FULL
function bitbayThresholds(){
	var array1 = showThresholdsFirstBitbay;
	var array2 = showThresholdsSecond;
	var bitbayTH = array1.concat(array2)
	return bitbayTH
}

var showThresholdsBitbay = bitbayThresholds();
console.log(showThresholdsBitbay)





