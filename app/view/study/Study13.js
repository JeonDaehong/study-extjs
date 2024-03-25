Ext.onReady(function(){

    /**
     * < 13강 : Tree Panel >
     *
     * 트리 패널이란 ?
     * 	- 뎁스별로 어떠한 기능을 컴포넌트화 시키려고 할 때 사용되는 컴포넌트이다.
     * 	- 우리가 개발 할 때 프로젝트가 뎁스화 되어있는데, 그렇듯 그런 뎁스 형식의 화면을 만들기 위해 사용한다.
     *
     *  - text : button 컴포넌트처럼 문구 출력할 떄 필요한 속성
     *  - expanded : true 면 처음부터 열려있음. false 면 처음에는 닫혀있음.
     * 		- 단, expanded 를 설정해주려면, 하위 속성이 있어야 함.
     *  - children : json array 형태로 안에 text / expanded / children / leaf	를 넣을 수 있음.
     *  - leaf : true 로 하면, 해당 노드가 끝노드임. ( 파일 아이콘이 된다. )
     */

    // 직접 작성한 경우
    Ext.create("Ext.panel.Panel",{
        width : 500,
        height : 500,
        renderTo : Ext.getBody(),
        items : [{
            xtype : 'treepanel',
            root : {
                text : 'Servers',
                expanded : false, // true 면 처음부터 열려있음. false 면 처음에는 닫혀있음.
                children : [{
                    text : '.settings',
                    expanded : false,
                    children : [{
                        text : 'catalina.policy',
                        leaf : true
                    }]
                },{
                    text : '.Tomcat v8.0 Server at localhost-config',
                    expanded : false,
                    children : [{
                        text : 'catalina.properties',
                        leaf : true
                    }]
                },{
                    text : '.project',
                    leaf : true // leaf 설정을 해두면, 해당 노드는 여기가 끝노드임.
                }]
            }
        }]
    })

    // Store 를 활용한 경우
    Ext.create("Ext.panel.Panel",{
        width : 500,
        height : 500,
        renderTo : Ext.getBody(),
        items : [{
            xtype : 'treepanel',
            store : {
                root : {
                    text : 'Servers',
                    expanded : false, // true 면 처음부터 열려있음. false 면 처음에는 닫혀있음.
                },
                proxy : {
                    type : 'ajax',
                    url : '/app/data/tree.json',
                    // url : 'http://localhost:8080/test2.jsp', // 이렇게 하면 다른 서버에서 호출받아서 동적 바인딩이 가능하다.
                    reader : {
                        type : 'json'
                        // tree 는 rootProperty 가 무조건 children 이므로 따로 지정할 필요가 없다.
                    }
                }
            }
        }]
    })

});