const input = require('sync-input')

let supplies = {
    water: 400,
    milk: 540,
    coffee: 120,
    cups: 9,
    money: 550
};

let materials = {
    "espresso": {
        water: 250,
        milk: 0,
        coffee: 16,
        cups: 1,
        money: 4
    },
    "latte": {
        water: 350,
        milk: 75,
        coffee: 20,
        cups: 1,
        money: 7
    },
    "cappuccino": {
        water: 200,
        milk: 100,
        coffee: 12,
        cups: 1,
        money: 6
    },
    "special": {
        water: 200,
        milk: 100,
        coffee: 0,
        cups: 0,
        money: 5
    }
};

let drinks = ["espresso", "latte", "cappuccino", "special"];

function stateSupplies() {
    console.log(`The coffee machine has:
${supplies.water} ml of water
${supplies.milk} ml of milk
${supplies.coffee} g of coffee beans
${supplies.cups} disposable cups
$${supplies.money} of money`);
}

function action() {
    console.log("Write action (buy, fill, take, remaining, exit):");
    do{
        command = input();
        switch (command) {
            case "buy":
                buy();
                break;
            case "fill":
                fill();
                break;
            case "take":
                take();
                break;
            case "remaining":
                stateSupplies()
                break;
            case "exit":
                break;
        }
    }while(command !== "exit")
}

function buy() {
    console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, 4 - special:");
    let order = input();
    if(order === "back"){
        return;
    }
    let drink = drinks[Number(order) - 1];
    if (canMake(drink)){
        let cost = materials[drink];
        console.log(cost);
        supplies.water -= cost.water;
        supplies.milk -= cost.milk;
        supplies.coffee -= cost.coffee;
        supplies.cups -= cost.cups;
        supplies.money += cost.money;
    }
}

function fill() {
    console.log("Write how many ml of water you want to add:");
    supplies.water += Number(input());
    console.log("Write how many ml of milk you want to add:");
    supplies.milk += Number(input())
    console.log("Write how many grams of coffee beans you want to add:");
    supplies.coffee += Number(input())
    console.log("Write how many disposable coffee cups you want to add:");
    supplies.cups += Number(input())
}

function take(){
    console.log(`I gave you $${supplies.money}`);
    supplies.money = 0;
}

function canMake(drink){
    flag = true;
    cost = materials[drink];
    if(supplies.water - cost.water < 0){
        flag = false;
        console.log("Sorry, not enough water!")
    }
    if(supplies.milk - cost.milk < 0){
        flag = false;
        console.log("Sorry, not enough milk!")
    }
    if(supplies.coffee - cost.coffee < 0){
        flag = false;
        console.log("Sorry, not enough coffee beans!")
    }
    if(supplies.cups - cost.cups < 0){
        flag = false;
        console.log("Sorry, not enough cups!")
    }
    return flag;
}

action();