const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line){
  if (Number(line) / 1 !== NaN && line >= 0 && line <= 9) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, line * 1000);
  } else if (typeof line === 'string') {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, 1);
  } 
})

  process.on('exit', () => {
    console.log("Thanks for using me, ciao!");
  });