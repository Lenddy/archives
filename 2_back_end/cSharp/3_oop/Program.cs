using oop;

Human h1 = new Human("Lenddy",2);
Human h2 = new Human("Juan");
Wizard w1 = new Wizard("julio");

// h1.Attack(h2);
// h2.Attack(h1);
// h1.Attack(h2);
// h2.Attack(h1);
// h1.Attack(h2);
// w1.Attack(h1);
Console.WriteLine(w1.Health);
h1.Attack(w1);
w1.overdrive(h1);
