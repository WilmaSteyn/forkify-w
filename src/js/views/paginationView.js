import View from "./view.js";
import icons from "url:../../img/icons.svg";
import { RESULTS_PER_PAGE } from "../config.js";

class PaginationView extends View {

    _parentElement = document.getElementById("pagination");


    _generateMarkup() {               
        const totalPages = Math.ceil(this._data.results.length / RESULTS_PER_PAGE);
        console.log(`Rendering pagination: currentPage = ${this._data.currentPage}, totalPages = ${totalPages}`);
        return `${(this._data.currentPage > 1 ? this._generatePrevious(Number(this._data.currentPage) - 1): '')}
                ${(this._data.currentPage < totalPages && totalPages > 1) ? this._generateNext(Number(this._data.currentPage) + 1): ''}`;
    }

    _generatePrevious(previousPage) {
        return `<button class="btn--inline pagination__btn--prev" id="btn--prev" data-goto="${previousPage}">
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${previousPage}</span>
        </button>`;
    }

    _generateNext(nextPage) {
        return `<button class="btn--inline pagination__btn--next" id="btn--next" data-goto="${nextPage}">
            <span>Page ${nextPage}</span>
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>`
    }


    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function(e) {
            e.preventDefault();
            const btn = e.target.closest('.btn--inline');        
            console.log(`${btn} - ${btn.dataset.goto}`);
            handler(btn.dataset.goto);
        });
    }
}

export default new PaginationView();