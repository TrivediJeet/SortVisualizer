"use client";

import React from "react";

import { useSortingContext } from "@/context/sortingcontext";

export enum sortingAlgorithms {
  "Bubble Sort" = "bubbleSort",
  "Quick Sort" = "quickSort",
  "Insertion Sort" = "insertionSort",
  // TODO:
  // "Merge Sort" = "mergeSort",
  // "Selection Sort" = "selectionSort",
  // "Heap Sort" = "heapSort",
  // "Shell Sort" = "shellSort",
  // "Counting Sort" = "countingSort",
}

const AlgorithmSelector: React.FC = () => {
  const { selectedAlgorithm, setSelectedAlgorithm } = useSortingContext();

  const handleAlgorithmChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedAlgorithm(event.target.value);
  };

  return (
    <div className="self-center pb-5">
      <label
        htmlFor="algorithmSelect"
        className="block text-sm font-medium text-white"
      >
        Select Algorithm:
      </label>
      <select
        id="algorithmSelect"
        value={selectedAlgorithm}
        onChange={handleAlgorithmChange}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base ring-[0.5px] ring-black border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        {Object.entries(sortingAlgorithms).map(([key, value]) => (
          <option key={key} value={value}>
            {key}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AlgorithmSelector;
