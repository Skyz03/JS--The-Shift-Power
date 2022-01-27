const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // Check if they have the shift key down 
  //Check if they are checking or unchecking

  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // loop over every single box 

    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;

      }

      if (inBetween) {
        checkbox.checked = true;
      }
    })
  }
  lastChecked = this;
}


checkboxes.forEach(checkBox => checkBox.addEventListener('click', handleCheck));