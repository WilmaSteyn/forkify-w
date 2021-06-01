class SearchView {

    _parentElement = document.getElementById("searchForm");
    _inputField = this._parentElement.querySelector("#searchField");

    getQuery() {
        return this._inputField.value;
    }

    clearInput() {
        this._inputField.value = "";
    }

    addHandlerSearch(handler) {
        this._parentElement.addEventListener('submit', function(e) {
            e.preventDefault();
            handler();
        });
    }    

    init() {
        this._parentElement
    }
}

export default new SearchView();