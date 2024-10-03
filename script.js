
let tmb ="";
let imc ="";
let peso= "";
let altura= "";
let fase_vida="";
let medio_agua="";
let imc_maximo ="";
let imc_minimo ="";
let minimo_agua="";
let peso_maximo = "";
let peso_minimo = "";
let diagnosticoIMC = "";
let peso_calculo_tmb = "";

let fieldset_prontuario_aberto=false;
let fieldset_antropometria_aberto=false;

const pesoInput = document.getElementById('peso');
const sexo_input= document.getElementById('sexo');
const idadeInput = document.getElementById('idade');
const alturaInput = document.getElementById('altura');
const botao_prontuario = document.getElementById('botao_prontuario');
const botao_antropometria = document.getElementById('botao_antropometria');

const tabela_idade                   =  ["0","1","2"    ,"3"    ,"4"    ,"5"    ,"6"    ,"7"     ,"8"     ,"9"     ,"10"    ,"11"    ,"12"    ,"13"    ,"14"    ,"15"    ,"16"    ,"17"    ,"18"    ];
const imc_maximo_criança_feminino    =  ["0","0","17.10","16.80","16.80","16.90","17.00", "17.30", "17.70", "18.30", "19.00", "19.90", "20.80", "21.80", "22.70", "23.50", "24.10", "24.50", "24.80"];
const imc_obesidade_criança_feminino =  ["0","0","18.70","18.40","18.50","18.80","19.20", "19.80", "20.60", "21.50", "22.60", "23.70", "25.00", "26.20", "27.30", "28.20", "28.90", "29.30", "29.50"];
const imc_minimo_criança_feminino    =  ["0","0","14.40","14.20","14.00","13.90","13.90", "13.90", "14.10", "14.40", "14.80", "15.30", "16.00", "16.60", "17.20", "17.80", "18.20", "18.40", "18.60"];
const imc_maximo_criança_masculino   =  ["0","0","17.30","16.90","16.70","16.60","16.80", "17.00", "17.40", "17.90", "18.50", "19.20", "19.90", "20.80", "21.80", "22.70", "23.50", "24.30", "24.90"];
const imc_obesidade_criança_masculino=  ["0","0","18.90","18.40","18.20","18.30","18.50", "19.00", "19.70", "20.50", "21.40", "22.50", "23.60", "24.80", "25.90", "27.00", "27.90", "28.60", "29.20"];
const imc_minimo_criança_masculino   =  ["0","0","14.80","14.40","14.10","14.00","14.10", "14.20", "14.40", "14.60", "14.90", "15.30", "15.80", "16.40", "17.00", "17.60", "18.20", "18.80", "19.20"];

const span_tmb= document.getElementById('span_tmb');
const spanImc= document.getElementById('valor_imc');
const span_agua= document.getElementById('span_agua');
const spanPesoMaximo= document.getElementById('span_peso_maximo');
const span_tmb_anterior= document.getElementById('span_tmb_anterior');
const spanDiagnosticoImc= document.getElementById('span_diagnostico_imc');
const fieldset_prontuario = document.querySelector('#fieldset_prontuario');
const fieldset_antropometria = document.querySelector('#fieldset_antropometria');

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
            peso_minimo = imc_minimo_criança_feminino[idadeInput.value]*((altura/100)*(altura/100));
            imc_minimo = imc_minimo_criança_feminino[idadeInput.value];
            imc_maximo = imc_maximo_criança_feminino[idadeInput.value];
            imc_obesidade = imc_obesidade_criança_feminino[idadeInput.value];
            if(imc<imc_minimo){diagnosticoIMC="Magreza";}
            else if (imc>=imc_minimo&& imc<=imc_maximo){diagnosticoIMC = "Eutrófico";}
            else if (imc>imc_maximo&& imc<=imc_obesidade){diagnosticoIMC="Sobrepeso";}
            else if (imc>imc_obesidade){diagnosticoIMC="Obesidade";}}
        else {
            peso_maximo = imc_maximo_criança_masculino[idadeInput.value]*((altura/100)*(altura/100));
            peso_minimo = imc_minimo_criança_masculino[idadeInput.value]*((altura/100)*(altura/100));
            imc_minimo = imc_minimo_criança_masculino[idadeInput.value];
            imc_maximo = imc_maximo_criança_masculino[idadeInput.value];
            imc_obesidade = imc_obesidade_criança_masculino[idadeInput.value];
            if(imc<imc_minimo){diagnosticoIMC="Magreza";}
            else if (imc>=imc_minimo&& imc<=imc_maximo){diagnosticoIMC = "Eutrófico";}
            else if (imc>imc_maximo&&imc<=imc_obesidade){diagnosticoIMC="Sobrepeso";}
            else if (imc>imc_obesidade){diagnosticoIMC="Obesidade";}}}  
    else if (fase_vida=="adulto"){
            peso_maximo = 25*((altura/100)*(altura/100));
            peso_minimo = 18.5*((altura/100)*(altura/100));
            imc_minimo = 18.5;
            imc_maximo = 25;
            if(imc<imc_minimo){diagnosticoIMC="Magreza";}
            else if (imc>=imc_minimo&& imc<=imc_maximo){diagnosticoIMC = "Eutrófico";}
            else if (imc>imc_maximo&&imc<=30){diagnosticoIMC="Sobrepeso";}
            else if (imc>30&&imc<=34.9){diagnosticoIMC="Obesidade I";}
            else if (imc>34.9&&imc<=39.9){diagnosticoIMC="Obesidade II";}
            else if (imc>39.9){diagnosticoIMC="Obesidade III";}}
    spanDiagnosticoImc.textContent = diagnosticoIMC;   
    spanPesoMaximo.textContent = peso_maximo.toFixed(2);
    return}


// Funcao para calcular tmb
function atualizarTmb(){
    escolhaDadosTmb();
    if (idadeInput.value <3){
        if (sexo_input.value=="feminimo"){tmb=(16.2*peso_calculo_tmb)+ (1.023*(altura/100))- (413);}
        else                             {tmb = (1.67*peso_calculo_tmb) + (1.517*(altura/100))-(618);}}
    else if (idadeInput.value >= 3 && idadeInput.value<10){
        if (sexo_input.value=="feminino"){tmb= (17*peso_calculo_tmb) + (162*(altura/100)) + (317);}
        else                             { tmb = (19.6*peso_calculo_tmb) + (130*(altura/100)) + (415);}}
    else if (idadeInput.value >=10 && idadeInput.value<=18){
        if (sexo_input.value=="feminino"){tmb=  (8.4*peso_calculo_tmb) + (466*(altura/100)) + (200);}
        else                             {tmb = (16.2*peso_calculo_tmb) + (137*(altura/100)) + (516);}}
    else if (idadeInput.value >18){
        if (sexo_input.value=="feminino"){tmb= (655.10) + (9.56*peso_calculo_tmb) + (1.85*(altura)) - (4.68*idadeInput.value);}
        else                             {tmb = (66.47) + (13.75*peso_calculo_tmb) + (5.0*(altura)) - (6.76*idadeInput.value);}}
    span_tmb.textContent = tmb.toFixed(0);}

// Funcao para escolha de dados para "calculo tmb"
function escolhaDadosTmb(){
    if (diagnosticoIMC == "Magreza"){peso_calculo_tmb = peso_minimo;span_tmb_anterior.textContent = "(peso mínimo)";}
    else if (diagnosticoIMC == "Eutrófico"){peso_calculo_tmb = peso;span_tmb_anterior.textContent = "";}
    else {peso_calculo_tmb = peso_maximo;span_tmb_anterior.textContent = "(peso máximo)";}}

// Funcao para calcular Água
function atualizarAgua(){
    if(idadeInput.value >18){
        minimo_agua = peso*35; 
        span_agua.textContent = minimo_agua.toFixed(0)+" ml";}
    else{
        minimo_agua=peso*40;
        span_agua.textContent = minimo_agua.toFixed(0)+" ml"}}

// Funcao para atualizar todas as funcoes ao clicar em inputs
function atualizarFuncoes(){
    atualizarAltura();
    atualizarIdade();
    atualizarPesoIMC();
    atualizarDiagnostico();
    atualizarTmb();
    atualizarAgua();}


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

