// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");


void fizzBuzz( int range = 100){
    for(int i = 1; i <= range; i++){
        bool divByThree = i % 3 == 0;  
        bool divByFive = i % 5 == 0;  
        if(divByThree && divByFive){
        Console.WriteLine($"FizzBuzz {i}");
        }
        else if(divByFive){
            Console.WriteLine($"Buzz {i}");
        }
        else if (divByThree){
            Console.WriteLine($"Fizz {i}");
        }
        else Console.WriteLine(i);
        
    }
}

fizzBuzz();
// Console.WriteLine();
