const inputField = document.getElementById("key");
function checkInput(){
  let text = inputField.value;
  if (text == "TurkeyDay2025"){
    window.location.href = "main.html"
  }else{
    alert("Incorrect key. Please try again")
  }
}