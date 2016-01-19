(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jquery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SlideMenu = function () {
	function SlideMenu($el) {
		_classCallCheck(this, SlideMenu);

		this.$el = $el;
		this.state = false;
		this.$target = (0, _jquery2.default)(this.$el.data("slidemenu-target"));
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
			(0, _jquery2.default)("[data-slidemenu-target]").each(function () {
				return new SlideMenu((0, _jquery2.default)(this));
			});
		}
	}]);

	return SlideMenu;
}();

exports.default = SlideMenu;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(require,module,exports){
(function (global){
'use strict';

var _jquery = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

var _SlideMenu = require('./SlideMenu');

var _SlideMenu2 = _interopRequireDefault(_SlideMenu);

require('./sdk.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(function () {
	_SlideMenu2.default.init();
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./SlideMenu":1,"./sdk.js":3}],3:[function(require,module,exports){
"use strict";

!function (d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.async = true;
        js.id = id;js.src = "//platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, "script", "twitter-wjs");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL3NjcmlwdHMvU2xpZGVNZW51LmpzIiwiYXNzZXRzL3NyYy9zY3JpcHRzL2FsbC5qcyIsImFzc2V0cy9zcmMvc2NyaXB0cy9zZGsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0dxQixTQUFTO0FBRzdCLFVBSG9CLFNBQVMsQ0FHakIsR0FBRyxFQUFFO3dCQUhHLFNBQVM7O0FBSTVCLE1BQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ2YsTUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsTUFBSSxDQUFDLE9BQU8sR0FBRyxzQkFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7QUFDcEQsTUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBQ1Y7O2NBUm1CLFNBQVM7O3VCQVV4QjtBQUNKLE9BQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0dBQzdDOzs7eUJBRU0sS0FBSyxFQUFFO0FBQ2IsUUFBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ3ZCLE9BQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ3pCLE9BQUksSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNmLFFBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNaLE1BQU07QUFDTixRQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDYjtHQUNEOzs7eUJBRU07QUFDTixPQUFJLE1BQU0sQ0FBQztBQUNYLE9BQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2pDLE9BQUksQ0FBQyxPQUFP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QyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqRCxLQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDbkMsQ0FBQSxFQUFHLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZU1lbnUge1xuXG5cblx0Y29uc3RydWN0b3IoJGVsKSB7XG5cdFx0dGhpcy4kZWwgPSAkZWw7XG5cdFx0dGhpcy5zdGF0ZSA9IGZhbHNlO1xuXHRcdHRoaXMuJHRhcmdldCA9ICQodGhpcy4kZWwuZGF0YShcInNsaWRlbWVudS10YXJnZXRcIikpO1xuXHRcdHRoaXMub24oKTtcblx0fVxuXG5cdG9uKCkge1xuXHRcdHRoaXMuJGVsLm9uKCdjbGljaycsIHRoaXMudG9nZ2xlLmJpbmQodGhpcykpO1xuXHR9XG5cblx0dG9nZ2xlKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnN0YXRlID0gIXRoaXMuc3RhdGU7XG5cdFx0aWYgKHRoaXMuc3RhdGUpIHtcblx0XHRcdHRoaXMub3BlbigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0fVxuXHR9XG5cblx0b3BlbigpIHtcblx0XHR2YXIgaGVpZ2h0O1xuXHRcdHRoaXMuJHRhcmdldC5hZGRDbGFzcyhcImlzLW9wZW5cIik7XG5cdFx0dGhpcy4kdGFyZ2V0LmhlaWdodChcIlwiKTtcblx0XHRoZWlnaHQgPSB0aGlzLiR0YXJnZXQuaGVpZ2h0KCk7XG5cdFx0dGhpcy4kdGFyZ2V0LmhlaWdodCgwKTtcblx0XHR0aGlzLiR0YXJnZXQuaGVpZ2h0KGhlaWdodCk7XG5cdH1cblxuXHRjbG9zZSgpIHtcblx0XHR0aGlzLiR0YXJnZXQuaGVpZ2h0KHRoaXMuJHRhcmdldC5oZWlnaHQoKSk7XG5cdFx0dGhpcy4kdGFyZ2V0LmhlaWdodCgwKTtcblx0XHR0aGlzLiR0YXJnZXQucmVtb3ZlQ2xhc3MoXCJpcy1vcGVuXCIpO1xuXHR9XG5cblx0c3RhdGljIGluaXQoKSB7XG5cdFx0JChcIltkYXRhLXNsaWRlbWVudS10YXJnZXRdXCIpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFNsaWRlTWVudSgkKHRoaXMpKTtcblx0XHR9KTtcblx0fVxuXG59XG5cbiIsIlxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBTbGlkZU1lbnUgZnJvbSAnLi9TbGlkZU1lbnUnO1xuXG5pbXBvcnQgJy4vc2RrLmpzJztcblxuJChmdW5jdGlvbigpIHtcblx0U2xpZGVNZW51LmluaXQoKTtcbn0pOyIsIiFmdW5jdGlvbihkLHMsaWQpe1xudmFyIGpzLGZqcz1kLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdO1xuaWYoIWQuZ2V0RWxlbWVudEJ5SWQoaWQpKXtcbiAgICBqcz1kLmNyZWF0ZUVsZW1lbnQocyk7XG4gICAganMuYXN5bmMgPSB0cnVlO1xuICAgIGpzLmlkPWlkO2pzLnNyYz1cIi8vcGxhdGZvcm0udHdpdHRlci5jb20vd2lkZ2V0cy5qc1wiO1xuICAgIGZqcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShqcyxmanMpO1xufX0oZG9jdW1lbnQsXCJzY3JpcHRcIixcInR3aXR0ZXItd2pzXCIpO1xuKGZ1bmN0aW9uKGQsIHMsIGlkKSB7XG4gICAgdmFyIGpzLCBmanMgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdO1xuICAgIGlmIChkLmdldEVsZW1lbnRCeUlkKGlkKSkgcmV0dXJuO1xuICAgIGpzID0gZC5jcmVhdGVFbGVtZW50KHMpOyBqcy5pZCA9IGlkO1xuICAgIGpzLmFzeW5jID0gdHJ1ZTtcbiAgICBqcy5zcmMgPSBcIi8vY29ubmVjdC5mYWNlYm9vay5uZXQvamFfSlAvYWxsLmpzI3hmYm1sPTEmYXBwSWQ9MTIwMzk0MTg4MTE0MjQ0XCI7XG4gICAgZmpzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGpzLCBmanMpO1xufShkb2N1bWVudCwgJ3NjcmlwdCcsICdmYWNlYm9vay1qc3NkaycpKTtcbndpbmRvdy5fX19nY2ZnPXtsYW5nOlwiamFcIn07XG4oZnVuY3Rpb24oKXtcbiAgICB2YXIgcG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICBwby50eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI7XG4gICAgcG8uYXN5bmM9dHJ1ZTtcbiAgICBwby5zcmM9XCJodHRwczovL2FwaXMuZ29vZ2xlLmNvbS9qcy9wbHVzb25lLmpzXCI7XG4gICAgdmFyIHM9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIilbMF07XG4gICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShwbyxzKTtcbn0pKCk7Il19
