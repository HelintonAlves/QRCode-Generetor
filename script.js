function gerarQRCode() {
    var texto = document.getElementById("text-input").value;
    var qrcodeContainer = document.getElementById("qrcode");
    var downloadBtn = document.getElementById("downloadBtn");
    var textInput = document.getElementById("text-input");

    // Limpar o conteúdo atual no contêiner do QR code
    qrcodeContainer.innerHTML = "";

    if (texto !== "") {
        var qrcode = new QRCode(qrcodeContainer, {
            text: texto,
            width: 100,
            height: 100
        });

        if(texto !== ""){
            texto.value == "";
        }

        // Exibir o botão de download
        downloadBtn.style.display = "block";

        var marginLeft = -larguraBotao / 2 + "px";
        downloadBtn.style.marginLeft = marginLeft;

        // Centralizar verticalmente
        var marginTop = -alturaBotao / 2 + "px";
        downloadBtn.style.marginTop = marginTop;

        // Adicionar evento de clique ao botão de download
        downloadBtn.addEventListener("click", function () {
            // Converte o QR code em uma URL de dados
            var dataUrl = qrcodeContainer.querySelector("img").src;

            // Cria um link temporário e simula o clique para iniciar o download
            var link = document.createElement("a");
            link.href = dataUrl;
            link.download = "qrcode.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Limpar o campo de texto
            document.getElementById(textInput).value = "";

            // Ocultar o botão de download
            downloadBtn.style.display = "none";
        });
    } else {
        alert("Por favor, insira um texto para gerar o QR Code.");
    }
}


function atualizarContadorCaracteres(caracteresDigitados) {
    var limiteCaracteres = 1000;
    var caracteresRestantes = limiteCaracteres - caracteresDigitados;

    var contadorCaracteres = document.getElementById("contador-caracteres");
    contadorCaracteres.textContent = caracteresRestantes + " caracteres restantes";

    // Altere a cor do contador se o limite for excedido
    if (caracteresRestantes < 0) {
        contadorCaracteres.style.color = "red";
    } else {
        contadorCaracteres.style.color = "black";
    }
}

// Adicione um ouvinte de eventos para monitorar a entrada de texto e atualizar o contador
document.getElementById("text-input").addEventListener("input", function () {
    var texto = document.getElementById("text-input").value;
    atualizarContadorCaracteres(texto.length);
});

function baixarQRCode() {
    var qrcodeContainer = document.getElementById("qrcode");
    var dataUrl = qrcodeContainer.querySelector("img").src;

    // Cria um link temporário e simula o clique para iniciar o download
    var link = document.createElement("a");
    link.href = dataUrl;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    document.getElementById("text-input").replaceChild("");
}

function limparCampoTexto() {
    document.getElementById("text-input").value = "";
    atualizarContadorCaracteres(0);  // Atualiza o contador para refletir a limpeza
}

// Adicione um ouvinte de eventos para monitorar a entrada de texto e atualizar o contador
document.getElementById("text-input").addEventListener("input", function () {
    var texto = document.getElementById("text-input").value;
    atualizarContadorCaracteres(texto.length);
});
