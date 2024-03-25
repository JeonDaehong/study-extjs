/**
 * < 12강 : 데이터 스토어 >
 */
Ext.onReady(function(){
    /**
     *
     * - 데이터를 담아놓는 저장 공간을 의미한다.
     * - 대표적으로는
     * 		- Combobox
     * 		- Grid
     * 		- Tree
     * 		- Chart
     * 		- DataView
     * 		...등등
     * 	여러가지가 있다.
     *
     * 	<select>
     * 	    <option>Test</option>
     *      <option>Test</option>
     *      <option>Test</option>
     * 	</select>
     * 	<table>
     * 	    <tr>
     * 	    	<td>
     * 	    	 Test
     * 	    	</td>
     * 	    </tr>
     * 	</table>
     * 	이렇게 두 개가 다 데이터 스토어의 역할을 한다.,
     * 	Select 는 Option 의 데이터를 담고 있고, Table 은 Tr과 Td의 내용을 담고 있다.
     *
     */

    // ComboBox 를 활용한 데이터 스토어
    Ext.create("Ext.panel.Panel",{
        width : 300,
        height : 300,
        title : 'DataStore 이해',
        renderTo : Ext.getBody(),
        items : [{
            xtype : 'combo',
            editable : false, // combo box 속에 사용자가 임의의 Text 를 입력할 수 없게 함.
            value : 'second', // Default Value 선언
            displayField : 'test1', // 보이는 내용
            valueField : 'test2',   // 실질적으로 서버에 넘기는 값
            queryMode : 'local', // 외부에서 Ajax 로 값을 받아오면 안적어도 됨. ( default 가 remote 이므로)
                                 // 근데 밑에처럼 store 하드 코딩을 할 때는 적어줘야 함. ( 안그러면 remote 가 적용되서 오류가 발생할 수 있음 )
            store : {
                // Ext.data.Store 를 자동으로 선언해준다.
                fields : ['test1', 'test2'],
                data : [{
                    test1 : '첫번째', // 보이는 내용
                    test2 : 'first'  // 실질적으로 서버에 넘기는 값
                },{
                    test1 : '두번째',
                    test2 : 'second'
                },{
                    test1 : '세번째',
                    test2 : 'third'
                }]
            }
        }]
    })



    // Grid 를 활용한 데이터 스토어
    // Ext.grid.Panel
    Ext.create("Ext.grid.Panel", {
        width : 500,
        height : 500,
        renderTo : Ext.getBody(),
        columns : [{
            text : '컬럼1',
            flex : 1,
            align : 'center',
            // style : 'text-align:center',
            dataIndex : 'c1'
        },{
            text : '컬럼2',
            flex : 1,
            align : 'center',
            dataIndex : 'c2'
        },{
            text : '컬럼3',
            flex : 1,
            align : 'center',
            dataIndex : 'c3'
        }],
        store : {
            fields : ['c1', 'c2', 'c3'],
            data : [{
                c1 : '컬럼 1-1',
                c2 : '컬럼 1-2',
                c3 : '컬럼 1-3'
            },{
                c1 : '컬럼 2-1',
                c2 : '컬럼 2-2',
                c3 : '컬럼 2-3'
            },{
                c1 : '컬럼 3-1',
                c2 : '컬럼 3-2',
                c3 : '컬럼 3-3'
            }]
        }
    })


    /**
     * < 비동기(Ajax)를 이용한 데이터 스토어 >
     *
     * .json 파일에 있는 정적인 데이터를 바인딩 한다.
     *
     * - rootProperty 를 선언하는 이유는 json 파일의 최상단 키 값을 가져오기 위해서이다.
     * {
     *   "data": [
     *     { "key": "치킨", "value": "20000" },
     *     { "key": "피자", "value": "15000" },
     *     .
     *     .
     *     .
     *   ]
     * }
     * 이렇게 되어있는 json 파일이면 rootProperty 는 'data' 이다.
     *
     * grid 의 경우 바인딩하여 보여줄 준비가 되어있는거 뿐이지,
     * autoLoad 속성을 true 로 하지 않으면 안보여준다.
     */

    Ext.create("Ext.panel.Panel",{
        width : 300,
        height : 700,
        title : 'DataStore Ajax 이해',
        renderTo : Ext.getBody(),
        items : [{
            xtype : 'combo',
            editable : false, // combo box 속에 사용자가 임의의 Text 를 입력할 수 없게 함.
            value : 'second', // Default Value 선언
            displayField : 'key', // 보이는 내용
            valueField : 'value',   // 실질적으로 서버에 넘기는 값
            store : {
                // 정적 바인딩
                fields : ['key', 'value'],
                proxy : {
                    type : 'ajax',
                    url : '/app/data/combo.json',
                    // url : 'http://localhost:8080/test.jsp', // 이렇게 하면 다른 서버에서 호출받아서 동적 바인딩이 가능하다.
                    reader : {
                        type : 'json', // json 타입을 받겠다.
                        rootProperty : 'data'
                    }
                }
            }
        },{
            xtype : 'grid',
            columns : [{
                text : '컬럼1',
                flex : 1,
                align : 'center',
                dataIndex : 'column1'
            },{
                text : '컬럼2',
                flex : 1,
                align : 'center',
                dataIndex : 'column2'
            },{
                text : '컬럼3',
                flex : 1,
                align : 'center',
                dataIndex : 'column3'
            }],
            store : {
                // 정적 바인딩
                autoLoad : true, // Default 가 false 라서 바로 보여주고 싶으면 true 를 선언해줘야 한다.
                fields : ['column1', 'column2', 'column3'],
                proxy : {
                    type : 'ajax',
                    url : '/app/data/grid.json',
                    reader : {
                        type : 'json', // json 타입을 받겠다.
                        rootProperty : 'data'
                    }
                }
            }
        }]
    })

});