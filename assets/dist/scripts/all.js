(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL3NjcmlwdHMvU2xpZGVNZW51LmpzIiwiYXNzZXRzL3NyYy9zY3JpcHRzL2FsbC5qcyIsImFzc2V0cy9zcmMvc2NyaXB0cy9zZGsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7SUFHcUIsUztBQUdwQixvQkFBWSxHQUFaLEVBQWlCO0FBQUE7O0FBQ2hCLE9BQUssR0FBTCxHQUFXLEdBQVg7QUFDQSxPQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsT0FBSyxPQUFMLEdBQWUsc0JBQUUsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLGtCQUFkLENBQUYsQ0FBZjtBQUNBLE9BQUssRUFBTDtBQUNBOzs7O3VCQUVJO0FBQ0osUUFBSyxHQUFMLENBQVMsRUFBVCxDQUFZLE9BQVosRUFBcUIsS0FBSyxNQUFMLENBQVksSUFBWixDQUFpQixJQUFqQixDQUFyQjtBQUNBOzs7eUJBRU0sSyxFQUFPO0FBQ2IsU0FBTSxjQUFOO0FBQ0EsUUFBSyxLQUFMLEdBQWEsQ0FBQyxLQUFLLEtBQW5CO0FBQ0EsT0FBSSxLQUFLLEtBQVQsRUFBZ0I7QUFDZixTQUFLLElBQUw7QUFDQSxJQUZELE1BRU87QUFDTixTQUFLLEtBQUw7QUFDQTtBQUNEOzs7eUJBRU07QUFDTixPQUFJLE1BQUo7QUFDQSxRQUFLLE9BQUwsQ0FBYSxRQUFiLENBQXNCLFNBQXRCO0FBQ0EsUUFBSyxPQUFMLENBQWEsTUFBYixDQUFvQixFQUFwQjtBQUNBLFlBQVMsS0FBSyxPQUFMLENBQWEsTUFBYixFQUFUO0FBQ0EsUUFBSyxPQUFMLENBQWEsTUFBYixDQUFvQixDQUFwQjtBQUNBLFFBQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsTUFBcEI7QUFDQTs7OzBCQUVPO0FBQ1AsUUFBSyxPQUFMLENBQWEsTUFBYixDQUFvQixLQUFLLE9BQUwsQ0FBYSxNQUFiLEVBQXBCO0FBQ0EsUUFBSyxPQUFMLENBQWEsTUFBYixDQUFvQixDQUFwQjtBQUNBLFFBQUssT0FBTCxDQUFhLFdBQWIsQ0FBeUIsU0FBekI7QUFDQTs7O3lCQUVhO0FBQ2IseUJBQUUseUJBQUYsRUFBNkIsSUFBN0IsQ0FBa0MsWUFBVztBQUM1QyxXQUFPLElBQUksU0FBSixDQUFjLHNCQUFFLElBQUYsQ0FBZCxDQUFQO0FBQ0EsSUFGRDtBQUdBOzs7Ozs7a0JBM0NtQixTOzs7Ozs7OztBQ0ZyQjs7OztBQUNBOzs7O0FBRUE7Ozs7QUFFQSxzQkFBRSxZQUFXO0FBQ1oscUJBQVUsSUFBVjtBQUNBLENBRkQ7Ozs7Ozs7QUNOQSxDQUFDLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxFQUFiLEVBQWdCO0FBQ2pCLFFBQUksRUFBSjtBQUFBLFFBQU8sTUFBSSxFQUFFLG9CQUFGLENBQXVCLENBQXZCLEVBQTBCLENBQTFCLENBQVg7QUFDQSxRQUFHLENBQUMsRUFBRSxjQUFGLENBQWlCLEVBQWpCLENBQUosRUFBeUI7QUFDckIsYUFBRyxFQUFFLGFBQUYsQ0FBZ0IsQ0FBaEIsQ0FBSDtBQUNBLFdBQUcsS0FBSCxHQUFXLElBQVg7QUFDQSxXQUFHLEVBQUgsR0FBTSxFQUFOLENBQVMsR0FBRyxHQUFILEdBQU8sbUNBQVA7QUFDVCxZQUFJLFVBQUosQ0FBZSxZQUFmLENBQTRCLEVBQTVCLEVBQStCLEdBQS9CO0FBQ0g7QUFBQyxDQVBELENBT0UsUUFQRixFQU9XLFFBUFgsRUFPb0IsYUFQcEIsQ0FBRDtBQVFDLFdBQVMsQ0FBVCxFQUFZLENBQVosRUFBZSxFQUFmLEVBQW1CO0FBQ2hCLFFBQUksRUFBSjtBQUFBLFFBQVEsTUFBTSxFQUFFLG9CQUFGLENBQXVCLENBQXZCLEVBQTBCLENBQTFCLENBQWQ7QUFDQSxRQUFJLEVBQUUsY0FBRixDQUFpQixFQUFqQixDQUFKLEVBQTBCO0FBQzFCLFNBQUssRUFBRSxhQUFGLENBQWdCLENBQWhCLENBQUwsQ0FBeUIsR0FBRyxFQUFILEdBQVEsRUFBUjtBQUN6QixPQUFHLEtBQUgsR0FBVyxJQUFYO0FBQ0EsT0FBRyxHQUFILEdBQVMsbUVBQVQ7QUFDQSxRQUFJLFVBQUosQ0FBZSxZQUFmLENBQTRCLEVBQTVCLEVBQWdDLEdBQWhDO0FBQ0gsQ0FQQSxFQU9DLFFBUEQsRUFPVyxRQVBYLEVBT3FCLGdCQVByQixDQUFEO0FBUUEsT0FBTyxPQUFQLEdBQWUsRUFBQyxNQUFLLElBQU4sRUFBZjtBQUNBLENBQUMsWUFBVTtBQUNQLFFBQUksS0FBRyxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBUDtBQUNBLE9BQUcsSUFBSCxHQUFRLGlCQUFSO0FBQ0EsT0FBRyxLQUFILEdBQVMsSUFBVDtBQUNBLE9BQUcsR0FBSCxHQUFPLHVDQUFQO0FBQ0EsUUFBSSxJQUFFLFNBQVMsb0JBQVQsQ0FBOEIsUUFBOUIsRUFBd0MsQ0FBeEMsQ0FBTjtBQUNBLE1BQUUsVUFBRixDQUFhLFlBQWIsQ0FBMEIsRUFBMUIsRUFBNkIsQ0FBN0I7QUFDSCxDQVBEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVNZW51IHtcblxuXG5cdGNvbnN0cnVjdG9yKCRlbCkge1xuXHRcdHRoaXMuJGVsID0gJGVsO1xuXHRcdHRoaXMuc3RhdGUgPSBmYWxzZTtcblx0XHR0aGlzLiR0YXJnZXQgPSAkKHRoaXMuJGVsLmRhdGEoXCJzbGlkZW1lbnUtdGFyZ2V0XCIpKTtcblx0XHR0aGlzLm9uKCk7XG5cdH1cblxuXHRvbigpIHtcblx0XHR0aGlzLiRlbC5vbignY2xpY2snLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdHRvZ2dsZShldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5zdGF0ZSA9ICF0aGlzLnN0YXRlO1xuXHRcdGlmICh0aGlzLnN0YXRlKSB7XG5cdFx0XHR0aGlzLm9wZW4oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jbG9zZSgpO1xuXHRcdH1cblx0fVxuXG5cdG9wZW4oKSB7XG5cdFx0dmFyIGhlaWdodDtcblx0XHR0aGlzLiR0YXJnZXQuYWRkQ2xhc3MoXCJpcy1vcGVuXCIpO1xuXHRcdHRoaXMuJHRhcmdldC5oZWlnaHQoXCJcIik7XG5cdFx0aGVpZ2h0ID0gdGhpcy4kdGFyZ2V0LmhlaWdodCgpO1xuXHRcdHRoaXMuJHRhcmdldC5oZWlnaHQoMCk7XG5cdFx0dGhpcy4kdGFyZ2V0LmhlaWdodChoZWlnaHQpO1xuXHR9XG5cblx0Y2xvc2UoKSB7XG5cdFx0dGhpcy4kdGFyZ2V0LmhlaWdodCh0aGlzLiR0YXJnZXQuaGVpZ2h0KCkpO1xuXHRcdHRoaXMuJHRhcmdldC5oZWlnaHQoMCk7XG5cdFx0dGhpcy4kdGFyZ2V0LnJlbW92ZUNsYXNzKFwiaXMtb3BlblwiKTtcblx0fVxuXG5cdHN0YXRpYyBpbml0KCkge1xuXHRcdCQoXCJbZGF0YS1zbGlkZW1lbnUtdGFyZ2V0XVwiKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIG5ldyBTbGlkZU1lbnUoJCh0aGlzKSk7XG5cdFx0fSk7XG5cdH1cblxufVxuXG4iLCJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgU2xpZGVNZW51IGZyb20gJy4vU2xpZGVNZW51JztcblxuaW1wb3J0ICcuL3Nkay5qcyc7XG5cbiQoZnVuY3Rpb24oKSB7XG5cdFNsaWRlTWVudS5pbml0KCk7XG59KTsiLCIhZnVuY3Rpb24oZCxzLGlkKXtcbnZhciBqcyxmanM9ZC5nZXRFbGVtZW50c0J5VGFnTmFtZShzKVswXTtcbmlmKCFkLmdldEVsZW1lbnRCeUlkKGlkKSl7XG4gICAganM9ZC5jcmVhdGVFbGVtZW50KHMpO1xuICAgIGpzLmFzeW5jID0gdHJ1ZTtcbiAgICBqcy5pZD1pZDtqcy5zcmM9XCIvL3BsYXRmb3JtLnR3aXR0ZXIuY29tL3dpZGdldHMuanNcIjtcbiAgICBmanMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsZmpzKTtcbn19KGRvY3VtZW50LFwic2NyaXB0XCIsXCJ0d2l0dGVyLXdqc1wiKTtcbihmdW5jdGlvbihkLCBzLCBpZCkge1xuICAgIHZhciBqcywgZmpzID0gZC5nZXRFbGVtZW50c0J5VGFnTmFtZShzKVswXTtcbiAgICBpZiAoZC5nZXRFbGVtZW50QnlJZChpZCkpIHJldHVybjtcbiAgICBqcyA9IGQuY3JlYXRlRWxlbWVudChzKTsganMuaWQgPSBpZDtcbiAgICBqcy5hc3luYyA9IHRydWU7XG4gICAganMuc3JjID0gXCIvL2Nvbm5lY3QuZmFjZWJvb2submV0L2phX0pQL2FsbC5qcyN4ZmJtbD0xJmFwcElkPTEyMDM5NDE4ODExNDI0NFwiO1xuICAgIGZqcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShqcywgZmpzKTtcbn0oZG9jdW1lbnQsICdzY3JpcHQnLCAnZmFjZWJvb2stanNzZGsnKSk7XG53aW5kb3cuX19fZ2NmZz17bGFuZzpcImphXCJ9O1xuKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHBvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgcG8udHlwZT1cInRleHQvamF2YXNjcmlwdFwiO1xuICAgIHBvLmFzeW5jPXRydWU7XG4gICAgcG8uc3JjPVwiaHR0cHM6Ly9hcGlzLmdvb2dsZS5jb20vanMvcGx1c29uZS5qc1wiO1xuICAgIHZhciBzPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdO1xuICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocG8scyk7XG59KSgpOyJdfQ==
