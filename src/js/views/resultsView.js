import icons from "url:../../img/icons.svg";
import View from "./view.js";
import previewView from "./previewView.js";

class ResultsView extends View {

    _parentElement = document.getElementById("results");
    _errorMessage = "We could not find anything for your search query. Please try something else!";
    _message = "";

    _generateMarkup() {
        // const recipeId = window.location.hash.slice(1);
        // console.log(recipeId);
        return this._data.map(result => previewView.render(result, false)).join();
    }

    _renderResult(result, recipeId) {
      
      return `<li class="preview">
        <a class="preview__link ${recipeId === result.id ? 'preview__link--active' : ''}" href="#${result.id}">
          <figure class="preview__fig">
            <img src="${result.imageUrl}" alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${result.title}</h4>
            <p class="preview__publisher">${result.publisher}</p>
          </div>
        </a>
      </li>`
    }

}

export default new ResultsView();