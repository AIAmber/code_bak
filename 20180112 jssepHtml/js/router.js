$('document').ready(function() {
	// 创建用户发布正确路由时执行的一些功能。
	var url = window.location.hash.substr(2);
	if(undefined != url) {
		$("#" + url).addClass("setborder");
	}
	//目录管理
	var catalogprepare = function() {
		$('#rightContent').load("catalog/catalogprepare.jsp");
	};
	var catalogregistration = function() {
		$('#rightContent').load("catalog/catalogregistration.jsp");
	};
	var catalogmaintenance = function(){
		$('#rightContent').load("catalog/catalogmaintenance.jsp");
	}
	//交换管理
	var statisticalanalysis = function(){
		$('#rightContent').load("exchange/statisticalanalysis.jsp");
	}
	var exchangelog = function(){
		$('#rightContent').load("exchange/exchangelog.jsp");
	}
	//数据桥接
	var bridgelog = function(){
		$('#rightContent').load("databridge/bridgelog.jsp");
	}
	var bridgecnf = function(){
		$('#rightContent').load("databridge/bridgecnf.jsp");
	}
	var bridgerun = function(){
		$('#rightContent').load("databridge/bridgerun.jsp");
	}
	
	var allroutes = function() {
		var route = window.location.hash.slice(2);
	};
	// 定义路由表。
	var routes = {
		'/catalogprepare': catalogprepare,
		'/catalogregistration': catalogregistration,
		'/catalogmaintenance': catalogmaintenance,
		'/statisticalanalysis': statisticalanalysis,
		'/exchangelog': exchangelog,
		'bridgelog': bridgelog,
		'bridgecnf': bridgecnf,
		'bridgerun': bridgerun
	};
	// 实例化路由器
	var router = Router(routes);
	// 全局配置设置.
	router.configure({
		on: allroutes
	});
	router.init();
});

function addcss(a) {
	$(".setborder").removeClass();
	$(a).addClass("setborder");
}