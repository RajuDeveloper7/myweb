function downloadFile() {
    var fileURL = "./documents/Raju_Resume.pdf";
    var fileName = "Raju_Resume.pdf";
    var link = document.createElement("a");
    link.href = fileURL;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}