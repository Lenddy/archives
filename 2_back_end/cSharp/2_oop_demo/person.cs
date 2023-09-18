// this makes all the  files see each other even if they are in different folders  if they are using the same namespace
namespace oopDemo; 

// creating a class that will be public for every files to be able to make changes
public class Person{
    // this is are fields
    public string Fname{get; set;} // get and set is to manipulate the data if you have a db
    public string Lname{get; set;}

// this is the constructor of the the class
    public Person(string fName, string lName ){
        Fname = fName;
        Lname = lName;
    }

    // this is a method in the clase 
    public string fullName(){
        return $"{Fname} {Lname}";
    }
}