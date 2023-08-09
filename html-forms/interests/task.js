let arr = Array.from(document.querySelectorAll('.interests_active'));

arr.forEach(item => {
    let groupInterest = item.previousElementSibling.firstElementChild;
    let groupCheckboxes = item.querySelectorAll('.interest__check');
    groupInterest.addEventListener('change', function() {
      groupCheckboxes.forEach(el => {
         el.checked = this.checked;
      });
    });
  });