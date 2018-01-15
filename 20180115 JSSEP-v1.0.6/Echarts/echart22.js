    require.config({
        paths: {
            echarts: './js'
        }
    });
    require(
        [
            'echarts',
            'echarts/chart/line',
            'echarts/chart/bar',
            'echarts/chart/pie'
        ],
        function(ec) {
            var myChart22 = ec.init(document.getElementById('main22'));

            var option = {
                title: {
                    text: '资源访问次数统计',
                    subtext: '',
                    x: 'left'
                },
                color: ['#3398DB'],
                tooltip: {
                    show: true,
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: ['资源1', '资源2', '资源3', '资源4', '资源5', '资源6', '资源7', '资源8'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }],
                yAxis: [{
                    type: 'value'
                }],
                series: [{
                    name: '直接访问',
                    type: 'bar',
                    data: [10, 52, 200, 334, 390, 330, 220, 357]
                }]
            };
            myChart22.setOption(option);

            setTimeout(function() {
                window.onresize = function() {
                    myChart22.resize();
                }
            }, 200)
        }
    );