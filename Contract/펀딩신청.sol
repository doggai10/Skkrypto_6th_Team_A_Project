// 참여자가 컨트랙트로 토큰을 송금하는 함수
// payble명령어는 송금하는 함수에는 필수적으로 쓰여야 함. 
function deposit() public payable{
   // 유효성 검사(조건체크)로 조건이 맞지 않으면 함수가 실행되지 않음.
   require(msg.sender == owner);
}