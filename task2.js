const numbers = [12, 98, 5, 41, 23, 78, 46];
const new_num=[];
let i = 0;
while(i<numbers.length)
{
    n = numbers[i];
    if (n%2==0)
    {
        new_num.push(n)
    }
    i++;

}
console.log(new_num)