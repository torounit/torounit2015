import $ from 'jquery';


export default class SlideMenu {


	constructor($el) {
		this.$el = $el;
		this.state = false;
		this.$target = $(this.$el.data("slidemenu-target"));
		this.on();
	}

	on() {
		this.$el.on('click', this.toggle.bind(this));
	}

	toggle(event) {
		event.preventDefault();
		this.state = !this.state;
		if (this.state) {
			this.open();
		} else {
			this.close();
		}
	}

	open() {
		var height;
		this.$target.addClass("is-open");
		this.$target.height("");
		height = this.$target.height();
		this.$target.height(0);
		this.$target.height(height);
	}

	close() {
		this.$target.height(this.$target.height());
		this.$target.height(0);
		this.$target.removeClass("is-open");
	}

	static init() {
		$("[data-slidemenu-target]").each(function() {
			return new SlideMenu($(this));
		});
	}

}

