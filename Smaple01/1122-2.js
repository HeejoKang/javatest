var result = 0;

console.time('duration');
for(var i = 1; i < 100000; i++)
{
    result += i;
}
console.timeEnd('duration');