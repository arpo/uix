var UIX = (function () {

    function _getVals(type, opt) {
        var defVals = JSON.parse(JSON.stringify(UIX.items[type].defVal)),
            rv = Object.assign({}, defVals, opt);
        if (!rv) rv = type + '_' + _u.randomKey();
        return rv;

    }

    function _insert(code) {
        if (UIX.target) {
            var $target = _u.get.$1(UIX.target);
            $target.insertAdjacentHTML('beforeend', code);
        } else {
            console.log('No target defined.\nDefine it with\nUIX.target = "#myUi";');
        }
    }

    function _setValue(e) {
        if (e.target.value) {
            UIX.get[e.target.id] = _u.stringCast(e.target.value);
        }
    }

    function _setEvents(id, opt) {

        var $item = _u.get.$1('#' + id);

        $item.addEventListener('input', _setValue);
        $item.addEventListener('change', _setValue);
        $item.addEventListener('keyup', _setValue);

        if (opt.onClick) {
            $item.addEventListener('click', opt.onClick);
        }
        if (opt.onChange) {
            $item.addEventListener('input', function (e) {
                opt.onChange(e.target.value, e);
            });
        }
        if (opt.onInput) {
            $item.addEventListener('input', function (e) {
                opt.onInput(e.target.value, e);
            });
        }

    }

    function _add(type, opt) {

        var insertObj = _getVals(type, opt);
        UIX.get[insertObj.id] = insertObj.value;
        var code = _u.tmpl.render(UIX.items[type].templ, insertObj);
        _insert(code);
        _setEvents(insertObj.id, opt);

    }

    function _addText(opt) {
        _add('text', opt);
    }

    function _addRange(opt) {
        _add('range', opt);
    }

    function _addButton(opt) {
        _add('button', opt);
    }

    /* function _addToggle(opt) {
        _add('toggle', opt);
    } */

    function _addHr() {
        var $target = _u.get.$1(UIX.target);
        $target.insertAdjacentHTML('beforeend', '<hr>');
    }


    return {
        add: _add,
        addText: _addText,
        addRange: _addRange,
        addButton: _addButton,
        addHr: _addHr,
        target: null,
        get: {}
    };

}());

//window.addEventListener('load', UIX.run);