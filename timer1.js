const args = process.argv.slice(2);

const timer = function(time) {
  for (let i = 0; i < time.length; i++) {
    if (Number(args[i]) / 1 !== NaN && args[i] >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, args[i] * 1000);
    }
  }
};

timer(args);