// Como fazer so um menu abrir por vez?



let imc ="";
let peso= "";
let altura= "";
let fase_vida="";
let imc_maximo ="";
let imc_minimo ="";
let peso_maximo = "";
let diagnosticoIMC = "";
let tmb ="";
let minimo_agua="";
let medio_agua="";

let fieldset_prontuario_aberto=false;
let fieldset_antropometria_aberto=false;

let pesoInput = document.getElementById('peso');
let sexo_input= document.getElementById('sexo');
let idadeInput = document.getElementById('idade');
let alturaInput = document.getElementById('altura');
const botao_prontuario = document.getElementById('botao_prontuario');
const botao_antropometria = document.getElementById('botao_antropometria');

const tabela_idade                 = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18"];
const imc_maximo_criança_feminino  = ["0","0","17.10","16.80","16.80","16.90","17.00", "17.30", "17.70", "18.30", "19.00", "19.90", "20.80", "21.80", "22.70", "23.50", "24.10", "24.50", "24.80"];
const imc_minimo_criança_feminino  = ["0","0","14.40","14.20","14.00","13.90","13.90", "13.90", "14.10", "14.40", "14.80", "15.30", "16.00", "16.60", "17.20", "17.80", "18.20", "18.40", "18.60"];
const imc_maximo_criança_masculino = ["0","0","17.30","16.90","16.70","16.60","16.80", "17.00", "17.40", "17.90", "18.50", "19.20", "19.90", "20.80", "21.80", "22.70", "23.50", "24.30", "24.90"];
const imc_minimo_criança_masculino = ["0","0","14.80","14.40","14.10","14.00","14.10", "14.20", "14.40", "14.60", "14.90", "15.30", "15.80", "16.40", "17.00", "17.60", "18.20", "18.80", "19.20"];

const spanImc= document.getElementById('valor_imc');
const spanPesoMaximo= document.getElementById('span_peso_maximo');
const spanDiagnosticoImc= document.getElementById('span_diagnostico_imc');
const span_tmb= document.getElementById('span_tmb');
const fieldset_prontuario = document.querySelector('#fieldset_prontuario');
const fieldset_antropometria = document.querySelector('#fieldset_antropometria');
const span_agua= document.getElementById('span_agua');

pesoInput.addEventListener('input', atualizarFuncoes);
idadeInput.addEventListener('input', atualizarFuncoes);
sexo_input.addEventListener('input', atualizarFuncoes);
alturaInput.addEventListener('input', atualizarFuncoes);
botao_prontuario.addEventListener('click', abrir_prontuario);
botao_antropometria.addEventListener('click', abrir_antropometria);


// atualizar peso e  imc
function atualizarPesoIMC(){
    peso = pesoInput.value;
    imc = peso/((altura/100)*(altura/100));
    spanImc.textContent = imc.toFixed(2);}

// Atualizar altura
function atualizarAltura(){
    altura = alturaInput.value;
    imc = peso/((altura/100)*(altura/100));
    spanImc.textContent = imc;}

// Atualizar fase da vida
function atualizarIdade(){
    idade=idadeInput.value;
    if (idade>=60){
        fase_vida = "idoso";} 
    else if (idade<60){
        fase_vida = "adulto";
        if (idade <19){
            fase_vida = "criança";}}}

// Atualizar e calcular IMC
function atualizarDiagnostico(){
    if (fase_vida=="criança"){
        if (sexo_input.value =="feminino"){
            peso_maximo = imc_maximo_criança_feminino[idadeInput.value]*((altura/100)*(altura/100));
            imc_minimo = imc_minimo_criança_feminino[idadeInput.value];
            imc_maximo = imc_maximo_criança_feminino[idadeInput.value];
            if(imc<imc_minimo){diagnosticoIMC="Magreza";}
            else if (imc>=imc_minimo&& imc<=imc_maximo){diagnosticoIMC = "Eutrófico";}
            else if (imc>imc_maximo){diagnosticoIMC="Excesso de peso";}}
        else {
            peso_maximo = imc_maximo_criança_masculino[idadeInput.value]*((altura/100)*(altura/100));
            imc_minimo = imc_minimo_criança_masculino[idadeInput.value];
            imc_maximo = imc_maximo_criança_masculino[idadeInput.value];
            if(imc<imc_minimo){diagnosticoIMC="Magreza";}
            else if (imc>=imc_minimo&& imc<=imc_maximo){diagnosticoIMC = "Eutrófico";}
            else if (imc>imc_maximo){diagnosticoIMC="Excesso de peso";}}}
    else if (fase_vida=="adulto"){
            peso_maximo = 25*((altura/100)*(altura/100));
            imc_minimo = 18.5;
            imc_maximo = 25;
            if(imc<imc_minimo){diagnosticoIMC="Magreza";}
            else if (imc>=imc_minimo&& imc<=imc_maximo){diagnosticoIMC = "Eutrófico";}
            else if (imc>imc_maximo){diagnosticoIMC="Excesso de peso";}}
    spanDiagnosticoImc.textContent = diagnosticoIMC;   
    spanPesoMaximo.textContent = peso_maximo.toFixed(2);
    return}

// Funcao para atualizar todas as funcoes ao clicar em inputs
function atualizarFuncoes(){
    atualizarAltura();
    atualizarIdade();
    atualizarPesoIMC();
    atualizarDiagnostico();
    atualizarTmb();
    atualizarAgua();}

// Funcao para calcular tmb
function atualizarTmb(){
    if (idadeInput.value <3){
        if (sexo_input.value=="feminimo"){tmb=(16.2*peso_maximo)+ (1.023*(altura/100))- (413);}
	else {tmb = (1.67*peso_maximo) + (1.517*(altura/100))-(618);}}
    else if (idadeInput.value >= 3 && idadeInput.value<10){
        if (sexo_input.value=="feminino"){tmb= (17*peso_maximo) + (162*(altura/100)) + (317);}
        else { tmb = (19.6*peso_maximo) + (130*(altura/100)) + (415);}}
    else if (idadeInput.value >=10 && idadeInput.value<=18){
        if (sexo_input.value=="feminino"){tmb=  (8.4*peso_maximo) + (466*(altura/100)) + (200);}
        else {tmb = (16.2*peso_maximo) + (137*(altura/100)) + (516);}}
    else if (idadeInput.value >18){
        if (sexo_input.value=="feminino"){tmb= (655.10) + (9.56*peso_maximo) + (1.85*(altura)) - (4.68*idadeInput.value);}
        else{tmb = (66.47) + (13.75*peso_maximo) + (5.0*(altura)) - (6.76*idadeInput.value);}}
    span_tmb.textContent = tmb.toFixed(0);}

// Funcao para calcular Água
function atualizarAgua(){
    if(idadeInput.value >18){minimo_agua = peso_maximo*35; span_agua.textContent = minimo_agua.toFixed(0);}
    else{minimo_agua=peso_maximo*40;span_agua.textContent = minimo_agua.toFixed(0)}}

// Botoes para abrir

// abrir prontuario
function abrir_prontuario(){
    if (fieldset_prontuario_aberto==false){
        fieldset_prontuario.classList.remove("hide");
        fieldset_prontuario_aberto = true;}
    else{
        fieldset_prontuario.classList.add("hide");
        fieldset_prontuario_aberto = false;}}

// abrir antroppometria
function abrir_antropometria(){
    if (fieldset_antropometria_aberto==false){
        fieldset_antropometria.classList.remove("hide");
        fieldset_antropometria_aberto = true;}
    else{
        fieldset_antropometria.classList.add("hide");
        fieldset_antropometria_aberto = false;}}

