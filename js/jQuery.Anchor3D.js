(function ($) {
    $.fn.anchor3D = function (options) {
        var defaultVal = {
            linkBg: "",
            linkHoverBg: "",
            linkColor: "",
            linkHoverColor: "",
            enableReminder: false,
            effect: ""//['roll', 'moveToLeft']
        };

        var latency = 5000;

        reminder = function (link) {
            var linkObj = $(link).parent().parent();
            linkObj.addClass('hovered');
            setTimeout(function () {
                linkObj.removeClass('hovered');
            }, latency / 2);
        };

        var obj = $.extend(defaultVal, options);

        return this.each(function () {
            var effectClass = defaultVal.effect !== "" ? defaultVal.effect : "roll";
            $(this).addClass(effectClass);
            $(this).addClass('niceAnchor');
            
            var anchorTxt = $(this).text();
            var innerSpan = "<span class='innerSpan'>" + anchorTxt + "</span>";
            var outerSpan = "<span class='outerSpan'>" + anchorTxt + innerSpan + "</span>";
            
            var link = $(this).html(outerSpan).find("span.outerSpan")
                .css('backgroundColor', defaultVal.linkBg)
                .css('color', defaultVal.linkColor)
                .find("span.innerSpan")
                .css('backgroundColor', defaultVal.linkHoverBg)
                .css('color', defaultVal.linkHoverColor);

            if (defaultVal.enableReminder) {
                setInterval(function () { reminder(link) }, latency);
            }
        });
    };
})(jQuery);