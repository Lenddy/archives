namespace oop;

public class Human{
    //properties for humans
    public string? Name;
    public int Strength;
    public int Intelligence;
    public int Dexterity;
    public int Health;

    // make a constructor that takes in a value to set Name, and the remaining fields to default values
    //add a constructor to adding custom values to all fields
    public Human(string name,int strength = 3,int intelligence = 3,int dexterity = 3,int health = 100 ){
        Name = name;
        Strength = strength; 
        Intelligence = intelligence;
        Dexterity = dexterity;
        Health = health;
    }

    //build a attack method
    public int Attack ( Human target){
        int fullHealth = target.Health;
        target.Health -= Strength * 5;
        Console.WriteLine($"{Name} attack {target.Name} health has decrees to {target.Health} from {fullHealth}");
        return target.Health ;
    }
}