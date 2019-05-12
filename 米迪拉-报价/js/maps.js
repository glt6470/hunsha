//创建地图实例
var map = new BMap.Map("container");
//设置中心点
var point = new BMap.Point(116.075106, 39.694929);
//地图初始化，同时设置地图精度。15表示地图的缩放精度
map.centerAndZoom(point, 15);
window.setTimeout(function () {
	map.panTo(new BMap.Point(116.075106, 39.694929));
}, 2000);
// 	添加多个控件
// 在本例中我们向地图添加一个平移缩放控件、一个比例尺控件和一个缩略图控件。在地图中添加控件后，它们即刻生效。
map.addControl(new BMap.NavigationControl());
map.addControl(new BMap.ScaleControl());
map.addControl(new BMap.OverviewMapControl());
// map.addControl(new BMap.MapTypeControl());
var marker = new BMap.Marker(point);        // 创建标注
map.addOverlay(marker);                     // 将标注添加到地图中
// 可拖拽的标注
// marker的enableDragging和disableDragging方法可用来开启和关闭标注的拖拽功能。默认情况下标注不支持拖拽，
// 您需要调用marker.enableDragging()方法来开启拖拽功能。在标注开启拖拽功能后，您可以监听标注的dragend事件来
// 捕获拖拽后标注的最新位置。
marker.enableDragging();
marker.addEventListener("dragend", function (e) {
	alert("当前位置：" + e.point.lng + ", " + e.point.lat);
});
// 监听标注事件
// 事件方法与Map事件机制相同。可参考事件部分。
marker.addEventListener("click", function () {
	alert("您点击了标注");
});
//添加地图类型控件
map.addControl(new BMap.MapTypeControl({
	mapTypes: [
		BMAP_NORMAL_MAP,
		BMAP_HYBRID_MAP
	]
}));
map.setCurrentCity("北京");
map.enableScrollWheelZoom(true);//开启鼠标滚轮缩放