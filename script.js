let m=prompt("enter the first number")
let n=prompt("enter the second number")
if(m>n){
    alert("0");
}
else{
    let sum=0
    for(let i=m;i<=n;i++){
        sum+=i*i*i
    }
    alert(sum)
}