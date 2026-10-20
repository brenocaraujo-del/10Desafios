let tarefas = [
    "Estudar HTML",
    "Estudar CSS",
    "Praticar JavaScript",
    "Estudar Laravel",
    "Estudar conteudo"
]

tarefas.forEach((tarefa, indice) => {

     alert(`${indice + 1} - ${tarefa}`);
});

let tarefaexcluida = prompt("Digite a tarefa que deseja recortar: ")
let index = tarefas.indexOf(tarefaexcluida);
tarefas.splice(index,1)

tarefas.forEach((tarefa, indice) => {

     alert(`${indice + 1} - ${tarefa}`);
});

let tarefasubstituida = prompt("Digite a primeira tarefa que deseja substituir: ")
let novatarefa = prompt("Digite a primeira nova tarefa: ")
let index2 = tarefas.indexOf(tarefasubstituida);
tarefas.splice(index2,1,novatarefa)

tarefas.forEach((tarefa, indice) => {

     alert(`${indice + 1} - ${tarefa}`);
});

let tarefaparaselecionar = prompt("Digite uma tarefa existente para adicionar a nova depois dela: ")
let tarefanovaadicionar = prompt("Digite o nome da tarefa que deseja adicionar: ")
let index3 = tarefas.indexOf(tarefaparaselecionar);
tarefas.splice(index3 + 1, 0, tarefanovaadicionar) // O 0 indica que nada será apagado, apenas inserido

tarefas.forEach((tarefa, indice) => {

     alert(`${indice + 1} - ${tarefa}`);
});