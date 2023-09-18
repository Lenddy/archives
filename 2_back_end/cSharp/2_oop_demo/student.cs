using oopDemo;

public class Student: Person{//inheriting from the Persons class

    public int StudentID{get;set;}

    public Student(string fname, string lname, int studentId): base(fname, lname){ //using the constructor attributes from he base class(Person) and adding an extra attribute 
        StudentID = studentId;
    }

}