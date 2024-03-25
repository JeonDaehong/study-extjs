/**
 * < 3강 : 테마변경 및 onLoad 이해 >
 *     
 * ExtJS 의 모든 컴포넌트는 Ext. 으로 시작된다.
 * Ext.onReady  << 미리 정의된 함수들을 가져온다고 생각하면 된다.
 * Ext.Msg 라는 클래스에 있는 alert 라는 함수를 호출한 거 뿐이다.
 *
 * 또한, return; 을 해주지 않으면 아래 코드를 그대로 실행해버리기 때문에
 * alert 는 보통 조건문과 많이 사용한다.
 */
Ext.onReady(function(){
    /**
     * ExtJS 가 잘 동작하는지 확인해보기
     */
    Ext.Msg.alert("타이틀","HelloWorld"); // Ext 에서 사용하는 함수이다.
});