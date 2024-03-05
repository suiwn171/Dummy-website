let requestURL = 'manga.json';
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        manga = JSON.parse(request.responseText);
    }
};
request.open("GET", requestURL, true);
request.send();