

var currency= [
      {
        "currency": "USD",
        "rate": "1.0570"
      },
      {
        "currency": "JPY",
        "rate": "127.32"
      },
      {
        "currency": "BGN",
        "rate": "1.9558"
      },
      {
        "currency": "CZK",
        "rate": "27.383"
      },
      {
        "currency": "DKK",
        "rate": "7.4716"
      },
      {
        "currency": "GBP",
        "rate": "0.72440"
      },
      {
        "currency": "HUF",
        "rate": "297.38"
      },
      {
        "currency": "PLN",
        "rate": "4.0181"
      },
      {
        "currency": "RON",
        "rate": "4.4090"
      },
      {
        "currency": "SEK",
        "rate": "9.3331"
      },
      {
        "currency": "CHF",
        "rate": "1.0390"
      },
      {
        "currency": "NOK",
        "rate": "8.6130"
      },
      {
        "currency": "HRK",
        "rate": "7.5740"
      },
      {
        "currency": "RUB",
        "rate": "54.5370"
      },
      {
        "currency": "TRY",
        "rate": "2.7921"
      },
      {
        "currency": "AUD",
        "rate": "1.3824"
      },
      {
        "currency": "BRL",
        "rate": "3.2639"
      },
      {
        "currency": "CAD",
        "rate": "1.3386"
      },
      {
        "currency": "CNY",
        "rate": "6.5626"
      },
      {
        "currency": "HKD",
        "rate": "8.1919"
      },
      {
        "currency": "IDR",
        "rate": "13665.33"
      },
      {
        "currency": "ILS",
        "rate": "4.2130"
      },
      {
        "currency": "INR",
        "rate": "65.9100"
      },
      {
        "currency": "KRW",
        "rate": "1157.92"
      },
      {
        "currency": "MXN",
        "rate": "16.0487"
      },
      {
        "currency": "MYR",
        "rate": "3.8760"
      },
      {
        "currency": "NZD",
        "rate": "1.4059"
      },
      {
        "currency": "PHP",
        "rate": "47.147"
      },
      {
        "currency": "SGD",
        "rate": "1.4439"
      },
      {
        "currency": "THB",
        "rate": "34.415"
      },
      {
        "currency": "ZAR",
        "rate": "12.7464"
      },
 ]  

function myFunction(arr) {
    var out = '<table border="1" style="width:10%"><caption>1 EURO</caption>';
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<tr><td>' + arr[i].currency + '</td><td>' + arr[i].rate + '</td></tr>';
    }
    out += '</table>';
    document.getElementById("id01").innerHTML = out;
}

myFunction(currency)
