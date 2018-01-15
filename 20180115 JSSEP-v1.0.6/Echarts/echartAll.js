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
                var myChart21 = ec.init(document.getElementById('main21'));
                var myChart22 = ec.init(document.getElementById('main22'));
                var myChart31 = ec.init(document.getElementById('main31'));
                var myChart32 = ec.init(document.getElementById('main32'));
                var myChart41 = ec.init(document.getElementById('main41'));

                var option21 = {
                    title: {
                        text: '热门资源访问统计',
                        subtext: '查看详情',
                        sublink: 'http://127.0.0.1',
                        x: 'left'
                    },
                    tooltip: {
                        show: true
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        y: 'center',
                        data: ['资源1', '资源2', '资源3', '资源4', '资源5']
                    },
                    color: ['#ba55d3', '#40e0d0', '#ff69b4', '#ffa500', '#6495ED'],
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

                var option22 = {
                    title: {
                        text: '资源访问次数统计',
                        subtext: '',
                        x: 'left'
                    },
                    color: ['#6495ED'],
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

                var option31 = {
                    title: {
                        text: 'Customized Pie',
                        left: 'center',
                        top: 20,
                        textStyle: {
                            color: '#ccc'
                        }
                    },

                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },

                    visualMap: {
                        show: false,
                        min: 80,
                        max: 600,
                        inRange: {
                            colorLightness: [0, 1]
                        }
                    },
                    series: [{
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '50%'],
                        data: [{
                                value: 335,
                                name: '直接访问'
                            },
                            {
                                value: 310,
                                name: '邮件营销'
                            },
                            {
                                value: 274,
                                name: '联盟广告'
                            },
                            {
                                value: 235,
                                name: '视频广告'
                            },
                            {
                                value: 400,
                                name: '搜索引擎'
                            }
                        ].sort(function(a, b) {
                            return a.value - b.value;
                        }),
                        roseType: 'radius',
                        label: {
                            normal: {
                                textStyle: {
                                    color: 'rgba(255, 255, 255, 0.3)'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {
                                    color: 'rgba(255, 255, 255, 0.3)'
                                },
                                smooth: 0.2,
                                length: 10,
                                length2: 20
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#c23531',
                                shadowBlur: 200,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },

                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                        animationDelay: function(idx) {
                            return Math.random() * 200;
                        }
                    }]
                };

                var option32 = {
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
                        x: '75%',
                        y: '33%',
                        data: ['JVM内存消耗', '系统内存消耗', '剩余可用内存']
                    },
                    color:['#FF7F50', '#C23531', '#ccc'],
                    series: [{
                        name: '访问来源',
                        type: 'pie',
                        center: ['38%', '72%'],
                        radius: ['19%', '34%'],
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
                                name: 'JVM内存消耗'
                            },
                            {
                                value: 689,
                                name: '剩余可用内存'
                            }
                        ]
                    },{
                        name: '访问来源',
                        type: 'pie',
                        center: ['38%', '28%'],
                        radius: ['19%', '34%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'left'
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
                                value: 699,
                                name: '系统内存消耗'
                            },
                            {
                                value: 325,
                                name: '剩余可用内存'
                            }
                        ]
                    }]
                };

                var dataStyle = {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                };
                var placeHolderStyle = {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    emphasis: {
                        color: 'rgba(0,0,0,0)'
                    }
                };
                var option41 = {
                    title: {
                        text: 'CPU使用率',
                        subtext: '查看详情',
                        sublink: 'http://127.0.0.1',
                        x: 'left',
                        y: 'top',
                        itemGap: 20,
                        textStyle: {
                            color: 'rgba(30,144,255,0.8)',
                            fontFamily: '微软雅黑',
                            fontSize: 24,
                            fontWeight: 'bolder'
                        }
                    },
                    tooltip: {
                        show: true,
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        y: 'center',
                        itemGap: 12,
                        data: ['系统内存', 'JVMAA内存', '剩余可用内存']
                    },
                    color: ['#36C9CB', '#DA7F85', '#B9A6DF'],
                    series: [{
                            name: '1',
                            type: 'pie',
                            clockWise: false,
                            radius: [55, 80],
                            itemStyle: dataStyle,
                            data: [{
                                    value: 68,
                                    name: '系统内存'
                                },
                                {
                                    value: 32,
                                    name: 'invisible',
                                    itemStyle: placeHolderStyle
                                }
                            ]
                        },
                        {
                            name: '2',
                            type: 'pie',
                            clockWise: false,
                            radius: [35, 55],
                            itemStyle: dataStyle,
                            data: [{
                                    value: 46,
                                    name: 'JVMAA内存'
                                },
                                {
                                    value: 54,
                                    name: 'invisible',
                                    itemStyle: placeHolderStyle
                                }
                            ]
                        },
                        {
                            name: '3',
                            type: 'pie',
                            clockWise: false,
                            radius: [25, 35],
                            itemStyle: dataStyle,
                            data: [{
                                    value: 36,
                                    name: '剩余可用内存'
                                },
                                {
                                    value: 64,
                                    name: 'invisible',
                                    itemStyle: placeHolderStyle
                                }
                            ]
                        }
                    ]
                };

                myChart21.setOption(option21);
                myChart22.setOption(option22);
                myChart31.setOption(option31);
                myChart32.setOption(option32);
                myChart41.setOption(option41);

                setTimeout(function() {
                    window.onresize = function() {
                        myChart21.resize();
                        myChart22.resize();
                        myChart31.resize();
                        myChart32.resize();
                        myChart41.resize();
                    }
                }, 200)
            }
        );