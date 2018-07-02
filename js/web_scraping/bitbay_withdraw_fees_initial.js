//INITIAL FUNCTION FOR WITHDRAW FEES SCRAPING
function bitbayFeesWD(){
	var fees = []
	$.get( 'https://bitbay.net/pl/tabela-oplat', function( html ) {
    $(html).find("li").each( function(){
    	fees.push($(this).text())
    } )

} );
	 return fees
}

var x = bitbayFeesWD();
console.log(x)
