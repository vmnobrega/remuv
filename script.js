function RemoverNewLine(str) {
    return str.replace(/(\r\n|\n|\r)/gm, " ");
}

function ConverterTexto() {
    var texto = document.getElementById("inputString").value;
    document.getElementById("Resultado").innerHTML = RemoveNewLine(texto);
}