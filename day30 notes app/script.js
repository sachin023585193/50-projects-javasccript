const addnote = document.getElementById("addNote");
const body = document.querySelector("body");

if (localStorage.getItem("notes")) {
    let notesv = JSON.parse(localStorage.getItem("notes"));
    notesv.forEach(item => create(item));
};

addnote.addEventListener("click", () => create(""));
//main logic
function create(note) {
    const div = document.createElement("div");
    div.classList.add("note");
    div.innerHTML = `
        <div class="controls">
                <button class="save"><i class="fas fa-check"></i></button>
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="content">
                <div class="text ${note?"":"hidden"}">${note}</div>
                <textarea class="textarea ${note?"hidden":""}" rows="19">${note}</textarea>
            </div>
        `;
    body.appendChild(div);
    //changing text in between textarea and div
    const textarea = div.querySelector("textarea");
    const text = div.querySelector(".text");
    textarea.addEventListener("input", () => {
        text.innerHTML = textarea.value;
        editLS();
    });
    //save and edit button
    const save = div.querySelector(".save");
    save.addEventListener("click", () => {
        //changing save and edit
        textarea.classList.toggle("hidden");
        text.classList.toggle("hidden");
    });
    // delete button
    const delbtn = div.querySelector(".delete");
    delbtn.addEventListener("click", () => {
        div.remove();
        editLS();
    });
};


//adding to localstorage
function editLS() {
    let texts = document.querySelectorAll("textarea");
    var arr = [];
    texts.forEach((text) => {
        arr.push(text.value);
    });
    arr = arr.filter((item) => item);
    localStorage.setItem("notes", JSON.stringify(arr));
};