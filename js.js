



var currencies = ["EUR", "USD", "JPY", "BGN", "CZK", "DKK", "GBP", "HUF", "PLN", "RON", "SEK", "CHF", "NOK", "HRK", "RUB", "TRY", "AUD", "BRL", "CAD", "CNY", "HKD", "IDR", "ILS", "INR", "KRW", "MXN", "MYR", "NZD", "PHP", "SGD", "THB", "ZAR"];


for(i = 0; i<currencies.length;i=i+2){ 
	$.get( "get_rates", { currency_from: currencies[i], currency_to: currencies[i+1]})
				.done(callback_get_rate);
			}


function callback_get_rate( data ) {
			obj = $.parseJSON(data);
			total = "1 "+obj.currency_from + " = " + (1/obj.val1).toFixed(4)  +" €"+ "</br>" + "1 "+obj.currency_to + " = " + obj.val2 + " €"  + "</br>"
			$( "#id01" ).append( total );
		}



