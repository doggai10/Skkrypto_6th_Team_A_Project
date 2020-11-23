pragma solidity ^0.4.24;

contract FundingContract{
    address public owner;

    struct Funding{
        address restaurant;
        uint endTime; 
        uint amount;               
        uint totalAmount;
        uint people;
    }
    Funding[] internal fundingList;

    mapping (address => uint) getPartyIdx;  // 사용자의 파티 인덱스
    mapping (address => bool) isRefunded;   // 사용자가 환불을 받은적이 있는지 체크함


    uint totalFundingNumber = 0;              // 방 개수
    uint value = 1000000000000000000;       // 1Klay, peb단위


    constructor() public {
        owner = msg.sender;
        //fundingList.push(0,0,0,0);
    }
    // 현재 컨트랙트의 잔액을 확인
    // view는 읽기 전용 함수라는 명령어
    // uint 를 반환
    function getBalance() public view returns (uint){
        // address(this) 현재 조회한 계정
        // balance는 잔액
        return address(this).balance;   
    }

    function getBalanceUser() internal view returns (uint){
         return address(msg.sender).balance;    
    }

    // 컨트랙트에 존재하는 토큰을 사용자 계정으로 송금
    // amount 전송할 클레이양
    function transfer(uint amount) public returns (bool){
        // 유효성 검사(전송하려는 양이 현재 잔액보다 많진 않은가)
        require(getBalance() >= amount);
        // 토큰을 전송
        msg.sender.transfer(amount);
        return true;
    }
}