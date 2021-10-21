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
      item[i].style.display = "block";
    } else {
      item[i].style.display = "none";
    }
  }
}

function filter(filter_tag) {
  var item, item_tag, tag_text, filter_on, filter_on_tag;
  item = document.querySelectorAll(".search-items");
  filter_on = document.getElementsByClassName("filter-on");
  filter_on_tag = [];
  for (var i = 0; i < filter_on.length; i++) {
    filter_on_tag.push(filter_on[i].alt);
  }

  if (filter_tag == "everything" || filter_on.length == 0) {
    for (var i = 0; i < item.length; i++) {
      item[i].style.display = "block";
    }
  } else {
    for (var i = 0; i < item.length; i++) {
      var contain_tag = false;
      item_tag = item[i].querySelectorAll(".tag");
      for (var j = 0; j < item_tag.length; j++) {
        tag_text = item_tag[j].textContent || item_tag[i].innerText;
        if (filter_on_tag.includes(tag_text)) {
          contain_tag = true;
        }
      }
      item[i].style.display = (contain_tag) ? "block" : "none";
    }
  }
}

function filter_mark(id) {
  var filter_id, filter_check;
  if (id == "everything") {
    filter_check = document.querySelectorAll(".filter-check");
    for (var i = 0; i < filter_check.length; i++) {
      filter_check[i].style.display = "none";
      filter_check[i].classList.remove("filter-on");
    }
  } else {
    filter_id = document.querySelector(id);
    filter_check = filter_id.querySelector("img");
    filter_check.style.display = (filter_check.style.display == "block") ? "none" : "block";
    (filter_check.style.display == "block") ? filter_check.classList.add("filter-on") : filter_check.classList.remove("filter-on");
  }
}