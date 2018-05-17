window.addEventListener('load', createBtnHelp )

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


    createTooltips();

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