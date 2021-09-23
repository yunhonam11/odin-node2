document.getElementsByClassName("messageUser")[0].addEventListener("click", function() {
    if (document.getElementsByClassName("messageUser")[0].value == "Name")
    {
      document.getElementsByClassName("messageUser")[0].value = "";
    }
});

document.getElementsByClassName("messageUser")[0].addEventListener("blur", function() {
    if (document.getElementsByClassName("messageUser")[0].value == "")
    {
      document.getElementsByClassName("messageUser")[0].value = "Name";
    }
});