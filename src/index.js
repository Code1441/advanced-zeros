module.exports = function getZerosCount(number, base) {
     var i = 1, count = 0;
     var simpleDel = [], del = 2;
     var numberDel = base;
     while(numberDel>1){
         if(numberDel%del==0) {
             simpleDel.push(del);
             numberDel /=del;
         }
         else del ++;
     }
     var mainDel = simpleDel[simpleDel.length-1];
     var stepen = 0;
     simpleDel.forEach(function(el){
         if(el == mainDel) stepen++;
     });
      while(Math.pow(mainDel,i)<number){
          count+=Math.floor(number /Math.pow(mainDel,i));
          i++;
      }
      return Math.floor(count/stepen);
}
