+function (exports) {
    if (typeof window === 'undefined') {
        module.exports = exports;
    } else {
        return exports(window.jQuery);
    }
}(function (jQuery) {
    /**
     * @param {String} selector
     * @return {jQuery}
     */
    jQuery.fn.search = function (selector) {
        return this.find(selector).addBack(selector);
    };
});
