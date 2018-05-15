var _u = {
	get: {
		$1: document.querySelector.bind(document), //Node array, usage: var el = $1('.one-time-class');
		$2: document.querySelectorAll.bind(document) // Direct reference, usage: var alArr = $2('.my-class');
	},
	defVal: function (input, defaultValue) {
		return (typeof (input) == 'undefined' || input === null || input === '') ? defaultValue : input;
	},
	each: function (target, action) {
		var i;
		if (!isNaN(target)) {
			for (i = 0; i < target; i += 1) {
				action(i);
			}
		} else if (target instanceof Array) {
			var len = target.length,
				curr;
			for (i = 0; i < len; i += 1) {
				action(target[i], i);
			}
		} else {
			var index = 0;
			for (var key in target) {
				action(target[key], key, index);
				index++;
			}

		}
	},
	size: function (obj) {
		return Object.keys(obj).length;
	},
	idIndex: 0,
	getId: function () {
		return _u.now().toString(36).replace('.', '') + (_u.idIndex++ % 1024).toString(36);
	},
	now: function () {
		return performance.now() || Date.now();
	},
	tmpl: {
		startTag: '{{',
		endTag: '}}',
		get: function (id) {
			return document.getElementById('lib-' + id).innerHTML;
		},
		put: function (pattern, inserts) {
			var rv = pattern,
				prop;
			for (prop in inserts) {
				rv = rv.split(this.startTag + prop + this.endTag).join(inserts[prop]);
			}
			return rv;
		},
		render: function (input, inserts) {

			var pattern = input;
			if (input.indexOf(this.startTag) === -1) {
				pattern = this.get(input);
			}

			var rv = '';
			if (inserts instanceof Array) {
				var len = inserts.length,
					i;
				for (i = 0; i < len; i += 1) {
					rv += this.put(pattern, inserts[i]);
				}
			} else {
				rv = this.put(pattern, inserts);
			}
			return rv;
		}
	},
	randomKey: function () {
		return parseInt(
			String(parseInt(Math.random() * 100)) + new Date().getTime() + parseInt(Math.random() * 100)
		).toString(36);
	},
	stringCast: function (s) {
		var check = function (s) {
			if (s.toLowerCase() === 'true') {
				return true;
			}
			if (s.toLowerCase() === 'false') {
				return false;
			}
			if (!isNaN(s.replace(',', '.'))) {
				s = s.replace(',', '.');
				if (s.indexOf('.')) {
					return parseFloat(s);
				} else {
					return parseInt(s);
				}
			}
			return s;
		};

		if (s === '') {
			return '';
		}

		if (s.indexOf('{') === -1) {
			return check(s);
		}

		try {
			var o = JSON.parse(s);
			if (o && typeof o === "object" && o !== null) {
				return o;
			}
		} catch (e) {
			check(s);
		}
	}
};