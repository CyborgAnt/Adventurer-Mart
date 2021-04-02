// series of functions, converting between copper, silver, and gold pieces

// copper-to-silver
function copperToSilver () {
    var copper = prompt ("Enter your amount of Copper Pieces: ");
    let silver = copper / 20;
    let copp = copper % 20; 
    document.getElementById("convertC").innerHTML = 
    copper + "copper pieces (CP) equals" + silver + " silver pieces (SP) plus" + copp + " CP.";
}

// copper-to-gold
function copperToGold () {
    var copper = prompt ("Enter your amount of Copper Pieces: ");
    let gold = copper / 400;
    let copp = copper % 400; 
    document.getElementById("convertCP").innerHTML = 
    copper + "copper pieces (CP) equals" + gold + "gold pieces (GP) plus" + copp + "CP.";
}

// silver-to-copper
function silverToCopper () {
    var silver = prompt ("Enter your amount of Silver Pieces (SP): ");
    let copper = silver * 20;
    document.getElementById("convertSP").innerHTML = 
    silver + "SP equals" + copper + "pieces (CP).";
}

// silver-to-gold
function silverToGold () {
    var silver = prompt ("Enter your amount of Silver Pieces (SP): ");
    let gold = silver / 20;
    let silv = silver % 20; 
    document.getElementById("convertSP").innerHTML = 
    silver + "pieces equals" + gold + "pieces plus" + silv + " silver pieces.";
}

// gold-to-silver
function goldToSilver () {
    var gold = prompt ("Enter your amount of Gold Pieces (GP): ");
    let silver = gold * 20;
    document.getElementById("convertGP").innerHTML = 
    gold + "pieces equals" + silver + "silver pieces.";
}

// gold-to-copper
function goldToCopper () {
    var gold = prompt ("Enter your amount of Gold Pieces (GP): ");
    let copper = gold * 400; 
    document.getElementById("convertGP").innerHTML = 
    gold + "pieces equals" + copper + "Copper pieces.";
}