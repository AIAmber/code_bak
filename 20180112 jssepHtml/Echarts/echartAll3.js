var myChart21 = echarts.init(document.getElementById('main21'));
var myChart22 = echarts.init(document.getElementById('main22'));
var myChart23 = echarts.init(document.getElementById('main23'));
var myChart24 = echarts.init(document.getElementById('main24'));
var myChart31 = echarts.init(document.getElementById('main31'));
var myChart32 = echarts.init(document.getElementById('main32'));
var myChart41 = echarts.init(document.getElementById('main41'));

var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    }
}; //41 31
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
}; //41 31

var dataAxis31 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
var data31 = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
var yMax31 = 500;
var dataShadow31 = [];

for (var i = 0; i < data31.length; i++) {
    dataShadow31.push(yMax31);
}

var option21 = {
    title: {
        // text: '热门资源访问统计',
        subtext: '查看详情',
        sublink: 'http://127.0.0.1',
        x: 'right'
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
        name: '访问数量',
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
        // text: '今日资源交换量统计',
        subtext: '查看详情',
        sublink: 'http://127.0.0.1',
        x: 'right'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} '
        },
        axisPointer: {
            snap: true
        }
    },
    visualMap: {
        show: false,
        dimension: 0,
        pieces: [{
            lte: 6,
            color: 'red'
                }, {
            gt: 6,
            lte: 8,
            color: 'red'
                }, {
            gt: 8,
            lte: 14,
            color: 'red'
                }, {
            gt: 14,
            lte: 17,
            color: 'red'
                }, {
            gt: 17,
            color: 'red'
                }]
    },
    series: [{
        name: '交换量',
        type: 'line',
        smooth: true,
        data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#D76662'
                        }])
            }
        }
            }]
};
var option23 = {
    title: {
        // text: '资源访问次数统计',
        subtext: '查看详情',
        sublink: 'http://127.0.0.1',
        x: 'right'
    },
    color: ['#D76662'],
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
        name: '资源请求次数',
        type: 'bar',
        data: [23, 44, 30, 48, 64, 41, 20, 22]
            }]
};

var option24 = {
    title: {
        subtext: '查看详情',
        sublink: 'http://127.0.0.1',
        x: 'right'
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
                name: '质监'
                    },
            {
                value: 310,
                name: '公安'
                    },
            {
                value: 274,
                name: '环保'
                    },
            {
                value: 235,
                name: '水利'
                    },
            {
                value: 400,
                name: '工商'
                    }
                ].sort(function (a, b) {
            return a.value - b.value;
        }),
        roseType: 'radius',
        label: {
            normal: {
                textStyle: {
                    color: 'rgba(44, 44, 44, 0.3)'
                }
            }
        },
        labelLine: {
            normal: {
                lineStyle: {
                    color: 'rgba(44, 44, 44, 0.3)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            }
        },
        itemStyle: {
            normal: {
                color: '#c23531'
            }
        },

        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx) {
            return Math.random() * 200;
        }
            }]
};

var option31 = {
    title: {
        text: '中心各节点运行情况',
        subtext: '查看详情',
        sublink: 'http://127.0.0.1',
        x: 'left',
        y: 'top',
    },
    xAxis: {
        data: dataAxis31,
        axisLabel: {
            inside: true,
            textStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        z: 10
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        }
    },
    dataZoom: [{
        type: 'inside'
            }],
    series: [{ // For shadow
            type: 'bar',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0.05)'
                }
            },
            barGap: '-100%',
            barCategoryGap: '40%',
            data: dataShadow31,
            animation: false
                },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#83bff6'
                                    },
                            {
                                offset: 0.5,
                                color: '#188df0'
                                    },
                            {
                                offset: 1,
                                color: '#188df0'
                                    }
                                ]
                    )
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#2378f7'
                                    },
                            {
                                offset: 0.7,
                                color: '#2378f7'
                                    },
                            {
                                offset: 1,
                                color: '#83bff6'
                                    }
                                ]
                    )
                }
            },
            data: data31
                }
            ]
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
    color: ['#FF7F50', '#C23531', '#ccc'],
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
        }, {
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


var option41 = {
    title: {
        text: 'CPU使用率',
        subtext: '查看详情',
        sublink: 'http://127.0.0.1',
        x: 'left',
        y: 'top',
        itemGap: 20
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
myChart23.setOption(option23);
myChart24.setOption(option24);
myChart31.setOption(option31);
myChart32.setOption(option32);
myChart41.setOption(option41);

setTimeout(function () {
    window.onresize = function () {
        myChart21.resize();
        myChart22.resize();
        myChart23.resize();
        myChart24.resize();
        myChart31.resize();
        myChart32.resize();
        myChart41.resize();
    }
}, 200);
