using System.Globalization;
using oopDemo;

public class Instructor: Person{

    public List<string> TaughtCourses {get; set;}

    public Instructor(string fname, string lname , List<string> taughtCourses): base(fname,lname){
        TaughtCourses = taughtCourses;
    }


    public void courses(){
        foreach ( string courser in TaughtCourses)
        {
            Console.WriteLine(courser);
        }
    }
}