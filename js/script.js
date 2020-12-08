function DomElement (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.element = ''
}

DomElement.prototype.createElement = function () {
    if (this.selector.startsWith('.')) {
        this.element = document.createElement('div');
        this.element.classList.add(`${this.selector.slice(1)}`);
        this.element.style.cssText = `height: ${this.height};
                                    width: ${this.width};
                                    background: ${this.bg};
                                    position: absolute;`
                                    
        document.body.append(this.element);

    } else if (this.selector.startsWith('#')) {
        this.element = document.createElement('p');
        this.element.setAttribute('id', `${this.selector.slice(1)}`);
        this.element.style.cssText = `height: ${this.height};
                                    width: ${this.width};
                                    background: ${this.bg};`

        document.body.append(this.element);
    }
};

domElement = new DomElement('.block', '100px', '100px', 'red',);
document.addEventListener('DOMContentLoaded', domElement.createElement());

let leftPos = 0;
let topPos = 0;
divElement = document.querySelector('.block');
document.addEventListener('keydown', function (event) {

    switch (event.keyCode) {
        case 39: // вправо
            leftPos += 10;
            divElement.style.left = leftPos + 'px';
            break;
        case 37: // влево
            leftPos -= 10;
            divElement.style.left = leftPos + 'px';
            break;
        case 40: // вниз
            topPos += 10;
            divElement.style.top = topPos + 'px';
            break;
        case 38: // вверх
            topPos -= 10;
            divElement.style.top = topPos + 'px';
            break;
    }
})