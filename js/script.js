const fileURL = "./documents/Raju_Resume.pdf";


function downloadFile() {
    var fileName = "Raju_Resume.pdf";
    var link = document.createElement("a");
    link.href = fileURL;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function printFile() {

    var iframe = document.createElement("iframe");
    iframe.setAttribute("style", "display:none;");
    document.body.appendChild(iframe);
    iframe.onload = function () {
        var iframeWindow = iframe.contentWindow || iframe.contentDocument;
        iframeWindow.print();
    };
    iframe.src = fileURL;

}