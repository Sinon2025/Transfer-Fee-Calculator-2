//INITIAL FUNCTION FOR FEES SCRAPING FROM ZB MARKET
function zbFeesWD(){
	var fees = []
	$.get( 'https://www.zb.com/i/rate?item=6', function( html ) {
    $(html).find("tr").each( function(){
    	fees.push($(this).text())
    } )

} );
	 return fees
}

var x = zbFeesWD();
console.log(x)
