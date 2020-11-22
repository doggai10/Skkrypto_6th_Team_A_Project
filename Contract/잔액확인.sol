// 현재 계정의 잔액을 확인
// view는 읽기 전용 함수라는 명령어
// uint 를 반환
function getBalance() public view returns (uint){
    // address(this) 현재 조회한 계정
    // balance는 잔액
    return address(this).balance;
}