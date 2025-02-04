function() {
var cookies = document.cookie;
var match = cookies.match(/_ga=([^;]+)/);
var paramDomain = "store.modernform.co.th";
if (match) {
    var cookieDomain = document.domain;
    if (cookieDomain.includes(paramDomain)) {
        return match[1].split('.').slice(-2).join("."); 
    }
}
}