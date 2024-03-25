Ext.onReady(function(){
    /**
     * < 20강 : 데이터 바인딩 및 MVVM 의 이해 >
     *
     * - 데이터 바인딩 ( Data Binding )
     *  	- ViewModel 과 데이터 바인딩은 ExtJS 의 강력한 장점 중 하나이다.
     * 	  	  같이 사용하면 데이터와 UI 간의 비즈니스 로직이 끊기지 않는 연결관계를 만들 수 있다.
     * 	  	  바인딩이 가능하누 Config 설정은 bind 라는 속성내에 GET/SET 을 지원하는 Config 를 정의 후
     * 	  	  value 부분에 중괄호 - {value} 와 같이 정의를 해주어야 한다.
     *
     * - MVVM
     *    	- 기존에는 MVC 구조였지만, 지금은 MVVM 구조를 지원한다.
     *      - MVVM 개발 방법
     *      	- View 페이지를 미리 define 구문을 이용해서 정의하고,
     *      	- 이벤트 리스너 및 핸들러 관련 function 은 Controller 클래스에 정의
     *       	- 데이터 바인딩 작업은 ModelView 클래스에 정의
     *       		※ 만약 바인딩이 필요 없으면, 이전에 했던 대로 동일하게 진행.
     *		- MVC 는 Model, View, Controller 를 나누지만,
     *		  MVVM 은 Model, View, VIewModel, Controller 를 나눈다.
     *		  즉, MVC 는 컨트롤러가 모델과 뷰 사이를 연결하지만,
     *		  MVVM 은 ViewModel 이 데이터 바인딩을 통해 View 와 ViewModel 사이를 연결해준다.
     *		  MVVM 은 뷰를 자동으로 업데이트 할 수 있게 해줘서, UI 로직을 더 단순화 하고,
     *		  개발자가 UI와 데이터 상태 사이의 일치를 보다 쉽게 유지할 수 있게 한다.
     */

    Ext.create("Ext.panel.Panel",{
        width : 500,
        height : 500,
        renderTo : Ext.getBody(),
        layout : 'fit',
        items : [{
            xtype : 'sampleGrid', // xtype 이름을 맞춰주어야 한다.
        }]
    })

    // classic - src - view - main - SampleGrid 로 이어진다.

});