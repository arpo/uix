var UIX = (function() {

    function _getVals(type, opt) {

        var defVals = JSON.parse(JSON.stringify(UIX.items[type].defVal)),
            rv = UIX.utils.extend(defVals, opt);

        if(!rv) rv = type + '_' + UIX.utils.randomKey();
        return rv;

    }

    function _insert(code) {
        if (UIX.target) {
            var $target = UIX.utils.get.$1(UIX.target);
            $target.insertAdjacentHTML('beforeend', code);
        } else {
            console.log('No target defined.\nDefine it with\nUIX.target = "#myUi";');
        }
    }

    function _setEvents(id, opt) {

        var $item = UIX.utils.get.$1('#' + id);

        console.log($item);

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
        var code = UIX.utils.tmpl.render(UIX.items[type].templ, insertObj);
        _insert(code);
        _setEvents(insertObj.id, opt);

    }

    function _addRange(opt) {
        _add('range', opt);
    }

    function _addButton(opt) {
        _add('button', opt);
    }

    function _addHr() {
        var $target = UIX.utils.get.$1(UIX.target);
        $target.insertAdjacentHTML('beforeend', '<hr>');
    }


    return {
        addRange: _addRange,
        addButton: _addButton,
        addHr: _addHr,
        target: null
    };

}());

//window.addEventListener('load', UIX.run);
