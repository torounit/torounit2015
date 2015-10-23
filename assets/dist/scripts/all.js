(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _jquery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

var SlideMenu = (function () {
	function SlideMenu($el) {
		_classCallCheck(this, SlideMenu);

		this.$el = $el;
		this.state = false;
		this.$target = (0, _jquery2['default'])(this.$el.data("slidemenu-target"));
		this.on();
	}

	_createClass(SlideMenu, [{
		key: 'on',
		value: function on() {
			this.$el.on('click', this.toggle.bind(this));
		}
	}, {
		key: 'toggle',
		value: function toggle(event) {
			event.preventDefault();
			this.state = !this.state;
			if (this.state) {
				this.open();
			} else {
				this.close();
			}
		}
	}, {
		key: 'open',
		value: function open() {
			var height;
			this.$target.addClass("is-open");
			this.$target.height("");
			height = this.$target.height();
			this.$target.height(0);
			this.$target.height(height);
		}
	}, {
		key: 'close',
		value: function close() {
			this.$target.height(this.$target.height());
			this.$target.height(0);
			this.$target.removeClass("is-open");
		}
	}], [{
		key: 'init',
		value: function init() {
			(0, _jquery2['default'])("[data-slidemenu-target]").each(function () {
				return new SlideMenu((0, _jquery2['default'])(this));
			});
		}
	}]);

	return SlideMenu;
})();

exports['default'] = SlideMenu;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(require,module,exports){
(function (global){
'use strict';

var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
var SlideMenu = require('./SlideMenu');

require('./sdk.js');

$(function () {
	SlideMenu.init();
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./SlideMenu":1,"./sdk.js":3}],3:[function(require,module,exports){
"use strict";

!(function (d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.async = true;
        js.id = id;js.src = "//platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
    }
})(document, "script", "twitter-wjs");
(function (d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/ja_JP/all.js#xfbml=1&appId=120394188114244";
    fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');
window.___gcfg = { lang: "ja" };
(function () {
    var po = document.createElement("script");
    po.type = "text/javascript";
    po.async = true;
    po.src = "https://apis.google.com/js/plusone.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(po, s);
})();

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvdG9yb3VuaXQvdG9yb3VuaXQyMDE1L2Fzc2V0cy9zcmMvc2NyaXB0cy9TbGlkZU1lbnUuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvdG9yb3VuaXQvdG9yb3VuaXQyMDE1L2Fzc2V0cy9zcmMvc2NyaXB0cy9hbGwuanMiLCIvaG9tZS90cmF2aXMvYnVpbGQvdG9yb3VuaXQvdG9yb3VuaXQyMDE1L2Fzc2V0cy9zcmMvc2NyaXB0cy9zZGsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O3NCQ0FjLFFBQVE7Ozs7SUFHRCxTQUFTO0FBR2xCLFVBSFMsU0FBUyxDQUdqQixHQUFHLEVBQUU7d0JBSEcsU0FBUzs7QUFJNUIsTUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDZixNQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixNQUFJLENBQUMsT0FBTyxHQUFHLHlCQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztBQUNwRCxNQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDVjs7Y0FSbUIsU0FBUzs7U0FVM0IsY0FBRztBQUNKLE9BQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0dBQzdDOzs7U0FFSyxnQkFBQyxLQUFLLEVBQUU7QUFDYixRQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDdkIsT0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDekIsT0FBSSxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ2YsUUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ1osTUFB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QUMsQ0FBRTtBQUN6QyxNQUFNLENBQUMsT0FBTyxHQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxDQUFDO0FBQzNCLENBQUMsWUFBVTtBQUNQLFFBQUksRUFBRSxHQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDeEMsTUFBRSxDQUFDLElBQUksR0FBQyxpQkFBaUIsQ0FBQztBQUMxQixNQUFFLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQztBQUNkLE1BQUUsQ0FBQyxHQUFHLEdBQUMsdUNBQXVDLENBQUM7QUFDL0MsUUFBSSxDQUFDLEdBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pELEtBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQztDQUNuQyxDQUFBLEVBQUcsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlTWVudSB7XG5cblxuXHRjb25zdHJ1Y3RvcigkZWwpIHtcblx0XHR0aGlzLiRlbCA9ICRlbDtcblx0XHR0aGlzLnN0YXRlID0gZmFsc2U7XG5cdFx0dGhpcy4kdGFyZ2V0ID0gJCh0aGlzLiRlbC5kYXRhKFwic2xpZGVtZW51LXRhcmdldFwiKSk7XG5cdFx0dGhpcy5vbigpO1xuXHR9XG5cblx0b24oKSB7XG5cdFx0dGhpcy4kZWwub24oJ2NsaWNrJywgdGhpcy50b2dnbGUuYmluZCh0aGlzKSk7XG5cdH1cblxuXHR0b2dnbGUoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMuc3RhdGUgPSAhdGhpcy5zdGF0ZTtcblx0XHRpZiAodGhpcy5zdGF0ZSkge1xuXHRcdFx0dGhpcy5vcGVuKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHR9XG5cdH1cblxuXHRvcGVuKCkge1xuXHRcdHZhciBoZWlnaHQ7XG5cdFx0dGhpcy4kdGFyZ2V0LmFkZENsYXNzKFwiaXMtb3BlblwiKTtcblx0XHR0aGlzLiR0YXJnZXQuaGVpZ2h0KFwiXCIpO1xuXHRcdGhlaWdodCA9IHRoaXMuJHRhcmdldC5oZWlnaHQoKTtcblx0XHR0aGlzLiR0YXJnZXQuaGVpZ2h0KDApO1xuXHRcdHRoaXMuJHRhcmdldC5oZWlnaHQoaGVpZ2h0KTtcblx0fVxuXG5cdGNsb3NlKCkge1xuXHRcdHRoaXMuJHRhcmdldC5oZWlnaHQodGhpcy4kdGFyZ2V0LmhlaWdodCgpKTtcblx0XHR0aGlzLiR0YXJnZXQuaGVpZ2h0KDApO1xuXHRcdHRoaXMuJHRhcmdldC5yZW1vdmVDbGFzcyhcImlzLW9wZW5cIik7XG5cdH1cblxuXHRzdGF0aWMgaW5pdCgpIHtcblx0XHQkKFwiW2RhdGEtc2xpZGVtZW51LXRhcmdldF1cIikuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBuZXcgU2xpZGVNZW51KCQodGhpcykpO1xuXHRcdH0pO1xuXHR9XG5cbn1cblxuIiwiXG52YXIgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG52YXIgU2xpZGVNZW51ID0gcmVxdWlyZSgnLi9TbGlkZU1lbnUnKTtcblxucmVxdWlyZSgnLi9zZGsuanMnKTtcblxuJChmdW5jdGlvbigpIHtcblx0U2xpZGVNZW51LmluaXQoKTtcbn0pOyIsIiFmdW5jdGlvbihkLHMsaWQpe1xudmFyIGpzLGZqcz1kLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdO1xuaWYoIWQuZ2V0RWxlbWVudEJ5SWQoaWQpKXtcbiAgICBqcz1kLmNyZWF0ZUVsZW1lbnQocyk7XG4gICAganMuYXN5bmMgPSB0cnVlO1xuICAgIGpzLmlkPWlkO2pzLnNyYz1cIi8vcGxhdGZvcm0udHdpdHRlci5jb20vd2lkZ2V0cy5qc1wiO1xuICAgIGZqcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShqcyxmanMpO1xufX0oZG9jdW1lbnQsXCJzY3JpcHRcIixcInR3aXR0ZXItd2pzXCIpO1xuKGZ1bmN0aW9uKGQsIHMsIGlkKSB7XG4gICAgdmFyIGpzLCBmanMgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdO1xuICAgIGlmIChkLmdldEVsZW1lbnRCeUlkKGlkKSkgcmV0dXJuO1xuICAgIGpzID0gZC5jcmVhdGVFbGVtZW50KHMpOyBqcy5pZCA9IGlkO1xuICAgIGpzLmFzeW5jID0gdHJ1ZTtcbiAgICBqcy5zcmMgPSBcIi8vY29ubmVjdC5mYWNlYm9vay5uZXQvamFfSlAvYWxsLmpzI3hmYm1sPTEmYXBwSWQ9MTIwMzk0MTg4MTE0MjQ0XCI7XG4gICAgZmpzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGpzLCBmanMpO1xufShkb2N1bWVudCwgJ3NjcmlwdCcsICdmYWNlYm9vay1qc3NkaycpKTtcbndpbmRvdy5fX19nY2ZnPXtsYW5nOlwiamFcIn07XG4oZnVuY3Rpb24oKXtcbiAgICB2YXIgcG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICBwby50eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI7XG4gICAgcG8uYXN5bmM9dHJ1ZTtcbiAgICBwby5zcmM9XCJodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9wbHVzb25lLmpzXCI7XG4gICAgdmFyIHM9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIilbMF07XG4gICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShwbyxzKTtcbn0pKCk7Il19
