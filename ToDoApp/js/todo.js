
const inputbox= document.getElementById("todo-input");

const list = document.getElementById("todo-list");

function AddTask() {

    if (inputbox.value === "") {
        alert("Please enter a task.");
        return;
    } else {
        const li = document.createElement("li");
        li.innerHTML = inputbox.value + " <button class='delete' onclick='DeleteTask(this)'>Delete</button>";
        list.appendChild(li);
        
    }
    inputbox.value = ""; // Clear the input box after adding the task


    
}


function DeleteTask(button) {
    button.parentElement.remove(); // This removes the <li> element
}