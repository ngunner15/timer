const args = process.argv.slice(2);

const timer = function(time) {
  for (let i = 0; i < time.length; i++) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, args[i] * 1000);
  }
};

timer(args);