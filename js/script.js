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



})



