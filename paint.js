const Paint = function(litres){
    this.litres = litres
}

Paint.prototype.canEmpty = function(){
    if (paint.litres <= 0){
        return 'empty'}
    else {
        return 'not empty'; 
}



// if (1>0) {
//         var message = "1 is greater than 0";}
//     else if (1 == 0){
//         var message = "1 is equal to 0";}
//     else {
//         var message = "1 is not greater than 0";
//     }


module.exports = Paint;

