import { useState } from "react";

export default function DragDropList() {
  // 1. Create state to hold the list of tasks (array of strings).
  const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"])

  /**
   * Handles the drag start event.
   * 
   * What needs to be done here:
   * - Store the index of the dragged item using `event.dataTransfer.setData`.
   * - (Hint) You can change the item's style (e.g., `opacity`) to indicate it's being dragged.
   */
  const handleDragStart = (event, index) => {
    // Implement here
    event.dataTransfer.setData("text/plain", index)
    event.currentTarget.style.opacity = "0.5";
  };

  /**
   * Allows an element to be a valid drop target.
   * 
   * Why is this necessary?
   * - By default, an element does not allow dropping. You need to prevent this behavior.
   */
  const handleDragOver = (event) => {
    // Implement here
    event.preventDefault();
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
    const oldIndex = event.dataTransfer.getData("text/plain")
    if(oldIndex == " " || oldIndex === newIndex) return;
    const updateItems = [...tasks]
    const [movedItem] = updateItems.splice(oldIndex, 1);
    updateItems.splice(newIndex, 0 , movedItem)
    setTasks(updateItems)
  };

  return (
    <ul>
      {/* 
        - Render the list of tasks.
        - Each item should have the `draggable` attribute.
        - Attach the drag & drop event handlers to each item.
        - Apply styling to make it visually clear that items can be reordered.
      */}
      {tasks.map(( elemnet, index) =>{
        return(  
        <li key={index}
        draggable
        onDragStart={ (event) => handleDragStart(event, index)}
        onDragOver={handleDragOver}
        onDrop={ (event) => handleDrop(event, index) }
        style={{
          padding: "10px",
          margin: "5px",
          border: "1px solid #ccc",
          cursor: "grab",
          backgroundColor: "#f9f9f9",
        }}
        >{elemnet}</li> 
      )
      })}
    </ul>
  );
}
