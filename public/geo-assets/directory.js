(() => {
  const search = document.getElementById('city-search');
  const state = document.getElementById('state-filter');
  if (!search) return;
  const links = [...document.querySelectorAll('.city-link')];
  const update = () => {
    const query = search.value.trim().toLocaleLowerCase();
    const selected = state ? state.value : '';
    let count = 0;
    links.forEach(link => {
      const show = (!query || link.dataset.search.includes(query)) && (!selected || link.dataset.state === selected);
      link.hidden = !show;
      if (show) count++;
    });
    document.querySelectorAll('.state-group').forEach(group => {
      group.hidden = ![...group.querySelectorAll('.city-link')].some(link => !link.hidden);
    });
    document.getElementById('city-count').textContent = count ? `${count} city ${count === 1 ? 'guide' : 'guides'} shown` : 'No matching city. Call (970) 601-7369 to check your address.';
  };
  search.addEventListener('input', update);
  if (state) state.addEventListener('change', update);
})();
