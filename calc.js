     
        function addtolist() {
            var v1=document.getElementById("number");
            var v2=document.getElementById("numberList");
            v2.innerHTML+="<br/>"+v1.value;
            
        }
        function reset(){
            document.getElementById('numberList').innerHTML="";
        }
    
   
  
