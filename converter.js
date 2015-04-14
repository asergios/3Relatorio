function callback_get_rate( data ) {
			obj = $.parseJSON(data);
			val = $("#value").val();
			
			total= val+" "+obj.currency_from+" equals "+(val*((1/obj.val1)*obj.val2)).toFixed(4)+" "+obj.currency_to;
			console.log(data);
			
			$( "#result" ).html( total );
		}
		
function get_rates() {
			cur_from = $("#currency_from").val();
			cur_to = $("#currency_to").val();
			$.get( "get_rates", { currency_from: cur_from, currency_to: cur_to})
				.done(callback_get_rate);
		}

get_rates();