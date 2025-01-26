import View from './View.js';

import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      console.log(btn);

      if (!btn) return;

      const goToPage = Number(btn.dataset.goto);

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return `
          ${this.generateMarkupButtonNext()}
      `;
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return `
        ${this.generateMarkupButtonPrev()}
      `;
    }
    // Other page

    if (curPage < numPages) {
      return `
        ${this.generateMarkupButtonPrev()} ${this.generateMarkupButtonNext()}
      `;
    }

    // Page 1, nad there are no other pages
    return '';
  }

  generateMarkupButtonNext() {
    const curPage = this._data.page;
    const nextPage = `${curPage + 1}`;
    return `
      <button data-goto="${nextPage}" class="btn--inline pagination__btn--next">
            <span>Page ${nextPage}</span>
              <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
      </button>
    `;
  }

  generateMarkupButtonPrev() {
    const curPage = this._data.page;
    const prevPage = `${curPage - 1}`;
    return ` 
      <button data-goto="${prevPage}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${prevPage}</span>
      </button>
    `;
  }
}

export default new PaginationView();
