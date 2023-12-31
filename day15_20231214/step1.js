/*
    - 자료형                                                        
          0.undefined(자료가없다.)      
          1.숫자형 2.문자열 3.불                                             자동차
          4.배열[]  : 여러개의 자료를 하나의 자료의 집합                 현재속도 , 자동차색     
            - 성질 , 상태 , 필드 = 현재 데이터의 상태 

          5.함수(){ } : 코드의 집합                                     전진(){현재속도++;} , 자동차도색(){ }
            - 기능 , 행위 , 이벤트 , 메소드 
          6.객체{}
        
    함수
        - 코드의 집합{}을 나타내는 자료형
        - 용어
            - 함수호출 : 함수를 사용할때. f(x)
            - 매개변수 : 함수호출할때 함수내부{}에 여러가지 자료를 넣을때 = 인수
            - 리턴값   : 함수호출해서 최종적으로 나오는 결과 = 반환 retirn
                - void : 없다.

            -종류                                                       생활속 예시
            1. 매개변수O 리턴O                                          - 
                function 함수( x , y){ z = x+y; return z; }
            2. 매개변수O 리턴X
                function 함수( x , y){ z = x+y; }
            1. 매개변수X 리턴O
                function 함수( ){ return 3+3; }
            1. 매개변수X 리턴X
                function 함수( ){ }

        - 함수를 사용하면 좋은점.
            1. 반복되는 코드를 한번에 정의 하고 필요에 따라 호출해서 반복 작업을 피 할수 있다. [ 코드 양 줄일수 있다.]
            2. 긴 프로그램을 기능별로 나눠 여러 함수로 나워 작성하면 모듈화[조각단위] 로 전체 코드의 가독성이 좋다.
            3. 기능별(함수별)로 수정이 가능하므로 유지보수가 쉽다.


        - 1. 익명함수 : 이름이 없는 함수. 
         - function(){}       : 함수에 이름이 없어서 호출이 불가능
         - 익명함수를 변수/상수에 넣자.. 그럼 변수/.상수 호출시 함수가 실행.
                - const 함수명 = function(){ }

        - 2. 선언적함수 : 이름이 있는 함수.
         - function 함수명(){}  : 함수에 이름이 있는 상태




*/

// [중요] p .197 : 익명함수.

// -------------------------함수 선언부 start --------------------------- //
const 함수 = function(){ 
    // -------------------------함수 내부 --------------------------- //
    console.log('함수 내부의 코드입니다..1');
    console.log('함수 내부의 코드입니다..2');
    console.log('함수 내부의 코드입니다..3');
    console.log('');
    // -------------------------함수 내부 --------------------------- //

}
// -------------------------함수 선언부 end --------------------------- //

함수(); // 함수호출
함수(); // 함수호출

console.log( typeof 함수); // 자료형 확인 : function
console.log( 함수 );


// p.199 : 선언적 함수
function 선언함수(){    // function 함수명( ){ }
    console.log('함수 내부의 코드입니다..1');
    console.log('함수 내부의 코드입니다..2');
    console.log('함수 내부의 코드입니다..3');
    console.log('');
}

선언함수();
선언함수();

console.log( typeof 선언함수); // 자료형 확인 : function
console.log( 선언함수 );


// p. 201
    // 1. .함수명 ; 'f' , 매개변수 : 'x' , 리턴값 : 'x+x'
function f(x){ return x+x };
// 함수[console.log]호출( 함수[f] 호출 )
    // 1. f(3) => 6
    // 2. console.log( 6 );
console.log( f(3) );

// - 함수명/기능 : : : 오늘스페셜메뉴 , 매개변수 : 50,000 , 리턴값 : '랍스터음식';
function 오늘스페셜메뉴( 금액 ){
    // 요리하는 로직/코드
    return '랍스터음식';
}
오늘스페셜메뉴( 50000 );
