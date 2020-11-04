const input = process.argv.slice(2);

const timer = function() {
  for (let num of input) {
    if (num > 0) {  
      if (num === undefined) {
        
      } else if (num === NaN); {
          console.log();
      } if (num) { 
      setTimeout(() => {
        process.stdout.write('\x07' + '\n');
      }, num * 1000);
      }
} 

  }
  };

  timer(input);