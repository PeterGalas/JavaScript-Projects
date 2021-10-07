
  function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("To continue Write your name please.");
      return false;
    }
  }