let map = {
    "USD" : 1,
    "JPY" : 113.5,
    "EUR" : 0.89,
    "RUB" : 74.36,
    "GBP" : 0.75
};
console.log(`Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP`
);
do{
    console.log(`What do you want to do?
1-Convert currencies 2-Exit program`);
    const input = require('sync-input');
    let command = Number(input());
    if(command !== 1 && command !== 2){
        console.log("Unknown input");
        continue;
    }
    if(command === 1){
        exchangeCurrency(map);
    }else{
        console.log("Have a nice day!");
        break;
    }
}while(true)


function exchangeCurrency(map){
    while (true){
        console.log("What do you want to convert?")
        const input = require('sync-input');
        let source = input("From: ").toUpperCase();
        if(map[source]){
            let dest = input("To: ").toUpperCase();

            if(map[dest]){

                let amount = Number(input("Amount: "));
                let res = 0;
                if(map[source] && map[dest]){
                    if(isNaN(amount)){
                        console.log("The amount has to be a number");
                    }
                    else if(amount < 1){
                        console.log("The amount can not be less than "+1);
                    }
                    else{
                        res = (amount / map[source]);
                        res = (res * map[dest]).toFixed(4);
                        console.log(`Result: ${amount} ${source} equals ${res} ${dest}`);
                        break;
                    }
                }
            }
            else {
                console.log("Unknown currency");
            }
        }
        else {
            console.log("Unknown currency");
        }
    }
}