function a_zsort(sort) {
    var show = document.getElementById('mangalist');
    show.innerHTML = "";
    if (sort == 0) {
        for (var i = 0; i < manga.content.length; i++) {
            show.innerHTML += '<a href="' + manga.content[i].series + '"><div class="manga">'
                + '<img class="manga-img" src="' + manga.content[i].img + '">'
                + '<div class="moreinfo">more info</div>'
                + '<div class="manga-title overflow"><b>' + manga.content[i].title + '</b></div></div></a>';
        }
    }
    else if (sort == 1) {
        for (var i = manga.content.length - 1; i >= 0; i--) {
            show.innerHTML += '<a href="' + manga.content[i].series + '"><div class="manga">'
                + '<img class="manga-img" src="' + manga.content[i].img + '">'
                + '<div class="moreinfo">more info</div>'
                + '<div class="manga-title overflow"><b>' + manga.content[i].title + '</b></div></div></a>';
        }
    }
}
function genresort(genre) {
    var show = document.getElementById('mangalist');
    show.innerHTML = "";
    for (var i = 0; i < manga.content.length; i++) {
        for (var j = 0; j < manga.content[i].genre.length; j++) {
            if (genre == manga.content[i].genre[j]) {
                show.innerHTML += '<a href="' + manga.content[i].series + '"><div class="manga">'
                + '<img class="manga-img" src="' + manga.content[i].img + '">'
                + '<div class="moreinfo">more info</div>'
                + '<div class="manga-title overflow"><b>' + manga.content[i].title + '</b></div></div></a>';
            }
        }
    }
}
function groupsort(group) {
    var show = document.getElementById('mangalist');
    show.innerHTML = "";
    for (var i = 0; i < manga.content.length; i++) {
        for (var j = 0; j < manga.content[i].group.length; j++) {
            if (group == manga.content[i].group[j]) {
                show.innerHTML += '<a href="' + manga.content[i].series + '"><div class="manga">'
                + '<img class="manga-img" src="' + manga.content[i].img + '">'
                + '<div class="moreinfo">more info</div>'
                + '<div class="manga-title overflow"><b>' + manga.content[i].title + '</b></div></div></a>';
            }
        }
    }
}
function authorsort(author) {
    var show = document.getElementById('mangalist');
    show.innerHTML = "";
    for (var i = 0; i < manga.content.length; i++) {
        for (var j = 0; j < manga.content[i].author.length; j++) {
            if (author == manga.content[i].author[j]) {
                show.innerHTML += '<a href="' + manga.content[i].series + '"><div class="manga">'
                + '<img class="manga-img" src="' + manga.content[i].img + '">'
                + '<div class="moreinfo">more info</div>'
                + '<div class="manga-title overflow"><b>' + manga.content[i].title + '</b></div></div></a>';
            }
        }
    }
}
function statussort(status) {
    var show = document.getElementById('mangalist');
    show.innerHTML = "";
    for (var i = 0; i < manga.content.length; i++) {
        if (status == manga.content[i].status) {
            show.innerHTML += '<a href="' + manga.content[i].series + '"><div class="manga">'
                + '<img class="manga-img" src="' + manga.content[i].img + '">'
                + '<div class="moreinfo">more info</div>'
                + '<div class="manga-title overflow"><b>' + manga.content[i].title + '</b></div></div></a>';
        }
    }
}