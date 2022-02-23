// sums all arguments
function sum(...args) {
  const res = args.reduce((accu, curr) => {
    accu += curr;
    return accu;
  }, 0);
  return res;
}

export default sum;
