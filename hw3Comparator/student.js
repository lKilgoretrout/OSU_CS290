const DEBUG_MODE = true;
if (DEBUG_MODE) {debugger;}


// You are not permitted to change this in any way
function Student(name, major, yearInSchool, club) {
  this.name = name; // string, (e.g. "Jim", "Pam", "Michael")
  this.major = major; // string, (e.g. "Computer Science", "Art", "Business")
  this.yearInSchool = yearInSchool; // int, (e.g. 1, 2, 3, 4)
  this.club = club; // string, (e.g. "Improv", "Art")
}

var students = [
  new Student("Pam", "Art", 2, "Art"),
  new Student("Michael", "Business", 4, "Improv"),
  new Student("Dwight", "Horticulture", 1, "Karate"),
  new Student("Jim", "Sports Science", 2, "Guitar"),
  new Student("Angela", "Accounting", 4, "Cat"),
  new Student("Toby", "Human Resources", 3, "Photography")
];

// add the logMe function to the Student prototype:
Student.prototype.logMe = function() {
	/** 
	 * prints Student attributes, 
	 * if showClub==false, doesn't print club attribute
	 * function (Student, showClub)
	 */
	
		returnString = ""
		range = (showClub ? 4 : 3); // if showClub --> show all 4 attributes
		for (i=0; i<range; i++)		
		{
			returnString += Object.values(Student)[i] + " - ";
		}
};
	
/* This function sorts arrays using an arbitrary comparator. You pass it a comparator 
and an array of objects appropriate for that comparator and it will return a new array 
which is sorted with the largest object in index 0 and the smallest in the last index*/

// This implementation of Merge Sort inspired by Abhilash Kakumanu's verions at
//  https://stackabuse.com/merge-sort-in-javascript/
function mergeSort(comparator, array) 
{
  const half = array.length / 2;
  
  // Base case or terminating case
  if (array.length < 2)
  {
    return array;
  }
  
  const left = array.splice(0, half)
  return merge(comparator, mergeSort(left), mergeSort(array))
}

// helper function for mergeSort
function merge(comparator, left, right) 
{
    let arr = []
    
    while (left.length && right.length) {
        
		// drop that sweet custom comparator right in there
        if (comparator(right[0], left[0]) ) 
		{
            arr.push(left.shift())  
        } 
		else 
		{
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}

/* A comparator takes two arguments and uses some algorithm to compare them. If the first 
argument is larger or greater than the 2nd it returns true, otherwise it returns false.
Here is an example that works on integers*/
function exComparator( int1, int2)
{
    if (int1 > int2) 
	{
        return true;
    } 
	else 
	{
      return false;
    }
}

/* For all comparators if students are 'tied' according to the comparison rules then the order of 
those 'tied' students is not specified and either can come first*/

/* This compares two students based on their year in school. Sort in descending order.*/
function yearComparator(student1, student2) 
{
    if (Student1.yearInSchool > Student2.yearInSchool) 
	{
	    return true;
    }
    else
    {
        return false
    }		
}

/* This compares two students based on their major. It should be case insensitive and 
makes which are alphabetically earlier in the alphabet are "greater" than ones that 
come later (from A-Z).*/
function majorComparator(student1, student2) 
{
    if (Student1.major.toLowerCase() > Student2.major.toLowerCase()) 
	{
	    return true;
    }
    else
    {
        return false
    }		
}

/* This compares two students based on the club they're in. The ordering from "greatest" 
to "least" is as follows: improv, cat, art, guitar, (types not otherwise listed). 
It should be case insensitive. If two clubs are of equal type then the student who
has the higher year in school should be "greater."*/
function clubComparator(student1, student2) 
{
    // sort order for club types:  "improv" > "cat" > "art" > "guitar" > [any other club]
	s1Club = Student1.club.toLowerCase(); // values put into lowercase to standardize sorting
	s2Club = Student2.club.toLowerCase();
	if       (s1Club == "improv")                                           {return true;}
	else if ((s1Club == "cat") && s2Club != "improv")       				{return true;} 	
    else if ((s1Club == "art") && s2Club != "improv"||"cat") 				{return true;}
	else if ((s1Club == "guitar") && s2Club != "improv"||"cat"||"guitar")   {return true;}
	
    else if ((s1Club == ("improv"||"cat"||"art"||"guitar")) && 
			  s2Club != ("improv"||"cat"||"art"||"guitar"))                 {return true;}  
	
	else if  (s1club === s2club) {       // if club is equal, sort by yearInSchool
		 if (Student1.yearInSchool > Student2.yearInSchool)                 {return true;}
		 else																{return false;}
}


function main()
{
    var studentsByMajor = mergeSort(majorComparator, students)
	console.log("**********")
	for (var student in studentsByMajor)
	{
		student.logMe();
	}
}
		
// Your program should output the following to the console.log, including each of the opening and closing 
//stars. All values in parenthesis should be replaced with appropriate values. To accomplish this, you will 
//have to sort the array of students using each comparator and then loop through the array and and call logMe
//on each student of the now-sorted array. If the argument is 'true' then it prints the student's name, major, 
//year in school, and club affiliation. If the argument is 'false' then the club affiliation is ommited and 
//just the student's name, major and year in school is logged. Please carefully note which sorted results require
//the club to be displayed and which do not.

//**********
//The students sorted by year in school are:
//(Name - Major - Year) // of the "greatest" student
//...
//(Name - Major - Year) // of the "least" student
//
//**********
//The students sorted by major are:
//(Name - Major - Year) // of the "greatest" student
//...
//(Name - Major - Year) // of the "least" student
//
//**********
//The students sorted by club affiliation are:
//(Name - Major - Year - Club) // of the "greatest" student
//...
//(Name - Major - Year - Club) // of the "least" student
//
//**********
//
//As an example of what is expected to be printed to the console with logMe being sent True for a single student:
//Jim - Sports Science - 2 - Guitar
//
