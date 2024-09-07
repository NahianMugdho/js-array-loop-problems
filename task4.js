const statement = 'I am a hard working person'
new_s = statement.split(' ')
console.log(new_s)
let result = ''
const r =' '
for(let i=new_s.length-1;i>=0;i--)
    {
        result = result + r+new_s[i];
    
    }
console.log(result)