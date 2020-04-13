const input = document.getElementById("input-field");
const plus_btn = document.getElementById("plus-btn");
const lists = document.getElementById("lists");

const to_do = [];

function addList() {
  const input_value = input.value;
  const input_id = Math.floor(Math.random() * 1000000);
  const input_to_add = {
    id: input_id,
    name: input_value,
  };

  to_do.push(input_to_add);
  console.log(to_do);

  addDOM(input_to_add);
  //   const list = document.createElement("li");
  //   list.classList.add("list");
  //   list.innerHTML = `${input_value}<button class="remove-btn" onClick="removeList(${input_id})"><i class="fas fa-trash"></i></button>`;

  //   lists.appendChild(list);

  input.value = "";
  input.focus();
}

function addDOM(t) {
  const list = document.createElement("li");
  list.classList.add("list");
  list.innerHTML = `${t.name}<button class="remove-btn" onClick="removeList(${t.id})"><i class="fas fa-trash"></i></button>`;
  lists.appendChild(list);
}

function removeList(id) {
  console.log("removed id: ", id);
  // remove it in the array by matching id
  to_do.forEach((t, i) => {
    if (t.id === id) {
      to_do.splice(i, 1);
      console.log(to_do);
    } else {
      addDOM(t);
    }
  });

  // re-draw
  lists.innerHTML = "";
  to_do.forEach(addDOM);
}

function init() {
  input.focus();
  lists.innerHTML = "";
  to_do.forEach(addList);
}
plus_btn.addEventListener("click", addList);
