import View from "./view.js";
import previewView from "./previewView.js";

class BookmarksView extends View {

    _parentElement = document.getElementById("bookmarks__list");
    _errorMessage = "We could not find anything for your search query. Please try something else!";
    _message = "";

  addHanderRender(handler) {
    window.addEventListener('load', handler());
  }

  _generateMarkup() {
      return this._data.map(bookmark => previewView.render(bookmark, false)).join();
  }

}

export default new BookmarksView();