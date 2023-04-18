function calProm() {
    var cd = parseFloat(document.getElementById("cd").value);
	var eco = parseFloat(document.getElementById("eco").value);
	var phy = parseFloat(document.getElementById("phy").value);
    var eng = parseFloat(document.getElementById("eng").value);
    var cli = parseFloat(document.getElementById("cli").value);
    var ser = parseFloat(document.getElementById("ser").value);
    var pw = parseFloat(document.getElementById("pw").value);
	var med = (cd + eco + phy + eng + cli + ser + pw) / 7;
	if (med >= 5) {
		alert("¡Felicidades, sacaste " + med.toFixed(1) + "! ¡Aprobaste!");
	} else {
		alert("Lo siento, sacaste " + med.toFixed(1) + ". Reprobaste :(");
	}
}