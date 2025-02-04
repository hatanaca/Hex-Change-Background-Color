document.getElementById("changeColorBtn").addEventListener("click", function () {
let hexColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
document.body.style.backgroundColor = hexColor;
	document.getElementById("hexCode").textContent = hexColor;
});

