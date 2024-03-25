Ext.onReady(function(){
    /**
     * < 15강 : 그리드 에디팅 플러그인 적용하기 >
     *
     * plugins
     *  - cellediting
     *  	- 각 셀을 직접 수정할 수 있는 기능을 추가한다.
     *    	  서버랑 싱크가 맞춰지지 않으면 빨간색 마크가 생긴다.
     *    	- 변경을 원하면 editor 속성도 함께 넣어줘야 한다.
     *    	- editor : { xtype : ??? } 을 해주지 않으면, 기본으로 textfield 가 된다.
     *  - rowediting
     *      - Row 에 대한 수정 기능을 추가한다.
     *      - 변경을 원하면 editor 속성도 함께 넣어줘야 한다.
     *      - editor : { xtype : ??? } 을 해주지 않으면, 기본으로 textfield 가 된다.
     *
     *
     * CRUD 이 대해서,
     *  - autoSync
     *    autoLoad 는 자동적으로 컴포넌트가 생성되면서 데이터를 서버로부터 조회하여 받아오지만,
     *    autoSync 의 경우는 자동적으로 CUD 가 발생하면 그걸 서버로 전송하는 역할을 한다.
     *
     *  - api
     *    이전에는 url 속성으로 조회를 했다면, 이제는 변경도 적용해주어야 하기 때문에
     *    api 라는 속성을 사용하며 안에는 create, read, update, destroy 라는 속성이 있다.
     *    delete 가 아니라 destroy 인 것을 잘 기억해야 한다.
     *
     *  - writer
     *    reader 는 조회에 필요한 proxy 속성 값이면,
     *    writer 는 등록/수정/삭제에 필요한 속성 값이다.
     *    rootProperty 는 FROM SUBMIT 하였을 때 전송되는 name 값이라 보면 된다.
     *    ( 즉, 해당 JSON 문자열을 받기 위한 ParameterKey 값인 셈이다. )
     *
     *  - writeAllFields 옵션은 true 일 경우 모든 필드가 서버에 전송된다.
     *    반면 false 일 경우는, 변경된 id+데이터만 서버에 전송한다.
     *
     *  - encode 옵션은 필수 옵션이다.
     *    true 로 설정해주면 URL 인코딩이 되어 서버에 전송할 수 있다.
     *    	- { "name": "John Doe", "age": 30 } 라는 JSON 데이터가
     *      - {\"name\":\"John Doe\",\"age\":30}"와 같이 전송된다.
     *      - Get 데이터로 전송 시 주로 사용
     *      - 한글과 같은 문자는 비 ASCII 문자이므로 인코딩되어 전달된다.
     *    false 로 설정하면 인코딩이 되지 않으므로 원본 데이터 타입 그대로 전송된다.
     *    	- Request Body 를 통해 전송된다.
     *
     *  *** 서버에서는 데이터들이 encode 되어 JSON String 구조로 넘어간다.
     *  그래서 해당 문자열을 JSON Object 나 JSON Array 로 변경해주고 사영해야 한다.
     *  또한, DB 작업이 진행된 후, JSON 응답값을 만들어 전송해주어야 한다.
     *  ex. ( JSON KEY : successCheck / JSON VALUE : true or false )
     */

    Ext.create("Ext.panel.Panel", {
        width : 800,
        height : 500,
        renderTo : Ext.getBody(),
        layout : 'fit',
        items : [{
            xtype : 'grid',
            plugins : 'cellediting', // 엑셀과 비슷하게, 직접 셀을 수정할 수 있다.
            columns : [{
                text : '인덱스',
                dataIndex : 'id',
                flex : 1
            },{
                text : '시',
                dataIndex : 'si',
                flex : 1,
                editor : {
                    xtype : 'textfield'
                }
            }, {
                text : '군구',
                dataIndex : 'gungu',
                flex : 1,
                editor : {
                    xtype : 'textfield'
                }
            }, {
                text : '동',
                dataIndex : 'dong',
                flex : 1,
                editor : {
                    xtype : 'textfield'
                }
            }],
            store : {
                autoLoad : true,
                autoSync : true, // 변경이 있을 때 자동으로 싱크를 맞춰줌.
                fields : ['id', 'si', 'gungu', 'dong'],
                pageSize : 10,
                proxy : {
                    type : 'ajax',
                    // url : "http://localhost:8080/paging.jsp",
                    api : {
                        // create :
                        read : "http://localhost:8080/paging.jsp",
                        update : "http://localhost:8080/update.jsp"
                        // destroy :
                    },
                    reader : {
                        type : 'json',
                        rootProperty : 'data',
                        totalProperty : 'total'
                    },
                    writer : {
                        type : 'json',
                        rootProperty : 'data',
                        writeAllFields : true,
                        encode : true // 필수 적용 !
                    }
                }
            }
        }]
    })

});