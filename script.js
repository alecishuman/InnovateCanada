function search_bar() {
    var input, filter, item, title, a, i, txtValue;
    input = document.getElementById('searchBar');
    filter = input.value.toUpperCase();
    item = document.getElementsByClassName("search-items");
    title = document.getElementsByClassName('search-item-title');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < title.length; i++) {
      a = title[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        item[i].style.display = "";
      } else {
        item[i].style.display = "none";
      }
      console.log('hi');
    }
  }