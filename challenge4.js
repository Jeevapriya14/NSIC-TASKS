function reverse(myname){
    reversed=''
    for(i=myname.length-1;i>=0;i--){
        reversed+=myname[i]
    }return reversed
}
myname='Jeevapriya'
console.log(reverse(myname))