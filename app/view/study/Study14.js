Ext.onReady(function(){
    /**
     * < 14강 : GridPanel + 페이징 및 버퍼스토어 적용하기 >
     *
     * - Server ( 강의에서는 jsp 활용 )
     * 1. 기본적으로 "start"와 "limit" 라는 키를 이용하여 서버에 페이징 관련 값을 전달한다.
     * ( MySQL/MariaDB 는 LIMIT 부분에 정의하면 되지만, 다른 DB는 별도 쿼리와 계산이 필요 )
     *
     * 2. 특정 리스트에 대한 전체카운트 쿼리 1개와 start, limit 로 특정 페이지만 출력한 리스트쿼리 1개
     * 이렇게해서 2개의 값을 응답값 API 로 각각 넘겨주어야 한다.
     *
     * - Client ( ExtJS )
     * 1. pageSize : 보여주고 싶은 갯수 ( default : 25개 )
     * 2. bbar : bottom toolbar
     * 		- pagingtoolbar : 페이징 툴바 선언
     * 		- app.json 의 requires 부분에 "ux" 를 추가 --> 빌드 한 후,
     * 		  ux 관련 플러그인을 사용할 수 있음.
     * 		  - packages 폴더 안에 있는 것들은 여기에 등록하여 사용할 수 있음.
     * 		  	 - ux도 packages 폴더 안에 들어있는 패키지임.
     * 3. DataStore 에서 reader 의 config 속성 중, rootProperty 만을 이용했었지만,
     *    페이징을 위해서는 totalProperty 라는 속성을 정의해주어야 한다.
     *    안할 경우 default 로 "total" 이라는 key 로 List Count 를 찾는다.
     *    ( 전체 카운트를 찾아서 계산하는 방법이기 때문에 )
     *
     *
     * *** 버퍼스토어 ( Ext.data.BufferedStore )
     * - 데이터 스토어와 동일하게 페이징처리가 가능하다.
     * 그러나, 버퍼스토어는 그리드에서 스크롤을 이용한 페이징 처리를 하고자 할 때 사용한다.
     * - 초기데이터 세트만 서버로부터 로드한 뒤, 스크롤을 이용하여 다음 데이터를 요구할 때 동적으로
     *   추가 데이터를 자동 로드한다. 또한 사용자가 스크롤 할 때 버퍼스토어는 해당 화면에 보이는
     *   데이터와 가까운 위치에 있는 데이터만을 메모리에 유지하며 데이터 세트를 효과적으로 관리한다.
     * - 즉, 사용자는 데이터를 한 번에 로드한거처럼 보이지만 실제로는 스크롤에 따라 원하는 데이터만을
     *   동적으로 가져온다고 보면 된다.
     *
     */

    // 하단 Bar 를 이용한 Paging
    Ext.create("Ext.panel.Panel", {
        width : 800,
        height : 500,
        renderTo : Ext.getBody(),
        layout : 'fit',
        items : [{
            xtype : 'grid',
            columns : [{
                text : '시',
                dataIndex : 'si',
                flex : 1
            }, {
                text : '군구',
                dataIndex : 'gungu',
                flex : 1
            }, {
                text : '동',
                dataIndex : 'dong',
                flex : 1
            }],
            store : {
                autoLoad : true,
                fields : ['si', 'gungu', 'dong'],
                pageSize : 5, // 몇 개씩 불러올 것인가.
                proxy : {
                    type : 'ajax',
                    url : "http://localhost:8080/paging.jsp",
                    reader : {
                        type : 'json',
                        rootProperty : 'data',
                        totalProperty : 'total'
                    }
                }
            },
            // bottom toolbar
            bbar : {
                xtype : 'pagingtoolbar',
                // plugins : 'ux-slidingpager', // Paging 을 Sliding Bar로 할 수 있음.
                plugins : 'ux-progressbarpager', // 일반적인 Paging
                displayInfo : true
            }
        }]
    })


    // BufferedStore 를 이용한 Paging ( 세로로 휠 내리면서 페이징 )
    Ext.create("Ext.panel.Panel", {
        width : 800,
        height : 500,
        renderTo : Ext.getBody(),
        layout : 'fit',
        items : [{
            xtype : 'grid',
            columns : [{
                text : '시',
                dataIndex : 'si',
                flex : 1
            }, {
                text : '군구',
                dataIndex : 'gungu',
                flex : 1
            }, {
                text : '동',
                dataIndex : 'dong',
                flex : 1
            }],
            store : Ext.create("Ext.data.BufferedStore", {
                autoLoad : true,
                fields : ['si', 'gungu', 'dong'],
                proxy : {
                    type : 'ajax',
                    url : "http://localhost:8080/paging.jsp",
                    reader : {
                        type : 'json',
                        rootProperty : 'data',
                        totalProperty : 'total'
                    }
                }
            })
        }]
    })

});