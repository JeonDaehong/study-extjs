Ext.onReady(function(){
    /**
     * < 11강 : 폼 필드 알아보기 >
     *
     * HTML 에서 사용하는 text 나 password 같은 여러가지 폼 필드이다.
     */

    Ext.create("Ext.panel.Panel",{
        width : 500,
        height : 500,
        title : '폼 필드 알아보기',
        renderTo : Ext.getBody(),
        items : [{
            // <input type="text" placeholder="입력하세요" />
            xtype : 'textfield',
            allowBlank : false, // 값이 비어있으면 빨간색 테두리로 알려줌. ( 별도 처리 없으면 폼으로 넘어가기는 함 )
            emptyText : '입력하세요' // HTML 의 placeholder 와 같음.
        },{
            // <input type="password" placeholder="패스워드를 입력하세요"/>
            xtype : 'textfield',
            inputType : 'password',
            allowBlank : false, // 값이 비어있으면 빨간색 테두리로 알려줌. ( 별도 처리 없으면 폼으로 넘어가기는 함 )
            emptyText : '패스워드를 입력하세요' // HTML 의 placeholder 와 같음.
        },{
            // <input type="datefield" />
            xtype : 'datefield',
            format : 'y-m-d'
        },{
            // <input type="numberfield" max="10" min="-3" />
            xtype : 'numberfield',
            minValue : -3,
            maxValue : 10
        },{
            // <input type="timefield" />
            xtype : 'timefield'
        },{
            // <input type="file" />
            xtype : 'filefield',
            buttonOnly : true // 오로지 파일업로드 버튼만 보이게끔
        },{
            // <input type="checkbox" />
            xtype : 'checkbox',
            boxLabel : '아이디 기억'
        },{
            // <input type="checkbox" name="aaa" />
            xtype : 'radiofield',
            name : 'sex',
            boxLabel : '남',
        },{
            // <input type="checkbox" name="aaa" />
            xtype : 'radiofield',
            name : 'sex',
            boxLabel : '여',
        },{
            // 음량 조절등을 할 때 유용한 컴포넌트
            xtype : 'slider',
            width : 300, // 반드시 지정해주어야함. Default 가 0임
            value : 50 // 기본값 ( 0 ~ 100 )
        }]
    })

});