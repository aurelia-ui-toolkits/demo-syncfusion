(function($, ej, undefined) { //eslint-disable-line no-shadow-restricted-names
  ej.widget('ejSmartScroller', 'ej.SmartScroller', {
    element: null,
    model: null,
    _rootCSS: '',
    defaults: {
      triggerOnce: true,
      reach: null
    },
    dataTypes: {
      triggerOnce: 'boolean'
    },
    _init: function() {
      this._initialize();
      this._wireEvents();
    },
    _destroy: function() {
      this._off($(window), 'scroll', this._scrollHandler);
    },
    _setModel: function(options) {
    },
    _initialize: function() {
      this._oldScroll = this._newScroll = 0;
      this._triggered = false;
      if (this._oldScroll >= this._getOffset()) {
        this._triggerFn();
      }
    },
    _scrollHandler: function(e) {
      if (!this._triggered || !this.model.triggerOnce) {
        this._triggerOnReach();
        this._oldScroll = this._newScroll;
      }
    },
    _getOffset: function() {
      return $(this.element).offset().top - (document.documentElement.clientHeight - $(this.element).outerHeight());
    },
    _triggerOnReach: function() {
      this._newScroll = $(document).scrollTop();
      let offset = this._getOffset();
      if (this._oldScroll < offset && offset <= this._newScroll) {
        this._triggerFn();
      } else if (this._newScroll < offset && offset <= this._oldScroll) {
        this._triggerFn();
      }
    },
    _triggerFn: function() {
      this._triggered = true;
      this._trigger('reach', { element: this.element, offsetTop: this._newScroll });
    },
    _wireEvents: function() {
      this._on($(window), 'scroll', this._scrollHandler);
    }
  });
})(jQuery, Syncfusion);
