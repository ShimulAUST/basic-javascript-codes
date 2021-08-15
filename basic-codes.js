//function for seerToMon
function seerToMon(seer) {
    if (typeof seer == 'number') {
        if (seer >= 0) {
            return seer / 40;
        }
        else {
            return "Please enter a positive value in seer";
        }
    }
    else {
        return "Please enter a numeric value";
    }
}
//function for totalSales
function totalSales(numberOfShirt, numberOfPant, numberOfShoes) {

    if (typeof numberOfShirt == 'number' && typeof numberOfPant == 'number' && typeof numberOfShoes == 'number') {
        if (numberOfShirt >= 0 && numberOfPant >= 0 && numberOfShoes >= 0) {
            let priceOfShirt = 100, priceOfPant = 200, priceOfShoe = 500;
            return ((priceOfShirt * numberOfShirt) + (priceOfPant * numberOfPant) + (priceOfShoe * numberOfShoes));
        }
        else {
            return "Please enter a positive value";
        }
    }
    else {
        return "Please enter  numeric values";
    }
}
//function for deliveryCost
function deliveryCost(numberofDeliveryProducts) {
    if (typeof numberofDeliveryProducts == 'number' && numberofDeliveryProducts >= 0) {

        if (numberofDeliveryProducts > 0 && numberofDeliveryProducts <= 100) {
            return numberofDeliveryProducts * 100;
        }
        else if (numberofDeliveryProducts > 100 && numberofDeliveryProducts < 200) {
            let firsthundred = 100 * 100;
            let temp = numberofDeliveryProducts - 100;
            let restDeliveries = temp * 80;

            return firsthundred + restDeliveries;
        }
        else if (numberofDeliveryProducts >= 200) {
            let firsthundred = 100 * 100;
            let secondhundred = 100 * 80;
            let temp = numberofDeliveryProducts - 200;
            let restDeliveries = temp * 50;
            return firsthundred + secondhundred + restDeliveries;
        }
    }
    else {
        return "Please enter a valid numeric value or positive number";
    }

}
//function for perfectFriend
function perfectFriend(nameArray) {
    for (const name of nameArray) {
        if (name.length == 5) {
            return name;
        }
    }
}




//for seer to mon the input and output
let seer = 80;
let mon = seerToMon(seer);
console.log(seer, "seer = ", mon, " mon");

//for totalSales input and output
let numberOfShirt = 5, numberOfPant = 5, numberOfShoes = "a";
let totalSale = totalSales(numberOfShirt, numberOfPant, numberOfShoes);
console.log("Total Sales: ", totalSale);

//for totalDeliveryCost input and output
let numberOfProcducts = 200;
let totalDeliveryCost = deliveryCost(numberOfProcducts);
console.log(totalDeliveryCost);


//perfectfriend input and output
let nameOfFriends = ["Amit", "Fahima", "Shimul", "Rubel", "Zakia"];
let perfectFriendName = perfectFriend(nameOfFriends);
console.log(perfectFriendName);
