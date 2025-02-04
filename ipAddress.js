function() {
    var ip = "";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.ipify.org?format=json", false);
    xhr.send();
    if (xhr.status === 200) {
        ip = JSON.parse(xhr.responseText).ip;
    }
    return ip;
}
