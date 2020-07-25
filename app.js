

var list = document.getElementById("list");

function addTodo(){
    var todo_item = document.getElementById("todo-list");
    
    //li tag with node
    var li= document.createElement('li');
    var li_text= document.createTextNode(todo_item.value)
    li.appendChild(li_text)

     //delete button
    var delbtn = document.createElement("button");
    var deltext = document.createTextNode("Delete");
    delbtn.appendChild(deltext);
    delbtn.setAttribute("class","btn");
    delbtn.setAttribute("onclick","deleteitem(this)");
   


    //edit button
    var editbtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editbtn.setAttribute("class","btn1");
    editbtn.appendChild(editText);
    editbtn.setAttribute("onclick","edititem(this)");


    li.appendChild(delbtn);
    li.appendChild(editbtn);
    list.appendChild(li);
    todo_item.value="";
    console.log(li);
}

function deleteitem(a){
    a.parentNode.remove();
}


function delete_all(){
    list.innerHTML="";
}

function edititem(b){
    var val_li = b.parentNode.firstChild.nodeValue;
    var editvalue =prompt("Enter edit value: ", val_li);
    b.parentNode.firstChild.nodeValue=editvalue;
}
