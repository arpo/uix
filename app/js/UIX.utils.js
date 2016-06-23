UIX.utils = {};
UIX.utils.tmpl = {

	startTag: '{{',
	endTag: '}}',
	get: function (id) {
		return document.getElementById('lib-' + id).innerHTML;
	},
	put: function (pattern, inserts) {
		var rv = pattern, prop;
		for (prop in inserts) {
			rv = rv.split(this.startTag + prop + this.endTag).join(inserts[prop]);
		}
		return rv;
	},
	render: function  (input, inserts) {

		var pattern = input;
		 if (input.indexOf(this.startTag) === -1) {
		 	pattern = this.get(input);
		 }

		var rv = '';
		if (inserts instanceof Array) {
			var len = inserts.length, i;
			for (i = 0; i < len; i += 1) {
				rv += this.put(pattern, inserts[i]);
			}
		} else {
			rv = this.put(pattern, inserts);
		}
		return rv;
	}
};

UIX.utils.get = {
    $1: document.querySelector.bind(document), //Node array, usage: var el = $1('.one-time-class');
    $2: document.querySelectorAll.bind(document) // Direct reference, usage: var alArr = $2('.my-class');
};

UIX.utils.randomKey = function (len) {
    len = len || 6;
	var rand, chars, i, max, id = '';
	rand = function (from, to) { return Math.floor(Math.random() * (to - from + 1) + from);};
	chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	max = chars.length - 1;
	//c.l(Math.pow(max, len)); //num possibilities
	for (i = 0; i < len; i += 1) id += chars.charAt(rand(0, max - 1));
	return id;
};

UIX.utils.stringCast = function (s) {

	var check = function(s) {
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
};

UIX.utils.extend = function() {

    // Variables
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length;

    // Check if a deep merge
    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
        deep = arguments[0];
        i++;
    }

    // Merge the object into the extended object
    var merge = function(obj) {
        for (var prop in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                // If deep merge and property is an object, merge properties
                if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                    extended[prop] = extend(true, extended[prop], obj[prop]);
                } else {
                    extended[prop] = obj[prop];
                }
            }
        }
    };

    // Loop through each object and conduct a merge
    for (; i < length; i++) {
        var obj = arguments[i];
        merge(obj);
    }

    return extended;

};
