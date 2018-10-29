UIX.Interface = function (target) {
    this.id = 'Interface' + _u.getId();
    this.target = target;
    this.values = {};
    this.elements = {};
    this.setValue = this.setValue.bind(this);
    UIX.Interface.all[this.id] = this;
};

UIX.Interface.all = {};
UIX.Interface.prototype = {};

UIX.Interface.prototype.getVals = function (type, opt) {
    let defVals = JSON.parse(JSON.stringify(UIX.items[type].defVal));
    let rv = Object.assign({}, defVals, opt);
    if (!rv) rv = type + '_' + _u.randomKey();
    return rv;
};

UIX.Interface.prototype.insert = function (code) {
    if (this.target) {
        let $target = _u.get.$1(this.target);
        $target.insertAdjacentHTML('beforeend', code);
    } else {
        console.log('No target defined.');
    }
};

UIX.Interface.prototype.setValue = function (e) {
    if (e.target.value) {
        this.values[e.target.id] = _u.stringCast(e.target.value);
    }
};

UIX.Interface.prototype.add = function (type, opt) {

    let insertObj = this.getVals(type, opt);
    this.values[insertObj.id] = insertObj.value;
    let code = _u.tmpl.render(UIX.items[type].templ, insertObj);
    this.insert(code);
    this.elements[insertObj.id] = _u.get.$1('#' + insertObj.id);
    this.setEvents(this.elements[insertObj.id], opt);

    const el = new UIX.Element();
    el.$el = this.elements[insertObj.id];
    el.type = el.$el.type;

    return el;

};

UIX.Interface.prototype.setEvents = function ($el, opt) {
    $el.addEventListener('input', this.setValue);
    $el.addEventListener('change', this.setValue);
    $el.addEventListener('keyup', this.setValue);

    const getValueFn = (e) => {
        if (e.target.type === 'checkbox') {
            return e.target.checked;
        } else {
            return e.target.value;
        }
    };

    if (opt.onClick) {
        $el.addEventListener('click', opt.onClick);
    }
    if (opt.onChange) {
        $el.addEventListener('input', function (e) {
            opt.onChange(getValueFn(e), e);
        });
    }
    if (opt.onInput) {
        $el.addEventListener('input', function (e) {
            opt.onInput(getValueFn(e), e);
        });
    }
};

UIX.Interface.prototype.addText = function (opt) {
    return this.add('text', opt);
};

UIX.Interface.prototype.addSelect = function (opt) {

    let arr1 = opt.options.split(',');
    let arr2;
    let optValue;
    let optLabel;
    let optionTags = '';

    _u.each(arr1, (item) => {
        arr2 = item.split('|');
        if (arr2.length === 2) {
            optValue = arr2[0].trim();
            optLabel = arr2[1].trim();
        } else {
            optLabel = arr2[0].trim();
            optValue = optLabel;
        }

        if (opt.value === optValue) {
            optionTags += `<option selected value="${optValue}">${optLabel}</option>`;
        } else {
            optionTags += `<option value="${optValue}">${optLabel}</option>`;
        }


    });

    opt.optionTags = optionTags;
    return this.add('select', opt);
};

UIX.Interface.prototype.addRange = function (opt) {
    return this.add('range', opt);
};

UIX.Interface.prototype.addButton = function (opt) {
    return this.add('button', opt);
};

UIX.Interface.prototype.addCheckbox = function (opt) {
    return this.add('checkbox', opt);
};

UIX.Interface.prototype.addSwish = function (opt) {
    return this.add('swish', opt);
};

UIX.Interface.prototype.addHr = function (opt) {
    var $target = _u.get.$1(this.target);
    $target.insertAdjacentHTML('beforeend', '<hr>');
};

UIX.Interface.prototype.destroy = function () {
    delete UIX.Interface.all[that.id];
};