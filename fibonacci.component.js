function getFibonacciSeq(){
   count=5;
   n1=0,n2=1;
   n3=null;
   var digits = [];
   var  inkk= document.getElementById('input-id-val').value;
    digits.push(n1)
    digits.push(n2)
    for(i=2;i<count;i++){
      n3=n1+n2;
      n1=n2;    
      n2=n3;    
      digits.push(n3)
    }
    console.log(digits);
    document.write(digits)
    }