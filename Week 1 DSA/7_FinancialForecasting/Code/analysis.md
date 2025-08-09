Recursion is a programming technique where a method calls itself to solve smaller instances of the same problem. It’s often used in tasks that can be broken down into similar subtasks — such as computing factorials, traversing trees, or in our case, forecasting future values based on previous growth rates.

Pros of Recursion :-
-> It can make the code cleaner and more elegant.
-> Ideal for problems that have a natural recursive structure.

Cons of Recursion :- 
-> It uses a lot of memory as each recursive call uses up stack space which can lead to stack overflow error
-> Slower than iteration in many cases, especially in tight loops or large-scale computations.

Analysis of the Finalcial Forecasting program

-> Time Complexity
--> Each recursive call reduces years by 1 until it hits 0.
--> Therefore, Time Complexity = O(n) where n is the number of years.

-> Space Complexity
--> Recursive calls are stored in the call stack.
--> So Space Complexity = O(n) as well due to n stack frames.