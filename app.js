// function -> dahij ashiglah bolomjtoi bagts kod
/*function hello(name,age){
	console.log("hello"+name);
	console.log("your age "+age);
}
hello(" cominpo",23);
hello(" undefined",56);
function test(){
	alert("button clicked");
}
function sum(a,b){
	console.log(a+b)
	console.log(a*b)
}
sum(50,88);
sum(45,32);
function color(){
	document.getElementsByTagName('body')[0].style.backgroundColor="blue";
}*/

var computer=document.querySelector('.computer')
var player=document.querySelector('.player')
var winner=document.querySelector('.winner')
var cCount=0;pCount=0;
function play(playerChoice){
	random =Math.floor(Math.random()*3);
	console.log(random);
	var computerChoice;
	if(random==0){
		computerChoice="paper";
		computer.innerText="Computer choice: paper";
	}
	else if(random==1){
		computerChoice="rock";
		computer.innerText="Computer choice: rock";
	}
	else if(random==2){
		computerChoice="scissor";
		computer.innerText="Computer choice: scissor";
	}
	
	player.innerText ="Player choice :"+ playerChoice;
	if(playerChoice==computerChoice){
		winner.innerText=('tie');
	}
	else if((playerChoice=="paper" && computerChoice=="rock")||
	(playerChoice=="rock" && computerChoice=="scissor")||
	(playerChoice=="scissor" && computerChoice=="paper")){
		winner.innerText="you win!";
		pCount++;
		document.querySelector('.pCount').innerText="Player:"+pCount;
	}else{
		winner.innerText="Computer win!";
		cCount++;
		document.querySelector('.cCount').innerText="Computer:"+cCount;
	}
}
function restart(){
	pCount=0;
	cCount=0;
}