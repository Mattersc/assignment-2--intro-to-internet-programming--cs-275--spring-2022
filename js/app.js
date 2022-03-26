function myFunction() {
var RiceRecipe = prompt("Would you like to cook White rice or Sprouted California rice?", "White rice");
if (RiceRecipe != null) {
    document.getElementById("Recipe").innerHTML ="You have selected what you want to cook";
}
var RiceAmount = prompt("How many cups of rice would you like to cook?", "1");
if (RiceRecipe != null) {
    document.getElementById("Recipe").innerHTML ="You have selected no amount to cook";
}
if(RiceRecipe=="White rice")
    document.getElementById("Recipe").innerHTML=`Combine ${RiceAmount} cups of rice with ${RiceAmount*2} cups of water and ${RiceAmount} Tbsp olive oil. Bring to a boil, then reduce heat to the lowest setting. Cook for about ${(18+((RiceAmount-1)*10))} minutes.`;
else if(RiceRecipe=="Sprouted California rice")
    document.getElementById("Recipe").innerHTML=`Combine ${RiceAmount} cups of rice with ${RiceAmount*1.75} cups of water or broth and ${RiceAmount} Tbsp olive oil. Bring to a boil and stir once to mix. Reduce heat to low, cover with a tight-fitting lid and cook for "+(25+((RiceAmount-1)*10))+" minutes. Remove from heat and let stand for "+5*RiceAmount+" minutes. Fluff with a fork and serve.`;
else
    document.getElementById("Recipe").innerHTML="Please fill in every option ";
}

window.onload = () => {
    document.querySelector("[data-butt]").addEventListener("click",myFunction);
};
