using oopDemo;

public class Lecture {

    //this is the course Course instructor
    public Instructor CourseInstructor {get; set;}

    // list that will hold the students instances(obj) 
    public List<Student> Roster {get; set;}

    //the topic that is to be taught
    public string Topic {get; set;}

    // making the constructor for the Instructor class
    public  Lecture(Instructor courseInstructor, List<Student> roster, string topic ){
        CourseInstructor = courseInstructor;
        Roster =roster;
        Topic = topic;
    }

// method the will print all the students in the students(roster) list 
    public void attendance(){
        foreach (Student student in Roster)
        {
            Console.WriteLine(student.fullName());
        }
    }
}