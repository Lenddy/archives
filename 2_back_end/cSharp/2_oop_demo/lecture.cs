using System.Reflection.Metadata.Ecma335;
using oopDemo;

public class Lecture {

    public Instructor CourseInstructor {get; set;}
    public List<Student> Roster {get; set;}
    public string Topic {get; set;}

    public  Lecture(Instructor courseInstructor, List<Student> roster, string topic ){
        CourseInstructor = courseInstructor;
        Roster =roster;
        Topic = topic;
    }

    public void attendance(){
        foreach (Student student in Roster)
        {
            Console.WriteLine(student.fullName());
        }
    }
}