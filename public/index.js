document.addEventListener("DOMContentLoaded", () => {
    const logOut = document.getElementById("logOut");
    const loginForm = document.getElementById("loginForm");
    const home = document.getElementById("home");
    // nama dan job
    document.getElementById("btnSubmitProfile").addEventListener('click', function() {
        const userName = document.getElementById("userName");
        const userJobTitle = document.getElementById("userJobTitle");
        const name = document.getElementById("name").value.trim();
        const jobTitle = document.getElementById("jobTitle").value.trim();
        const home = document.getElementById("home");
        const loginForm = document.getElementById("loginForm");
        const logOut = document.getElementById("logOut");

        if (name !== "" && jobTitle !== "") {
            userName.innerHTML = `${name}`;
            userJobTitle.innerHTML = `${jobTitle}`;

            loginForm.classList.add("hidden");
            home.classList.remove("hidden");
            logOut.classList.remove("hidden");
        }
    });

    document.getElementById("btnAddTask").addEventListener('click', function() {
        const toDoDate = document.getElementById("toDoDate").value;
        const toDoPriority = document.getElementById("toDoPriority").value;
        const toDoDescription = document.getElementById("toDoDescription").value.trim();
        const deleteAll = document.getElementById("btnDeleteAll");

        if (toDoDescription !== "") {
            const toDoList = document.getElementById("toDoList");
            const toDoCompleted = document.getElementById("toDoCompleted");

            const newList = document.createElement('div');
            newList.classList.add("flex", "justify-between", "items-center", "bg-white", "rounded-md", "p-3", "mb-2");
            newList.innerHTML = `
                <div>
                    <p id="desc" class="font-bold">${toDoDescription}</p>
                    <p class="text-sm">${toDoDate} - ${toDoPriority} Priority</p>
                </div>
                <div class="flex items-center">
                    <input type="checkbox" class="mr-2 transform scale-150" id="checkbox">
                    <button id="btnDeleteItem" class="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"">Delete</button>
                </div>
            `;

            toDoList.appendChild(newList);
            deleteAll.classList.remove("hidden");
            document.getElementById("toDoDescription").value = "";

            // checkbox
            newList.querySelector("#checkbox").addEventListener(`change`, function() {
                const desc = document.querySelector("#desc");
                const completedTask = document.createElement('div');
                if (this.checked) {
                    desc.style.textDecoration = "line-through";
                    completedTask.innerHTML = `${toDoDescription} ✅`;
                    toDoCompleted.appendChild(completedTask);
                } else {
                    desc.style.textDecoration = "none";
                    const completedItems = toDoCompleted.getElementsByTagName("div");
                    for (let i = 0; i < completedItems.length; i++) {
                        if (completedItems[i].innerText.includes(toDoDescription)) {
                            toDoCompleted.removeChild(completedItems[i]);
                            break;
                        }
                    }
                }
            });

            // delete per list
            newList.querySelector("#btnDeleteItem").addEventListener('click', function() {
                toDoList.removeChild(newList);
                const completedItems = toDoCompleted.getElementsByTagName("div");
                for (let i = 0; i < completedItems.length; i++) {
                    if (completedItems[i].innerText.includes(toDoDescription)) {
                        toDoCompleted.removeChild(completedItems[i]);
                        break;
                    }
                }
            });
            
        }
    });

    // fungsi untuk hapus semua tugas
    document.getElementById("btnDeleteAll").addEventListener(`click`, function() {
        document.getElementById("toDoList").innerHTML = ""
        document.getElementById("toDoCompleted").innerHTML = ""
    })

    // button logout
    logOut.addEventListener(`click`, function() {
        home.classList.add("hidden")
        loginForm.classList.remove("hidden")
        logOut.classList.add("hidden")
    })
})