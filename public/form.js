let runBtn = document.getElementById("run");
let keyBox = document.getElementById("key");
//let codeBox = document.getElementById("code");



function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

runBtn.onclick = () => {
    httpGet(`/run?code=${editor.getValue()}&key=${keyBox.value}`);
    //window.location.href = `/run?code=${codeBox.value}&key=${keyBox.value}`
}
