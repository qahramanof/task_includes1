

let list = [];
let listUl = document.getElementById('list');

function todo() {
    let inp = document.getElementById('inp');
    let value = inp.value.trim(); 

    if(list.includes(inp.value)){
        alert('Data repeated');
        return;

    }
    
    if (value !== "") {
        list.push(value);
        Display();
        inp.value = "";
    } else {
        alert("bos deyer gire bilmersiniz");
    }
 
}

function Delete(ind) {
    list.splice(ind, 1);
    Display();
}

function Display() {
    let data = "";
    for (let i = 0; i < list.length; i++) {
        data += `<li class="list-group-item d-flex justify-content-between">${list[i]} <button onclick="Delete(${i})" class="btn btn-danger btn-sm">Delete</button></li>`;
    }

    listUl.innerHTML = data;
}

