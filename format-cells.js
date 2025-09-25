const tableRows = Array.from(document.querySelectorAll(".table-row"));
const lastTableRow = tableRows[tableRows.length - 1];
const lastRightP = lastTableRow.querySelector(".right-div p")
const lastLeftP = lastTableRow.querySelector(".left-div p")

// Make sure the bottom-most table row has the correct bottom border applied.
lastRightP.classList.add("bottom-cell");
lastLeftP.classList.add("bottom-cell");

// Add the respective border-radius to each bottom cell.
lastRightP.classList.add("right-bottom-cell");
lastLeftP.classList.add("left-bottom-cell");

// Remove odd-indexed rows from the array
for (let i = tableRows.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
        tableRows.splice(i, 1);
    }

}
// Add "gray" as a prefix to status classes for remaining rows
tableRows.forEach((row) => {
    // Select all <p> elements inside the row
    row.querySelectorAll(".left-div p, .right-div p").forEach((p) => {

        // If the current cell doesn't have gray as a class.
        if (!p.classList.contains("gray")) {

            // Add it.
            p.classList.add("gray");
        };
        
        // if any p that has a gray background, update the class to use the gray foreground color
        let classCollection = p.classList;

        if (classCollection.contains("progress")) {
            classCollection.replace("progress", "gray-progress");
            
        } else if (classCollection.contains("help")) {
            classCollection.replace("help", "gray-help");
            
        } else if (classCollection.contains("miss")) {
            classCollection.replace("miss", "gray-miss");
            
        } else if (classCollection.contains("complete")) {
            classCollection.replace("complete", "gray-complete");
        }
    });
});