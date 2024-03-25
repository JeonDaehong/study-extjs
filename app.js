/**
 * ExtJS 의 모든 컴포넌트는 Ext. 으로 시작된다.
 * Ext.onReady  << 미리 정의된 함수들을 가져온다고 생각하면 된다.
 * Ext.Msg 라는 클래스에 있는 alert 라는 함수를 호출한 거 뿐이다.
 *
 * 또한, return; 을 해주지 않으면 아래 코드를 그대로 실행해버리기 때문에
 * alert 는 보통 조건문과 많이 사용한다.
 */
Ext.onReady(function(){

	/**
	 * < 3강 : 테마변경 및 onLoad 이해 >
	 *
	 * ExtJS 가 잘 동작하는지 확인해보기
	 */
	/*
	Ext.Msg.alert("타이틀","HelloWorld"); // Ext 에서 사용하는 함수이다.
	*/


	/**
	 * < 4강 : 문법 및 레이아웃 이해 >
	 *
	 * ExtJS 의 도화지 역할을 해주는 Panel ( JSON 구조 )
	 * - 지정한 크기의 패널을 사용하고 싶으면, Ext.panel.Panel
	 * - 화면을 꽉 채우고 싶으면 Ext.container.Viewport
	 * width : 가로
	 * height : 세로
	 * renderTo : value 값으로 지정한 HTML 엘리먼트 영역에 랜더링을 함. ( Viewport 에는 사용하지 않아도 됨. )
	 * border : 테두리 두께를 진하게 하는가.
	 * 그 외에도 많은데, 그건 document 를 찾아보면 잘 나와있다.
	 */
	/*
	Ext.create("Ext.panel.Panel", {
		width : 500,
		height : 300,
		renderTo : Ext.getBody(),
		border : true
	})
	 */


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
	/*
	Ext.create("Ext.container.Viewport", {
		layout : 'fit',
		border : true,
		items : [{
			xtype : 'panel' // alias를 통해서 우리가 원하는 컴포넌트를 생성할 수 있다.
		},{
			xtype : 'textfield'
		}]
	})
	 */

	/**
	 *
	 * items 로 만든 패널 안에서 또 items 를 활용하여 원하는 컴포넌트를 넣을 수 있다.
	 * 이러면 해당 패널 아래에 작게 컴포넌트가 생성된다.
	 */
	/*
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
	 */


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
	/*
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
	 */

	/**
	 * 위에까지 공부한 내용을 토대로, 원하는 화면 레이아웃 나눠보기 실습
	 */
	/*
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
	 */


	/**
	 * < 5강 : 추가 레이아웃 알아보기>
	 *
	 * layout : fit border
	 * layout2 : center absolute accordion hbox/vbox ...
	 *
	 * center
	 * 	- 그 안에 속해 있는 자식 패널들이 가운데로 오게 된다.
	 * absolute
	 * 	- 패널의 위치가 서로 겹치게 될 경우 먼저 선언한 자식 패널이 밑으로 가게된다.
	 * accordion
	 * 	- html 속성을 통해 내용을 적을 수 있으며, 레이아웃을 접었다 폈다 할 수 있다.
	 * card
	 * 	- 뭔가를 누르거나 특정 동작을 할 때마다 패널을 뒤로 넘겨가며 패널을 바꿔치기 하듯 보여줄 수 있다.
	 * hbox/vbox ( 패널로 레이아웃을 나눌 때 사용하기에는 적합하지 않다. )
	 *  - hbox 는 패널을 짧게해서 가로로 정렬 --> 목록 버튼을 만들 때 좋음.
	 *  - vbox 는 패널을 짧게해서 세로로 정렬
	 *
	 */
	/*
	// center
	Ext.create("Ext.container.Viewport", {
		layout : 'fit',
		border : true,
		items : [{
			xtype : 'panel',
			title : '부모 패널',
			layout : 'absolute',
			items : [{
				type : 'panel',
				width : 500,
				height : 300,
				border : true,
				title : '첫째 패널',
				items : [{
					xtype : 'textfield'
				},{
					xtype : 'textfield'
				},{
					xtype : 'button',
					text : '로그인'
				}]
			}]
		}]
	})
	 */
	/*
	// absolute
	Ext.create("Ext.container.Viewport", {
		layout : 'fit',
		border : true,
		items : [{
			xtype : 'panel',
			title : '부모 패널',
			layout : 'absolute',
			items : [{
				xtype : 'panel',
				width : 500,
				height : 300,
				x : 300,
				y : 500,
				border : true,
				title : '첫째 패널'
			},{
				xtype : 'panel',
				width : 500,
				height : 300,
				x : 100,
				y : 100,
				border : true,
				title : '둘째 패널'
			}]
		}]
	})
	 */
	/*
	// accordion & card
	Ext.create("Ext.container.Viewport", {
		layout : 'fit',
		border : true,
		items : [{
			xtype : 'panel',
			title : '부모 패널',
			layout : 'card', // 'accordion',
			items : [{
				xtype : 'panel',
				title : '첫째 패널',
				html : '첫째 패널입니다.'
			},{
				xtype : 'panel',
				title : '둘째 패널',
				html : '둘째 패널입니다.'
			}]
		}]
	})
	*/
	/*
	// hbox/vbox
	Ext.create("Ext.container.Viewport", {
		layout : 'fit',
		border : true,
		items : [{
			xtype : 'panel',
			title : '부모 패널',
			layout : 'hbox', // 'vbox',
			items : [{
				xtype : 'button',
				text : '목록'
			},{
				xtype : 'button',
				text : '목록2'
			}]
		}]
	})
	*/

	/**
	 * < 6강 : API Document 를 보며 원하는 화면 만들어보기 >
	 *
	 * API 문서 https://docs.sencha.com/extjs/6.2.1/ 에서 Config 의 내용들을 확인하면 원하는 컴포넌트와 기능을 찾을 수 있다.
	 * 	- split : 레이아웃 크기를 줄였다 늘렸다 할 수 있다.
	 * 	- collapsible : 해당 레이아웃을 접었다 폈다 할 수 있다.
	 *
	 * 부모 패널에서 layout 속성을 설정해주어야, 그것이 자식 패널에서 적용되는 것을 꼭 기억해야 한다.
	 *
	 * listeners : { } 는 그 안에 이벤트 함수를 넣을 수 있다.
	 * 	- 예를들어 버튼 안에 listeners 안에 click 을 넣으면, 그 버튼을 클릭했을 때의 이벤트를 발생시킬 수 있다.
	 *
	 * https://examples.sencha.com/extjs/6.2.0/examples/kitchensink/ 에 있는 예제 소스를 참고해서 연습하면 도움이 많이 된다.
	 */
	/*
	Ext.create("Ext.panel.Panel", {
		width : 500,
		height : 500,
		title : '6강 ExtJS 타이틀',
		renderTo : Ext.getBody(),
		layout : 'border',
		items : [{
			xtype : 'panel',
			border : true,
			flex : 1,
			region : 'west',
			split : true,
			collapsible : true,
			html : '<a>안녕하세요!</a>' // html 로 원하는걸 넣을 수 있다.
		}, {
			xtype : 'panel',
			border : true,
			flex : 2,
			region : 'center',
			layout : 'border',
			items : [{
				xtype : 'panel',
				flex : 2,
				region : 'center',
				border : true,
				split : true,
				layout : 'center',
				items : [{
					xtype : 'button',
					text : '버튼 클릭',
					width : 100,
					height: 50,
					// handler : function (btn) {
					// 	alert("버튼 클릭!");
					// }
					listeners : {
						click : function(btn) {
							Ext.Msg.alert("안내창",btn.getText()); // btn.getText(); btn 의 text 를 가져온다.
						}
					}
				}]
			},{
				xtype: 'panel',
				flex : 1,
				region: 'south',
				border : true,
				split : true
			}]
		}]
	})
	*/


	/**
	 * < 7강 : 버튼의 종류 >
	 *
	 * 1. 기본버튼
	 * 2. 크기별 버튼
	 * 	- scale : small, medium, large 로 크기를 조절할 수 있다.
	 * 3. 아이콘버튼
	 * 	- app.json 에 정의되어있는 Font Awesome 사이트에 들어가면 거기에 있는 아이콘을 사용할 수 있다.
	 * 	- iconCls : 'x-fa 아이콘이름' 을 통하여 사용할 수 있다.
	 * 4. 아이콘 + 텍스트버튼
	 * 	- 아이콘과 텍스트가 함께 붙어있는 버튼
	 * 	- iconCls 와 text 속성을 같이 사용하면 된다.
	 * 5. 토글버튼
	 * 	- enableToggle : true
	 * 	- 누르면 계속 눌려있음.
	 * 	- 다시 한 번 더 눌러야 돌아옴.
	 * 6. 메뉴버튼
	 * 	- 버튼 안에서 menu : [{ text : ??? }, { text : ???} ... ]
	 * 	- 이러한 방법으로 버튼을 누를 시 List 버튼(메뉴버튼) 을 출력할 수 있음.
	 * 7. 분할된 메뉴버튼
	 * 	- button 대신 splitbutton 으로 선언한다.
	 * 	- 버튼을 누르는게 아니라, 우측의 화살표를 눌러야지만 메뉴 리스트가 출력된다.
	 * 8. 그룹버튼
	 * 	- segmentedbutton 으로 선언한 후 그 안에 items 로 버튼들을 선언해준다.
	 * 	- HTML 의 radio 처럼 그룹화 된 버튼 중 하나만 누를 수 있다.
	 * 	- 만약 다중으로 선택하고 싶다면, segmentedbutton 아래에 allowMultiple : true 를 선언해주면 된다.
	 *
	 * xtype : toolbar 를 선언하면, 그 안에는 자동으로 가로로 컴포넌트들이 생성된다,
	 */
	/*
	Ext.create("Ext.container.Viewport", {
		layout : 'border',
		renderTo : Ext.getBody(),
		items : [{
			xtype : 'panel',
			height : 100,
			header : false,
			region : 'north',
			items : [{
				xtype : 'toolbar',
				// 메뉴 버튼
				items : [{
					xtype : 'button',
					text : 'File',
					menu : [{
						// 메뉴 + 텍스트 버튼
						text : 'New',
						iconCls : 'x-fa fa-file'
					},{
						text : 'Open File'
					},{
						text : 'Close'
					}]
				},{
					xtype : 'splitbutton',
					text : 'Edit',
					menu : [{
						text : 'Undo Typing'
					},{
						text : 'Redo'
					},{
						text : 'Cut'
					}]
				},
				// 기본 버튼
				{
					xtype : 'button',
					text : 'Source'
				},
				// 그룹 버튼
				{
					xtype : 'segmentedbutton',
					allowMultiple : true,
					items : [{
						xtype : 'button',
						text : 'Refactor'
					},{
						xtype : 'button',
						text : 'Navigate'
					},{
						xtype : 'button',
						text : 'Search'
					}]
				}]
			}, {
				xtype : 'toolbar',
				// 아이콘 버튼
				items : [{
					xtype : 'button',
					iconCls : 'x-fa fa-plus'
				},{
					xtype : 'button',
					iconCls : 'x-fa fa-floppy-o'
				},{
					xtype : 'button',
					iconCls : 'x-fa fa-desktop'
				},
				// 크기별 버튼	
				{
					xtype : 'button',
					iconCls : 'x-fa fa-play',
					scale : 'small'
				},
				// 아이콘 + 텍스트 버튼
				{
					xtype : 'button',
					text : '일시정지',
					iconCls : 'x-fa fa-pause',
					scale : 'medium'
				},{
					xtype : 'button',
					iconCls : 'x-fa fa-stop',
					scale : 'large',
					// 토글 버튼
					enableToggle : true
				}]
			}]
		}, {
			xtype : 'panel',
			width : 150,
			split : true,
			title : 'Project Explorer',
			region : 'west'
		}, {
			xtype : 'panel',
			title : '',
			header : false, // header 를 갖지 않는다.
			flex : 1,
			region : 'center',
			layout : 'border',
			items : [{
				xtype : 'panel',
				title : 'app.js',
				border : true,
				flex : 2,
				region : 'center'
			}, {
				xtype : 'panel',
				title : 'Servers',
				split : true,
				border : true,
				flex : 1,
				region : 'south'
			}]
		}]
	});
	 */


	/**
	 * < 8강 : 메시지 상자 다뤄보기>
	 *
	 * 1. Alert
	 * 2. Confirm
	 * 3. Toast
	 * 4. MessageBox
	 */
	/*
	// Alert
	Ext.Msg.alert("타이틀", "바디"); // static 싱글 속성이라 Ext.create 를 사용하지 않아도 사용할 수 있다.
	 */

	/*
	// Confirm
	Ext.Msg.confirm("타이틀", "바디", function(btn) {
		if ( btn === "yes" ) {
			Ext.Msg.alert("Yes !", "Yes !");
		} else {
			Ext.Msg.alert("No !", "No !");
		}
	});
	*/

	/*
	// Toast : 잠깐 내려왔다가 잠시 후 사라지는 창
	//  --> align 속성에는 6개가 있다. t, tr, tl, b, br, bl --> 상, 우상, 좌상, 하, 우하, 좌하
	Ext.toast("토스트창입니다.");
	Ext.toast({
		html : '토스트입니다.',
		align : 'br'
	});
	*/

	/*
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
	 */


	/**
	 * < 9강 : 윈도우 컴포넌트 다뤄보기 : 팝업, 모달, 윈도우 레이아웃>
	 *
	 *  - 윈도우 컴포넌트는 메시지박스나 Alert 과는 다르게 객체를 생성해주어야 한다. ( 싱글턴 구조가 아님 )
	 *  - autoShow : 자동으로 띄워주는지 여부
	 *  - modal : 이 창에 모달 속성을 주는지 여부 ( 나머지 뒷 배경들은 클릭하지 못하고 화면이 짙어짐. )
	 *  - resizable : 창의 크기를 사용자가 줄이고 늘릴 수 있게 하는 여부 ( Default : true )
	 *  - minWidth, minHeight, maxWidth, maxHeight : 지정한 크기까지만 줄이거나 늘릴 수 있음.
	 *  - closable : x 버튼 여부 ( Default : true )
	 *  - maximizable : 창 최대화, 원래대로 기능 부여 여부 ( Default : false )
	 */
	// let window = Ext.create("Ext.window.Window");
	// window.show();
	/*
	Ext.create("Ext.window.Window", {
		autoShow : true, // Default = false
		width : 300,
		height : 300,
		minWidth : 250,
		minHeight : 250,
		maxWidth : 500,
		maxHeight : 500,
		title : 'Window Title',
		modal : true,
		// resizable : false,
		items : [{
			xtype : 'button',
			text : '버튼'
		}]
	})
	 */
	/*
	Ext.create("Ext.panel.Panel", {
		border : true,
		width : 300,
		height : 300,
		renderTo : Ext.getBody(),
		items : [{
			xtype : 'button',
			text : '패널 버튼',
			// 버튼 누르면 윈도우 모달창 출력
			listeners : {
				click : function(btn) {
					let window = Ext.create("Ext.window.Window", {
						autoShow : true, // Default = false
						width : 300,
						height : 300,
						minWidth : 250,
						minHeight : 250,
						maxWidth : 500,
						maxHeight : 500,
						title : 'Window Title',
						modal : true,
						// resizable : false,
						items : [{
							xtype : 'button',
							text : '버튼'
						}]
					})
					window.show();
				}
			}
		}]
	})
	*/


	/**
	 * < 10강 : 탭 패널 알아보기 >
	 *
	 * - Ext.tab.Panel 을 사용하여 탭 버튼이 있는 패널을 만들 수 있다.
	 * - tabPosition 을 활용하여 패널 내에서 탭 버튼의 위치를 조정할 수 있다.
	 * 		- Default = top / bottom, left, right
	 *
	 */
	/*
	Ext.create("Ext.tab.Panel", {
		width : 500,
		height : 500,
		renderTo : Ext.getBody(),
		// tabPosition : 'right',
		items : [{
			xtype : 'panel',
			title : '탭1',
			items : [{
				xtype : 'button',
				text : '버튼1'
			}]
		},{
			xtype : 'panel',
			title : '탭2',
			items : [{
				xtype : 'button',
				text : '버튼2'
			}]
		},{
			xtype : 'panel',
			title : '탭3',
			items : [{
				xtype : 'button',
				text : '버튼3'
			}]
		},{
			xtype : 'panel',
			title : '탭4',
			items : [{
				xtype : 'button',
				text : '버튼4'
			}]
		},{
			xtype : 'panel',
			title : '탭5',
			items : [{
				xtype : 'button',
				text : '버튼5'
			}]
		}]
	})
	 */


	/**
	 * < 11강 : 폼 필드 알아보기 >
	 *
	 * HTML 에서 사용하는 text 나 password 같은 여러가지 폼 필드이다.
	 */
	/*
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
	*/


	/**
	 * < 12강 : 데이터 스토어 >
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
	/*
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
	 */

	/*
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
	*/

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
	/*
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
	 */


	/**
	 * < 13강 : Tree Panel >
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
	/*
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
	 */


	/**
	 * < 14강 : GridPanel + 페이징 및 버퍼스토어 적용하기 >
	 *
	 * - Server ( 강의에서는 jsp 활용 )
	 * 1. 기본적으로 "start"와 "limit" 라는 키를 이용하여 서버에 페이징 관련 값을 전달한다.
	 * ( MySQL/MariaDB 는 LIMIT 부분에 정의하면 되지만, 다른 DB는 별도 쿼리와 계산이 필요 )
	 *
	 * 2. 특정 리스트에 대한 전체카운트 쿼리 1개와 start, limit 로 특정 페이지만 출력한 리스트쿼리 1개
	 * 이렇게해서 2개의 값을 응답값 API 로 각각 넘겨주어야 한다.
	 *
	 * - Client ( ExtJS )
	 * 1. pageSize : 보여주고 싶은 갯수 ( default : 25개 )
	 * 2. bbar : bottom toolbar
	 * 		- pagingtoolbar : 페이징 툴바 선언
	 * 		- app.json 의 requires 부분에 "ux" 를 추가 --> 빌드 한 후,
	 * 		  ux 관련 플러그인을 사용할 수 있음.
	 * 		  - packages 폴더 안에 있는 것들은 여기에 등록하여 사용할 수 있음.
	 * 		  	 - ux도 packages 폴더 안에 들어있는 패키지임.
	 * 3. DataStore 에서 reader 의 config 속성 중, rootProperty 만을 이용했었지만,
	 *    페이징을 위해서는 totalProperty 라는 속성을 정의해주어야 한다.
	 *    안할 경우 default 로 "total" 이라는 key 로 List Count 를 찾는다.
	 *    ( 전체 카운트를 찾아서 계산하는 방법이기 때문에 )
	 *
	 *
	 * *** 버퍼스토어 ( Ext.data.BufferedStore )
	 * - 데이터 스토어와 동일하게 페이징처리가 가능하다.
	 * 그러나, 버퍼스토어는 그리드에서 스크롤을 이용한 페이징 처리를 하고자 할 때 사용한다.
	 * - 초기데이터 세트만 서버로부터 로드한 뒤, 스크롤을 이용하여 다음 데이터를 요구할 때 동적으로
	 *   추가 데이터를 자동 로드한다. 또한 사용자가 스크롤 할 때 버퍼스토어는 해당 화면에 보이는
	 *   데이터와 가까운 위치에 있는 데이터만을 메모리에 유지하며 데이터 세트를 효과적으로 관리한다.
	 * - 즉, 사용자는 데이터를 한 번에 로드한거처럼 보이지만 실제로는 스크롤에 따라 원하는 데이터만을
	 *   동적으로 가져온다고 보면 된다.
	 *
	 */

	/*
	// 하단 Bar 를 이용한 Paging
	Ext.create("Ext.panel.Panel", {
		width : 800,
		height : 500,
		renderTo : Ext.getBody(),
		layout : 'fit',
		items : [{
			xtype : 'grid',
			columns : [{
				text : '시',
				dataIndex : 'si',
				flex : 1
			}, {
				text : '군구',
				dataIndex : 'gungu',
				flex : 1
			}, {
				text : '동',
				dataIndex : 'dong',
				flex : 1
			}],
			store : {
				autoLoad : true,
				fields : ['si', 'gungu', 'dong'],
				pageSize : 5, // 몇 개씩 불러올 것인가.
				proxy : {
					type : 'ajax',
					url : "http://localhost:8080/paging.jsp",
					reader : {
						type : 'json',
						rootProperty : 'data',
						totalProperty : 'total'
					}
				}
			},
			// bottom toolbar
			bbar : {
				xtype : 'pagingtoolbar',
				// plugins : 'ux-slidingpager', // Paging 을 Sliding Bar로 할 수 있음.
				plugins : 'ux-progressbarpager', // 일반적인 Paging
				displayInfo : true
			}
		}]
	})
	 */

	/*
	// BufferedStore 를 이용한 Paging ( 세로로 휠 내리면서 페이징 )
	Ext.create("Ext.panel.Panel", {
		width : 800,
		height : 500,
		renderTo : Ext.getBody(),
		layout : 'fit',
		items : [{
			xtype : 'grid',
			columns : [{
				text : '시',
				dataIndex : 'si',
				flex : 1
			}, {
				text : '군구',
				dataIndex : 'gungu',
				flex : 1
			}, {
				text : '동',
				dataIndex : 'dong',
				flex : 1
			}],
			store : Ext.create("Ext.data.BufferedStore", {
				autoLoad : true,
				fields : ['si', 'gungu', 'dong'],
				proxy : {
					type : 'ajax',
					url : "http://localhost:8080/paging.jsp",
					reader : {
						type : 'json',
						rootProperty : 'data',
						totalProperty : 'total'
					}
				}
			})
		}]
	})
	*/


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
	/*
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
	*/


	/**
	 * < 16강 : 툴바종류, 리스너, renderer의 이해 >
	 *
	 * 1. 레코드란? record??
	 * 	- 각각의 row 한 줄 한 줄을 record 라고 정의한다.
	 * 	- 단, view 에서의 한 줄이 아니라, Data Store 기준으로의 한 줄을 record 라고 한다.
	 * 	  ( view 에서 사용자에게는 안보이는 값이 Data Store 에 있을수도 있다. )
	 *
	 * 2. 위치별 툴바 toolbar position
	 *  - tbar ( top-docked toolbar )
	 *  	- 그리드 상단에 위치하는 툴바
	 *  - lbar ( left-docked toolbar )
	 *  	- 그리드 좌측에 위치하는 툴바
	 *  - rbar ( right-docked toolbar )
	 *		- 그리드 우측에 위치하는 툴바
	 *  - bbar ( bottom-docked toolbar )
	 *		- 그리드 하단에 위치하는 툴바
	 *  - fbar ( footer toolbar )
	 *  	- bbar와 동일한 위치에 존재하는 툴바이나, footer UI가 적용됨
	 *
	 * *** 꼭 그리드에만 존재하는 속성은 아니지만, 대부분 그리드에 사용된다.
	 * 위의 속성값들은 Object 가 될 수도 있고, Array 형식이 될 수도 있는데,
	 * ( Object = tbar : { } / Array = tbar : [{ }] )
	 * Object 형식이면 하나의 컴포넌트를 툴바내 가득채우고,
	 * Array 를 활용하면 여러개의 컴포넌트를 툴바에 적용시킬 수 있다.
	 *
	 * ***
	 *
	 * 3. 툴바에 버튼 + 콤보 추가
	 *
	 * 4. 버튼,콤보,그리드 이벤트리스너 ( event listeners ) 사용방법
	 *
	 * 5. 그리드 랜더러 ( grid renderer )
	 * 	- 날짜 포멧이나, 숫자 세자리마다 콤마를 찍는다거나 할 때 사용한다.
	 * 	- Data Store 의 실제 값은 바뀌지 않지만 view 로 보이는 값을 수정한 상태로 return 할 수 있다.
	 * 	- 데코레이터 패턴과 유사하다. ( 디자인 패턴 )
	 *
	 */
	/*
	Ext.create("Ext.panel.Panel", {
		width : 800,
		height : 500,
		renderTo : Ext.getBody(),
		layout : 'fit',
		items : [{
			xtype : 'grid',
			listeners : [{
				// 셀클릭
				cellclick : function ( obj, td, cellIndex, record, tr, rowIndex, e, eOpts ) {
					console.log(record.getData());
					console.log(record.get("dong"));
				},
				// 우클릭
				itemcontextmenu : function ( obj, record, item, index, e, eOpts ) {
					console.log(record.getData());
					console.log(record.get("dong"));
				}
			}],
			plugins : 'cellediting',
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
				},
				renderer : function(value) {
					console.log(value);
					return value + "Hello"; // 실제 DataStore 의 값은 안바뀌지만, 화면에 표시되는 view 만 수정해주는 것.
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
				autoSync : true,
				fields : ['id', 'si', 'gungu', 'dong'],
				pageSize : 10,
				proxy : {
					type : 'ajax',
					api : {
						read : "http://localhost:8080/paging.jsp",
						update : "http://localhost:8080/update.jsp"
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
						encode : true
					}
				}
			},
			// 5 toolbar position
			tbar : [{
				xtype : 'button',
				text : '추가',
				listeners : [{
					click : function(btn) {
						alert ("버튼 클릭");
					}
				}]
				// handler : function(btn) {
				// 	alert("버튼 클릭");
				// }
			},{
				xtype : 'combo',
				listeners : [{
					change : function ( obj, newValue, oldValue, eOpts ) {
						// console.log ( newValue + ',' + oldValue );
					}
				}],
				editable : false,
				value : '값1',
				displayField : 'key',
				valueField : 'value',
				queryMode : 'local',
				store : {
					fields : ['key', 'value'],
					data : [{
						key : '선택1',
						value : '값1'
					},{
						key : '선택2',
						value : '값2'
					},{
						key : '선택3',
						value : '값3'
					}]
				}
			}],
			bbar : [{
				xtype : 'button',
				text : 'bbar button'
			}],
			lbar : [{
				xtype : 'button',
				text : 'lbar button'
			}],
			rbar : [{
				xtype : 'button',
				text : 'rbar button'
			}],
			fbar : [{
				xtype : 'button',
				text : 'fbar button'
			}]
		}]
	})
	*/


	/**
	 * < 17강 : Grid CRUD 한 번에 끝내기 >
	 *
	 * ***
	 * 기본적으로는 let store = btn.up("grid").getStore(); 이렇게 grid 로 찾으면,
	 * 해당 버튼이 속한 그룹중 가장 가까운 grid 를 찾기 때문에 따로 ID 명시를 안해줘도 된다.
	 * 그러나 A 라는 grid 에서 버튼을 누르는게 다른 특정 grid 에서 반응을 보여야 한다면,
	 * ID를 주고 Ext.getCmp('myGridId').getStore() 이런식으로 접근하여야 한다.
	 */
	/*
	Ext.create("Ext.panel.Panel",{
		width : 500,
		height : 500,
		renderTo : Ext.getBody(),
		layout : 'fit',
		items : [{
			xtype : 'grid',
			plugins : 'cellediting',
			columns : [{
				text : '텍스트1',
				dataIndex : 'text1',
				editor : {
					xtype : 'textfield'
				}
			},{
				text : '텍스트2',
				dataIndex : 'text2',
				editor : {
					xtype : 'textfield'
				}
			},{
				text : '텍스트3',
				dataIndex : 'text3',
				editor : {
					xtype : 'textfield'
				}
			}],
			store : {
				autoLoad : true,
				fields : ['id', 'text1', 'text2', 'text3'],
				proxy : {
					type : 'ajax',
					api : {
						create : "http://localhost:8080/crud/insert.jsp",
						read : "http://localhost:8080/crud/select.jsp",
						update : "http://localhost:8080/crud/update.jsp",
						destroy : "http://localhost:8080/crud/delete.jsp"
					},
					reader : {
						type : 'json',
						rootProperty : 'data',
						totalProperty : 'total',
					},
					writer : {
						type : 'json',
						rootProperty : 'data',
						writeAllFields : true,
						encode : true
					}
				}
			},
			tbar : [{
				xtype : 'button',
				text : '등록',
				handler : function(btn) {
					// 1. store 찾기
					// ExtJS - up(컴포넌트명 or itemId) / down ( up 은 자기기준 상위, down 은 자기 기준 하위 )
					let store = btn.up("grid").getStore();
					let newRec = {
						text1 : '',
						text2 : '',
						text3 : ''
					}
					// store.insert(0, newRec);
					store.add(newRec);
				}
			},{
				xtype : 'button',
				text : '삭제',
				handler : function(btn) {
					let store = btn.up("grid").getStore();
					// store.load(); AutoLoad 가 false 인 경우 사용
					store.sync({ // 이건 update 까지는 되는데, sync 후 재조회를 해야 함. 그래서 callback function 을 해야함.
						callback : function() {
							store.reload(); // 재조회 하는 메서드
						}
					});
				}
			},{
				xtype : 'button',
				text : '적용'
			}],
			bbar : {
				xtype : 'pagingtoolbar',
				displayInfo : true
			}
		}]
	})
	 */


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
	/*
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
	*/

	/*
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
	 */


	/**
	 * < 19강 : 세로/가로 막대 차트 그래프 만들기 >
	 *
	 * chart 를 사용하려면 app.json 에서 requires 부분에서 "charts" 를 추가해주고, ReBuild 해주어야 한다.
	 *
	 * 차트에는 크게 polar / cartesian 이렇게 2가지 종류가 있다.
	 *
	 * cartesian : x y로 만들 수 있는 차트 그래프 종류들 ( 예를들면 선형 그래프, 막대 그래프 )
	 * polar : x y 좌표 없이, 범위화 하여 만드는 차트 그래프 ( 예를들면 원형 그래프 )
	 *
	 * 차트를 만들 떄는 store 속성과, axes 속성, 그리고 series 속성이 꼭 붙어다닌다.
	 *  - store 는 말그대로 DataStore 이고,
	 *  - axes 속성은 x, y 에 대한 설명이 들어있다. 예를들어 점수를 뜻하는 y 는 왼쪽에 붙어야하고, (점) 단위이다.
	 *    x 는 카테고리를 뜻하며 하단에 있다.
	 *  - series 는 어떤 종류의 차트를 그릴 것인가를 정하고, 그 세부적인 속성을 다룰 수 있다.
	 *    ( ex. 막대그래프, 선형그래프 )
	 *
	 */
	/*
	// cartesian
	Ext.create("Ext.panel.Panel", {
		width : 500,
		height : 500,
		renderTo : Ext.getBody(),
		layout : 'fit',
		items : [{
			xtype : 'cartesian',
			flipXY : true, // 기본은 세로 그래프인데 이걸 true 로 해주고, 그래프 x y 의 position 을 바꿔주면 가로 그래프가 된다.
			innerPadding : 50, // 내용 크기 줄이기
			insetPadding : 50, // 그래프 전체적인 크기 줄이기
			// 과목별 성적
			store : {
				fields : ['score', 'subject'],
				data : [{
					subject : '국어',
					score : 100
				},{
					subject : '영어',
					score : 82
				},{
					subject : '수학',
					score : 93
				},{
					subject : '사회',
					score : 97
				},{
					subject : '과학',
					score : 88
				}]
			},
			axes : [{
				type : 'numeric', // 숫자
				position : 'bottom',
				//position : 'left',
				title : '(점)'
			},{
				type : 'category',
				position : 'left',
				//position : 'bottom'
			}],
			series : {
				type : 'bar',
				xField : 'subject',
				yField : 'score',
				label : {
					field : 'score',
					display : 'insideEnd'
				}
			}
		}]
	})
	 */

	/**
	 * < 누적 막대 그래프 만들기 >
	 *
	 * - 다중으로 누적 막대 그래프를 만들 때에는 series 안에 있는 x 혹은 y field 에 배열을 주면 된다.
	 */
	/*
	// cartesian
	Ext.create("Ext.panel.Panel", {
		width : 500,
		height : 500,
		renderTo : Ext.getBody(),
		layout : 'fit',
		bbar : [{
			xtype : 'button',
			text : '그룹버튼',
			handler : function(btn) {
				let chart = btn.up("panel").down("cartesian");
				chart.getSeries()[0].setStacked(false); // stacked 속성을 비활성화 한다.
				chart.redraw(); // 차트를 다시 그린다.
			}
		},{
			xtype : 'button',
			text : '스택버튼',
			handler : function(btn) {
				let chart = btn.up("panel").down("cartesian");
				chart.getSeries()[0].setStacked(true); // stacked 속성을 활성화 한다.
				chart.redraw(); // 차트를 다시 그린다.
			}
		}],
		items : [{
			xtype : 'cartesian',
			// 과목별 성적
			store : {
				fields : ['age', 'vote1', 'vote2'],
				data : [{
					age : '20대',
					vote1 : 65.8,
					vote2 : 33.7
				},{
					age : '30대',
					vote1 : 62.5,
					vote2 : 37.1
				},{
					age : '40대',
					vote1 : 77.7,
					vote2 : 22.2
				},{
					age : '50대',
					vote1 : 59.7,
					vote2 : 40.1
				},{
					age : '60대',
					vote1 : 27.5,
					vote2 : 72.3
				}]
			},
			// type 들에 3d 를 주면 3D 그래프가 된다.
			axes : [{
				type : 'numeric3d', // 숫자
				//position : 'bottom',
				position : 'left',
				title : '(%)'
			},{
				type : 'category3d',
				//position : 'left',
				position : 'bottom'
			}],
			series : {
				type : 'bar3d',
				stacked : false, // Default 는 true 이다. false 를 하면 분리된 그래프가 되고, true 를 하면 Stack 형 그래프가 된다.
				xField : 'age',
				yField : ['vote1', 'vote2'],
				label : {
					field : ['vote1', 'vote2'],
					display : 'insideEnd'
				}
			}
		}]
	})
	 */

	/**
	 * < 선형 차트 만들기 >
	 *
	 * - 다중 선형 그래프를 만들려면, series 를 배열로 해서 다중으로 주면 된다.
	 */
	/*
	Ext.create("Ext.panel.Panel",{
		width : 700,
		height : 500,
		renderTo : Ext.getBody(),
		layout : 'fit',
		items : [{
			xtype : 'cartesian',
			innerPadding : 30,
			store : {
				fields : ['month', 'weight'],
				data : [{
					month : '1월',
					weight : 90
				},{
					month : '2월',
					weight : 86
				},{
					month : '3월',
					weight : 82.3
				},{
					month : '4월',
					weight : 78.8
				},{
					month : '5월',
					weight : 80.2
				}]
			},
			axes : [{
				type : 'numeric',
				minimum : 0,
				maximum : 100,
				position : 'left',
				title : '(KG)'
			},{
				type : 'category',
				position : 'bottom'
			}],
			series : {
				type : 'line',
				smooth : true, // 챠트 곡선을 부드럽게 해주는 속성
				marker : {
					radius : 3
				},
				xField : 'month',
				yField : 'weight',
				label : {
					field : 'weight',
					display : 'insideEnd'
				}
			}
		}]
	})
	*/
	/*
	Ext.create("Ext.panel.Panel", {
		width : 500,
		height : 500,
		renderTo : Ext.getBody(),
		layout : 'fit',
		items : [{
			xtype : 'cartesian',
			innerPadding : 30,
			// 과목별 성적
			store : {
				fields : ['age', 'vote1', 'vote2'],
				data : [{
					age : '20대',
					vote1 : 65.8,
					vote2 : 33.7
				},{
					age : '30대',
					vote1 : 62.5,
					vote2 : 37.1
				},{
					age : '40대',
					vote1 : 77.7,
					vote2 : 22.2
				},{
					age : '50대',
					vote1 : 59.7,
					vote2 : 40.1
				},{
					age : '60대',
					vote1 : 27.5,
					vote2 : 72.3
				}]
			},
			// type 들에 3d 를 주면 3D 그래프가 된다.
			axes : [{
				type : 'numeric3d', // 숫자
				//position : 'bottom',
				position : 'left',
				minimum : 0,
				maximum : 100,
				title : '(%)'
			},{
				type : 'category3d',
				//position : 'left',
				position : 'bottom'
			}],
			series : [{
				type : 'line',
				smooth : true,
				marker : {
					radius : 3
				},
				xField : 'age',
				yField : 'vote1',
				label : {
					field : 'vote1',
					display : 'insideEnd'
				}
			}, {
				type: 'line',
				smooth : true,
				marker : {
					radius : 3
				},
				xField: 'age',
				yField: 'vote2',
				label: {
					field: 'vote2',
					display: 'insideEnd'
				}
			}]
		}]
	})
	*/

	/**
	 * < 영역 차트 만들기 >
	 *
	 * 영역이 겹치면, 데이터가 더 많은 차트가 위로 올라온다.
	 */
	/*
	Ext.create("Ext.panel.Panel", {
		width : 500,
		height : 500,
		renderTo : Ext.getBody(),
		layout : 'fit',
		items : [{
			xtype : 'cartesian',
			legend : { // 범례를 지정해 줄 수 있다. ( series 안에 title 이랑 세트이다. )
				docked : 'bottom'
			},
			innerPadding : 30,
			// 과목별 성적
			store : {
				fields : ['year', 'seoul', 'busan', 'gyunggi', 'jeju'],
				data : [{
					year : 2014,
					seoul : 10143164,
					busan : 3526648,
					gyunggi : 12245960,
					jeju : 594623
				},{
					year : 2015,
					seoul : 10155157,
					busan : 3526688,
					gyunggi : 12777960,
					jeju : 594893
				},{
					year : 2016,
					seoul : 10173764,
					busan : 3526692,
					gyunggi : 12298960,
					jeju : 594627
				},{
					year : 2017,
					seoul : 10987164,
					busan : 35298948,
					gyunggi : 12995960,
					jeju : 594783
				}]
			},
			// type 들에 3d 를 주면 3D 그래프가 된다.
			axes : [{
				type : 'numeric3d', // 숫자
				//position : 'bottom',
				position : 'left',
				minimum : 0,
				title : '지역별 인구수'
			},{
				type : 'category3d',
				//position : 'left',
				position : 'bottom'
			}],
			series : [{
				type : 'area',
				title : '서울', // 이거로 범례의 타이틀을 지정해줄 수 있다.
				style : { // 이거로 css 를 넣을 수 있다.
					opacity : 0.5 // 이거로 투명도를 줄일 수 있다. ( Default 는 1이다. )
				},
				marker : { // 동그랗게 강조할 수 있다.
					radius : 3
				},
				highlightCfg : { // marker 로 표시한 부분에 마우스를 가지고 가면 반응한다.
					scaling : 1.5
				},
				tooltip : {
					trackMouse : true,
					renderer : function(tooltip, record) { // 마우스를 가져다 대면, 해당 정보 + 데코레이트 정보가 나온다.
						tooltip.setHtml(record.get("seoul") + "명");
					}
				},
				xField : 'year',
				yField : 'seoul',
			},{
				type : 'area',
				title : '부산',
				style : {
					opacity : 0.5
				},
				marker : {
					radius : 3
				},
				highlightCfg : {
					scaling : 1.5
				},
				tooltip : {
					trackMouse : true,
					renderer : function(tooltip, record) {
						tooltip.setHtml(record.get("busan") + "명");
					}
				},
				xField : 'year',
				yField : 'busan',
			},{
				type : 'area',
				title : '경기',
				style : {
					opacity : 0.5
				},
				marker : {
					radius : 3
				},
				highlightCfg : {
					scaling : 1.5
				},
				tooltip : {
					trackMouse : true,
					renderer : function(tooltip, record) {
						tooltip.setHtml(record.get("gyunggi") + "명");
					}
				},
				xField : 'year',
				yField : 'gyunggi',
			},{
				type : 'area',
				title : '제주',
				style : {
					opacity : 0.5
				},
				marker : {
					radius : 3
				},
				highlightCfg : {
					scaling : 1.5
				},
				tooltip : {
					trackMouse : true,
					renderer : function(tooltip, record) {
						tooltip.setHtml(record.get("jeju") + "명");
					}
				},
				xField : 'year',
				yField : 'jeju',
			}]
		}]
	})
	 */


	/**
	 * < 분산/분포 차트 만들기 >
	 *
	 * 어떤 데이터들이 밀집 되어있는지를 확인하는데에 유용함.
	 */
	/*
	Ext.create("Ext.panel.Panel",{
		width : 500,
		height : 500,
		renderTo : Ext.getBody(),
		layout : 'fit',
		items : [{
			xtype : 'cartesian',
			innerPadding : 50,
			store : {
				fields : ['title','count','time'],
				data : [{
					title : 'ExtJS 6 로 만들어본 WebOS',
					time : 623,
					count : 268
				},{
					title : 'ExtJS 6 란? ',
					time : 584,
					count : 124
				},{
					title : 'ExtJS 6 문법 및 레이아웃 이해(1)',
					time : 582,
					count : 65
				},{
					title : 'ExtJS 6 GPL 다운로드 및 환경설정',
					time : 510,
					count : 79
				},{
					title : 'ExtJS 6 테마변경 및 onLoad 이해',
					time : 493,
					count : 72
				},{
					title : 'ExtJS 6 버튼종류 알아보기',
					time : 478,
					count : 42
				},{
					title : 'ExtJS 6 API Document 보는법',
					time : 420,
					count : 43
				},{
					title : 'ExtJS 6 추가 레이아웃 알아보기',
					time : 345,
					count : 51
				},{
					title : 'ExtJS 6 추가 레이아웃 알아보기(2)',
					time : 336,
					count : 45
				},{
					title : 'ExtJS 6 메시지상자 다뤄보기',
					time : 311,
					count : 28
				},{
					title : 'ExtJS 6 그리드 등록,수정,삭제,조회 한방에 끝내기',
					time : 292,
					count : 53
				},{
					title : 'ExtJS 6 그리드 페이징 및 버퍼스토어 적용하기',
					time : 283,
					count : 68
				},{
					title : 'ExtJS 6 트리패널 + 트리스토어 알아보기',
					time : 254,
					count : 35
				},{
					title : 'ExtJS 6 폼필드 알아보기',
					time : 249,
					count : 40
				},{
					title : 'ExtJS 6 윈도우 컴포넌트 다뤄보기',
					time : 212,
					count : 28
				},{
					title : 'ExtJS 6 Ajax 클래스 사용법 이해',
					time : 197,
					count : 21
				},{
					title : 'ExtJS 6 그리드 에디팅 플러그인 적용하기',
					time : 191,
					count : 55
				},{
					title : 'ExtJS 6 그리드패널을 이용한 데이터스토어 이해',
					time : 191,
					count : 60
				},{
					title : 'ExtJS 6 툴바종류, 리스너, renderer 이해',
					time : 170,
					count : 34
				},{
					title : 'ExtJS 6 탭패널 알아보기',
					time : 72,
					count : 27
				}]
			},
			axes : [{
				type : 'numeric',
				position : 'bottom',
				fields : 'count',
				minimum : 0,
				maximum : 300,
				majorTickSteps : 10, // 해당 축의 간격 ( 여기서는 아래 축 )
				grid : true
			},{
				type : 'numeric',
				position : 'left',
				fields : 'time',
				minimum : 0,
				maximum : 650,
				majorTickSteps : 10,
				grid : true
			}],
			series : {
				type : 'scatter',
				xField : 'count',
				yField : 'time',
				highlightCfg : {
					scale : 2
				},
				tooltip : {
					trackMouse : true, // 마우스를 갖다 대는 거에 대한 이벤트
					renderer : function(tooltip,record) {
						tooltip.setHtml(record.get("title")+"<br/>조회수:"+record.get("count")+"<br/>시청시간(분):"+record.get("time"));
					}
				}
			}
		}]
	})
	*/


	/**
	 * < 원형 그래프 이해 >
	 *
	 * polar 그래프는 axes 가 필요없다. ( x y 축이 필요 없기 때문에. )
	 */
	/*
	// polar 차트
	Ext.create("Ext.panel.Panel",{
		width : 500,
		height : 500,
		renderTo : Ext.getBody(),
		layout : 'fit',
		items : [{
			xtype : 'polar',
			innerPadding : 50,
			store : {
				fields : ['title','count','time'],
				data : [{
					title : 'ExtJS 6 로 만들어본 WebOS',
					time : 623
				},{
					title : 'ExtJS 6 란? ',
					time : 584
				},{
					title : 'ExtJS 6 문법 및 레이아웃 이해(1)',
					time : 582
				},{
					title : 'ExtJS 6 GPL 다운로드 및 환경설정',
					time : 510
				},{
					title : 'ExtJS 6 테마변경 및 onLoad 이해',
					time : 493
				},{
					title : '기타',
					time : 5106
				}]
			},
			// 대표적인 파이 차트
			series : {
				type : 'pie3d',
				// type : 'pie',
				donut : 30, // 중간에 도넛처럼 원이 생김
				highlight : { // 하이라이트를 생성
					margin : 30 // 마우스를 갖다대면 margin 만큼 공간이 분리됨.
				},
				angleField : 'time', // Main 으로 잡으려는 필드
				label : {
					field : 'title'
				},
				tooltip : {
					trackMouse : true,
					renderer : function(object, record) {
						object.setHtml(record.get("title")+"<br/>지속시간:"+record.get("time"))
					}
				}
			}
		}]
	})
	*/


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
	/*
	Ext.create("Ext.panel.Panel",{
		width : 500,
		height : 500,
		renderTo : Ext.getBody(),
		layout : 'fit',
		items : [{
			xtype : 'sampleGrid', // xtype 이름을 맞춰주어야 한다.
		}]
	})
	 */


	/**
	 * < 21강 : 컴포넌트 변경의 이해 >
	 */
	/*
	Ext.create("Ext.container.Viewport",{
		layout : 'border',
		items : [{
			xtype : 'panel',
			title : '컴포넌트 변경',
			region : 'north',
			border : true,
			items : [{
				xtype : 'button',
				text : '그리드',
				handler : function (btn) {
					console.log("존재 여부 : " + btn.up("viewport").down("component[region=center]"));
					let page = btn.up("viewport").down("component[region=center]");
					page.removeAll(true); // 해당 페이지의 자식 컴포넌트들을 다 지워 줌.
					page.add(Ext.apply({
						xtype : 'componentGridSample'
					}));
				}
			},{
				xtype : 'button',
				text : '버튼',
				handler : function (btn) {
					let page = btn.up("viewport").down("component[region=center]");
					page.removeAll(true); // 해당 페이지의 자식 컴포넌트들을 다 지워 줌.
					page.add(Ext.apply({
						xtype : 'componentButtonSample'
					}));
				}
			},{
				xtype : 'button',
				text : 'HTML',
				handler : function (btn) {
					let page = btn.up("viewport").down("component[region=center]");
					page.removeAll(true); // 해당 페이지의 자식 컴포넌트들을 다 지워 줌.
					page.add(Ext.apply({
						xtype : 'componentHtmlSample'
					}));
				}
			}]
		},{
			xtype : 'panel',
			width : 200,
			region : 'west'
		},{
			xtype : 'panel',
			flex : 1,
			region : 'center',
			border : true
		}]
	})
	*/


	/**
	 * < 22강 : Eclipse Benchmarking >
	 */
	/*
	Ext.create("Ext.container.Viewport",{
		layout : 'border',
		items : [{
			xtype : 'panel',
			region : 'north',
			title : 'Java EE - extjs/app.ks - Eclipse',
			border : true,
			items : [{
				xtype : 'toolbar',
				items : [{
					text : 'File'
				},{
					text : 'Edit'
				},{
					text : 'Source'
				},{
					text : 'Refactor'
				},{
					text : 'Navigate'
				},{
					text : 'Search'
				},{
					text : 'Project'
				},{
					text : 'Run'
				},{
					text : 'Window'
				},{
					text : 'Help'
				}]
			},{
				xtype : 'toolbar',
				items : [{
					iconCls : 'x-fa fa-file'
				},{
					iconCls : 'x-fa fa-floppy-o'
				},{
					iconCls : 'x-fa fa-play'
				},{
					iconCls : 'x-fa fa-pause'
				},{
					iconCls : 'x-fa fa-stop'
				}, '->',{ // 맨 끝으로 이동하려면 이렇게 해야 함.
					xtype : 'textfield',
					emptyText : 'Quick Access' // 값이 비어있을 경우 안에 어떻게 표출 해 줄 것인가.
				}, {
					iconCls : 'x-fa fa-table'
				}]
			}]
		},{
			xtype : 'panel',
			region : 'west',
			title : "Project Explorer",
			flex : 1,
			border : true,
			collapsible : true,
			split : true,
			items : [{
				xtype : 'treepanel',
				rootVisible : false, // root 라는 최상단을 보여줄 것인가 ? ( Default : true )
				useArrows : true, // + 대신 -> 를 사용할 것인가?
				store : {
					root : {
						text : 'root',
						expanded : true,
						children : [{
							text : 'extjs',
							expanded : false
						},{
							text : 'jQuery',
							expanded : false
						},{
							text : 'server',
							expanded : false
						},{
							text : 'Servers',
							expanded : false
						}]
					}
				}
			}]
		},{
			xtype : 'panel',
			region : 'center',
			flex : 4,
			border : true,
			layout : 'border',
			items : [{
				xtype : 'tabpanel',
				flex : 3,
				border : true,
				region : 'center',
				items : [{
					xtype : 'panel',
					title : 'app.js',
					layout : 'fit',
					items : [{
						xtype : 'textarea'
					}]
				}]
			},{
				xtype : 'tabpanel',
				flex : 1,
				border : true,
				region : 'south',
				items : [{
					xtype : 'panel',
					title : 'Servers'
				},{
					xtype : 'panel',
					title : 'Console'
				},{
					xtype : 'panel',
					title : 'Progress'
				}]
			}]
		}]
	})
	*/


})