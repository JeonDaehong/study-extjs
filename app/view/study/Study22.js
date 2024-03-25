Ext.onReady(function(){
    /**
     * < 22강 : Eclipse Benchmarking >
     */

    Ext.create("Ext.container.Viewport",{
        layout : 'border',
        items : [{
            xtype : 'panel',
            region : 'north',
            title : 'Java EE - extjs/app.ks - Eclipse',
            border : true,
            items : [{
                xtype : 'toolbar',
                items : [{
                    text : 'File'
                },{
                    text : 'Edit'
                },{
                    text : 'Source'
                },{
                    text : 'Refactor'
                },{
                    text : 'Navigate'
                },{
                    text : 'Search'
                },{
                    text : 'Project'
                },{
                    text : 'Run'
                },{
                    text : 'Window'
                },{
                    text : 'Help'
                }]
            },{
                xtype : 'toolbar',
                items : [{
                    iconCls : 'x-fa fa-file'
                },{
                    iconCls : 'x-fa fa-floppy-o'
                },{
                    iconCls : 'x-fa fa-play'
                },{
                    iconCls : 'x-fa fa-pause'
                },{
                    iconCls : 'x-fa fa-stop'
                }, '->',{ // 맨 끝으로 이동하려면 이렇게 해야 함.
                    xtype : 'textfield',
                    emptyText : 'Quick Access' // 값이 비어있을 경우 안에 어떻게 표출 해 줄 것인가.
                }, {
                    iconCls : 'x-fa fa-table'
                }]
            }]
        },{
            xtype : 'panel',
            region : 'west',
            title : "Project Explorer",
            flex : 1,
            border : true,
            collapsible : true,
            split : true,
            items : [{
                xtype : 'treepanel',
                rootVisible : false, // root 라는 최상단을 보여줄 것인가 ? ( Default : true )
                useArrows : true, // + 대신 -> 를 사용할 것인가?
                store : {
                    root : {
                        text : 'root',
                        expanded : true,
                        children : [{
                            text : 'extjs',
                            expanded : false
                        },{
                            text : 'jQuery',
                            expanded : false
                        },{
                            text : 'server',
                            expanded : false
                        },{
                            text : 'Servers',
                            expanded : false
                        }]
                    }
                }
            }]
        },{
            xtype : 'panel',
            region : 'center',
            flex : 4,
            border : true,
            layout : 'border',
            items : [{
                xtype : 'tabpanel',
                flex : 3,
                border : true,
                region : 'center',
                items : [{
                    xtype : 'panel',
                    title : 'app.js',
                    layout : 'fit',
                    items : [{
                        xtype : 'textarea'
                    }]
                }]
            },{
                xtype : 'tabpanel',
                flex : 1,
                border : true,
                region : 'south',
                items : [{
                    xtype : 'panel',
                    title : 'Servers'
                },{
                    xtype : 'panel',
                    title : 'Console'
                },{
                    xtype : 'panel',
                    title : 'Progress'
                }]
            }]
        }]
    })

});