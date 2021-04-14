console.log("Robert Baucus' JS Function Hoisting and First Class Function Demo\n");


console.log("Functions can be called before they are defined, whoopee!");

console.log("iWantToTellTheTruthButICanOnlyFib();");
iWantToTellTheTruthButICanOnlyFib();

function iWantToTellTheTruthButICanOnlyFib() {
	console.log("0 1 1 2 3 5 8 13 21 55 89 144 ...\n");
};


console.log("Function expressionscan't be hoisted: ");


console.log(purdyCube)

var purdyCube = function hoistMeACubeRoot() {
	return Math.cbrt(8);
};
	
	
