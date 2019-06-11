function getFibonacciSeq(){
   count=5;
   n1=0,n2=1;
   n3=null;
   var  inkk= document.getElementById('input-id-val').value;
    console.log(n1)
    console.log(n2)
    document.write(n1)
    document.write(n2)
    for(i=2;i<count;i++){
      n3=n1+n2;
      n1=n2;    
      n2=n3;    
      console.log(n3);
      document.write(n3)
    }
    }