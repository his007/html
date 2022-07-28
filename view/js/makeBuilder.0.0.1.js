//object분해 시
print_r = function( tmpObj ){

    var node=document.createElement("div");
    var textnode= null;
    
    node.appendChild( document.createElement("br") );
    
    if(typeof tmpObj == "object" ){			
        for( var idx in tmpObj ){
            textnode = document.createTextNode( idx + " : "+ tmpObj[idx] );
            node.appendChild(textnode);
            node.appendChild( document.createElement("br") );
        }
    }else{
        textnode = document.createTextNode( " String : "+ tmpObj );
        node.appendChild(textnode);
        node.appendChild( document.createElement("br") );
    }
    
    node.appendChild( document.createElement("br") );
    
    document.body.appendChild(node);
    textnode= "";

}//end print_r   


//make made
var makeBuilder = class makeBuilder {

    constructor( options ) {

        var defaults={ 
                        version : ''  
                        ,
                        target : ''
                        ,
                        edit   : false                    
                    };	
                    
        this.options = this.clone( defaults , options );
        
        this.options._loadingID    ="loading";
        this.options.editClassName = "writerArea";

        this.init();        
    }

    clone( obj , target ) {
        if (obj === null || typeof(obj) !== 'object')  return obj;

        var copy = obj.constructor();	  

        for (var attr in obj) {
            if (target.hasOwnProperty(attr)) copy[attr] = target[attr];
            else copy[attr] = obj[attr];		
        }

    return copy;
    }

    POST( url , data , func ){

        fetch( url , {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
                },
                body: data
            }).then(r => r.text()).then(result => {
    
            func(result);

        });

    }

    sample( editable = false ){

        this.options.edit = editable;

        this.options.targetObj.innerHTML = "";
        this.options.targetObj.insertAdjacentHTML("afterbegin", 
            this.addHtml('pop') + 
            this.addHtml('top_menu') + 
            this.addHtml('fullsize_banner') + 
            this.addHtml('section_page_type_001') +
            this.addHtml('section_page_type_002') +
            this.addHtml('section_page_type_003') +
            this.addHtml('section_page_type_004') +
            this.addHtml('footer')
        )
    }

    init(){	
		
		this.options.targetObj = document.querySelector(this.options.target);

		//check target object
		if( typeof(this.options.targetObj) != "object" ){
			console.log("fail - makeBuilder");
			return;
		}

        console.log(`makeBuilder ${this.options.version}`)
        
		//load loading
		var _loadingHtml =`<div id='${this.options._loadingID}'>수정 기능 설정중...</div>`

        if(this.options.edit)  _loadingHtml +=`<div class="editerMode" id="finished">완료</div>`
        else                   _loadingHtml +=`<div class="editerMode" id="update">수정</div>`

		this.options.targetObj.insertAdjacentHTML("beforebegin", _loadingHtml )

		//loading start
		this.loadingStart();

        //sample
        this.sample(this.options.edit);

        //loading end
        this.loadingEnd();


		//makeBuilder
		document.addEventListener("mouseover", event => {				

		});

		document.addEventListener("mouseout", event => {	

		});

		document.addEventListener("change", event => {

		});

		window.addEventListener('resize', event => {			

		});			

		document.addEventListener("mousedown", event => {	
		
		});

		document.addEventListener("click", event => {	            

            if( event.target && event.target.closest('.editerMode') ){                 
                if( event.target.closest('#update') ){
                    
                }else if( event.target.closest('#finished') ){
                   
                }
            }
	
		});	

	}	

    loadingStart(){
        document.getElementById(this.options._loadingID).style.display = "flex";
    }

    loadingEnd(){
        var _this = this;
        setTimeout(function() {
            document.getElementById(_this.options._loadingID).style.display = "none";
        }, 300);
    }

    addHtml( type = "" ){

        var _html = ""

        if( type == "pop" ){

            _html =`<div id="popupGo" class="send_color {{writerArea}}">무료상담<span>신청하기</span></div>`

        }else if( type == "top_menu" ){

            _html =`<header id="hearder_style_001">
                        <section id="wrap">
                            <section id="fixed">
                                <article id="logoArea" class='{{writerArea}}'>메인 타이틀</article>    
                                <article id="menuArea" class='{{writerArea}}'>
                                    <span id="#page01">메뉴01 영역</span>
                                    <span id="#page02">메뉴02 영역</span>
                                    <span id="#page03">메뉴03 영역</span>
                                    <span id="#page04">메뉴04 영역</span>
                                </article>
                            </section>
                        </section>
                    </header>`

        }else if( type == "fullsize_banner" ){

            _html =`<section id="background_fullsize_image_style_001">
                        <article class="{{writerArea}}">
                            <h2 class="trans1-up">상단 영역</h2>
                            <h1 class="trans2-up">메인 메시지 영역</h1>
                            <h3 class="trans3-up">하단 영역 / 하단 영역</h3>
                        </article>
                    </section>`

        }else if( type == "section_page_type_001" ){

            _html =`<section id="page01" class="title_massage_style_001">
                        <article class="{{writerArea}}">
                            <section id="titleArea">
                                <u class="trans1-right">Info</u>
                                <span class="trans2-right"><p>메뉴01 영역</p><p>추가영역</p></span>
                            </section>
                
                            <section class="trans1-left" id="msgArea">
                                메시지
                                <br>
                                메시지                               
                            </section>
                        </article>
                    </section>`

        }else if( type == "section_page_type_002" ){

            _html =`<section id="page02" class="title_massage_style_001" style="background-color:#e3e3e3;">
                        <article class="{{writerArea}}">
                            <section id="titleArea">
                                <u class="trans1-right">Prospect</u>
                                <span class="trans2-right">메뉴02 영역</span>
                            </section>
                
                            <section id="msgArea" class="bock_xy trans1-left">
                                <div class="box">
                                    <h1>01</h1>
                                    <span>메시지 메시지 메시지 메시지 메시지 메시지 메시지 메시지 메시지 메시지 시지 메시지 메시지 메시지 메시지 메시지 메시지 메시지 메시지 메시지 시지 메시지 메시지 메시지 메시지 메시지 메시지 메시지 메시지 메시지</span>
                                    <div id="iconBtn"><img src="https://img.icons8.com/dotty/70/feedback.png"></div>
                                </div>
                                <div class="box">
                                    <h1>02</h1>
                                    <span>메시지 메시지 메시지</span>
                                    <div id="iconBtn"><img src="https://img.icons8.com/dotty/70/feedback.png"></div>
                                </div>
                                <div class="box">
                                    <h1>03</h1>
                                    <span>메시지 메시지 메시지 메시지 메시지 메시지 메시지 메시지 메시지 메시지</span>
                                    <div id="iconBtn"><img src="https://img.icons8.com/dotty/70/feedback.png"></div>
                                </div>
                            </section>
                        </article>
                    </section>`

        }else if( type == "section_page_type_003" ){

            _html =` <section id="page03" class="title_massage_style_001" style="background-color:#89bde7;">
                        <article class="{{writerArea}}">
                            <section id="titleArea">
                                <u class="trans1-right ">Free support</u>
                                <span class="trans2-right ">메뉴03 지원사항</span>
                            </section>
                
                            <section id="msgArea" class="bock_horizontal trans1-left ">
                                <div class="box">
                                    <h1>01</h1>
                                    <span>메시지 메시지 메시지</span>
                                    <div id="iconBtn"><img src="https://img.icons8.com/dotty/70/feedback.png"></div>
                                </div>
                                <div class="box">
                                    <h1>02</h1>
                                    <span>메시지 메시지 메시지</span>
                                    <div id="iconBtn"><img src="https://img.icons8.com/dotty/70/feedback.png"></div>
                                </div>
                                <div class="box">
                                    <h1>03</h1>
                                    <span>메시지 메시지 메시지 메시지 메시지 </span>
                                    <div id="iconBtn"><img src="https://img.icons8.com/dotty/70/feedback.png"></div>
                                </div>
                            </section>
                        </article>
                    </section>`

        }else if( type == "section_page_type_004" ){

            _html =`<section id="page04" class="title_massage_style_001" style="background-color: #d9d9d9;" >
                        <article class="{{writerArea}}">
                            <section id="titleArea">
                                <u class="trans1-right">Free counseling</u>
                                <span class="trans2-right"><p>메뉴04</p><p>지금 신청하세요!</p></span>
                            </section>
                
                            <section id="msgArea" class="bock_form trans1-left">
                                <div class="box inputArea">
                                    <label for="target_A"><span>이름</span></label>
                                    <input type="text" id="target_A">
                                </div>
                                <div class="box inputArea">
                                    <label for="target_B"><span>연락처</span></label>
                                    <input type="text" id="target_B">
                                </div>
                
                                <div class="box buttonArea split_3">
                                    인증번호 요청
                                </div>
                
                                <div class="box inputArea split_7">
                                    <label for="target_C"><span>인증번호</span></label>
                                    <input type="text" id="target_C">
                                </div>
                            
                                <div class="box inputArea">
                                    <label for="target_D"><span>문의내용</span></label>
                                    <textarea type="text" id="target_D"></textarea>
                                </div>
                
                                <div class="box split_3 send_color">
                                    <label class="checkboxArea" for="target_Z"><input type="checkbox" id="target_Z"> 개인정보취급방침 동의</label>
                                </div>
                
                                <div class="box split_7 alink">
                                    <a href="">개인정보취급방침</a>
                                </div>                
                
                                <button id="submitBtn" class="send_color" type="button">무료상담 신청</button>
                            </section>
                        </article>
                    </section>`

        }else if( type == "footer" ){

            _html =`<footer>
                        <article class="splitArea {{writerArea}}">

                            <div class="split_5">
                                <p><b>[개인정보 수집 및 이용안내]</b></p>
                                <p>개인정보 수집주체: ㈜tmp</p>
                                <p>개인정보 수집항목: 이름, 연락처, 인증번호, 나이, 문의내용 등</p>
                                <p>개인정보 수집, 이용목적: 상담안내 및 서비스 안내 (전화, 문자)</p>
                                <p>개인정보 보유,이용기간: 수집일로부터 3년 (고객동의 철회 시 지체없이 파기)</p>
                            </div>

                            <div class="split_5">
                                <p><b>[개인정보의 취급 위탁]</b></p>
                                <p>당사는 서비스 이행 및 향상을 위해 개인정보 취급업무를 전문업체에 위탁하여 운영하고 있습니다. 또한 개인정보를 안전하게 처리하기 위하여 필요한 사항등을 명확히 규정하고 있으며, 당해 계약 내용을 서면 또는 전자적으로 보관하고 있습니다.</p>
                                <p>위탁업체 및 위탁업무 내용</p>
                                <p>㈜tmp : 고객 DB, 개인정보 수집, 보관 / 휴대폰 문자발송/ 민원처리</p>                
                            </div>

                        </article>

                        <article class="companyArea {{writerArea}}">

                            <div id="address">
                                <p>㈜tmp | 사업자등록번호 : 000-00-0000 | 주소 : 0000 00000</p>
                                <p>Copyright © ㈜tmp. All right reserved.</p>
                            </div>

                            <button id="bottonButton" type="button" style="display:none;">버튼영역</button>         

                        </article>

                    </footer>`
        }  
        return _html.replaceAll(`{{${this.options.editClassName}}}`, this.options.edit?this.options.editClassName:"" )
    }




}
