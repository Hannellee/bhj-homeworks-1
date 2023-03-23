let parentInterest = Array.from(document.querySelectorAll('div > ul > li > label > .interest__check'));

parentInterest.forEach(item => {

  item.addEventListener('change', (e) => {

    if (item.closest('.interest') === e.target.closest('.interest')) {

      let siblingInterest = item.closest('label').nextElementSibling;
      let childInterest = siblingInterest.querySelectorAll('.interest__check');

      childInterest.forEach(el => {
        el.checked = item.checked;
      });

    }

  });
});
