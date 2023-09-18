using oopDemo;

//? list of courses
List<string> courses = new List<string>();

//? person instance(object)
Person person = new Person("alex","miller");

//? student instance(object)
Student student = new Student("Lenddy","Morales",1 );
Student student2 = new Student("student2","student2",2 );
Student student3 = new Student("student3","student3",3 );
Student student4 = new Student("student4","student4",4 );

//? Instructor instance(object)
Instructor instructor = new Instructor("max","min",courses);

//? adding to the courses List<>
courses.Add("python");
courses.Add("javascript");
courses.Add("c#");

//? List of students instances(objects)
List<Student>students = new List<Student>();

//? adding student  instances(objs) to the students list<>
students.Add(student);
students.Add(student2);
students.Add(student3);
students.Add(student4);

//? Lecture instance(obj)
Lecture cSharp = new Lecture(instructor,students,"csharp");

//? calling and logging the instances(objs) methods
Console.WriteLine(person.fullName());
Console.WriteLine(student.fullName());
Console.WriteLine( student.StudentID);
instructor.courses();
cSharp.attendance();
