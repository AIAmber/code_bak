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
                var myChart32 = ec.init(document.getElementById('main32'));

                var option = {
                    title: {
                        text: '内存使用情况',
                        subtext: '',
                        x: 'left'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'right',
                        data: ['JVM使用情况', '内存使用情况']
                    },
                    series: [{
                        name: '访问来源',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [{
                                value: 335,
                                name: 'JVM使用情况'
                            },
                            {
                                value: 310,
                                name: '内存使用情况'
                            }
                        ]
                    }]
                };
                myChart32.setOption(option);

                setTimeout(function() {
                    window.onresize = function() {
                        myChart32.resize();
                    }
                }, 200)
            }
        );