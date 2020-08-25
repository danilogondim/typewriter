const sentence = "hello there from lighthouse labs";
let delay = 1;
let count = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
    count++;
    if (count === sentence.length) {
      process.stdout.write('\n');
    }
  }, delay * 50);
  delay++;
}