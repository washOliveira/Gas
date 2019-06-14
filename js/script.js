const button = document.getElementById('calc');

function calcular(){
	const tw = document.getElementById('tw').value;
	const pb = document.getElementById('pb').value;
	const cf = document.getElementById('cf').value;
	const KgBTU = 21600;

	if(tw > "0" && pb > "0" && cf > "0"){
		let pesoPropano = pb - tw;
		inputPropano(pesoPropano);

		let btuRestante = pesoPropano * KgBTU;
		inputBTURestante(btuRestante);

		let tempoRestante = btuRestante / cf;
		inputTempoRestante(tempoRestante);
	}else{
		alert("Tente um valor positivo!");
	}
}

function inputPropano(a){
	const propanoArredondado = parseFloat(a.toFixed(2));
	const linhaPesoPropano = document.getElementById('idPesoPropano');
	linhaPesoPropano.innerHTML = propanoArredondado;
}

function inputBTURestante(b){
	const btuArredondado = parseFloat(b.toFixed(2));
	const linhaBTURestante = document.getElementById('idBTUsRestantes');
	linhaBTURestante.innerHTML = btuArredondado;
}

function inputTempoRestante(c){
	const tempoArredondado = parseFloat(c.toFixed(2));
	const linhaTempoRestante = document.getElementById('idTempoRestante');
	linhaTempoRestante.innerHTML = tempoArredondado;
}

button.addEventListener("click", calcular);