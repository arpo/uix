UIX.items = {
    range: {
        templ: '<section>' +
            '    <label>{{label}}</label>' +
            '    <input name="{{id}}" id="{{id}}" class="full" type="range" min="{{min}}" max="{{max}}" value="{{value}}" step="{{step}}" oninput="{{id}}OutputId.value = {{id}}.value">' +
            '    <output name="{{id}}OutputName" id="{{id}}OutputId">{{value}}</output>' +
            '</section>',
        defVal: {
            min: 0,
            max: 500,
            value: 22,
            step: 1,
            label: 'My range'
        }
    },
    button: {
        templ: '<button id="{{id}}" href="javascript:"><i class="fa fa-{{icon}}"></i>{{label}}</button>',
        defVal: {
            icon: '',
            label: 'My button'
        }
    }
};
