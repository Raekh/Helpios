window.addEventListener('load', createBtnHelp );
var testStats = 0;
var myChart;

function createBtnHelp(){
	var css = ".float{position:fixed;width:80px;height:80px;bottom:80px;right:80px;line-height: 5rem;border: solid 1px #ffffff;color:#FFF;border-radius:80px;text-align:center;z-index: 99999}.modal{z-index: 99999 !important;display:none;position:fixed;z-index:1;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.4)}.modal-content{background-color:#fefefe;margin:auto;padding:20px;border:1px solid #888;width:80%;color:black;z-index: 99999 !important}.close{color:#aaa;float:right;font-size:28px;font-weight:700;z-index: 99998 !important}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer}";
	var htmlDiv = document.createElement('div');
	htmlDiv.innerHTML = '<style>' + css + '</style>';
	document.head.appendChild(htmlDiv);

	var button = document.createElement("button");
	button.innerHTML = "Help";
	button.id = "initPopup";
	button.className = "float";
	button.addEventListener("click",initPopup);
	document.body.appendChild(button);

	var button = document.createElement("div");
	button.innerHTML = '<div class="modal-content"><span class="close">&times;</span><p>Some text in the Modal..</p></div>';
	button.id = "myModal";
	button.className = "modal";
	document.body.appendChild(button);

	var chartbar = document.createElement("canvas");
	chartbar.id="barChart1";
	document.getElementById("stats1").appendChild(chartbar);

	var chartbar2 = document.createElement("canvas");
	chartbar2.id="barChart2";
	document.getElementById("stats2").appendChild(chartbar2);

	var buttonTestStats = document.getElementById("buttonTestStats");
	buttonTestStats.addEventListener("click",upStat);

	createTooltips();
	createBarChart();

}

function upStat(){
	console.log("updateStats");
	testStats+=5;
	var labels = ["Iban", "Critères", "Adresse 2", "Indicatif téléphone", "Bouton validé", "Recherche job"];
	var values = [12, 19, 3, 5, 3, testStats];
	myChart.data.labels = labels;
	myChart.data.datasets[0].data = values;
	myChart.update();
	myChart.render({
		duration: 800,
		lazy: true,
		easing: 'easeOutBounce'
	});

}

function initPopup(){
	var modal = document.getElementById('myModal');
	modal.style.display = "block";

	var span = document.getElementsByClassName("close")[0];
	console.log("ici" + span);
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    	console.log("close");
    	modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    	if (event.target == modal) {
    		modal.style.display = "none";
    	}
    }
}

function createTooltips() {
	console.log("tentative de création tooltip")
	var bns = document.getElementsByTagName("button");
	for (i = 0; i < bns.length; i++) {
		if(bns[i].id != ""){
			bns[i].className += " helpiostooltip";
			console.log(bns[i].id);
			$("#"+bns[i].id).popover();
		}
	}

	var inputs = document.getElementsByTagName("input");
	for (i = 0; i < inputs.length; i++) {
		if(inputs[i].id != ""){
			inputs[i].className += " helpiostooltip";
			console.log(inputs[i].id);

			$('#'+inputs[i].id).popover();
			console.log(inputs[i].name);
		}
	}
}

//function $(s) {
   // return document.querySelector(s)
//}



var HelpiosTooltip = function () {
	function HelpiosTooltip(config) {

		for (var _key in config) {
			this[_key] = config[_key];
		}
	}
	return HelpiosTooltip;
}();

var helpiosTooltip = new HelpiosTooltip({
	id: "id42",
	options: {},
	title: "test",
	content: "Contenu de la tooltip"
});

function createBarChart() {
	var ctxB = document.getElementById("barChart1").getContext('2d');
	myChart = new Chart(ctxB, {
		type: 'bar',
		data: {
			labels: ["Iban", "Critères", "Adresse 2", "Indicatif téléphone", "Bouton validé", "Recherche job"],
			datasets: [{
				label: '# de tooltips demandés',
				data: [12, 19, 3, 5, 2, testStats],
				backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
				'rgba(255,99,132,1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	});

	var ctxA = document.getElementById("barChart2").getContext('2d');
	new Chart(ctxA, {
		type: 'line',
		data: {
			labels: ["Accueil","Inscription","Recherche","S'actualiser","Rendez-vous"],
			datasets: [{ 
				data: [6,40,16,55,23],
				label: "Utilisateur 1",
				borderColor: "#3e95cd",
				fill: true
			}, { 
				data: [28,35,41,50,63],
				label: "Utilisateur 2",
				borderColor: "#8e5ea2",
				fill: false
			}, { 
				data: [16,17,17,42,9],
				label: "Utilisateur 3",
				borderColor: "#3cba9f",
				fill: false
			}, { 
				data: [40,20,10,16,24],
				label: "Utilisateur 3",
				borderColor: "#e8c3b9",
				fill: false
			}, { 
				data: [60,30,20,36,51],
				label: "Utilisateur 4",
				borderColor: "#c45850",
				fill: false
			}
			]
		},
		options: {
			title: {
				display: true,
				text: 'Temps passé sur la page'
			}
		}
	});
}



