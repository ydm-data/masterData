var fbpkey = document.cookie.replace(/(?:(?:^|.*;\s*)_fbp\s*\=\s*([^;]*).*$)|^.*$/, "$1");
var fbcKey = document.cookie.replace(/(?:(?:^|.*;\s*)_fbc\s*\=\s*([^;]*).*$)|^.*$/, "$1");
var cookies = document.cookie;
var match = cookies.match(/_ga=([^;]+)/);
var paramDomain = "store.modernform.co.th";
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.ipify.org?format=json", false);
xhr.send();
if (xhr.status === 200) {
    var ipAddress = JSON.parse(xhr.responseText).ip;
}
var userAgent = navigator.userAgent;
var sendData = {};
if (ipAddress) sendData.ip_address = ipAddress;
if (userAgent) sendData.user_agent = userAgent;
if (fbcKey) sendData._fbc = fbcKey;
if (fbpkey) sendData._fbp = fbpkey;
if (match) {
    var cookieDomain = document.domain;
    if (cookieDomain.indexOf(paramDomain) !== -1) {
        var persudo_id = match[1].split('.').slice(-2).join(".");
        sendData.persudo_id = persudo_id;
    }
}
if (Object.keys(sendData).length > 0) {
    adbrix.event.send('user_info', sendData);
    if (sendData.ip_address) adbrix.userProperty.addOrUpdate('ip_address', sendData.ip_address);
    if (sendData.user_agent) adbrix.userProperty.addOrUpdate('user_agent', sendData.user_agent);
    if (sendData._fbc) adbrix.userProperty.addOrUpdate('_fbc', sendData._fbc);
    if (sendData._fbp) adbrix.userProperty.addOrUpdate('_fbp', sendData._fbp);
    if (sendData.persudo_id) adbrix.userProperty.addOrUpdate('persudo_id', sendData.persudo_id);
}
