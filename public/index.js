// Change page
let filled = 7;
pageTotal = getPages(filled);
pageCurrent = 2;
 

getPages = function (filled) {
    pages = 0;
    if ((filled%2) != 0){
        pages = filled/2 + 1;
    }
    else{
        pages = filled/2;
    }
    return pages;
}