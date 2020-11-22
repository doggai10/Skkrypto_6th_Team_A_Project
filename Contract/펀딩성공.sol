// 컨트랙트에 존재하는 토큰을 사용자 계정으로 송금
// amount 전송할 클레이양
function transfer(uint amount) public returns (bool){
    // 유효성 검사(전송하려는 양이 현재 잔액보다 많진 않은가)
    require(getBalance() >= amount);
    // 토큰을 전송
    msg.sender.transfer(amount);
    return true;
}