Ext.onReady(function(){
    /**
     * < 16강 : 툴바종류, 리스너, renderer의 이해 >
     *
     * 1. 레코드란? record??
     * 	- 각각의 row 한 줄 한 줄을 record 라고 정의한다.
     * 	- 단, view 에서의 한 줄이 아니라, Data Store 기준으로의 한 줄을 record 라고 한다.
     * 	  ( view 에서 사용자에게는 안보이는 값이 Data Store 에 있을수도 있다. )
     *
     * 2. 위치별 툴바 toolbar position
     *  - tbar ( top-docked toolbar )
     *  	- 그리드 상단에 위치하는 툴바
     *  - lbar ( left-docked toolbar )
     *  	- 그리드 좌측에 위치하는 툴바
     *  - rbar ( right-docked toolbar )
     *		- 그리드 우측에 위치하는 툴바
     *  - bbar ( bottom-docked toolbar )
     *		- 그리드 하단에 위치하는 툴바
     *  - fbar ( footer toolbar )
     *  	- bbar와 동일한 위치에 존재하는 툴바이나, footer UI가 적용됨
     *
     * *** 꼭 그리드에만 존재하는 속성은 아니지만, 대부분 그리드에 사용된다.
     * 위의 속성값들은 Object 가 될 수도 있고, Array 형식이 될 수도 있는데,
     * ( Object = tbar : { } / Array = tbar : [{ }] )
     * Object 형식이면 하나의 컴포넌트를 툴바내 가득채우고,
     * Array 를 활용하면 여러개의 컴포넌트를 툴바에 적용시킬 수 있다.
     *
     * ***
     *
     * 3. 툴바에 버튼 + 콤보 추가
     *
     * 4. 버튼,콤보,그리드 이벤트리스너 ( event listeners ) 사용방법
     *
     * 5. 그리드 랜더러 ( grid renderer )
     * 	- 날짜 포멧이나, 숫자 세자리마다 콤마를 찍는다거나 할 때 사용한다.
     * 	- Data Store 의 실제 값은 바뀌지 않지만 view 로 보이는 값을 수정한 상태로 return 할 수 있다.
     * 	- 데코레이터 패턴과 유사하다. ( 디자인 패턴 )
     *
     */

    Ext.create("Ext.panel.Panel", {
        width : 800,
        height : 500,
        renderTo : Ext.getBody(),
        layout : 'fit',
        items : [{
            xtype : 'grid',
            listeners : [{
                // 셀클릭
                cellclick : function ( obj, td, cellIndex, record, tr, rowIndex, e, eOpts ) {
                    console.log(record.getData());
                    console.log(record.get("dong"));
                },
                // 우클릭
                itemcontextmenu : function ( obj, record, item, index, e, eOpts ) {
                    console.log(record.getData());
                    console.log(record.get("dong"));
                }
            }],
            plugins : 'cellediting',
            columns : [{
                text : '인덱스',
                dataIndex : 'id',
                flex : 1
            },{
                text : '시',
                dataIndex : 'si',
                flex : 1,
                editor : {
                    xtype : 'textfield'
                },
                renderer : function(value) {
                    console.log(value);
                    return value + "Hello"; // 실제 DataStore 의 값은 안바뀌지만, 화면에 표시되는 view 만 수정해주는 것.
                }
            }, {
                text : '군구',
                dataIndex : 'gungu',
                flex : 1,
                editor : {
                    xtype : 'textfield'
                }
            }, {
                text : '동',
                dataIndex : 'dong',
                flex : 1,
                editor : {
                    xtype : 'textfield'
                }
            }],
            store : {
                autoLoad : true,
                autoSync : true,
                fields : ['id', 'si', 'gungu', 'dong'],
                pageSize : 10,
                proxy : {
                    type : 'ajax',
                    api : {
                        read : "http://localhost:8080/paging.jsp",
                        update : "http://localhost:8080/update.jsp"
                    },
                    reader : {
                        type : 'json',
                        rootProperty : 'data',
                        totalProperty : 'total'
                    },
                    writer : {
                        type : 'json',
                        rootProperty : 'data',
                        writeAllFields : true,
                        encode : true
                    }
                }
            },
            // 5 toolbar position
            tbar : [{
                xtype : 'button',
                text : '추가',
                listeners : [{
                    click : function(btn) {
                        alert ("버튼 클릭");
                    }
                }]
                // handler : function(btn) {
                // 	alert("버튼 클릭");
                // }
            },{
                xtype : 'combo',
                listeners : [{
                    change : function ( obj, newValue, oldValue, eOpts ) {
                        // console.log ( newValue + ',' + oldValue );
                    }
                }],
                editable : false,
                value : '값1',
                displayField : 'key',
                valueField : 'value',
                queryMode : 'local',
                store : {
                    fields : ['key', 'value'],
                    data : [{
                        key : '선택1',
                        value : '값1'
                    },{
                        key : '선택2',
                        value : '값2'
                    },{
                        key : '선택3',
                        value : '값3'
                    }]
                }
            }],
            bbar : [{
                xtype : 'button',
                text : 'bbar button'
            }],
            lbar : [{
                xtype : 'button',
                text : 'lbar button'
            }],
            rbar : [{
                xtype : 'button',
                text : 'rbar button'
            }],
            fbar : [{
                xtype : 'button',
                text : 'fbar button'
            }]
        }]
    })

});