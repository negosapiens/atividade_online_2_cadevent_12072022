function submit(){
	var list = document.getElementById('users');
	var username = document.getElementById('nomeDaPessoa').value.toUpperCase();
	var entrada = document.createElement('li');
	var idade = document.getElementById('idadeDaPessoa').value;
	var quantidade = list.childElementCount;
	var dateToday = new Date();
	var dateTodayDia = ("0" + dateToday.getDate()).slice(-2);
	var dateTodayMes = ("0" + (dateToday.getMonth() + 1)).slice(-2)
	var dateTodayAno = dateToday.getFullYear();
	var dateOne = document.getElementById("diaDoEvento");
	var diaDeHoje = (dateTodayAno + '-' + dateTodayMes + '-' + dateTodayDia);

		if (dateOne.value <= diaDeHoje) {    
			window.alert("Data inválida!");
		}
		else if (username == "") {
        	alert("Digite um nome!");
        	return false;
    	}
		else if (idade < 18){
			alert("Não é possível cadastrar pessoas com menos de 18 anos!");
		}
		else if (quantidade >= 100) {
			alert("Capacidade máxima de participantes!")
		}
		else{
			entrada.appendChild(document.createTextNode(username + ', ' + idade + ' anos'));
			list.appendChild(entrada);
		}
	return false;
}

