function findeven(val)
 {
   for(var i=0;i<val.length;i++)
    { 
        if(val[i]%2==0)
         console.log(val[i]);
           
    }  
 }
 function divarray(val)
  {
      console.log('div by 3 & 5');
      for(var i=0;i<val.length;i++)
       {
           if(val[i]%3==0 && val[i]%5==0)
            console.log(val[i]);
       }
  }

 var arr=[3,4,6,8,9,15,20];
   findeven(arr);
   divarray(arr);
