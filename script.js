let listElement = document.querySelector(".list");
let inputElement = document.querySelector("#taskInput")
let buttonElement = document.querySelector("#addTask")
let containerList = document.querySelector(".container-list");


let tarefas  = JSON.parse(localStorage.getItem("@listaTarefas")) || [];


function renderTarefas(){
    listElement.innerHTML = "";
    
      if(tarefas.length === 0){
        containerList.style.display = "none";
        return;
    } else {
        containerList.style.display = "block";
    }

    tarefas.map((todo)=>{
        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(todo);

        let linkElement = document.createElement("button");
        linkElement.setAttribute("href", "#");

        linkElement.classList.add("delete-btn");

        let linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);

        let posicao = tarefas.indexOf(todo);

        linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`)

        liElement.appendChild(tarefaText);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    })
}

renderTarefas();

function adicionarTarefas(){
    if(inputElement.value === ''){
        alert("Digite alguma tarefa");
        return false;
    }else{
        let novaTarefa = inputElement.value;

        tarefas.push(novaTarefa);
        inputElement.value = "";

        renderTarefas();
        salvarDados();
    }


}

buttonElement.onclick = adicionarTarefas;

inputElement.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        adicionarTarefas();
    }
});


function deletarTarefa(posicao){
    tarefas.splice(posicao, 1);
    renderTarefas();
    salvarDados();
}

function salvarDados(){
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas))
}





