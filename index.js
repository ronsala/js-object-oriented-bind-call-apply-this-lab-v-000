
function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg);
}

function setThisWithApply(fn, obj, arr) {
  return fn.apply(obj, arr);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  const newFn = functionToBeCopied.bind(thisValue);
  return newFn;
}