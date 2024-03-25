Ext.onReady(function(){
    /**
     * < 10강 : 탭 패널 알아보기 >
     *
     * - Ext.tab.Panel 을 사용하여 탭 버튼이 있는 패널을 만들 수 있다.
     * - tabPosition 을 활용하여 패널 내에서 탭 버튼의 위치를 조정할 수 있다.
     * 		- Default = top / bottom, left, right
     *
     */
    Ext.create("Ext.tab.Panel", {
        width : 500,
        height : 500,
        renderTo : Ext.getBody(),
        // tabPosition : 'right',
        items : [{
            xtype : 'panel',
            title : '탭1',
            items : [{
                xtype : 'button',
                text : '버튼1'
            }]
        },{
            xtype : 'panel',
            title : '탭2',
            items : [{
                xtype : 'button',
                text : '버튼2'
            }]
        },{
            xtype : 'panel',
            title : '탭3',
            items : [{
                xtype : 'button',
                text : '버튼3'
            }]
        },{
            xtype : 'panel',
            title : '탭4',
            items : [{
                xtype : 'button',
                text : '버튼4'
            }]
        },{
            xtype : 'panel',
            title : '탭5',
            items : [{
                xtype : 'button',
                text : '버튼5'
            }]
        }]
    })
});