'use strict';

// Filter the rendered entries so new posts are searchable without a separate index.
const searchForm = document.querySelector('#blog-search');
const searchInput = document.querySelector('#blog-query');
const searchStatus = document.querySelector('#search-status');
const entries = [...document.querySelectorAll('.blog-entry')];

const normalize = value => value.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase();
const searchableEntries = entries.map(entry => ({
  entry,
  text: normalize(`${entry.textContent} ${entry.dataset.keywords || ''}`)
}));

function filterArticles() {
  const terms = normalize(searchInput.value).trim().split(/\s+/).filter(Boolean);
  let count = 0;
  for (const {entry, text} of searchableEntries) {
    entry.hidden = !terms.every(term => text.includes(term));
    if (!entry.hidden) count++;
  }
  searchStatus.textContent = count === 0
    ? 'No matching articles. Try another topic or clear the search.'
    : `${count} ${count === 1 ? 'article' : 'articles'}${terms.length ? ' found' : ''}.`;
}

searchForm.hidden = false;
searchForm.addEventListener('submit', event => event.preventDefault());
searchInput.addEventListener('input', filterArticles);
searchInput.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    searchInput.value = '';
    filterArticles();
  }
});
filterArticles();
