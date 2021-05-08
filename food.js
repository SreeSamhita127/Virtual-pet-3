class Food{
    constructor(){
        this.image = loadImage("virtual pet images/Food Stock.png");
        this.foodstock = 0;
    }

display(){
 var x = 30, y = 80;

 imageMode(CENTER);

 if(this.foodstock != 0){
     for(var i=0;i < this.foodstock;i++){
         if(i%4 === 0){
             x = 30;
             y = y + 70;
         }
         image(this.image,x,y,60,60);
         x = x+50;
     }
 }
}

updateStock(foodstock){
    this.foodstock = foodstock;
}

} 