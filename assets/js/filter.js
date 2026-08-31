// Filters any list marked up as:
//   <div data-filter-root>  <button class="chip" data-tag="x">  <input class="search">
//   <li class="record" data-tags="a b c" data-text="...">
(function () {
  document.querySelectorAll('[data-filter-root]').forEach(function (root) {
    var chips   = Array.prototype.slice.call(root.querySelectorAll('.chip'));
    var search  = root.querySelector('.search');
    var records = Array.prototype.slice.call(root.querySelectorAll('.record'));
    var count   = root.querySelector('[data-count]');
    var empty   = root.querySelector('[data-empty]');
    var active  = 'all';

    function apply() {
      var q = (search && search.value || '').trim().toLowerCase();
      var shown = 0;

      records.forEach(function (rec) {
        var tags = (rec.dataset.tags || '').toLowerCase();
        var text = (rec.dataset.text || rec.textContent).toLowerCase();
        var okTag = active === 'all' || tags.split(/\s+/).indexOf(active) !== -1;
        var okText = !q || text.indexOf(q) !== -1;
        var show = okTag && okText;
        rec.hidden = !show;
        if (show) shown++;
      });

      if (count) count.textContent = shown;
      if (empty) empty.hidden = shown !== 0;
    }

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        active = chip.dataset.tag;
        chips.forEach(function (c) {
          c.setAttribute('aria-pressed', String(c === chip));
        });
        apply();
      });
    });

    if (search) search.addEventListener('input', apply);
    apply();
  });
})();
