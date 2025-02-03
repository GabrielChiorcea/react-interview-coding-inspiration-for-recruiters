import { useState } from "react";

export default function DragDropList() {
  // 1. Create state to hold the list of tasks (array of strings).

  /**
   * Handles the drag start event.
   * 
   * What needs to be done here:
   * - Store the index of the dragged item using `event.dataTransfer.setData`.
   * - (Hint) You can change the item's style (e.g., `opacity`) to indicate it's being dragged.
   */
  const handleDragStart = (event, index) => {
    // Implement here
  };

  /**
   * Allows an element to be a valid drop target.
   * 
   * Why is this necessary?
   * - By default, an element does not allow dropping. You need to prevent this behavior.
   */
  const handleDragOver = (event) => {
    // Implement here
  };

  /**
   * Handles dropping an item into a new position in the list.
   * 
   * What needs to be done here:
   * - Retrieve the index of the dragged item using `event.dataTransfer.getData`.
   * - Reorder the list and update the state.
   * - (Hint) You can use `splice()` to move the item to the new position.
   */
  const handleDrop = (event, newIndex) => {
    // Implement here
  };

  return (
    <ul>
      {/* 
        - Render the list of tasks.
        - Each item should have the `draggable` attribute.
        - Attach the drag & drop event handlers to each item.
        - Apply styling to make it visually clear that items can be reordered.
      */}
    </ul>
  );
}
