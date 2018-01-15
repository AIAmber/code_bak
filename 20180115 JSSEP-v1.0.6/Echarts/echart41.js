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
                var myChart41 = ec.init(document.getElementById('main41'));

                var option = {
                    title: {
                        text: 'CPU利用率',
                        subtext: '',
                        x: 'left'
                    },
                    tooltip: {
                        show: true
                    },
                    legend: {
                        orient: 'horizontal',
                        align:'auto',
                        left: 'left',
                        bottom: 'auto',
                        padding: [25,10],
                        data: ['资源1', '资源2', '资源3', '资源4', '资源5']
                    },
                    series: [{
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [{
                                value: 335,
                                name: '资源1'
                            },
                            {
                                value: 310,
                                name: '资源2'
                            },
                            {
                                value: 234,
                                name: '资源3'
                            },
                            {
                                value: 135,
                                name: '资源4'
                            },
                            {
                                value: 1548,
                                name: '资源5'
                            }
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }]
                };
                myChart41.setOption(option);

                setTimeout(function() {
                    window.onresize = function() {
                        myChart41.resize();
                    }
                }, 200)
            }
        );