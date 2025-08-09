## Understanding Big O Notation

Big O notation is a mathematical notation that describes the **upper bound** on an algorithm's running time or space complexity. It characterizes how an algorithm's performance scales as the input size ($n$) grows. By ignoring constants and lower-order terms, Big O provides a simplified way to compare the efficiency of different algorithms, independent of the specific hardware, programming language, or implementation details. 

***

## Time Complexity of Search Operations

The time complexity of a search algorithm depends on the scenario: best, average, and worst case.

### Linear Search

Linear search checks each element of a list sequentially.
* **Best Case:** $O(1)$ - The target element is the **first** in the list.
* **Average Case:** $O(n)$ - The target element is somewhere in the **middle** of the list.
* **Worst Case:** $O(n)$ - The target element is the **last** element, or it's not present at all.

### Binary Search

Binary search works on a **sorted** list. It repeatedly divides the search interval in half.
* **Best Case:** $O(1)$ - The target element is the **middle** of the list.
* **Average Case:** $O(\log n)$ - The time taken is proportional to the logarithm of the number of elements.
* **Worst Case:** $O(\log n)$ - The target element is not found, or it's one of the last few elements to be checked.

***

## Comparison: Linear Search vs. Binary Search

| Feature | Linear Search | Binary Search |
| :--- | :--- | :--- |
| **Time Complexity** | $O(n)$ | $O(\log n)$ |
| **Sorted Data Required?** | No | Yes |
| **Ease of Implementation** | Very simple to code | Slightly more complex to code |
| **Ideal Use Case** | Small datasets or unsorted arrays | Large, sorted datasets |