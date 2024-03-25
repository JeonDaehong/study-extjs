/**
 * < 5강 : 추가 레이아웃 알아보기>
 */
Ext.onReady(function(){
    /**
     *
     * layout : fit border
     * layout2 : center absolute accordion hbox/vbox ...
     *
     * center
     * 	- 그 안에 속해 있는 자식 패널들이 가운데로 오게 된다.
     * absolute
     * 	- 패널의 위치가 서로 겹치게 될 경우 먼저 선언한 자식 패널이 밑으로 가게된다.
     * accordion
     * 	- html 속성을 통해 내용을 적을 수 있으며, 레이아웃을 접었다 폈다 할 수 있다.
     * card
     * 	- 뭔가를 누르거나 특정 동작을 할 때마다 패널을 뒤로 넘겨가며 패널을 바꿔치기 하듯 보여줄 수 있다.
     * hbox/vbox ( 패널로 레이아웃을 나눌 때 사용하기에는 적합하지 않다. )
     *  - hbox 는 패널을 짧게해서 가로로 정렬 --> 목록 버튼을 만들 때 좋음.
     *  - vbox 는 패널을 짧게해서 세로로 정렬
     *
     */

    // center
    Ext.create("Ext.container.Viewport", {
        layout : 'fit',
        border : true,
        items : [{
            xtype : 'panel',
            title : '부모 패널',
            layout : 'absolute',
            items : [{
                type : 'panel',
                width : 500,
                height : 300,
                border : true,
                title : '첫째 패널',
                items : [{
                    xtype : 'textfield'
                },{
                    xtype : 'textfield'
                },{
                    xtype : 'button',
                    text : '로그인'
                }]
            }]
        }]
    })


    // absolute
    Ext.create("Ext.container.Viewport", {
        layout : 'fit',
        border : true,
        items : [{
            xtype : 'panel',
            title : '부모 패널',
            layout : 'absolute',
            items : [{
                xtype : 'panel',
                width : 500,
                height : 300,
                x : 300,
                y : 500,
                border : true,
                title : '첫째 패널'
            },{
                xtype : 'panel',
                width : 500,
                height : 300,
                x : 100,
                y : 100,
                border : true,
                title : '둘째 패널'
            }]
        }]
    })


    // accordion & card
    Ext.create("Ext.container.Viewport", {
        layout : 'fit',
        border : true,
        items : [{
            xtype : 'panel',
            title : '부모 패널',
            layout : 'card', // 'accordion',
            items : [{
                xtype : 'panel',
                title : '첫째 패널',
                html : '첫째 패널입니다.'
            },{
                xtype : 'panel',
                title : '둘째 패널',
                html : '둘째 패널입니다.'
            }]
        }]
    })


    // hbox/vbox
    Ext.create("Ext.container.Viewport", {
        layout : 'fit',
        border : true,
        items : [{
            xtype : 'panel',
            title : '부모 패널',
            layout : 'hbox', // 'vbox',
            items : [{
                xtype : 'button',
                text : '목록'
            },{
                xtype : 'button',
                text : '목록2'
            }]
        }]
    })

});