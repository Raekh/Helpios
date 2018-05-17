window.addEventListener('load', createBtnHelp )

function createBtnHelp(){
    var css = ".float{position:fixed;width:80px;height:80px;bottom:80px;right:80px;line-height: 5rem;border: solid 1px #ffffff;color:#FFF;border-radius:80px;text-align:center;z-index: 99999}.modal{display:none;position:fixed;z-index:1;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.4)}.modal-content{background-color:#fefefe;margin:auto;padding:20px;border:1px solid #888;width:80%}.close{color:#aaa;float:right;font-size:28px;font-weight:700}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer}";
    var htmlDiv = document.createElement('div');
    htmlDiv.innerHTML = '<style>' + css + '</style>';
    document.head.appendChild(htmlDiv);

    var button = document.createElement("button");
    button.innerHTML = "Help";
    button.id = "initPopup";
    button.className = "float";
    button.addEventListener("click",initPopup);
    document.body.appendChild(button);

    createTooltips();

}

function initPopup(){

    $('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true
    });
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