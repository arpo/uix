UIX.items = {
    text: {
        templ: `<section>
                   <label>{{label}}</label>
                   <input id="{{id}}" class="full" type="text" value="{{value}}">
                </section>`,
        defVal: {
            label: 'My Text input',
            value: '',
        }
    },
    checkbox: {
        templ: `<section>
                    <input type="checkbox" {{value}} id="{{id}}" name="{{id}}">
                    <label for="{{id}}">
                       <span class="unchecked"><i class="fas fa-square"></i> {{label}}</span>
                       <span class="checked"><i class="fas fa-check-square"></i> {{label}}</span>
                    </label>
                </section>`,
        defVal: {
            label: 'My checkbox',
            value: 'checked' // 'checked' || ''
        }
    },
    swish: {
        templ: `<section>
                    <input type="checkbox" {{value}} id="{{id}}" name="{{id}}">
                    <label for="{{id}}">
                        <span class="unchecked"><i class="fas fa-square"></i> {{label}}</span>
                        <span class="checked"><i class="fas fa-check-square"></i> {{label}}</span>
                    </label>
                </section>`,
        defVal: {
            label: 'My swish',
            value: 'checked' // 'checked' || ''
        }
    },
    range: {
        templ: `<section>
                    <label>{{label}}</label>
                    <input name="{{id}}" id="{{id}}" class="full" type="range" min="{{min}}" max="{{max}}" value="{{value}}" step="{{step}}" oninput="{{id}}OutputId.value = {{id}}.value">
                    <output name="{{id}}OutputName" id="{{id}}OutputId">{{value}}</output>
                </section>`,
        defVal: {
            min: 0,
            max: 500,
            value: 100,
            step: 1,
            label: 'My range'
        }
    },
    button: {
        templ: `<button id="{{id}}" href="javascript:"><i class="fa fa-{{icon}}"></i>{{label}}</button>`,
        defVal: {
            icon: '',
            label: 'My button'
        }
    },
};