function deepEqual(thing1, thing2 {
	if ( (typeof thing1 == "object" && thing1 != null) &&
		 (typeof thing2 == "object" && thing2 != null) )
    {
	    
	
	
}





/*
Your test for whether you are dealing with a real object will look something like 
typeof x == "object" && x != null. Be careful to compare properties only when both
 arguments are objects. 
 In all other cases you can just immediately return the result of applying ===.

Use Object.keys to go over the properties. 
You need to test whether both objects have the same set of property names and 
whether those properties have identical values. One way to do that is to ensure 
that both objects have the same number of properties (the lengths of the property 
lists are the same). And then, when looping over one of the object’s properties 
to compare them, always first make sure the other actually has a property by that name.
 If they have the same number of properties and all properties in one also exist 
 in the other, they have the same set of property names.

Returning the correct value from the function is best done by immediately returning 
false when a mismatch is found and returning true at the end of the function.

EXAMPLE
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
*/