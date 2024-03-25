Ext.onReady(function(){
    /**
     * < 21강 : 컴포넌트 변경의 이해 >
     */

    Ext.create("Ext.container.Viewport",{
        layout : 'border',
        items : [{
            xtype : 'panel',
            title : '컴포넌트 변경',
            region : 'north',
            border : true,
            items : [{
                xtype : 'button',
                text : '그리드',
                handler : function (btn) {
                    console.log("존재 여부 : " + btn.up("viewport").down("component[region=center]"));
                    let page = btn.up("viewport").down("component[region=center]");
                    page.removeAll(true); // 해당 페이지의 자식 컴포넌트들을 다 지워 줌.
                    page.add(Ext.apply({
                        xtype : 'componentGridSample'
                    }));
                }
            },{
                xtype : 'button',
                text : '버튼',
                handler : function (btn) {
                    let page = btn.up("viewport").down("component[region=center]");
                    page.removeAll(true); // 해당 페이지의 자식 컴포넌트들을 다 지워 줌.
                    page.add(Ext.apply({
                        xtype : 'componentButtonSample'
                    }));
                }
            },{
                xtype : 'button',
                text : 'HTML',
                handler : function (btn) {
                    let page = btn.up("viewport").down("component[region=center]");
                    page.removeAll(true); // 해당 페이지의 자식 컴포넌트들을 다 지워 줌.
                    page.add(Ext.apply({
                        xtype : 'componentHtmlSample'
                    }));
                }
            }]
        },{
            xtype : 'panel',
            width : 200,
            region : 'west'
        },{
            xtype : 'panel',
            flex : 1,
            region : 'center',
            border : true
        }]
    })

    // classic - src - view - main - ComponentGridSample 로 이어진다.

});