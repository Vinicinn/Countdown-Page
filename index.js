function countdown() {
  //Recuperando Elementos do HTML
  let date = document.getElementById("fdate").value;
  let time = document.getElementById("ftime").value;
  //Ocultando Form e Mostrando Contador
  document.getElementsByTagName("form").item(0).style.display = "none";
  document.getElementById("pcountdown").style.display = "";
  //Recuperando Tempo
  let tostring = `${date}` + " " + `${time}`;
  if (tostring == " ") {
    document.getElementById("pcountdown").innerHTML = "Tempo Invalido.";
  } else {
    let countdowntime = new Date(tostring).getTime();
    //Rodar Contador a Cada Segundo
    let counter = setInterval(function () {
      //Recuperando Tempo Atual e Pegando a Distancia
      let timenow = new Date().getTime();
      let interval = countdowntime - timenow;
      //Convertendo Tempo
      let days = Math.floor(interval / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((interval % (1000 * 60)) / 1000);
      //Inserindo no HTML
      document.getElementById("pcountdown").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      //Condição de Parar Contador
      if (interval < 0) {
        clearInterval(counter);
        document.getElementById("pcountdown").innerHTML = "Tempo Esgotado.";
      }
    }, 1000);
  }
}
