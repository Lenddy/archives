using oopDemo;

public class Instructor: Person{

// list that will store the taught courses
    public List<string> TaughtCourses {get; set;}
    public int? InstructorId {get; set;}

// making the constructor and inheriting form the persons class
    public Instructor(string fname, string lname , List<string> taughtCourses, int? instructorId): base(fname,lname){
        TaughtCourses = taughtCourses;
        InstructorId = instructorId;
    }

//  making a method that will print the taught courses
    public void courses(){
        foreach ( string courser in TaughtCourses)
        {
            Console.WriteLine(courser);
        }
    }
}