module.exports = function zeros(expression) {
        
  let count2 = 0;
  let count5 = 0;
  let c2 = 0;
  let c5 = 0;
  
  let arr = expression.split('*');
      
  for (let i = 0; i < arr.length; i++) {
    
    let b = +parseInt(arr[i]);
    
    if (arr[i].includes('!!')) {      
      
      if ( b % 2 === 0 ) { // chetn
        let c = b / 2;       
        
        count2 += c;
        
        factorial(c); 
       
        count2 += c2;
        count5 += c5;          
        
      } else {		// nechetn      
        let d = ( b - 1 ) / 2;
        
        factorial(b);
        
        count5 += c5;
        
        factorial(d);
        
        count5 -= c5;            
      }
           
    } else {     
      factorial(b); 
      
      count2 += c2;
      count5 += c5; 
    }
  }
     
  function factorial(expr) {
    
    let a = +expr;
    c2 = 0;
    c5 = 0;
    
    while ( Math.floor(a) > 0) {                
      a = Math.floor( a / 5 ); 
      c5 += a; 
    } 
    
    a = +expr;
    
    while ( Math.floor(a) > 0) {               
      a = Math.floor( a / 2 );
      c2 += a; 
    }
    
    return c2, c5;  
  }
  
  return count2 > count5 ? count5 : count2; 
}
