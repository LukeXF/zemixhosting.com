"use strict";
(function() {
    $(function() {
        $(".content-switchy").each(function() {
            var a, b;
            b = this;
            a = $(".btns li", this);
            return $("a", a).on("click", function() {
                var c, d;
                c = $(this).parent("li");
                d = c.index() + 1;
                a.removeClass("active");
                c.addClass("active");
                return $(".slides li", b).removeClass("active").filter(":nth-child(" + d + ")").addClass("active");
            });
        });
        return $(".ticker").each(function() {
            var a, b, c, d = this;
            a = $("> *:first-child", this).height();
            c = $(this).children().length;
            b = 1;
            return setInterval(function() {
                if (b >= c) {
                    b = 0;
                }
                $("> *:first-child", d).css("margin-top", b * a * -1 + "px");
                return b++;
            }, 3e3);
        });
    });
}).call(this);