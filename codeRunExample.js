const functionCall = `console.log(stringReveral("hi nick!"))`
const sourcecode = `function stringReveral(S) {	return S;};`;
const exec = `${sourcecode} ${functionCall}`;
let resultPromise = node.runSource(exec);
resultPromise
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });