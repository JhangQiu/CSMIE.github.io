
layui.use(['element', 'layer', 'util'], function(){
	var element = layui.element;
	var layer = layui.layer;
	var util = layui.util;
	var $ = layui.$;
	//头部事件
	util.event('lay-header-event', {
        menuLeft: function(othis){ // 左侧菜单事件
            layer.msg('展开左侧菜单的操作', {icon: 0});
        },
        menuRight: function(){  // 右侧菜单事件
            layer.open({
                type: 1
                ,title: '更多'
                ,content: '<div style="padding: 15px;">处理右侧面板的操作</div>'
                ,area: ['260px', '100%']
                ,offset: 'rt' //右上角
                ,anim: 'slideLeft'
                ,shadeClose: true
                ,scrollbar: false
            });
        }
	});
});

layui.use(function(){
    var laydate = layui.laydate;
    // 直接嵌套显示
    laydate.render({
      elem: '#ID-laydate-static-2',
      position: 'static',
      lang: 'en',
      showBottom: false
    });
});

