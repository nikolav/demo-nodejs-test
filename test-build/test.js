// sums all arguments
function $78910c13b63345e7$var$sum(...args) {
    const res = args.reduce((accu, curr)=>{
        accu += curr;
        return accu;
    }, 0);
    return res;
}
var $78910c13b63345e7$export$2e2bcd8739ae039 = $78910c13b63345e7$var$sum;


console.log("testing /src/sum");
if (10 !== $78910c13b63345e7$export$2e2bcd8739ae039(1, 2, 3, 4)) throw Error("Failed /src/sum");
console.log("Success /src/sum");


//# sourceMappingURL=test.js.map
