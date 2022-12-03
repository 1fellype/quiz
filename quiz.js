var pos = 0, test, test_status, question, choice, choices, chA, chB,chC,correct = 0;
var alternativa = [

{
        alternativa: "Qual foi primeiro computador de mesa?",
        a: "Apple-I",
        b: "Positivo 1",
        c: "Windows",
        resposta: "A"
        },
{
        alternativa: "Qual foi o primeiro jogo inventado?",
        a: "Tennis for Two",
        b: "Tibia",
        c: "Super Mario",
        resposta: "A"
    },
{
        alternativa: "Em que ano o sistema operacional Windows foi lançado?",
        a: "1999",
        b: "1942",
        c: "1985",
        resposta: "C"
    },
{
        alternativa: "Hardware é?",
        a: "Parte operacional",
        b: "Parte física do computador",
        c: "Uma espécie de Robo",
        resposta: "B"
    },
{
        alternativa: "Qual foi o jogo mais vendido da história?",
        a: "Gta 5",
        b: "Minecraft",
        c: "Tetris",
        resposta: "C"
    },
{
        alternativa: "Qual dessas alternativas apresenta dispositivos de entrada?",
        a: "Mouses e Teclados",
        b: "Dvds e Pendrives",
        c: "Bicicletas e Motos",
        resposta: "A"
    },
{
        alternativa: "Qual das seguintes empresas inventou o celular",
        a: "Nokia",
        b: "Samsung",
        c: "Motorola",
        resposta: "C"
    },

    {
        alternativa: "Qual desses foi parceiro de Steve Jobs na Apple?",
        a: "Bill Gates",
        b: "Steve Wozniak",
        c: "Elon Musk",
        resposta: "B"
    },

    {
        alternativa: "A inteligência artificial (IA): ",
        a: "Imita a inteligência humana para executar tarefas",
        b: "Máquinas programadas por outras máquinas",
        c: "Já superaram a inteligência humana",
        resposta: "A"
    },

    {
        alternativa: "Em que ano a internet chegou ao Brasil?",
        a: "1975",
        b: "1990",
        c: "1981",
        resposta: "C"
    },

    {
        alternativa: "O que é um Algoritmo?",
        a: "Processador de um computador",
        b: "Banco de dados",
        c: "Sequência de instruções",
        resposta: "C"
    },

    {
        alternativa: "O que significa a letra G em 5G?",
        a: "Giga",
        b: "Geração",
        c: "Grama",
        resposta: "B"
    },

    {
        alternativa: "Qual tecnologia integra o mundo virtual e mundo real?",
        a: "Nuvem",
        b: "The Sims",
        c: "Metaverso",
        resposta: "C"
    },

    {
        alternativa: "Quantos celulares existem no Brasil?",
        a: "242 milhões",
        b: "352 milhões",
        c: "400 milhões",
        resposta: "A"
    },

    {
        alternativa: "Qual país que mais utiliza o celular?",
        a: "Coréia do Sul",
        b: "Estados Unidos",
        c: "Brasil",
        resposta: "C"
    },

    {
        alternativa: "Quanto tempo por dia as pessoas passam nas redes sociais?",
        a: "3 Horas",
        b: "5 Horas",
        c: "4 Horas",
        resposta: "A"
    },

    {
        alternativa: "Qual rede social é a mais utilizada do mundo",
        a: "TikTok",
        b: "Facebook",
        c: "Instagram",
        resposta: "B"
    },

    {
        alternativa: "Qual linguagem de programação é a mais utilizada?",
        a: "Python",
        b: "Java",
        c: "HTML",
        resposta: "A"
    },

    {
        alternativa: "Qual linguagem constroí a parte lógica do site?",
        a: "CSS",
        b: "SQL",
        c: "JavaScript",
        resposta: "C"
    },

    {
        alternativa: "Na programação web, front-end lida com a?",
        a: "Parte lógica",
        b: "Parte visual",
        c: "As duas partes",
        resposta: "B"
    }

];

function get(x) {
	return document.getElementById(x);
}

function renderizarPergunta(){
	test = get("test");
	if(pos >= alternativa.length){
		test.innerHTML = `<h2>Você tem ${correct} de ${alternativa.length} alternativas corretas.</h2>`;
		get("test_status") .innerHTML = "Fim do teste";
		pos = 0;
		correct = 0;
		return false;
	}
	get("test_status") .innerHTML = "Alternativa  "+(pos + 1)+" de "+alternativa.length;""

	question = alternativa[pos].alternativa;
	chA = alternativa[pos].a;
	chB = alternativa[pos].b;
	chC = alternativa[pos].c;
	test.innerHTML = "<h3>" +question+"</h3>"

	test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
	test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
	test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
	test.innerHTML += "<h2><button onclick='checkResposta()'>Enviar resposta</button></h2>";
}

function checkResposta(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == alternativa[pos].resposta){
		correct++;
	}
	pos++;
	renderizarPergunta();
}
window.addEventListener("load",renderizarPergunta);