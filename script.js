let tobeDisplayed = [];
var pages = ['example', 'example2', 'example3'];
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

searchbar.addEventListener('blur', () => {
    searchbox.style.visibility = 'hidden';
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
        console.log('cleared');
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
        console.log('cleared');
    }
    
    if (tobeDisplayed.length === 0) {
        searchbox.insertAdjacentHTML('beforeend', '<p>No results found</p>');
        return;
    }

    for (var i = 0; i < 16; i++) {
        if (tobeDisplayed[i] == undefined) {
            break;
        }
        searchbox.insertAdjacentHTML('beforeend', '<p class="misery">'+tobeDisplayed[i]+'</p>');

        var misery = document.getElementsByClassName('misery');
        misery[i].addEventListener('click', bindClick());
    };
    
    console.log(tobeDisplayed);
};

function bindClick() {
    return function() {
        console.log('kgdfjlkgjdf');
    };
};

function loadPage(page, type) {
    location.assign('/lt/'+type+'/'+page);
};

