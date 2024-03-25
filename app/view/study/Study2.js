/**
 * < 2강 : ExteJS 6 설치 및 환경설정 >
 *
 * - 현재 6.2.1 을 다운 받을 수 없어서, 멘토님께 6.2.1 exe 파일을 전달 받았음.
 *
 * - 일단, extjs 와 cmd 를 다운 받아야함.
 * - cmd 에서 sencha 검색 시 버전과 정보가 나오면 정상적으로 설치가 완료된 것이다.
 * - senchacmd 는 java로 따지면 컴파일러와 WAS 톰캣 같은게 합쳐져있는 툴이라 보면 된다.
 *
 * - 이후 환경 구성을 해야한다.
 *     - senchacmd 가 다운되어있는 폴더를 환경변수로 잡아준다.
 *     - 이후 cmd 에서 sencha << 를 입력하여 버전 정보를 확인한다.
 *     - extjs 프레임워크가 다운되어있는 폴더도 있어야 한다.
 *     - 내가 개발하려고 하는 폴더에 위치해서 아래처럼 해주면 된다.
 *         - sencha -sdk extjs프레임워크위치 generate app 만들려는폴더 ./
 *             - 뒤에 -classic 까지 추가하면, modern 을 뺀 classic 만 만들 수 있다.
 *                 - classic = PC용
 *                 - modern = 휴대폰용
 *         - sencha app watch
 *         - localhost:1841
 *
 * - Study 폴더에서 IntelliJ를 실행해주면 된다.
 */