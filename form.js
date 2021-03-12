// renamed file   3-9-2021
// Building a form for the site

var potionForm = document.createElement("form");
potionForm.setAttribute("method", "post"); 
potionForm.setAttribute("action", "submit.php"); 

/* creating elements - START */
// Name
var fullname = document.createElement("input");     
fullname.setAttribute("type", "text");
fullname.setAttribute("name", "Name");
fullname.setAttribute("placeholder", "Name");
// Items - Sample 3/9
var product = document.createElement("input");     
product.setAttribute("type", "text");
product.setAttribute("name", "Item");
product.setAttribute("placeholder", "Item");


/* creating elements - END */

/* 'Submit' Button */
var submitB = document.createElement("input");     
submitB.setAttribute("type", "submit");
submitB.setAttribute("value", "Complete Order");

/* Appending Elements */
potionForm.appendChild(fullname);  
potionForm.appendChild(product); 
potionForm.appendChild(submitB); 

document.getElementsByTagName("body")[0].appendChild(potionForm); 