/* -------------------------------------
                Problem 1 start
------------------------------------- */

function seerToMon(seer) {
    // check input valid or not //
    if (typeof seer!="number" || seer<0) {
    // This message will return when the input is invalid//
        return "Input must be a positive number";
    } else {
        
        var result = seer / 40;
        return result;
    }
}

var seer = seerToMon(25400);
console.log(seer);
/* -------------------------------------
                Problem 1 end
------------------------------------- */

/* -------------------------------------
                Problem 2 start
------------------------------------- */

function totalSales(shirtQuantity, pantQuantity, shoesQuantity) {
    // check input valid or not //
    if ((typeof shirtQuantity != "number" || shirtQuantity < 0) || (typeof pantQuantity != "number" || pantQuantity < 0) || (typeof shoesQuantity != "number" || shoesQuantity < 0)) {
        
        return "Input must be a positive number";
    } else {
        
        // product price //
        const perShirt = 100;
        const perPant = 200;
        const perShoe = 500;
     
        // price with quantity//
        const shirtCost = perShirt * shirtQuantity;
        const pantCost = perPant * pantQuantity;
        const shoeCost = perShoe * shoesQuantity;

        // total price //
        const total = shirtCost + pantCost + shoeCost;

        return total;
    
    }
}

var cart = totalSales(4, 1, 8);
console.log(cart);
/* -------------------------------------
                Problem 2 end
------------------------------------- */


/* -------------------------------------
                Problem 3 start
------------------------------------- */

function deliveryCost(tShirt) {
    if (typeof tShirt != "number" || tShirt < 0) {
        return "Input must be positive number";
    } else {
    
        // cost of quantity //
        const tSirtLessThan100 = 100;
        const tShirtbetween100and200 = 80;
        const tShirtMoreThan200 = 50;

        // tSirt Less Than 100//
        if (tShirt <= 100) {
            const cost = tShirt * tSirtLessThan100;
            return cost;
            // tSirt Less Than 200//
        } else if (tShirt <= 200) {
            const first100tShirt = 100 * tSirtLessThan100;
            const resttShirt = tShirt - 100;
            const resttShirtCost = resttShirt * tShirtbetween100and200;
            const totalCost = first100tShirt + resttShirtCost;
        
            return totalCost;
        }
            // tSirt more Than 200//
        else {
            const first100tShirt = 100 * tSirtLessThan100;
            const second100tShirt = 100 * tShirtbetween100and200;
            const rest3rdtShirt = tShirt - 200;
            const rest3rdtShirtCost = rest3rdtShirt * tShirtMoreThan200;
            const totalCost = first100tShirt + second100tShirt + rest3rdtShirtCost;
            return totalCost;
        }
    }

}
var costOfDelivery = deliveryCost(220);
console.log(costOfDelivery);
/* -------------------------------------
                Problem 3 end
------------------------------------- */

/* -------------------------------------
                Problem 4 start
------------------------------------- */
const  friendList = ["Shakib","Musfiq","Tamim","Mahmudullah","Mashrafe","Mehedi","Mustafizur"]
function perfectFriend(names) {
  
    for (const name of names) {
    //    find 1 element has character no 5//
        if (name.length == 5) {
            return name;

        } 
    }
    return "Not found 5 character name ";
   
}
var friend = perfectFriend(friendList)
console.log(friend);
/* -------------------------------------
                Problem 4 end
------------------------------------- */