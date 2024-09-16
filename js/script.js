$(function () {
        $(window).scroll(function () {
            //滚动高度
            let scTop = $(window).scrollTop()
            //屏幕高度
            let height = $(window).height()
            if (scTop >= height * 0.5) {
                //利用jquery动画组件显示
                $("#top-btn").stop().animate({'opacity': '1'}, 500)
            } else {
                $("#top-btn").stop().animate({'opacity': '0'}, 500)
            }
        })
        $("#top-btn").on('click', function () {
            $('body,html').stop().animate({
                scrollTop: 0
            })
        })

        let rightItem = $("#right-tool-bar .right-tool-item");

        function hidenRight(animate) {
            for (let i = 0; i < rightItem.length; i++) {
                console.log(rightItem[i])
                let item = $(rightItem[i]);
                if (animate)
                    item.animate({marginLeft: 0}, 50)
                else
                    item.css('margin-left', 0)
            }
        }

        $("#right-color .set-color-btn").on('click', function () {
            $.ajax({
                url: "/?freeAction=color&colorName=" + $(this).data('color'),
                type: 'post',
                dataType: 'json',
                success: res => {
                    if (res['success']) {
                        layer.msg('更换配色成功', {icon: 1, time: 500}, function () {
                            location.reload();
                        })
                    }
                }
            })
        })
    }
)

