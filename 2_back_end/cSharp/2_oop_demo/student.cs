using oopDemo;

public class Student: Person{//inheriting from the Persons class

    // this is a field
    // field are usually private and can only be use inside of this class alone 
    private int _secretId = 4;
    public int StudentID{get;set;}

    // making a reference to the private _secretId field so it can be seen outside of the class
    public int SecreteId {get{return _secretId;} set{}}

    public Student(string fname, string lname, int studentId): base(fname, lname){ //using the constructor attributes from he base class(Person) and adding an extra attribute 
        StudentID = studentId;
    }

}