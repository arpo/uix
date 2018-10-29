const UIX = window['UIX'] || {}; // eslint-disable-line
UIX.Element = function (target) {
    this.id = 'Element' + _u.getId();
    UIX.Element.all[this.id] = this;
};

UIX.Element.all = {};
UIX.Element.prototype = {};

UIX.Element.prototype.destroy = function () {
    delete UIX.Element.all[this.id];
};