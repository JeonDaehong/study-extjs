/**
 * < 9강 : 윈도우 컴포넌트 다뤄보기 : 팝업, 모달, 윈도우 레이아웃>
 */
Ext.onReady(function(){
    /**
     *
     *  - 윈도우 컴포넌트는 메시지박스나 Alert 과는 다르게 객체를 생성해주어야 한다. ( 싱글턴 구조가 아님 )
     *  - autoShow : 자동으로 띄워주는지 여부
     *  - modal : 이 창에 모달 속성을 주는지 여부 ( 나머지 뒷 배경들은 클릭하지 못하고 화면이 짙어짐. )
     *  - resizable : 창의 크기를 사용자가 줄이고 늘릴 수 있게 하는 여부 ( Default : true )
     *  - minWidth, minHeight, maxWidth, maxHeight : 지정한 크기까지만 줄이거나 늘릴 수 있음.
     *  - closable : x 버튼 여부 ( Default : true )
     *  - maximizable : 창 최대화, 원래대로 기능 부여 여부 ( Default : false )
     */

    // let window = Ext.create("Ext.window.Window");
    // window.show();

    Ext.create("Ext.window.Window", {
        autoShow : true, // Default = false
        width : 300,
        height : 300,
        minWidth : 250,
        minHeight : 250,
        maxWidth : 500,
        maxHeight : 500,
        title : 'Window Title',
        modal : true,
        // resizable : false,
        items : [{
            xtype : 'button',
            text : '버튼'
        }]
    })


    Ext.create("Ext.panel.Panel", {
        border : true,
        width : 300,
        height : 300,
        renderTo : Ext.getBody(),
        items : [{
            xtype : 'button',
            text : '패널 버튼',
            // 버튼 누르면 윈도우 모달창 출력
            listeners : {
                click : function(btn) {
                    let window = Ext.create("Ext.window.Window", {
                        autoShow : true, // Default = false
                        width : 300,
                        height : 300,
                        minWidth : 250,
                        minHeight : 250,
                        maxWidth : 500,
                        maxHeight : 500,
                        title : 'Window Title',
                        modal : true,
                        // resizable : false,
                        items : [{
                            xtype : 'button',
                            text : '버튼'
                        }]
                    })
                    window.show();
                }
            }
        }]
    })
});