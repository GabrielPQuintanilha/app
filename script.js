// Como fazer so um menu abrir por vez?

// atualizar peso e  imc
let imc ="";
const spanImc= document.getElementById('valor_imc');
let peso= "";
let pesoInput = document.getElementById('peso');
function atualizarPesoIMC(){
    peso = pesoInput.value;
    imc = peso/((altura/100)*(altura/100));
    spanImc.textContent = imc.toFixed(2);
}
pesoInput.addEventListener('input', atualizarFuncoes);

// Atualizar altura
let altura= "";
let alturaInput = document.getElementById('altura');
function atualizarAltura(){
    altura = alturaInput.value;
    imc = peso/((altura/100)*(altura/100));
    spanImc.textContent = imc;
}
alturaInput.addEventListener('input', atualizarFuncoes);

// Atualizar fase da vida
let fase_vida="";
let idadeInput = document.getElementById('idade');
function atualizarIdade(){
    idade=idadeInput.value;
    if (idade>=60){
        fase_vida = "idoso";
    } else if (idade<60){
        fase_vida = "adulto";
        if (idade <19){
            fase_vida = "criança";
        }
    }
    
}
idadeInput.addEventListener('input', atualizarFuncoes);

// Atualizar e calcular IMC
let diagnosticoIMC = "";
const spanDiagnosticoImc= document.getElementById('span_diagnostico_imc');
const spanPesoMaximo= document.getElementById('span_peso_maximo');
let peso_maximo = "";
let  sexo_input= document.getElementById('sexo');
const tabela_idade                 = ["0","0","0","0","0","5","6","7","8","9","10","11","12","13","14","15","16","17","18"];
const imc_maximo_criança_feminino  = ["0","0","0","0","0","16.90","17.00", "17.30","17.70","18.30","19", "19.90", "20.80", "21.80", "22.70", "23.50", "24.10", "24.50", "24.80"];
const imc_minimo_criança_feminino  = ["0","0","0","0","0","13.90","13.90", "13.90", "14.10", "14.40", "14.80", "15.30", "16.00", "16.60", "17.20", "17.80","18.20", "18.40", "18.60"];
let imc_maximo ="";
let imc_minimo ="";

// idade 5 funciona, idade 6 pra cima nao

function atualizarDiagnostico(){
    if (fase_vida=="criança"){
        if (sexo_input.value =="feminino"){
            peso_maximo = imc_maximo_criança_feminino[idadeInput.value]*((altura/100)*(altura/100));
            imc_minimo = imc_minimo_criança_feminino[idadeInput.value];
            imc_maximo = imc_maximo_criança_feminino[idadeInput.value];
            if(imc<imc_minimo){diagnosticoIMC="Magreza";}
            else if (imc>=imc_minimo&& imc<=imc_maximo){diagnosticoIMC = "Eutrófico";}
            else if (imc>imc_maximo){diagnosticoIMC="Excesso de peso";}
        }
    }
    else if (fase_vida=="adulto"){console.log("adulto")}
    spanDiagnosticoImc.textContent = diagnosticoIMC;   
    spanPesoMaximo.textContent = peso_maximo.toFixed(2);
    return
}



// Funcao para atualizar todas as funcoes ao clicar em inputs
function atualizarFuncoes(){
    atualizarAltura();
    atualizarIdade();
    atualizarPesoIMC();
    atualizarDiagnostico();
}


// Botoes para abrir

// abrir prontuario
const botao_prontuario = document.getElementById('botao_prontuario');
const fieldset_prontuario = document.querySelector('#fieldset_prontuario');
let fieldset_prontuario_aberto=false;

function abrir_prontuario(){
    if (fieldset_prontuario_aberto==false){
        fieldset_prontuario.classList.remove("hide");
        fieldset_prontuario_aberto = true;
        
    }else{
        fieldset_prontuario.classList.add("hide");
        fieldset_prontuario_aberto = false;
    }
}
botao_prontuario.addEventListener('click', abrir_prontuario);

// abrir antroppometria
const botao_antropometria = document.getElementById('botao_antropometria');
const fieldset_antropometria = document.querySelector('#fieldset_antropometria');
let fieldset_antropometria_aberto=false;

function abrir_antropometria(){
    if (fieldset_antropometria_aberto==false){
        fieldset_antropometria.classList.remove("hide");
        fieldset_antropometria_aberto = true;
    }else{
        fieldset_antropometria.classList.add("hide");
        fieldset_antropometria_aberto = false;
    }
}
botao_antropometria.addEventListener('click', abrir_antropometria);
