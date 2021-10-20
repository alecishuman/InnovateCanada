function search_bar() {
  var input, filter, item, title, a, i, txtValue;
  input = document.getElementById("searchBar");
  input_value = input.value.toUpperCase();
  item = document.getElementsByClassName("search-items");
  title = document.getElementsByClassName("search-item-title");

  for (i = 0; i < title.length; i++) {
    a = title[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(input_value) > -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}

function filter(filter_tag) {
  var item, item_tag, tag_text;
  item = document.querySelectorAll(".search-items");

  if (filter_tag == "everything") {
    for (var i = 0; i < item.length; i++) {
      item[i].style.display = "";
    }
  } else {
    for (var i = 0; i < item.length; i++) {
      var contain_tag = false;
      item_tag = item[i].querySelectorAll(".tag");
      for (var j = 0; j < item_tag.length; j++) {
        tag_text = item_tag[j].textContent || item_tag[i].innerText;
        if (tag_text == filter_tag) {
          contain_tag = true;
        }
      }
      if (contain_tag) {
        item[i].style.display = "";
      } else {
        item[i].style.display = "none";
      }
    }
  }
}