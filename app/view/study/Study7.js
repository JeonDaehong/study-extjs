/**
 * < 7강 : 버튼의 종류 >
 */
Ext.onReady(function(){
    /**
     *
     * 1. 기본버튼
     * 2. 크기별 버튼
     * 	- scale : small, medium, large 로 크기를 조절할 수 있다.
     * 3. 아이콘버튼
     * 	- app.json 에 정의되어있는 Font Awesome 사이트에 들어가면 거기에 있는 아이콘을 사용할 수 있다.
     * 	- iconCls : 'x-fa 아이콘이름' 을 통하여 사용할 수 있다.
     * 4. 아이콘 + 텍스트버튼
     * 	- 아이콘과 텍스트가 함께 붙어있는 버튼
     * 	- iconCls 와 text 속성을 같이 사용하면 된다.
     * 5. 토글버튼
     * 	- enableToggle : true
     * 	- 누르면 계속 눌려있음.
     * 	- 다시 한 번 더 눌러야 돌아옴.
     * 6. 메뉴버튼
     * 	- 버튼 안에서 menu : [{ text : ??? }, { text : ???} ... ]
     * 	- 이러한 방법으로 버튼을 누를 시 List 버튼(메뉴버튼) 을 출력할 수 있음.
     * 7. 분할된 메뉴버튼
     * 	- button 대신 splitbutton 으로 선언한다.
     * 	- 버튼을 누르는게 아니라, 우측의 화살표를 눌러야지만 메뉴 리스트가 출력된다.
     * 8. 그룹버튼
     * 	- segmentedbutton 으로 선언한 후 그 안에 items 로 버튼들을 선언해준다.
     * 	- HTML 의 radio 처럼 그룹화 된 버튼 중 하나만 누를 수 있다.
     * 	- 만약 다중으로 선택하고 싶다면, segmentedbutton 아래에 allowMultiple : true 를 선언해주면 된다.
     *
     * xtype : toolbar 를 선언하면, 그 안에는 자동으로 가로로 컴포넌트들이 생성된다,
     */

    Ext.create("Ext.container.Viewport", {
        layout : 'border',
        renderTo : Ext.getBody(),
        items : [{
            xtype : 'panel',
            height : 100,
            header : false,
            region : 'north',
            items : [{
                xtype : 'toolbar',
                // 메뉴 버튼
                items : [{
                    xtype : 'button',
                    text : 'File',
                    menu : [{
                        // 메뉴 + 텍스트 버튼
                        text : 'New',
                        iconCls : 'x-fa fa-file'
                    },{
                        text : 'Open File'
                    },{
                        text : 'Close'
                    }]
                },{
                    xtype : 'splitbutton',
                    text : 'Edit',
                    menu : [{
                        text : 'Undo Typing'
                    },{
                        text : 'Redo'
                    },{
                        text : 'Cut'
                    }]
                },
                // 기본 버튼
                {
                    xtype : 'button',
                    text : 'Source'
                },
                // 그룹 버튼
                {
                    xtype : 'segmentedbutton',
                    allowMultiple : true,
                    items : [{
                        xtype : 'button',
                        text : 'Refactor'
                    },{
                        xtype : 'button',
                        text : 'Navigate'
                    },{
                        xtype : 'button',
                        text : 'Search'
                    }]
                }]
            }, {
                xtype : 'toolbar',
                // 아이콘 버튼
                items : [{
                    xtype : 'button',
                    iconCls : 'x-fa fa-plus'
                },{
                    xtype : 'button',
                    iconCls : 'x-fa fa-floppy-o'
                },{
                    xtype : 'button',
                    iconCls : 'x-fa fa-desktop'
                },
                // 크기별 버튼
                {
                    xtype : 'button',
                    iconCls : 'x-fa fa-play',
                    scale : 'small'
                },
                // 아이콘 + 텍스트 버튼
                {
                    xtype : 'button',
                    text : '일시정지',
                    iconCls : 'x-fa fa-pause',
                    scale : 'medium'
                },{
                    xtype : 'button',
                    iconCls : 'x-fa fa-stop',
                    scale : 'large',
                    // 토글 버튼
                    enableToggle : true
                }]
            }]
        }, {
            xtype : 'panel',
            width : 150,
            split : true,
            title : 'Project Explorer',
            region : 'west'
        }, {
            xtype : 'panel',
            title : '',
            header : false, // header 를 갖지 않는다.
            flex : 1,
            region : 'center',
            layout : 'border',
            items : [{
                xtype : 'panel',
                title : 'app.js',
                border : true,
                flex : 2,
                region : 'center'
            }, {
                xtype : 'panel',
                title : 'Servers',
                split : true,
                border : true,
                flex : 1,
                region : 'south'
            }]
        }]
    });

});