// Como fazer so um menu abrir por vez?

// calcular imc e atualizar
let imc ="";
const spanImc= document.getElementById('valor_imc');
let peso= "";
let pesoInput = document.getElementById('peso');
function atualizarPeso(){
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
function atualizarImc(){
    if (fase_vida=="adulto"){
        peso_maximo = 25*((altura/100)*(altura/100));
        if(imc>29.9){
            diagnosticoIMC = "Obesidade";
        }else if(imc>=25){
            diagnosticoIMC="Sobrepeso";
        }else if (imc>=18.5){
            diagnosticoIMC="Eutrófico";
        }else{
            diagnosticoIMC="Magreza";
        }
    }else if (fase_vida=="criança"){
        if(sexo_input.value=="feminino"){
            if (idadeInput.value==5){peso_maximo = 16.9*((altura/100)*(altura/100));
                if(imc>16.9){diagnosticoIMC = "Excesso de Peso";}
                else if (imc>13.9){diagnosticoIMC = "Eutrófico";}}
            else if (idadeInput.value==6){peso_maximo = 17*((altura/100)*(altura/100));
                if(imc>17){diagnosticoIMC = "Excesso de Peso";}
                else if (imc>13.9){diagnosticoIMC = "Eutrófico";}}
            else if (idadeInput.value==7){peso_maximo = 17.3*((altura/100)*(altura/100));
                if(imc>17.3){diagnosticoIMC = "Excesso de Peso";}
                else if (imc>13.9){diagnosticoIMC = "Eutrófico";}}
            else if (idadeInput.value==8){peso_maximo = 17.7*((altura/100)*(altura/100));
                if(imc>17.7){diagnosticoIMC = "Excesso de Peso";}
                else if (imc>14.1){diagnosticoIMC = "Eutrófico";}}
            else if (idadeInput.value==9){peso_maximo = 18.3*((altura/100)*(altura/100));
                if(imc>18.3){diagnosticoIMC = "Excesso de Peso";}
                else if (imc>14.4){diagnosticoIMC = "Eutrófico";}}
            else if (idadeInput.value==10){peso_maximo = 19*((altura/100)*(altura/100));
                if(imc>19){diagnosticoIMC = "Excesso de Peso";}
                else if (imc>14.8){diagnosticoIMC = "Eutrófico";}}
            else if (idadeInput.value==11){peso_maximo = 19.9*((altura/100)*(altura/100));
                if(imc>19){diagnosticoIMC = "Excesso de Peso";}
                else if (imc>15.3){diagnosticoIMC = "Eutrófico";}}
            else if (idadeInput.value==12){peso_maximo = 20.8*((altura/100)*(altura/100));
                if(imc>20.8){diagnosticoIMC = "Excesso de Peso";}
                else if (imc>16){diagnosticoIMC = "Eutrófico";}}
            else if (idadeInput.value==13){}
            else if (idadeInput.value==14){}
            else if (idadeInput.value==15){}
            else if (idadeInput.value==16){}
            else if (idadeInput.value==17){}
            else if (idadeInput.value==18){}}
        else if (sexo_input.value=="masculino"){}
    }
    spanDiagnosticoImc.textContent = diagnosticoIMC;   
    spanPesoMaximo.textContent = peso_maximo.toFixed(2);
}

// Funcao para atualizar todas as funcoes ao clicar em inputs
function atualizarFuncoes(){
    atualizarAltura();
    atualizarIdade();
    atualizarPeso();
    atualizarImc();
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
