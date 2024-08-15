let tobeDisplayed = [];
let pages = ['example', 'example2', 'example3'];
var searchbar = document.getElementById('searchbar');
var searchbox = document.getElementById('searchbox');

searchbar.addEventListener('keyup', () => {
    let input = document.getElementById('searchbar').value;
    parseArray(input);
});

searchbar.addEventListener('focus', () => {
    searchbox.style.visibility = 'visible';
    insertInitial();
});

function parseArray(value) {
    tobeDisplayed = [];
    
    value = value.toLowerCase();
    
    for (var i = 0; i < pages.length; i++) {
        if (pages[i].includes(value)) {
            tobeDisplayed.push(pages[i]);
        }
    }

    insertElements();
    return tobeDisplayed;
}

function insertInitial() {
    var div = document.getElementById('searchbox');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }

    for (var i = 0; i < 16; i++) {
        if (pages[i] == undefined) {
            break;
        }
        searchbox.insertAdjacentHTML('beforeend', '<p>'+pages[i]+'</p>');
    }
}

function insertElements() { 
    var div = document.getElementById('searchbox');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    
    if (tobeDisplayed.length === 0) {
        searchbox.insertAdjacentHTML('beforeend', '<p>No results found</p>');
        return;
    }

    for (var i = 0; i < 16; i++) {
        if (tobeDisplayed[i] == undefined) {
            break;
        }
        searchbox.insertAdjacentHTML('beforeend', '<p class="searchresult" data-page="'+tobeDisplayed[i]+'">'+tobeDisplayed[i]+'</p>');
    };

    let searchresults = document.getElementsByClassName('searchresult');

    for (var i = 0; i < searchresults.length; i++) {
        searchresults[i].addEventListener('click', function() {
            loadPage(this.textContent, 'ligos');
        })
    }
};

function loadPage(page, type) {
    location.assign('/lt/'+type+'/'+page);
}; 


searchbar.addEventListener('blur', () => {
    setTimeout(() => {
        searchbox.style.visibility = 'hidden';
    }, 1000);
    searchbar.value = ""
});
