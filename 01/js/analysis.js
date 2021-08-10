const path = "/users/download/index.html"

function isHtml(path) {
    const SEARCH_STRING = ".html";
    return path.slice(-5) === SEARCH_STRING;
}

console.log(isHtml(path));
