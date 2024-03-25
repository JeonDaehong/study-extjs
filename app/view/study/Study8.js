/**
 * < 8강 : 메시지 상자 다뤄보기>
 */
Ext.onReady(function(){
    /**
     * 1. Alert
     * 2. Confirm
     * 3. Toast
     * 4. MessageBox
     */

    // Alert
    Ext.Msg.alert("타이틀", "바디"); // static 싱글 속성이라 Ext.create 를 사용하지 않아도 사용할 수 있다.



    // Confirm
    Ext.Msg.confirm("타이틀", "바디", function(btn) {
        if ( btn === "yes" ) {
            Ext.Msg.alert("Yes !", "Yes !");
        } else {
            Ext.Msg.alert("No !", "No !");
        }
    });



    // Toast : 잠깐 내려왔다가 잠시 후 사라지는 창
    //  --> align 속성에는 6개가 있다. t, tr, tl, b, br, bl --> 상, 우상, 좌상, 하, 우하, 좌하
    Ext.toast("토스트창입니다.");
    Ext.toast({
        html : '토스트입니다.',
        align : 'br'
    });



    // MessageBox
    // 사용자가 움직일 수도 있고,
    // icon 속성을 통해 아이콘도 넣을 수 있으며 ( 종류는 약 3~4개 document 확인 ),
    // buttons 속성을 통해 원하는 버튼을 넣을 수 있고,
    // buttonText JSON 구조를 통해서 ok, no, yes, cancel 과 관련한 문구를 원하는대로 커스텀 할 수 있다.
    //		- 단, 문구만 바뀌는 것이지 결과는 ok, no, yes, cancel 중에서만 선택 할 수 있는 것이다.
    //
    Ext.MessageBox.show({
        title : "상단 제목",
        msg : "몸통 내용",
        icon : Ext.MessageBox.QUESTION,
        // buttons : Ext.MessageBox.YESNOCANCEL
        buttonText : {
            ok : '오케이버튼',
            no : 'No 버튼입니당',
            yes : 'Yes 에요',
            cancel : '캔슬버튼'
        },
        fn : function(btn) {
            if ( btn === "ok" ) {
                Ext.Msg.alert("ok !", "ok !");
            } else if ( btn === "no" ) {
                Ext.Msg.alert("no !", "no !");
            } else if ( btn === "yes" ) {
                Ext.Msg.alert("yes !", "yes !");
            } else {
                Ext.Msg.alert("cancel !", "cancel !");
            }
        }
    });

});