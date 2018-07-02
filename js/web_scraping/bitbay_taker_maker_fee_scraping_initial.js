//INITIAL FUNCTION FOR TAKER AND MAKER FEES SCRAPING
function bitbayFeesTH(){
	var fees = []
	$.get( 'https://bitbay.net/pl/tabela-oplat', function( html ) {
    $(html).find("tr").find("td").each( function(){
    	fees.push($(this).text())
    } )

} );
	 return fees
}

var parse = bitbayFeesTH()
console.log(parse)