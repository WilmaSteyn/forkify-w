import icons from "url:../../img/icons.svg";

export default class View {
    
    _data;
    _parentElement;
    _errorMessage = "";
    _message = "";

    render(data, render = true) {
        console.log(`${render ? 'rendering' : 'returning'}`);        
        if (!data || (Array.isArray(data) && (data.length === 0))) return this.renderError();
        this._data = data;
        const markup = this._generateMarkup();        
        if (!render) {
            return markup;
        }
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    update(data) {
        if (!data || (Array.isArray(data) && (data.length === 0))) return this.renderError();
        this._data = data;
        const newMarkup = this._generateMarkup();
        const newDom = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDom.querySelectorAll('*'));
        const currentElements = Array.from(this._parentElement.querySelectorAll('*'));
        if (!currentElements?.length !== newElements.length) {
            return (this.render(data));
        }
        newElements.forEach((newElement, i) => {            
            const currentElement = currentElements[i];            
                       
            if (!currentElement.isEqualNode(newElement)) {
                Array.from(newElement.attributes).forEach(attribute => {
                    currentElement.setAttribute(attribute.name, attribute.value);
                })
                if (!currentElement.firstElementChild) {
                    currentElement.textContent = newElement.textContent;
                } 
            }
        })
    }

    renderSpinner = function() {
        const markup = 
            `<div class="spinner" id="spinner">
                <svg>
                    <use href="${icons}#icon-loader"></use>
                </svg>
            </div>`;
        this._clear();    
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderError(errorText = this._errorMessage) {
        const markup =
            `<div class="error">
                <div>
                <svg>
                    <use href="${icons}#icon-alert-triangle"></use>
                </svg>
                </div>
                <p>${errorText}</p>
            </div>`;
        this._clear();    
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    };

    renderMessage(messageText = this._message) {
        const markup =
            `<div class="message">
                <div>
                <svg>
                    <use href="${icons}#icon-smile"></use>
                </svg>
                </div>
                <p>${messageText}</p>
            </div>`;
        this._clear();    
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    };

    _clear() {
        this._parentElement.innerHTML = "";
    }

}