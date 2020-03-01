function Pizza( large,medium,small){
this.large = large;
this.medium = medium;
this.small = small;

}
Pizza.prototype.getLargePiza = function(){
    return this.large
}
Pizza.prototype.getMediumPiza = function(){
    return this.medium
}
Pizza.prototype.getSmallpiza = function(){
    return this.small
}


function Tooping (topping1,topping2,topping3){
   this.topping1 = topping1 
   this.topping2 = topping2
   this.topping3 = topping3 
}

Tooping.prototype.getToppingFirst = function(){
    return this.topping1
}
Tooping.prototype.getToppingSecond = function(){
    return this.topping2
}
Tooping.prototype.getToppingThird = function(){
    return this.topping3
}
var topping1 = new Tooping(350,450,400)
var topping2 = new Tooping(250,200,200)
var topping3 = new Tooping(400,300,200)
var topping4 = new Tooping(300,250,200)
var topping5 = new Tooping(300,200,250)

var pizza1 =  new Pizza(1200,800,500)
var pizza2 =  new Pizza(2000,1500,1000)
var pizza3 =  new Pizza(1500,1100,750)
var pizza4 =  new Pizza (2000,1300,850)
var pizza5 =  new Pizza (2500,1800,1000)





$(document).ready(function(){
$("#tryOut").hover(function(){
$("#welcome").slideToggle(1000)
})

$("#lg1").click(function(event){
    event.preventDefault()
$("#para").append("<h2> <li>HAWAIAN CRUST LARGE ORDER: " +  pizza1.getLargePiza() + " </li> <h2>")
})

$("#md1").click(function(event){
    event.preventDefault()
$("#para").append("<h2><li> HAWAIAN CRUST MEDIUM ORDER: " +  pizza1.getMediumPiza() + "</li></h2>")
$(last) +=(this)
})

$("#sm1").click(function(event){
    event.preventDefault()
$("#para").append("<h2><li> HAWAIAN CRUST SMALL ORDER: " +  pizza1.getSmallpiza() + "</li></h2>")
})
$("#lg2").click(function(event){
    event.preventDefault()
$("#para").append("<h2><li>  CHEESE BURGER CRUST LARGE ORDER : " +  pizza2.getLargePiza() + "</h2></li>")
})

$("#md2").click(function(event){
    event.preventDefault()
$("#para").append("<h2><li>CHEESE BURGER CRUST MEDIUM ORDER : " +  pizza2.getMediumPiza() + "</h2></li>")
})

$("#sm2").click(function(event){
    event.preventDefault()
$("#para").append("<h2><li>CHEESE BURGER CRUST SMALL ORDER : " + pizza2.getSmallpiza() + "</h2></li>" )
})
$("#lg3").click(function(event){
    event.preventDefault()
$("#para").append("<h2><li>MEAT DELUXE CRUST LARGE  ORDER :  " + pizza3.getLargePiza() + "</h2></li>" )
})

$("#md3").click(function(event){
    event.preventDefault()
$("#para").append(" <h2><li> MEAT DELUXE CRUST MEDIUM ORDER :  " + pizza3.getMediumPiza() + "</h2></li>" )
})

$("#sm3").click(function(event){
    event.preventDefault()
$("#para").append("<h2><li> MEAT DELUXE CRUST SMALL ORDER :  " + pizza3.getSmallpiza() + "</h2><</li>")
})
$("#lg4").click(function(event){
    event.preventDefault()
$("#para").append("<h2><li> CHICKEN MACON BBQ LARGE ORDER : " + pizza4.getLargePiza() + "</h2><li>" )
})

$("#md4").click(function(event){
    event.preventDefault()
$("#para").append("<h2><li> CHICKEN MACON BBQ MEDIUM ORDER : " + pizza4.getMediumPiza() + "</h2><li>" )
})

$("#sm4").click(function(event){
    event.preventDefault()
$("#para").append("<h2><li> CHICKEN MACON BBQ SMALL ORDER : " + pizza4.getSmallpiza() + "</h2><li>")
})
$("#lg5").click(function(event){
    event.preventDefault()
$("#para").append("<h2><li> VEG FEST LARGE ORDER :  " + pizza5.getLargePiza()+ "</h2><li>" )
})

$("#md5").click(function(event){
    event.preventDefault()
$("#para").append("<h2><li> VEG FEST MEDIUM ORDER :  " + pizza5.getMediumPiza()+ "</h2><li>" )
})

$("#sm5").click(function(event){
    event.preventDefault()
$("#para").append("<h2><li> VEG FEST SMALL ORDER : " + pizza5.getSmallpiza() + "</h2><li>" )
})

$("#tp1").click(function(event){
    event.preventDefault()
$("#para").append("<h2> <li>Beef Mushroom Toopings: " +  topping1.getToppingFirst() + " </li> <h2>")

})

$("#tp2").click(function(event){
    event.preventDefault()
$("#para").append("<h2><li> Black Olives Toppings: " +  topping1.getToppingSecond() + "</li></h2>")
$(last) +=(this)
})

$("#tp3").click(function(event){
    event.preventDefault()
$("#para").append("<h2><li> Sausage Toppings: " + topping1.getToppingThird() + "</li></h2>")
})
$("#tp4").click(function(event){
    event.preventDefault()
$("#para").append("<h2><li>  Chicken Toppings : " +  topping2.getToppingFirst() + "</h2></li>")
})

$("#tp5").click(function(event){
    event.preventDefault()
$("#para").append("<h2><li> Garlic Toppings : " +  topping2.getToppingSecond() + "</h2></li>")
})

$("#tp6").click(function(event){
    event.preventDefault()
$("#para").append("<h2><li>Spinach Toppings: " + topping2.getToppingThird() + "</h2></li>" )
})
$("#tp7").click(function(event){
    event.preventDefault()
$("#para").append("<h2><li>Onion Toppings:  " + topping3.getToppingFirst() + "</h2></li>" )
})

$("#tp8").click(function(event){
    event.preventDefault()
$("#para").append(" <h2><li>Eggplant Toppings :  " + topping3.getToppingSecond() + "</h2></li>" )
})

$("#tp9").click(function(event){
    event.preventDefault()
$("#para").append("<h2><li> Broccoli Toppings:  " + topping3.getToppingThird() + "</h2><</li>")
})
$("#tp10").click(function(event){
    event.preventDefault()
$("#para").append("<h2><li> Green Peppers : " + topping4.getToppingFirst() + "</h2><li>" )
})

$("#tp11").click(function(event){
    event.preventDefault()
$("#para").append("<h2><li> Oregano : " + topping4.getToppingSecond() + "</h2><li>" )
})

$("#tp12").click(function(event){
    event.preventDefault()
$("#para").append("<h2><li> Basil Toppings : " + topping4.getToppingThird() + "</h2><li>")
})
$("#tp13").click(function(event){
    event.preventDefault()
$("#para").append("<h2><li> Extra Chesse Toppings :  " + topping5.getToppingFirst()+ "</h2><li>" )
})

$("#tp14").click(function(event){
    event.preventDefault()
$("#para").append("<h2><li> Pepperoni Toppings:  " + topping5.getToppingSecond()+ "</h2><li>" )
})

$("#tp15").click(function(event){
    event.preventDefault()
$("#para").append("<h2><li> Bacon Toppings : " + topping5.getToppingThird() + "</h2><li>" )
})

$("#forme").submit(function(event){
event.preventDefault()
 $(".hidden").toggle(1000)
})

})



