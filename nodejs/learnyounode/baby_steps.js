var out = 0

for (var i = 2; i < process.argv.length; i++)
  out += Number(process.argv[i]);

console.log(out)