export interface AlgorithmInfo {
  title: string;
  description: string;
  complexity: {
    time: string;
    space: string;
  };
}

export const algorithmInfoRecord: Record<string, AlgorithmInfo> = {
  bubbleSort: {
    title: "Bubble Sort",
    description:
      "A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.",
    complexity: {
      time: "O(n^2)",
      space: "O(1)",
    },
  },
  mergeSort: {
    title: "Merge Sort",
    description:
      "A divide-and-conquer algorithm that recursively divides the list into smaller sublists until each sublist has one element, then merges the sublists in a manner that results in a sorted list.",
    complexity: {
      time: "O(n log n)",
      space: "O(n)",
    },
  },
  quickSort: {
    title: "Quick Sort",
    description:
      "A divide-and-conquer algorithm that picks an element as a pivot and partitions the given array around the picked pivot.",
    complexity: {
      time: "O(n log n)", // Average case
      space: "O(log n)", // Worst case is O(n)
    },
  },
  insertionSort: {
    title: "Insertion Sort",
    description:
      "Builds the final sorted array one item at a time. It iterates through the input array and removes one element per iteration, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.",
    complexity: {
      time: "O(n^2)", // Worst and average case
      space: "O(1)",
    },
  },
};
