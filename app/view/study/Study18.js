Ext.onReady(function(){
    /**
     * < 18강 : Ajax 클래스 사용법 이해 >
     *
     * DataStore 의 기본 뼈대가 Ajax 이다.
     * 데이터를 가공할 때 Store 를 이용한다면, 불필요한 클래스 낭비가 생길 수 있다.
     * Grid 에서 한 번에 별도의 변경없이 데이터를 호출한다거나,
     * Tree 에 List 를 출력한다거나 할 때에는 DataStore 를 이용하는게 좋지만,
     * 하지만 그 와에 별도의 데이터를 가공해서 써야 할 때는 DateStore 속에 있는 원초적인 Ajax 를 사용하는 것이 좋다.
     *
     * Ext.decode(String); 은 String 형식이 JSON 형식인지를 판단해서, JSON 형식이면 JSON 타입으로 decoding 을 해준다.
     *
     * *** 그리고 값을 여러개 변경해서 한 번에 submit 할 때에는 Ajax 가 유용할 수 있다.
     *
     * *** onReady 와 boxready 차이
     * 	- onReady 는 HTML 위에서 아래로 다 돈 다음에 최종적으로 onReady 를 호출
     * 	- boxready 는 해당 boxready 가 속한 패널이나 grid 가 생성되고나서 준비를 한다.
     */

    // Ajax Example
    Ext.Ajax.request({
        uil : 'http://localhost:8080/paging.jsp', // 호출할 URL
        method : 'POST', // Method 방식 ( Get 인지 Post 인지 등등 )
        params : {
            start : 10,
            limit : 10
        },
        success : function(response) {
            console.log("success : " + Ext.decode(response.responseText)); // JSON String 을 JSON Object 형식으로 가공
        },
        failure : function(response) {
            console.log("fail : " + response.status); // status : 응답 여부
        }
    })



    // Ajax 를 실제 적용해 본 코드
    Ext.create("Ext.panel.Panel",{
        width : 500,
        height : 500,
        renderTo : Ext.getBody(),
        listeners : {
            boxready : function(obj) { // obj 는 this 와 같다. 자기 자신이다.
                Ext.Ajax.request({
                    uil : 'http://localhost:8080/paging.jsp', // 호출할 URL
                    method : 'POST', // Method 방식 ( Get 인지 Post 인지 등등 )
                    params : {
                        start : 10,
                        limit : 10
                    },
                    success : function(response) {
                        let result = Ext.decode(response.responseText);
                        let store = obj.down("grid").getStore();
                        store.loadData(result.data); // []빈 배열에 값을 불러와서 넣으려면 load 가 아니라 loadData 이다.

                        obj.down("panel").update(result.total); // panel 에 원하는 값을 띄워 줄 수 있음.
                    },
                    failure : function(response) {
                        console.log("fail : " + response.status); // status : 응답 여부
                    }
                })
            }
        },
        items : [{
            xtype : 'panel',
            width : 500,
            height : 200,
            html : '<h2>Test</h2>',
        },{
            xtype : 'grid',
            width : 500,
            height : 300,
            // listeners : {
            // 	boxready : function(obj) { // obj 는 this 와 같다. 자기 자신이다.
            // 		Ext.Ajax.request({
            // 			uil : 'http://localhost:8080/paging.jsp', // 호출할 URL
            // 			method : 'POST', // Method 방식 ( Get 인지 Post 인지 등등 )
            // 			params : {
            // 				start : 10,
            // 				limit : 10
            // 			},
            // 			success : function(response) {
            // 				let result = Ext.decode(response.responseText);
            // 				let store = obj.getStore();
            // 				store.loadData(result.data); // []빈 배열에 값을 불러와서 넣으려면 load 가 아니라 loadData 이다.
            // 			},
            // 			failure : function(response) {
            // 				console.log("fail : " + response.status); // status : 응답 여부
            // 			}
            // 		})
            // 	}
            // },
            columns : [{
                text : '시',
                dataIndex : 'si'
            },{
                text : '군구',
                dataIndex : 'gungu'
            },{
                text : '동',
                dataIndex : 'dong'
            }],
            store : {
                fields : ['si', 'gungu', 'dong'],
                data : []
            }
        }]
    })

});