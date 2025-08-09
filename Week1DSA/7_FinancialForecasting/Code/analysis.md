### The Power and Perils of Recursion

**Recursion** is a powerful programming technique where a function calls itself to solve smaller, similar instances of a problem. This approach is particularly effective for problems that can be naturally divided into sub-problems, such as calculating factorials, traversing tree structures, or, as in this financial forecasting model, projecting future values based on past growth rates.

---

#### Pros and Cons of Recursion

**Pros**

* **Elegant Code:** Recursion can lead to code that is more readable and concise, often simplifying complex logic.
* **Natural Fit:** It is the ideal solution for problems with an inherent recursive structure, making the code's intent clear and easy to understand.

**Cons**

* **Memory Intensive:** Each recursive call consumes memory on the  **call stack** . Excessive recursion can lead to a  **stack overflow error** , where the program runs out of memory.
* **Performance Overhead:** In many cases, especially for large computations, recursion can be slower than an iterative approach due to the overhead of managing function calls on the stack.

---

### Analysis of the Financial Forecasting Program

The financial forecasting program uses a recursive approach to calculate future values. Let's analyze its performance using Big O notation.

#### Time Complexity

The function calls itself for each year, decrementing the number of years by one until it reaches the base case (zero years). This means the function will execute `n` times, where `n` is the number of years being forecasted.

* **Time Complexity:** **O**(**n**)

#### Space Complexity

Each recursive call creates a new stack frame to store its local variables and the return address. Since the function calls itself `n` times, there will be `n` stack frames waiting to be resolved.

* **Space Complexity:** **O**(**n**)
