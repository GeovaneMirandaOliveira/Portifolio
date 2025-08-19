var pacientes = [];  // declara vetor Global

function adicionarPaciente() {
    // Cria referência aos elementos de entrada e saida de dados da pagina
    var inPaciente = document.getElementById("inPaciente");
    var outLista = document.getElementById("outLista");    

    var nome = inPaciente.value;   // obtem nome do paciente

    // Verifica preenchimento do nome do paciente 
    if (nome == "") {
        alert("Informe o nome do Paciente !!");
        inPaciente.focus();
        return;
    }


pacientes.push(nome)   // adiciona o nome no final do vetor 

var lista = "";   //string para concatenar pacientes

// percorre os elementos do vetor]
for(i = 0; i < pacientes.length; i++){
    lista += (i + 1) + ". " + pacientes[i] + "\n";
}

// Alerta o conteudo da tag outLista
outLista.textContent = lista;

// Limpa o campo e posiciona cursor em inPaciente
inPaciente.value = "";
inPaciente.focus();

}

// Cria Referência ao btAdicionar e associa function ao evento click]
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarPaciente);



// btn adicionar Urgencia

function adicionarUrgencia() {
    // Cria referência aos elementos de entrada e saida de dados da pagina
    var inPaciente = document.getElementById("inPaciente");
    var outLista = document.getElementById("outLista");    

    var nome = inPaciente.value;   // obtem nome do paciente

    // Verifica preenchimento do nome do paciente 
    if (nome == "") {
        alert("Informe o nome do Paciente !!");
        inPaciente.focus();
        return;
    }


pacientes.unshift(nome)   // adiciona o nome no inicio do vetor

var lista = "";   //string para concatenar pacientes

// percorre os elementos do vetor]
for(i = 0; i < pacientes.length; i++){
    lista += (i + 1) + ". " + pacientes[i] + "\n";
}

// Alerta o conteudo da tag outLista
outLista.textContent = lista;

// Limpa o campo e posiciona cursor em inPaciente
inPaciente.value = "";
inPaciente.focus();

}

// Cria Referência ao btAdicionar e associa function ao evento click]
var btUrgencia = document.getElementById("btUrgencia");
btUrgencia.addEventListener("click", adicionarUrgencia);



// Botão atender 

function atenderPaciente() {

    // Verificar se vetor paciente esta vazio
    if (pacientes.length == 0) {
        alert("Não há pacientes na lista de espera");
        inPaciente.focus();
        return;
    }

     // cria referencia aos elemtentos de saida de dados
    var outAtendimento = document.getElementById("outAtendimento");
    var outLista = document.getElementById("outLista");

   // Remove paciente do inicio da fila (e obtem nome)
    var Atender = pacientes.shift();

    // exibe nome do paciente em atendimento
    outAtendimento.textContent = Atender;

    // string para concatenar pacientes
    var lista = "";

    // Percorre os elementos do vetor
    for(i = 0; i < pacientes.length; i++){
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }

    // Alertas o conteudo da tag outLista
    outLista.textContent = lista;

}

var btAtender = document.getElementById("btAtender");
btAtender = addEventListener("click", atenderPaciente);