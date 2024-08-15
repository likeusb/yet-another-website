var pages = ['example', 'example2', 'example3'];
var searchbar = document.getElementById('searchbar');
var searchbox = document.getElementById('searchbox');

searchbar.addEventListener('click', () => {
    insertElements();
});

function insertElements() {
    searchbox.textContent = '';

    pages.forEach((element) => {
        searchbox.textContent += element;
    });
};

function loadPage(page, type) {
    location.assign('/lt/'+type+'/'+page);
    // console.log('/lt/'+type+'/'+page);
};