window.addEventListener('load', createBtnHelp );
var testStats = 0;
var myChart;

function createBtnHelp(){
	var css = ".float{position:fixed;width:80px;height:80px;bottom:50px;right:30px;line-height: 5rem;border: solid 1px #ffffff;color:#FFF;border-radius:80px;text-align:center;z-index: 99999}.modal{z-index: 99999 !important;display:none;position:fixed;z-index:1;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.4)}.modal-content{background-color:#fefefe;margin:auto;padding:20px;border:1px solid #888;width:80%;color:black;z-index: 99999 !important}.closeModal{color:#aaa;float:right;font-size:28px;font-weight:700;z-index: 99998 !important}.closeModal:focus,.closeModal:hover{color:#000;text-decoration:none;cursor:pointer}.popover{position:absolute;top:0;left:0;z-index:1060;display:none;max-width:276px;padding:1px;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:1.42857143;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;word-wrap:normal;white-space:normal;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,.2);border-radius:6px;-webkit-box-shadow:0 5px 10px rgba(0,0,0,.2);box-shadow:0 5px 10px rgba(0,0,0,.2);line-break:auto}";
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
    button.innerHTML = '<div class="modal-content"><span class="closeModal">&times;</span><p>Quel aide souhaitez-vous ?<br><nav><ul><li><a  class="closeModal2" href="#about">Aide détaillée</a></li><li><a  class="closeModal2" href="#contact">Scenario</a></li><li><a  class="closeModal2" href="#contact2">Sans aide (Auto activation)</a></li></ul></nav></p></div>';
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
	listenerAutoScen();
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
function listenerAutoScen(){
	
    $('#launchScene').click(function() {
        var lastIndex = 0;
		scenario(lastIndex);
    });
    $('#launchAuto').click(function() {
    	var lastIndex2 = 0;
    	console.log("click");
        if(parseInt($('.counterAuto').text()) > 0){
	        var interval = setInterval(function() {
	        	if(parseInt($('.counterAuto').text()) > 0){
				   $('.counterAuto').text(parseInt($('.counterAuto').text())-1);
				} else{
					scenario2(lastIndex2);
					clearInterval(interval);
				}
			}, 1000);
        }
	});
}

function scenario(lastIndex){
	$('body').append('<button class="float nextTip" style="right:50%;">=></button>')
	var arrayId = ['#name', '#lastName', '#email', '#numero', '#message2'];
	var finish = arrayId.length-1;

	console.log(lastIndex);

	popoverFocus(arrayId[lastIndex]);
	$('.nextTip').click(function(event){
		event.stopPropagation();
		lastIndex++;
		if($('.nextTip').text() != "X"){
			popoverFocus(arrayId[lastIndex]);
			if(lastIndex == finish){
				$('.nextTip').text("X");
			}
		}else{
			$('.popover').popover('hide');
			$('.nextTip').remove();
		}
	});
}

function scenario2(lastIndex){
	$('body').append('<button class="float nextTip" style="right:50%;">=></button>')
	var arrayId = ['#name2', '#lastName2', '#email2', '#numero2', '#message3'];
	var finish = arrayId.length-1;

	console.log(lastIndex);

	popoverFocus(arrayId[lastIndex]);
	$('.nextTip').click(function(event){
		event.stopPropagation();
		lastIndex++;
		if($('.nextTip').text() != "X"){
			popoverFocus(arrayId[lastIndex]);
			if(lastIndex == finish){
				$('.nextTip').text("X");
			}
		}else{
			$('.popover').popover('hide');
			$('.nextTip').remove();
			$('.counterAuto').text("5")
		}
	});
}

function popoverFocus(idFocus){
	$('.popover').popover('hide');
    $(idFocus).popover({ placement:'auto', trigger: 'click', title: 'Etape scénario : '+idFocus, content: "Une description qui guide l'utilisateur de manière précise." });
    $(idFocus).click();
	$(idFocus).popover('show');
}

function initPopup(){
	var modal = document.getElementById('myModal');
	modal.style.display = "block";


    $('.closeModal').click(function() {
        console.log("close");
        modal.style.display = "none";
    });
    $('.closeModal2').click(function() {
        console.log("close");
        modal.style.display = "none";
    });
}

function createTooltips() {

    var bns = document.getElementsByTagName("button");
    for (i = 0; i < bns.length; i++) {
        if(bns[i].id != ""){
            //$("#"+bns[i].id).popover({ placement:'auto', trigger: 'click', title: 'Twitter Bootstrap Popover', content: "It's so simple to create a tooltop for my website!" });
        }
    }

    var inputs = document.getElementsByTagName("input");
    for (i = 0; i < inputs.length; i++) {
        if(inputs[i].id != ""){
            //$('#'+inputs[i].id).popover({ placement:'auto', trigger: 'click', title: 'Twitter Bootstrap Popover', content: "It's so simple to create a tooltop for my website!" });
        }
	}
	

    var textareas = document.getElementsByTagName("textarea");
    for (i = 0; i < textareas.length; i++) {
        if(textareas[i].id != ""){
            //$('#'+textareas[i].id).popover({ placement:'auto', trigger: 'click', title: 'Twitter Bootstrap Popover', content: "It's so simple to create a tooltop for my website!" });
        }
	}

	// $.post("http://127.0.0.1:8888/index.php",
 //    {
 //        request: "getTooltips",
 //        url: "http://127.0.0.1/index.html"
 //    },
 //    function(json, status){
	// 	$.each(JSON.parse(json), function(idx, obj) {
	// 		console.log('#'+obj.baliseTooltip, obj.titreTooltip, obj.descriptionTooltip);
	// 		$('#'+obj.baliseTooltip).popover({ placement:'auto', trigger: 'click', title: obj.titreTooltip, content: obj.descriptionTooltip });
	// 	});
 //    });
}

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