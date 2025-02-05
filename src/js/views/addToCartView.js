import View from './View.js';

import previewView from './previewView.js';

import icons from 'url:../../img/icons.svg';

class addToCartView extends View {
  _parentElement = document.querySelector('.price__list');
  _errorMessage = 'No products added to cart yet.';
  #message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data.map(carts => previewView.render(carts, false)).join('');
  }
}

export default new addToCartView();
