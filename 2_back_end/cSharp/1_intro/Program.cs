// See https://aka.ms/new-console-template for more information



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

fizzBuzz(0);
// Console.WriteLine();

// //! list 
// List<string> flavours = new List<string>(){
//     "cherry Garcia",
//     "mint chocolate chip",
//     "chocolate",
//     "chocolate chip",
//     "lobster"
// };
// flavours.Add("caramel"); //adds to the end of the list 
// flavours.Insert(2,"strawberry"); //inserts given item after a given index
// flavours.RemoveAt(4); //to remove at an index
// flavours.Remove("lobster");// search and remove at the first occurrence of the given item



// Console.WriteLine(flavours.Count);
// // Console.WriteLine(flavours[1]);

// foreach (string flavour in flavours){
//     Console.WriteLine(flavour);
// }



// random

List<int> orderNumbers = new List<int>(){
    1,2,3,4,5,6,7,8,9,10
};


Random rand = new Random();
int number = rand.Next(0,orderNumbers.Count);
// Console.WriteLine(number);
// Console.WriteLine(orderNumbers[number]);
// Console.WriteLine(orderNumbers[orderNumbers.Count-1]);

// shuffled list 

List<int> shuffledList = new List<int>(); 

while(orderNumbers.Count > 0){
    int randIdx = rand.Next(0,orderNumbers.Count);
     shuffledList.Add(orderNumbers[randIdx]);
     orderNumbers.RemoveAt(randIdx);
}


foreach (int num in shuffledList){
    Console.WriteLine(num);
}

Dictionary<string,string> names = new Dictionary<string, string>(){
    {"name","Lenddy"}
};




List<Dictionary<string, string>> list_dictionary = new  List<Dictionary<string, string>>(){
    
}; 

list_dictionary.Add(names);

foreach (Dictionary<string,string> item in list_dictionary){
Console.WriteLine(item);

}