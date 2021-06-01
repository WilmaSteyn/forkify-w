import View from "./view.js";

class AddRecipeView extends View {

    _parentElement = document.getElementById("upload");
    _window = document.getElementById("add-recipe-window");
    _overlay = document.getElementById("overlay");

    _btnOpen = document.querySelector('.nav__btn--add-recipe');
    _btnClose = document.querySelector('.btn--close-modal');

    _errorMessage = "";
    _message = "";

    constructor() {
        super();
        this._addHandlerShowWindow();
        this._addHandlerCloseWindow();        
    }

    _addHandlerShowWindow() {
        this._btnOpen.addEventListener('click', this._toggleWindow.bind(this));
    }

    _addHandlerCloseWindow() {
        this._btnClose.addEventListener('click', this._toggleWindow.bind(this));
    }

    addHandlerSubmit(handler) {
        this._parentElement.addEventListener("submit", function(e) {
            e.preventDefault();
            const dataArr = [...new FormData(this)];
            handler(Object.fromEntries(dataArr));
        })
    }

    _toggleWindow() {
        this._overlay.classList.toggle('hidden');
        this._window.classList.toggle('hidden');
    }

    _generateMarkup() {

    }

}

export default new AddRecipeView();