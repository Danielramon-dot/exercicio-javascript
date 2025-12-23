let n1=Number(prompt('digite a primeira nota: '));
let n2 =Number(prompt('digite a segunda nota: '));
let n3 =Number(prompt('digite a terceira nota: '));
let n4 =Number(prompt('digite a quarta nota: '));

let m =(n1+n2+n3+n4)/4
console.log('sua média é: '+m.toFixed(2));
if(m>=7)console.log('parabens você está aprovado, aiiiiiiiii ');
else console.log('vix man,reprovou ');
