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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL3NjcmlwdHMvU2xpZGVNZW51LmpzIiwiYXNzZXRzL3NyYy9zY3JpcHRzL2FsbC5qcyIsImFzc2V0cy9zcmMvc2NyaXB0cy9zZGsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0dxQjtBQUdwQixVQUhvQixTQUdwQixDQUFZLEdBQVosRUFBaUI7d0JBSEcsV0FHSDs7QUFDaEIsT0FBSyxHQUFMLEdBQVcsR0FBWCxDQURnQjtBQUVoQixPQUFLLEtBQUwsR0FBYSxLQUFiLENBRmdCO0FBR2hCLE9BQUssT0FBTCxHQUFlLHNCQUFFLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxrQkFBZCxDQUFGLENBQWYsQ0FIZ0I7QUFJaEIsT0FBSyxFQUFMLEdBSmdCO0VBQWpCOztjQUhvQjs7dUJBVWY7QUFDSixRQUFLLEdBQUwsQ0FBUyxFQUFULENBQVksT0FBWixFQUFxQixLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLElBQWpCLENBQXJCLEVBREk7Ozs7eUJBSUUsT0FBTztBQUNiLFNBQU0sY0FBTixHQURhO0FBRWIsUUFBSyxLQUFMLEdBQWEsQ0FBQyxLQUFLLEtBQUwsQ0FGRDtBQUdiLE9BQUksS0FBSyxLQUFMLEVBQVk7QUFDZixTQUFLLElBQUwsR0FEZTtJQUFoQixNQUVPO0FBQ04sU0FBSyxLQUFMLEdBRE07SUFGUDs7Ozt5QkFPTTtBQUNOLE9BQUksTUFBSixDQURNO0FBRU4sUUFBSyxPQUFMLENBQWEsUUFBYixDQUFzQixTQUF0QixFQUZNO0FBR04sUUFBSyxPQUFMLENBQWEsTUFBYixDQUFvQixFQUFwQixFQUhNO0FBSU4sWUFBUyxLQUFLLE9BQUwsQ0FBYSxNQUFiLEVBQVQsQ0FKTTtBQUtOLFFBQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsQ0FBcEIsRUFMTTtBQU1OLFFBQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsTUFBcEIsRUFOTTs7OzswQkFTQztBQUNQLFFBQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsS0FBSyxPQUFMLENBQWEsTUFBYixFQUFwQixFQURPO0FBRVAsUUFBSyxPQUFMLENBQWEsTUFBYixDQUFvQixDQUFwQixFQUZPO0FBR1AsUUFBSyxPQUFMLENBQWEsV0FBYixDQUF5QixTQUF6QixFQUhPOzs7O3lCQU1NO0FBQ2IseUJBQUUseUJBQUYsRUFBNkIsSUFBN0IsQ0FBa0MsWUFBVztBQUM1QyxXQUFPLElBQUksU0FBSixDQUFjLHNCQUFFLElBQUYsQ0FBZCxDQUFQLENBRDRDO0lBQVgsQ0FBbEMsQ0FEYTs7OztRQXZDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNHckIsc0JBQUUsWUFBVztBQUNaLHFCQUFVLElBQVYsR0FEWTtDQUFYLENBQUY7Ozs7Ozs7QUNOQSxDQUFDLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxFQUFiLEVBQWdCO0FBQ2pCLFFBQUksRUFBSjtRQUFPLE1BQUksRUFBRSxvQkFBRixDQUF1QixDQUF2QixFQUEwQixDQUExQixDQUFKLENBRFU7QUFFakIsUUFBRyxDQUFDLEVBQUUsY0FBRixDQUFpQixFQUFqQixDQUFELEVBQXNCO0FBQ3JCLGFBQUcsRUFBRSxhQUFGLENBQWdCLENBQWhCLENBQUgsQ0FEcUI7QUFFckIsV0FBRyxLQUFILEdBQVcsSUFBWCxDQUZxQjtBQUdyQixXQUFHLEVBQUgsR0FBTSxFQUFOLENBSHFCLEVBR1osQ0FBRyxHQUFILEdBQU8sbUNBQVAsQ0FIWTtBQUlyQixZQUFJLFVBQUosQ0FBZSxZQUFmLENBQTRCLEVBQTVCLEVBQStCLEdBQS9CLEVBSnFCO0tBQXpCO0NBRkMsQ0FPRSxRQVBGLEVBT1csUUFQWCxFQU9vQixhQVBwQixDQUFEO0FBUUEsQ0FBQyxVQUFTLENBQVQsRUFBWSxDQUFaLEVBQWUsRUFBZixFQUFtQjtBQUNoQixRQUFJLEVBQUo7UUFBUSxNQUFNLEVBQUUsb0JBQUYsQ0FBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsQ0FBTixDQURRO0FBRWhCLFFBQUksRUFBRSxjQUFGLENBQWlCLEVBQWpCLENBQUosRUFBMEIsT0FBMUI7QUFDQSxTQUFLLEVBQUUsYUFBRixDQUFnQixDQUFoQixDQUFMLENBSGdCLEVBR1MsQ0FBRyxFQUFILEdBQVEsRUFBUixDQUhUO0FBSWhCLE9BQUcsS0FBSCxHQUFXLElBQVgsQ0FKZ0I7QUFLaEIsT0FBRyxHQUFILEdBQVMsbUVBQVQsQ0FMZ0I7QUFNaEIsUUFBSSxVQUFKLENBQWUsWUFBZixDQUE0QixFQUE1QixFQUFnQyxHQUFoQyxFQU5nQjtDQUFuQixFQU9DLFFBUEQsRUFPVyxRQVBYLEVBT3FCLGdCQVByQixDQUFEO0FBUUEsT0FBTyxPQUFQLEdBQWUsRUFBQyxNQUFLLElBQUwsRUFBaEI7QUFDQSxDQUFDLFlBQVU7QUFDUCxRQUFJLEtBQUcsU0FBUyxhQUFULENBQXVCLFFBQXZCLENBQUgsQ0FERztBQUVQLE9BQUcsSUFBSCxHQUFRLGlCQUFSLENBRk87QUFHUCxPQUFHLEtBQUgsR0FBUyxJQUFULENBSE87QUFJUCxPQUFHLEdBQUgsR0FBTyx1Q0FBUCxDQUpPO0FBS1AsUUFBSSxJQUFFLFNBQVMsb0JBQVQsQ0FBOEIsUUFBOUIsRUFBd0MsQ0FBeEMsQ0FBRixDQUxHO0FBTVAsTUFBRSxVQUFGLENBQWEsWUFBYixDQUEwQixFQUExQixFQUE2QixDQUE3QixFQU5PO0NBQVYsQ0FBRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlTWVudSB7XG5cblxuXHRjb25zdHJ1Y3RvcigkZWwpIHtcblx0XHR0aGlzLiRlbCA9ICRlbDtcblx0XHR0aGlzLnN0YXRlID0gZmFsc2U7XG5cdFx0dGhpcy4kdGFyZ2V0ID0gJCh0aGlzLiRlbC5kYXRhKFwic2xpZGVtZW51LXRhcmdldFwiKSk7XG5cdFx0dGhpcy5vbigpO1xuXHR9XG5cblx0b24oKSB7XG5cdFx0dGhpcy4kZWwub24oJ2NsaWNrJywgdGhpcy50b2dnbGUuYmluZCh0aGlzKSk7XG5cdH1cblxuXHR0b2dnbGUoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMuc3RhdGUgPSAhdGhpcy5zdGF0ZTtcblx0XHRpZiAodGhpcy5zdGF0ZSkge1xuXHRcdFx0dGhpcy5vcGVuKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHR9XG5cdH1cblxuXHRvcGVuKCkge1xuXHRcdHZhciBoZWlnaHQ7XG5cdFx0dGhpcy4kdGFyZ2V0LmFkZENsYXNzKFwiaXMtb3BlblwiKTtcblx0XHR0aGlzLiR0YXJnZXQuaGVpZ2h0KFwiXCIpO1xuXHRcdGhlaWdodCA9IHRoaXMuJHRhcmdldC5oZWlnaHQoKTtcblx0XHR0aGlzLiR0YXJnZXQuaGVpZ2h0KDApO1xuXHRcdHRoaXMuJHRhcmdldC5oZWlnaHQoaGVpZ2h0KTtcblx0fVxuXG5cdGNsb3NlKCkge1xuXHRcdHRoaXMuJHRhcmdldC5oZWlnaHQodGhpcy4kdGFyZ2V0LmhlaWdodCgpKTtcblx0XHR0aGlzLiR0YXJnZXQuaGVpZ2h0KDApO1xuXHRcdHRoaXMuJHRhcmdldC5yZW1vdmVDbGFzcyhcImlzLW9wZW5cIik7XG5cdH1cblxuXHRzdGF0aWMgaW5pdCgpIHtcblx0XHQkKFwiW2RhdGEtc2xpZGVtZW51LXRhcmdldF1cIikuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBuZXcgU2xpZGVNZW51KCQodGhpcykpO1xuXHRcdH0pO1xuXHR9XG5cbn1cblxuIiwiXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IFNsaWRlTWVudSBmcm9tICcuL1NsaWRlTWVudSc7XG5cbmltcG9ydCAnLi9zZGsuanMnO1xuXG4kKGZ1bmN0aW9uKCkge1xuXHRTbGlkZU1lbnUuaW5pdCgpO1xufSk7IiwiIWZ1bmN0aW9uKGQscyxpZCl7XG52YXIganMsZmpzPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF07XG5pZighZC5nZXRFbGVtZW50QnlJZChpZCkpe1xuICAgIGpzPWQuY3JlYXRlRWxlbWVudChzKTtcbiAgICBqcy5hc3luYyA9IHRydWU7XG4gICAganMuaWQ9aWQ7anMuc3JjPVwiLy9wbGF0Zm9ybS50d2l0dGVyLmNvbS93aWRnZXRzLmpzXCI7XG4gICAgZmpzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGpzLGZqcyk7XG59fShkb2N1bWVudCxcInNjcmlwdFwiLFwidHdpdHRlci13anNcIik7XG4oZnVuY3Rpb24oZCwgcywgaWQpIHtcbiAgICB2YXIganMsIGZqcyA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF07XG4gICAgaWYgKGQuZ2V0RWxlbWVudEJ5SWQoaWQpKSByZXR1cm47XG4gICAganMgPSBkLmNyZWF0ZUVsZW1lbnQocyk7IGpzLmlkID0gaWQ7XG4gICAganMuYXN5bmMgPSB0cnVlO1xuICAgIGpzLnNyYyA9IFwiLy9jb25uZWN0LmZhY2Vib29rLm5ldC9qYV9KUC9hbGwuanMjeGZibWw9MSZhcHBJZD0xMjAzOTQxODgxMTQyNDRcIjtcbiAgICBmanMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsIGZqcyk7XG59KGRvY3VtZW50LCAnc2NyaXB0JywgJ2ZhY2Vib29rLWpzc2RrJykpO1xud2luZG93Ll9fX2djZmc9e2xhbmc6XCJqYVwifTtcbihmdW5jdGlvbigpe1xuICAgIHZhciBwbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgIHBvLnR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIjtcbiAgICBwby5hc3luYz10cnVlO1xuICAgIHBvLnNyYz1cImh0dHBzOi8vYXBpcy5nb29nbGUuY29tL2pzL3BsdXNvbmUuanNcIjtcbiAgICB2YXIgcz1kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXTtcbiAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHBvLHMpO1xufSkoKTsiXX0=
