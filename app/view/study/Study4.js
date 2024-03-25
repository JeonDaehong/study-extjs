/**
 * < 4강 : 문법 및 레이아웃 이해 >
 */
Ext.onReady(function(){
    /**
     * ExtJS 의 도화지 역할을 해주는 Panel ( JSON 구조 )
     * - 지정한 크기의 패널을 사용하고 싶으면, Ext.panel.Panel
     * - 화면을 꽉 채우고 싶으면 Ext.container.Viewport
     * width : 가로
     * height : 세로
     * renderTo : value 값으로 지정한 HTML 엘리먼트 영역에 랜더링을 함. ( Viewport 에는 사용하지 않아도 됨. )
     * border : 테두리 두께를 진하게 하는가.
     * 그 외에도 많은데, 그건 document 를 찾아보면 잘 나와있다.
     */
    Ext.create("Ext.panel.Panel", {
        width : 500,
        height : 300,
        renderTo : Ext.getBody(),
        border : true
    })



    /**
     * 화면 안을 가득 채우고 싶다면, layout을 fit으로 주고, item 속성을 이용하면 된다.
     * xtype 은 HTML 의 input 과 같으며, 원하는 alias 를 통하여 컴포넌트를 가져올 수 있다.
     * alias 종류 역시 document를 확인하면 얻을 수 있다.
     * JSON 형식으로 여러개의 items 를 설정할 수 있다.
     *
     * items 의 구조는
     * 		  items : [{
     *            xtype : 'textfield' // xtype: Ext.create("Ext.form.field.Text") 와 같지만, textfield 라는 alias를 통해 가져온 것이다.
     *        },{
     *            xtype : 'button',
     *            text : '버튼'
     *        }]
     * 와
     *     <div>
     *         <input type="text"/>
     *     </div>
     *     <div>
     *         <input type="button" value="버튼"/>
     *     </div>
     * 가 같다고 보면 된다.
     */
    Ext.create("Ext.container.Viewport", {
        layout : 'fit',
        border : true,
        items : [{
            xtype : 'panel' // alias를 통해서 우리가 원하는 컴포넌트를 생성할 수 있다.
        },{
            xtype : 'textfield'
        }]
    })


    /**
     *
     * items 로 만든 패널 안에서 또 items 를 활용하여 원하는 컴포넌트를 넣을 수 있다.
     * 이러면 해당 패널 아래에 작게 컴포넌트가 생성된다.
     */
    Ext.create("Ext.panel.Panel", {
        width : 500,
        height : 300,
        renderTo : Ext.getBody(),
        border : true,
        items : [{
            xtype : 'textfield' // xtype: Ext.create("Ext.form.field.Text") 와 같지만, textfield 라는 alias를 통해 가져온 것이다.
        },{
            xtype : Ext.create("Ext.form.field.Text") // == xtype : 'textfield'
        },{
            xtype : 'button',
            text : '버튼'
        },{
            xtype : 'numberfield'
        },{
            xtype : 'panel',
            title : '패널입니다',
            items : [{
                xtype : 'textfield'
            }, {
                xtype : 'button',
                text : '버튼'
            }]
        }]
    })



    /**
     * layout 을 border 로 바꾸면 영역을 나눌 수 있다.
     * 이 때 각 items의 패널들은 region 이라는 key랑 꼭 함께 다녀야 한다.
     * 	- region 에는 north, center, south, east, west 이렇게 다섯가지 속성이 있다.
     * 		- north : 상단
     * 		- center : 중앙
     * 		- south : 하단
     * 		- east : 우측
     * 		- west : 좌측
     * height 와 같은 속성으로 패널의 크기를 정할 수 있다.
     * 패널의 크기를 동일하게 하고 싶다면, flex 속성을 사용하면 된다. ( 브라우저 크기가 바뀌어도 재구성을 해서 비율을 맞춰준다.
     *
     * 그리고 기본구조는 위치가 순서대로 들어가게 된다.
     * 그래서 원하는 패널 안에서 또 구역을 나누고 싶다면, 해당 패널 안에서
     * layout : 'border' 를 한 번 더 선언해주고,
     * items 를 통하여 똑같이 패널을 만들고, region 으로 구역을 나눠주면 된다.
     */
    Ext.create("Ext.container.Viewport", {
        layout : 'border',
        border : true,
        items : [{
            xtype : 'panel',
            region : 'north',
            // height : 200,
            border : true,
            flex : 1,
            title : '패널 north입니다',
            layout : 'border',
            items : [{
                xtype : 'panel',
                region : 'center',
                border : true,
                flex : 1,
                items : [{
                    xtype : 'textfield'
                }]
            },{
                xtype : 'panel',
                region : 'east',
                border : true,
                flex : 1
            },{
                xtype : 'panel',
                region : 'west',
                border : true,
                flex : 1
            }]
        },{
            xtype : 'panel',
            region : 'center',
            border : true,
            flex : 1,
            title : '패널 center입니다'
        },{
            xtype : 'panel',
            region : 'east',
            border : true,
            flex : 1,
            title : '패널 east입니다'
        },{
            xtype : 'panel',
            region : 'west',
            border : true,
            flex : 1,
            title : '패널 west입니다'
        },{
            xtype : 'panel',
            region : 'south',
            border : true,
            flex : 1,
            title : '패널 south입니다'
        }]
    })


    /**
     * 위에까지 공부한 내용을 토대로, 원하는 화면 레이아웃 나눠보기 실습
     */
    Ext.create("Ext.container.Viewport", {
        layout : 'border',
        border : true,
        items : [{
            xtype : 'panel',
            border : true,
            flex : 1,
            region : 'north',
            layout : 'border',
            title : '상단 패널',
            items : [{
                xtype : 'panel',
                border : true,
                flex : 1,
                region : 'west'
            }, {
                xtype : 'panel',
                border : true,
                flex : 1,
                region : 'center'
            }]
        },{
            xtype : 'panel',
            border : true,
            flex : 1,
            region : 'center',
            title : '중앙 패널'
        }]
    })

});