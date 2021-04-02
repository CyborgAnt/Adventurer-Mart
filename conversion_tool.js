// series of functions, converting between copper, silver, and gold pieces
// using 'switch-cases'

var coinToConvert = prompt ("Enter the coin conversion you want to use: \n1. Copper to Silver\n2. Copper to Gold\n3. Silver to Copper\n4. Silver to Gold\n5. Gold to Copper\n6. Gold to Silver");
switch(coinToConvert) {
    case 1:
        // copper-to-silver
        function copperToSilver () {
            var copper = prompt ("Enter your amount of Copper Pieces: ");
            let silver = copper / 20;
            let copp = copper % 20; 
            document.getElementById("coins").innerHTML = copper + "copper pieces (CP) equals" + silver + " silver pieces (SP) plus" + copp + " CP.";
        }
        break;
    case 2:
        // copper-to-gold
        function copperToGold () {
            var copper = prompt ("Enter your amount of Copper Pieces: ");
            let gold = copper / 400;
            let copp = copper % 400; 
            document.getElementById("coins").innerHTML = copper + "copper pieces (CP) equals" + gold + "gold pieces (GP) plus" + copp + "CP.";
        }
        break;
    case 3:
        // silver-to-copper
        function silverToCopper () {
            var silver = prompt ("Enter your amount of Silver Pieces (SP): ");
            let copper = silver * 20;
            document.getElementById("coins").innerHTML = silver + "SP equals" + copper + "pieces (CP).";
        }
        break;
    case 4:
        // silver-to-gold
        function silverToGold () {
            var silver = prompt ("Enter your amount of Silver Pieces (SP): ");
            let gold = silver / 20;
            let silv = silver % 20; 
            document.getElementById("coins").innerHTML = silver + "pieces equals" + gold + "pieces plus" + silv + " silver pieces.";
        }
        break;
    case 5:
        // gold-to-silver    
        function goldToSilver () {
            var gold = prompt ("Enter your amount of Gold Pieces (GP): ");
            let silver = document.getElementById("coins").innerHTML = window.alert(gold + "pieces equals" + silver + "silver pieces.");
        }        
        break;
    case 6:
        // gold-to-copper
        function goldToCopper () {
        var gold = prompt ("Enter your amount of Gold Pieces (GP): ");
        let copper = gold * 400; 
        window.alert(gold + "pieces equals" + copper + "Copper pieces.");
        }
        break;
    default:
        document.write("I'm not sure what you are trying to convert.");
        break;
}