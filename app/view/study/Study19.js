Ext.onReady(function(){
    /**
     * < 19강 : 세로/가로 막대 차트 그래프 만들기 >
     *
     * chart 를 사용하려면 app.json 에서 requires 부분에서 "charts" 를 추가해주고, ReBuild 해주어야 한다.
     *
     * 차트에는 크게 polar / cartesian 이렇게 2가지 종류가 있다.
     *
     * cartesian : x y로 만들 수 있는 차트 그래프 종류들 ( 예를들면 선형 그래프, 막대 그래프 )
     * polar : x y 좌표 없이, 범위화 하여 만드는 차트 그래프 ( 예를들면 원형 그래프 )
     *
     * 차트를 만들 떄는 store 속성과, axes 속성, 그리고 series 속성이 꼭 붙어다닌다.
     *  - store 는 말그대로 DataStore 이고,
     *  - axes 속성은 x, y 에 대한 설명이 들어있다. 예를들어 점수를 뜻하는 y 는 왼쪽에 붙어야하고, (점) 단위이다.
     *    x 는 카테고리를 뜻하며 하단에 있다.
     *  - series 는 어떤 종류의 차트를 그릴 것인가를 정하고, 그 세부적인 속성을 다룰 수 있다.
     *    ( ex. 막대그래프, 선형그래프 )
     *
     */

    // cartesian
    Ext.create("Ext.panel.Panel", {
        width : 500,
        height : 500,
        renderTo : Ext.getBody(),
        layout : 'fit',
        items : [{
            xtype : 'cartesian',
            flipXY : true, // 기본은 세로 그래프인데 이걸 true 로 해주고, 그래프 x y 의 position 을 바꿔주면 가로 그래프가 된다.
            innerPadding : 50, // 내용 크기 줄이기
            insetPadding : 50, // 그래프 전체적인 크기 줄이기
            // 과목별 성적
            store : {
                fields : ['score', 'subject'],
                data : [{
                    subject : '국어',
                    score : 100
                },{
                    subject : '영어',
                    score : 82
                },{
                    subject : '수학',
                    score : 93
                },{
                    subject : '사회',
                    score : 97
                },{
                    subject : '과학',
                    score : 88
                }]
            },
            axes : [{
                type : 'numeric', // 숫자
                position : 'bottom',
                //position : 'left',
                title : '(점)'
            },{
                type : 'category',
                position : 'left',
                //position : 'bottom'
            }],
            series : {
                type : 'bar',
                xField : 'subject',
                yField : 'score',
                label : {
                    field : 'score',
                    display : 'insideEnd'
                }
            }
        }]
    })


    /**
     * < 누적 막대 그래프 만들기 >
     *
     * - 다중으로 누적 막대 그래프를 만들 때에는 series 안에 있는 x 혹은 y field 에 배열을 주면 된다.
     */

    // cartesian
    Ext.create("Ext.panel.Panel", {
        width : 500,
        height : 500,
        renderTo : Ext.getBody(),
        layout : 'fit',
        bbar : [{
            xtype : 'button',
            text : '그룹버튼',
            handler : function(btn) {
                let chart = btn.up("panel").down("cartesian");
                chart.getSeries()[0].setStacked(false); // stacked 속성을 비활성화 한다.
                chart.redraw(); // 차트를 다시 그린다.
            }
        },{
            xtype : 'button',
            text : '스택버튼',
            handler : function(btn) {
                let chart = btn.up("panel").down("cartesian");
                chart.getSeries()[0].setStacked(true); // stacked 속성을 활성화 한다.
                chart.redraw(); // 차트를 다시 그린다.
            }
        }],
        items : [{
            xtype : 'cartesian',
            // 과목별 성적
            store : {
                fields : ['age', 'vote1', 'vote2'],
                data : [{
                    age : '20대',
                    vote1 : 65.8,
                    vote2 : 33.7
                },{
                    age : '30대',
                    vote1 : 62.5,
                    vote2 : 37.1
                },{
                    age : '40대',
                    vote1 : 77.7,
                    vote2 : 22.2
                },{
                    age : '50대',
                    vote1 : 59.7,
                    vote2 : 40.1
                },{
                    age : '60대',
                    vote1 : 27.5,
                    vote2 : 72.3
                }]
            },
            // type 들에 3d 를 주면 3D 그래프가 된다.
            axes : [{
                type : 'numeric3d', // 숫자
                //position : 'bottom',
                position : 'left',
                title : '(%)'
            },{
                type : 'category3d',
                //position : 'left',
                position : 'bottom'
            }],
            series : {
                type : 'bar3d',
                stacked : false, // Default 는 true 이다. false 를 하면 분리된 그래프가 되고, true 를 하면 Stack 형 그래프가 된다.
                xField : 'age',
                yField : ['vote1', 'vote2'],
                label : {
                    field : ['vote1', 'vote2'],
                    display : 'insideEnd'
                }
            }
        }]
    })


    /**
     * < 선형 차트 만들기 >
     *
     * - 다중 선형 그래프를 만들려면, series 를 배열로 해서 다중으로 주면 된다.
     */

    Ext.create("Ext.panel.Panel",{
        width : 700,
        height : 500,
        renderTo : Ext.getBody(),
        layout : 'fit',
        items : [{
            xtype : 'cartesian',
            innerPadding : 30,
            store : {
                fields : ['month', 'weight'],
                data : [{
                    month : '1월',
                    weight : 90
                },{
                    month : '2월',
                    weight : 86
                },{
                    month : '3월',
                    weight : 82.3
                },{
                    month : '4월',
                    weight : 78.8
                },{
                    month : '5월',
                    weight : 80.2
                }]
            },
            axes : [{
                type : 'numeric',
                minimum : 0,
                maximum : 100,
                position : 'left',
                title : '(KG)'
            },{
                type : 'category',
                position : 'bottom'
            }],
            series : {
                type : 'line',
                smooth : true, // 챠트 곡선을 부드럽게 해주는 속성
                marker : {
                    radius : 3
                },
                xField : 'month',
                yField : 'weight',
                label : {
                    field : 'weight',
                    display : 'insideEnd'
                }
            }
        }]
    })


    Ext.create("Ext.panel.Panel", {
        width : 500,
        height : 500,
        renderTo : Ext.getBody(),
        layout : 'fit',
        items : [{
            xtype : 'cartesian',
            innerPadding : 30,
            // 과목별 성적
            store : {
                fields : ['age', 'vote1', 'vote2'],
                data : [{
                    age : '20대',
                    vote1 : 65.8,
                    vote2 : 33.7
                },{
                    age : '30대',
                    vote1 : 62.5,
                    vote2 : 37.1
                },{
                    age : '40대',
                    vote1 : 77.7,
                    vote2 : 22.2
                },{
                    age : '50대',
                    vote1 : 59.7,
                    vote2 : 40.1
                },{
                    age : '60대',
                    vote1 : 27.5,
                    vote2 : 72.3
                }]
            },
            // type 들에 3d 를 주면 3D 그래프가 된다.
            axes : [{
                type : 'numeric3d', // 숫자
                //position : 'bottom',
                position : 'left',
                minimum : 0,
                maximum : 100,
                title : '(%)'
            },{
                type : 'category3d',
                //position : 'left',
                position : 'bottom'
            }],
            series : [{
                type : 'line',
                smooth : true,
                marker : {
                    radius : 3
                },
                xField : 'age',
                yField : 'vote1',
                label : {
                    field : 'vote1',
                    display : 'insideEnd'
                }
            }, {
                type: 'line',
                smooth : true,
                marker : {
                    radius : 3
                },
                xField: 'age',
                yField: 'vote2',
                label: {
                    field: 'vote2',
                    display: 'insideEnd'
                }
            }]
        }]
    })


    /**
     * < 영역 차트 만들기 >
     *
     * 영역이 겹치면, 데이터가 더 많은 차트가 위로 올라온다.
     */

    Ext.create("Ext.panel.Panel", {
        width : 500,
        height : 500,
        renderTo : Ext.getBody(),
        layout : 'fit',
        items : [{
            xtype : 'cartesian',
            legend : { // 범례를 지정해 줄 수 있다. ( series 안에 title 이랑 세트이다. )
                docked : 'bottom'
            },
            innerPadding : 30,
            // 과목별 성적
            store : {
                fields : ['year', 'seoul', 'busan', 'gyunggi', 'jeju'],
                data : [{
                    year : 2014,
                    seoul : 10143164,
                    busan : 3526648,
                    gyunggi : 12245960,
                    jeju : 594623
                },{
                    year : 2015,
                    seoul : 10155157,
                    busan : 3526688,
                    gyunggi : 12777960,
                    jeju : 594893
                },{
                    year : 2016,
                    seoul : 10173764,
                    busan : 3526692,
                    gyunggi : 12298960,
                    jeju : 594627
                },{
                    year : 2017,
                    seoul : 10987164,
                    busan : 35298948,
                    gyunggi : 12995960,
                    jeju : 594783
                }]
            },
            // type 들에 3d 를 주면 3D 그래프가 된다.
            axes : [{
                type : 'numeric3d', // 숫자
                //position : 'bottom',
                position : 'left',
                minimum : 0,
                title : '지역별 인구수'
            },{
                type : 'category3d',
                //position : 'left',
                position : 'bottom'
            }],
            series : [{
                type : 'area',
                title : '서울', // 이거로 범례의 타이틀을 지정해줄 수 있다.
                style : { // 이거로 css 를 넣을 수 있다.
                    opacity : 0.5 // 이거로 투명도를 줄일 수 있다. ( Default 는 1이다. )
                },
                marker : { // 동그랗게 강조할 수 있다.
                    radius : 3
                },
                highlightCfg : { // marker 로 표시한 부분에 마우스를 가지고 가면 반응한다.
                    scaling : 1.5
                },
                tooltip : {
                    trackMouse : true,
                    renderer : function(tooltip, record) { // 마우스를 가져다 대면, 해당 정보 + 데코레이트 정보가 나온다.
                        tooltip.setHtml(record.get("seoul") + "명");
                    }
                },
                xField : 'year',
                yField : 'seoul',
            },{
                type : 'area',
                title : '부산',
                style : {
                    opacity : 0.5
                },
                marker : {
                    radius : 3
                },
                highlightCfg : {
                    scaling : 1.5
                },
                tooltip : {
                    trackMouse : true,
                    renderer : function(tooltip, record) {
                        tooltip.setHtml(record.get("busan") + "명");
                    }
                },
                xField : 'year',
                yField : 'busan',
            },{
                type : 'area',
                title : '경기',
                style : {
                    opacity : 0.5
                },
                marker : {
                    radius : 3
                },
                highlightCfg : {
                    scaling : 1.5
                },
                tooltip : {
                    trackMouse : true,
                    renderer : function(tooltip, record) {
                        tooltip.setHtml(record.get("gyunggi") + "명");
                    }
                },
                xField : 'year',
                yField : 'gyunggi',
            },{
                type : 'area',
                title : '제주',
                style : {
                    opacity : 0.5
                },
                marker : {
                    radius : 3
                },
                highlightCfg : {
                    scaling : 1.5
                },
                tooltip : {
                    trackMouse : true,
                    renderer : function(tooltip, record) {
                        tooltip.setHtml(record.get("jeju") + "명");
                    }
                },
                xField : 'year',
                yField : 'jeju',
            }]
        }]
    })



    /**
     * < 분산/분포 차트 만들기 >
     *
     * 어떤 데이터들이 밀집 되어있는지를 확인하는데에 유용함.
     */

    Ext.create("Ext.panel.Panel",{
        width : 500,
        height : 500,
        renderTo : Ext.getBody(),
        layout : 'fit',
        items : [{
            xtype : 'cartesian',
            innerPadding : 50,
            store : {
                fields : ['title','count','time'],
                data : [{
                    title : 'ExtJS 6 로 만들어본 WebOS',
                    time : 623,
                    count : 268
                },{
                    title : 'ExtJS 6 란? ',
                    time : 584,
                    count : 124
                },{
                    title : 'ExtJS 6 문법 및 레이아웃 이해(1)',
                    time : 582,
                    count : 65
                },{
                    title : 'ExtJS 6 GPL 다운로드 및 환경설정',
                    time : 510,
                    count : 79
                },{
                    title : 'ExtJS 6 테마변경 및 onLoad 이해',
                    time : 493,
                    count : 72
                },{
                    title : 'ExtJS 6 버튼종류 알아보기',
                    time : 478,
                    count : 42
                },{
                    title : 'ExtJS 6 API Document 보는법',
                    time : 420,
                    count : 43
                },{
                    title : 'ExtJS 6 추가 레이아웃 알아보기',
                    time : 345,
                    count : 51
                },{
                    title : 'ExtJS 6 추가 레이아웃 알아보기(2)',
                    time : 336,
                    count : 45
                },{
                    title : 'ExtJS 6 메시지상자 다뤄보기',
                    time : 311,
                    count : 28
                },{
                    title : 'ExtJS 6 그리드 등록,수정,삭제,조회 한방에 끝내기',
                    time : 292,
                    count : 53
                },{
                    title : 'ExtJS 6 그리드 페이징 및 버퍼스토어 적용하기',
                    time : 283,
                    count : 68
                },{
                    title : 'ExtJS 6 트리패널 + 트리스토어 알아보기',
                    time : 254,
                    count : 35
                },{
                    title : 'ExtJS 6 폼필드 알아보기',
                    time : 249,
                    count : 40
                },{
                    title : 'ExtJS 6 윈도우 컴포넌트 다뤄보기',
                    time : 212,
                    count : 28
                },{
                    title : 'ExtJS 6 Ajax 클래스 사용법 이해',
                    time : 197,
                    count : 21
                },{
                    title : 'ExtJS 6 그리드 에디팅 플러그인 적용하기',
                    time : 191,
                    count : 55
                },{
                    title : 'ExtJS 6 그리드패널을 이용한 데이터스토어 이해',
                    time : 191,
                    count : 60
                },{
                    title : 'ExtJS 6 툴바종류, 리스너, renderer 이해',
                    time : 170,
                    count : 34
                },{
                    title : 'ExtJS 6 탭패널 알아보기',
                    time : 72,
                    count : 27
                }]
            },
            axes : [{
                type : 'numeric',
                position : 'bottom',
                fields : 'count',
                minimum : 0,
                maximum : 300,
                majorTickSteps : 10, // 해당 축의 간격 ( 여기서는 아래 축 )
                grid : true
            },{
                type : 'numeric',
                position : 'left',
                fields : 'time',
                minimum : 0,
                maximum : 650,
                majorTickSteps : 10,
                grid : true
            }],
            series : {
                type : 'scatter',
                xField : 'count',
                yField : 'time',
                highlightCfg : {
                    scale : 2
                },
                tooltip : {
                    trackMouse : true, // 마우스를 갖다 대는 거에 대한 이벤트
                    renderer : function(tooltip,record) {
                        tooltip.setHtml(record.get("title")+"<br/>조회수:"+record.get("count")+"<br/>시청시간(분):"+record.get("time"));
                    }
                }
            }
        }]
    })



    /**
     * < 원형 그래프 이해 >
     *
     * polar 그래프는 axes 가 필요없다. ( x y 축이 필요 없기 때문에. )
     */

    // polar 차트
    Ext.create("Ext.panel.Panel",{
        width : 500,
        height : 500,
        renderTo : Ext.getBody(),
        layout : 'fit',
        items : [{
            xtype : 'polar',
            innerPadding : 50,
            store : {
                fields : ['title','count','time'],
                data : [{
                    title : 'ExtJS 6 로 만들어본 WebOS',
                    time : 623
                },{
                    title : 'ExtJS 6 란? ',
                    time : 584
                },{
                    title : 'ExtJS 6 문법 및 레이아웃 이해(1)',
                    time : 582
                },{
                    title : 'ExtJS 6 GPL 다운로드 및 환경설정',
                    time : 510
                },{
                    title : 'ExtJS 6 테마변경 및 onLoad 이해',
                    time : 493
                },{
                    title : '기타',
                    time : 5106
                }]
            },
            // 대표적인 파이 차트
            series : {
                type : 'pie3d',
                // type : 'pie',
                donut : 30, // 중간에 도넛처럼 원이 생김
                highlight : { // 하이라이트를 생성
                    margin : 30 // 마우스를 갖다대면 margin 만큼 공간이 분리됨.
                },
                angleField : 'time', // Main 으로 잡으려는 필드
                label : {
                    field : 'title'
                },
                tooltip : {
                    trackMouse : true,
                    renderer : function(object, record) {
                        object.setHtml(record.get("title")+"<br/>지속시간:"+record.get("time"))
                    }
                }
            }
        }]
    })

});