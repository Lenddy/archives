using oop;


public class Wizard: Human{

    public Wizard(string name,int strength=3, int intelligence = 230,int dexterity = 3, int health = 50):base( name,strength,intelligence, dexterity, health ){
    }

    public int overdrive(Human target){

        // attack a  target 
        // reduce the target health
        Console.WriteLine(5*Intelligence);
         int damage = target.Health - (5 * Intelligence);
         Console.WriteLine(damage);
        // add the damage amount that you did to the target to your health
        int healing = Health += Math.Abs(damage);
        Console.WriteLine(healing);
        Console.WriteLine($"{Name} use overdrive and has heal {healing} and {Name}s health is now {Health}");
        return Health;
    }

    // public int heal(Human target){
    //     target.Health +=
    // }

}