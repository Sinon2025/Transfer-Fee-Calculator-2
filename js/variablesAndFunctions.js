//FEES
var zbWithdrawFees = [0.001, 0.01, 0.005, 0.1, 0.002, 0.0006];
var zbTakerMakerFees = [0.2];

var BitbayTakerFees = [0.43, 0.42, 0.41, 0.4, 0.39, 0.38, 0.37, 0.36, 0.35, 0.34, 0.33, 0.32, 0.31, 0.3, 0.29, 0.28, 0.27, 0.26, 0.25];
var BitBayMakerFees = [0.3, 0.29, 0.28, 0.28, 0.27, 0.26, 0.25, 0.25, 0.24, 0.23, 0.23, 0.22, 0.21, 0.21, 0.2, 0.19, 0.18, 0.18, 0.17];
var BitBayTresholds = [1250, 3750, 7500, 10000, 15000, 20000, 25000, 37500, 50000, 75000, 10000, 15000, 20000, 25000, 37500, 50000, 62500, 87500, 87500];
var BitBayWithdrawFees = [0.00045, 0.005, 0.00126, 0.2, 0.005, 0.001];


//CURRENCY PAIRS AVALIBLE ON BITBAY, ZB
var currencyPairsBitbay = [
					"LTCBTC", "ETHBTC",
					"BCCBTC", "XRPBTC" , "DASHBTC",
					];

var currencyPairsZB = [
							"ltc_btc", "eth_btc",
							"bcc_btc" ,"xrp_btc",
							 "dash_btc"							
							];
 var currency = ["LTC", "ETH", "BCC", "XRP", "DASH"];

 ////////////////////////////////////////////////////////////////////

 function totalAsks(bitbayAsks){
	var bitbayTotalAsks = [];
	// console.log("dupa")
	console.log('bitbayAsks',bitbayAsks)
	var a = bitbayAsks;
	for (var i=0; i<currencyPairsBitbay.length; i++){
		var sum = 0;
		for (var y=0; y<a[i].length; y++){
			sum = sum + a[i][y][1];
			// console.log(sum)			
		}
		bitbayTotalAsks.push(sum);
		// console.log(bitbayTotalAsks)
	}
	console.log('sumbitbayAsks',bitbayTotalAsks)
	return bitbayTotalAsks
	
}


function exchangeAverage(bitbayAsks){
	var exchangeAvg = [];
	for (let i=0; i<currencyPairsBitbay.length; i++){
		var sum = 0;
		for (let y=0; y<10; y++){
			sum = sum + bitbayAsks[i][y][0];
			// console.log(sum)			
		}
		exchangeAvg.push(sum/10);
		// console.log(exchangeAvg)
	}
	console.log('exchangeAverage',exchangeAvg)
	return exchangeAvg
}

function checkAsksAndBuy(total, sumBitbayAsks, average){
	var test = [];
	var buySum = [];
	var buySumMinusFee = [];
	for (let i=0; i<currencyPairsBitbay.length; i++){
		if ((sumBitbayAsks[i]*average[i]) > total){
			var help = (sumBitbayAsks[i]*average[i]);
			test.push(help)
		} else {
			test.push(0)
		}
	}

	for (let i=0; i<currencyPairsBitbay.length; i++){
		if(test[i] == 0){
			buySum.push(0);
			buySumMinusFee.push(0);
		} else {
			buySum.push(total/average[i])
		}
	}
	console.log('test',test);
	console.log('buysum',buySum);
	return [test,buySum]
}

function avergeOffer(sumBitbayAsks, bitbayAsks){
	var countTable = []
	for (var i=0; i<currencyPairsBitbay.length; i++){
		countTable.push(sumBitbayAsks[i]/bitbayAsks[i].length)
	}
	console.log('avergeOffer',countTable);
	return countTable
}


function countOffers(totalbought, avgOff){
	var countOffer = [];
	for (var i=0; i<currencyPairsBitbay.length; i++){
		countOffer.push(totalbought[i]/avgOff[i])
	}
	console.log('countOffers',countOffer)
	return countOffer
}

function totalValueMinusWithdrawFees(totalbought, countedOffers, avgOff){
	var totalMinusWD =[];
	for (var i=0; i<currencyPairsBitbay.length; i++){
		var x = totalbought[i];
		var y = countedOffers[i];
		var z = avgOff[i]*(BitbayTakerFees[1]/100);
		var v = BitBayWithdrawFees[i];
		var complete = x - (y*z) - v;
		totalMinusWD.push(complete)
		// totalMinusWD.push(complete*average[i])
	}
	console.log('value-fees',totalMinusWD)
	return totalMinusWD
}


function totalBids(ZBBids){
	var ZBTotalBids = [];
	for (let i=0; i<currencyPairsZB.length; i++){
		var sum = 0;
		for (let y=0; y<ZBBids[i].length; y++){
			sum = sum + ZBBids[i][y][1];
			// console.log(sum)			
		}
		ZBTotalBids.push(sum);
	}
	console.log('ZBbids',ZBTotalBids)
	return ZBTotalBids
}


function bidsTester(finalValueLeft, sumZBBids){
	testBids = [];
	for (let i=0; i<currencyPairsZB.length; i++){
		if ((finalValueLeft[i] > sumZBBids[i]) || (finalValueLeft[i] < 0)) {
			testBids.push(0);
		} else {
			testBids.push(sumZBBids[i])
		}
	}
	console.log('bidsTest',testBids)
	return testBids
}


function exchangeAverageBids(ZBBids){
	var exchangeAvgB = [];
	for (let i=0; i<currencyPairsZB.length; i++){
		var sumb = 0;
		for (let y=0; y<10; y++){
			sumb = sumb + ZBBids[i][y][0];
			// console.log(sumb)			
		}
		exchangeAvgB.push(sumb/10);
	}
	console.log('exchangeAverageBids',exchangeAvgB)
	return exchangeAvgB
}

function averageOfferBids(sumZBBids, ZBBids){
	var countTableBids = []
	for (var i=0; i<currencyPairsZB.length; i++){
		countTableBids.push(sumZBBids[i]/ZBBids[i].length)
	}
	console.log('AvgOfferBids', countTableBids)
	return countTableBids
}

function countOffersBids(totalbought, avgOffBids){
	var countOfferB = [];
	for (var i=0; i<currencyPairsZB.length; i++){
		countOfferB.push(totalbought[i]/avgOffBids[i])
	}
	console.log('counterOffersBids', countOfferB)
	return countOfferB
}


function totalValueAfterTransfer(totalbought, countedOffers, avgOffBids, average){
	var totalTransfer =[];
	for (var i=0; i<currencyPairsZB.length; i++){
		var x = totalbought[i];
		var y = countedOffers[i];
		var z = avgOffBids[i]*(zbTakerMakerFees[0]/100);
		var complete = x - (y*z);
		totalTransfer.push(complete*average[i])
	}
	console.log('finalValue', (totalTransfer))
	var bestCurrency = Math.max.apply(Math,totalTransfer);
	var index = totalTransfer.indexOf(Math.max(...totalTransfer));
	console.log('bestcurrency', bestCurrency);
	console.log('index', index)

	return totalTransfer
}