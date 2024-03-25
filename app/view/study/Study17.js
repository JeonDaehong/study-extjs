Ext.onReady(function(){
    /**
     * < 17강 : Grid CRUD 한 번에 끝내기 >
     *
     * ***
     * 기본적으로는 let store = btn.up("grid").getStore(); 이렇게 grid 로 찾으면,
     * 해당 버튼이 속한 그룹중 가장 가까운 grid 를 찾기 때문에 따로 ID 명시를 안해줘도 된다.
     * 그러나 A 라는 grid 에서 버튼을 누르는게 다른 특정 grid 에서 반응을 보여야 한다면,
     * ID를 주고 Ext.getCmp('myGridId').getStore() 이런식으로 접근하여야 한다.
     */

    Ext.create("Ext.panel.Panel",{
        width : 500,
        height : 500,
        renderTo : Ext.getBody(),
        layout : 'fit',
        items : [{
            xtype : 'grid',
            plugins : 'cellediting',
            columns : [{
                text : '텍스트1',
                dataIndex : 'text1',
                editor : {
                    xtype : 'textfield'
                }
            },{
                text : '텍스트2',
                dataIndex : 'text2',
                editor : {
                    xtype : 'textfield'
                }
            },{
                text : '텍스트3',
                dataIndex : 'text3',
                editor : {
                    xtype : 'textfield'
                }
            }],
            store : {
                autoLoad : true,
                fields : ['id', 'text1', 'text2', 'text3'],
                proxy : {
                    type : 'ajax',
                    api : {
                        create : "http://localhost:8080/crud/insert.jsp",
                        read : "http://localhost:8080/crud/select.jsp",
                        update : "http://localhost:8080/crud/update.jsp",
                        destroy : "http://localhost:8080/crud/delete.jsp"
                    },
                    reader : {
                        type : 'json',
                        rootProperty : 'data',
                        totalProperty : 'total',
                    },
                    writer : {
                        type : 'json',
                        rootProperty : 'data',
                        writeAllFields : true,
                        encode : true
                    }
                }
            },
            tbar : [{
                xtype : 'button',
                text : '등록',
                handler : function(btn) {
                    // 1. store 찾기
                    // ExtJS - up(컴포넌트명 or itemId) / down ( up 은 자기기준 상위, down 은 자기 기준 하위 )
                    let store = btn.up("grid").getStore();
                    let newRec = {
                        text1 : '',
                        text2 : '',
                        text3 : ''
                    }
                    // store.insert(0, newRec);
                    store.add(newRec);
                }
            },{
                xtype : 'button',
                text : '삭제',
                handler : function(btn) {
                    let store = btn.up("grid").getStore();
                    // store.load(); AutoLoad 가 false 인 경우 사용
                    store.sync({ // 이건 update 까지는 되는데, sync 후 재조회를 해야 함. 그래서 callback function 을 해야함.
                        callback : function() {
                            store.reload(); // 재조회 하는 메서드
                        }
                    });
                }
            },{
                xtype : 'button',
                text : '적용'
            }],
            bbar : {
                xtype : 'pagingtoolbar',
                displayInfo : true
            }
        }]
    })

});