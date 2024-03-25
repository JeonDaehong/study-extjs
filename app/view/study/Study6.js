/**
 * < 6강 : API Document 를 보며 원하는 화면 만들어보기 >
 */
Ext.onReady(function(){
    /**
     *
     * API 문서 https://docs.sencha.com/extjs/6.2.1/ 에서 Config 의 내용들을 확인하면 원하는 컴포넌트와 기능을 찾을 수 있다.
     * 	- split : 레이아웃 크기를 줄였다 늘렸다 할 수 있다.
     * 	- collapsible : 해당 레이아웃을 접었다 폈다 할 수 있다.
     *
     * 부모 패널에서 layout 속성을 설정해주어야, 그것이 자식 패널에서 적용되는 것을 꼭 기억해야 한다.
     *
     * listeners : { } 는 그 안에 이벤트 함수를 넣을 수 있다.
     * 	- 예를들어 버튼 안에 listeners 안에 click 을 넣으면, 그 버튼을 클릭했을 때의 이벤트를 발생시킬 수 있다.
     *
     * https://examples.sencha.com/extjs/6.2.0/examples/kitchensink/ 에 있는 예제 소스를 참고해서 연습하면 도움이 많이 된다.
     */

    Ext.create("Ext.panel.Panel", {
        width : 500,
        height : 500,
        title : '6강 ExtJS 타이틀',
        renderTo : Ext.getBody(),
        layout : 'border',
        items : [{
            xtype : 'panel',
            border : true,
            flex : 1,
            region : 'west',
            split : true,
            collapsible : true,
            html : '<a>안녕하세요!</a>' // html 로 원하는걸 넣을 수 있다.
        }, {
            xtype : 'panel',
            border : true,
            flex : 2,
            region : 'center',
            layout : 'border',
            items : [{
                xtype : 'panel',
                flex : 2,
                region : 'center',
                border : true,
                split : true,
                layout : 'center',
                items : [{
                    xtype : 'button',
                    text : '버튼 클릭',
                    width : 100,
                    height: 50,
                    // handler : function (btn) {
                    // 	alert("버튼 클릭!");
                    // }
                    listeners : {
                        click : function(btn) {
                            Ext.Msg.alert("안내창",btn.getText()); // btn.getText(); btn 의 text 를 가져온다.
                        }
                    }
                }]
            },{
                xtype: 'panel',
                flex : 1,
                region: 'south',
                border : true,
                split : true
            }]
        }]
    })

});