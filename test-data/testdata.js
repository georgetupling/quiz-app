const testData = [
  {
    question: "What is a data structure?",
    answers: {
      A: "A collection of algorithms",
      B: "A way of organizing and storing data",
      C: "A type of computer language",
      D: "A mathematical formula",
    },
    correct_answer: "B",
    subject: "Data Structures and Algorithms",
  },
  {
    question:
      "What is the time complexity of the insertion operation in a linked list?",
    answers: {
      A: "O(n)",
      B: "O(1)",
      C: "O(logn)",
      D: "O(nlogn)",
    },
    correct_answer: "B",
    subject: "Data Structures and Algorithms",
  },
  {
    question: "What is the main difference between a stack and a queue?",
    answers: {
      A: "A stack uses FIFO and a queue uses LIFO",
      B: "A stack uses LIFO and a queue uses FIFO",
      C: "A stack only has insert operations and a queue only has delete operations",
      D: "A stack has both insert and delete operations and a queue only has insert operations",
    },
    correct_answer: "B",
    subject: "Data Structures and Algorithms",
  },
  {
    question:
      "What is the worst-case time complexity of a binary search algorithm?",
    answers: {
      A: "O(n)",
      B: "O(1)",
      C: "O(logn)",
      D: "O(nlogn)",
    },
    correct_answer: "C",
    subject: "Data Structures and Algorithms",
  },
  {
    question: "What is the purpose of a hash table?",
    answers: {
      A: "To store data in a linked list",
      B: "To store data in an array",
      C: "To store data in a way that allows for quick insertion and retrieval operations",
      D: "To store data in a sorted order",
    },
    correct_answer: "C",
    subject: "Data Structures and Algorithms",
  },
  {
    question: "What is dynamic programming used for?",
    answers: {
      A: "To solve problems by breaking them down into smaller subproblems",
      B: "To solve problems by using a greedy approach",
      C: "To solve problems by using brute force",
      D: "To solve problems by using randomization",
    },
    correct_answer: "A",
    subject: "Data Structures and Algorithms",
  },
  {
    question: "What is the time complexity of the merge sort algorithm?",
    answers: {
      A: "O(n)",
      B: "O(1)",
      C: "O(nlogn)",
      D: "O(logn)",
    },
    correct_answer: "C",
    subject: "Data Structures and Algorithms",
  },
  {
    question: "What is a graph data structure used for?",
    answers: {
      A: "To store data in a linked list",
      B: "To store data in a way that allows for quick insertion and retrieval operations",
      C: "To represent relationships between objects",
      D: "To store data in a sorted order",
    },
    correct_answer: "C",
    subject: "Data Structures and Algorithms",
  },
  {
    question: "What is the time complexity of the quick sort algorithm?",
    answers: {
      A: "O(n)",
      B: "O(nlogn)",
      C: "O(n^2)",
      D: "O(logn)",
    },
    correct_answer: "B",
    subject: "Data Structures and Algorithms",
  },
  {
    question: "What is breadth-first search used for?",
    answers: {
      A: "To traverse a tree or graph level by level",
      B: "To traverse a tree or graph in a depth-first manner",
      C: "To solve problems using dynamic programming",
      D: "To solve problems using a greedy approach",
    },
    correct_answer: "A",
    subject: "Data Structures and Algorithms",
  },
  {
    question: "What is the time complexity of a linear search algorithm?",
    answers: {
      A: "O(n)",
      B: "O(1)",
      C: "O(nlogn)",
      D: "O(logn)",
    },
    correct_answer: "A",
    subject: "Data Structures and Algorithms",
  },
  {
    question: "What is a tree data structure used for?",
    answers: {
      A: "To store data in a way that allows for quick insertion and retrieval operations",
      B: "To represent hierarchical relationships between objects",
      C: "To store data in a linked list",
      D: "To store data in a sorted order",
    },
    correct_answer: "B",
    subject: "Data Structures and Algorithms",
  },
  {
    question:
      "What is the time complexity of a binary tree traversal operation?",
    answers: {
      A: "O(n)",
      B: "O(logn)",
      C: "O(nlogn)",
      D: "O(1)",
    },
    correct_answer: "B",
    subject: "Data Structures and Algorithms",
  },
  {
    question: "What is the purpose of a disjoint set data structure?",
    answers: {
      A: "To store data in a way that allows for quick insertion and retrieval operations",
      B: "To keep track of a partition of a set into disjoint subsets",
      C: "To store data in a linked list",
      D: "To store data in a sorted order",
    },
    correct_answer: "B",
    subject: "Data Structures and Algorithms",
  },
  {
    question:
      "What is the time complexity of Dijkstra's shortest path algorithm?",
    answers: {
      A: "O(n^2)",
      B: "O(nlogn)",
      C: "O(nlog^2 n)",
      D: "O(n + mlogm)",
    },
    correct_answer: "D",
    subject: "Data Structures and Algorithms",
  },
  {
    question: "What is the difference between a stack and a queue?",
    answers: {
      A: "A stack follows the LIFO (Last In, First Out) principle, while a queue follows the FIFO (First In, First Out) principle",
      B: "A stack is used for dynamic memory allocation, while a queue is used for data storage",
      C: "A stack is used for data compression, while a queue is used for data decompression",
      D: "A stack is used for file storage, while a queue is used for file retrieval",
    },
    correct_answer: "A",
    subject: "Data Structures and Algorithms",
  },
  {
    question: "What is the time complexity of the merge sort algorithm?",
    answers: {
      A: "O(n)",
      B: "O(nlogn)",
      C: "O(n^2)",
      D: "O(logn)",
    },
    correct_answer: "B",
    subject: "Data Structures and Algorithms",
  },
  {
    question: "What is a hash table used for?",
    answers: {
      A: "To store data in a way that allows for quick insertion and retrieval operations based on a key",
      B: "To represent relationships between objects",
      C: "To store data in a linked list",
      D: "To store data in a sorted order",
    },
    correct_answer: "A",
    subject: "Data Structures and Algorithms",
  },
  {
    question: "What is dynamic programming used for?",
    answers: {
      A: "To solve problems by breaking them down into smaller subproblems and storing the results to avoid redundant calculations",
      B: "To traverse a tree or graph in a depth-first manner",
      C: "To traverse a tree or graph level by level",
      D: "To solve problems using a greedy approach",
    },
    correct_answer: "A",
    subject: "Data Structures and Algorithms",
  },
  {
    question: "What is the purpose of the A* algorithm?",
    answers: {
      A: "To find the shortest path between two nodes in a graph",
      B: "To sort a list of elements",
      C: "To find the maximum value in a list of elements",
      D: "To find the minimum value in a list of elements",
    },
    correct_answer: "A",
    subject: "Data Structures and Algorithms",
  },
];

module.exports = testData;
