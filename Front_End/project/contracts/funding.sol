pragma solidity >=0.4.24 <=0.5.6;

contract Funding {
    address public owner;

    struct Funding {
        //펀딩 구조체.
        address restaurant;
        string foodname;
        uint256 endTime;
        uint256 amount;
        uint256 totalAmount;
        uint256 people;
        uint256 price;
    }
    Funding[] internal fundingList;

    mapping(address => string) findfood;
    mapping(string => uint256) findIdx;

    uint256 value = 1000000000000000000; // 1Klay, peb단위

    constructor() public {
        owner = msg.sender;
    }

    function createFunding(
        address restaurant,
        uint256 endTime,
        uint256 totalAmount
        uint256 price
    ) public view {
        fundingList.push(restaurant, endTime, 0, totalAmount, 0, price);
        totalFundingNumber++;
        
    }

    /// 음식점 인덱스 찾기.
    function findTarget(
        address a,
        string f,
        uint256 money
    ) public view returns (bool) {
        uint256 result = -1;
        for (uint256 = 0; i < fundingList.length; i++) {
            if (
                fundingList[i].restaurant == a && fundingList[i].foodname == f
            ) {
                result = i;
                break;
            }
        }
        if (result != -1) {
            UpdateValue(result, money);
        }
        return false;
    }
    
    function UpdateValue(uint256 idx, uint256 money)
        public
        view
        returns (bool)
    {
        uint256 userbalance = getBalanceUser();
        if (fundingList[idx].amount < undingList[idx].totalAmount) {
            if (getBalanceUser() >= fundingList[idx].price) {
                fundingList[idx].amount += money;
                fundingList[idx].people++;
                transfer(money);
            }
        }
        if (checkDone(idx)) {
            // 자영업자에게 송금.fudingList[idx].restaurant 송금.
        }
    }

    function checkDone(uint256 idx) public view returns (bool) {
        if (fundingList[idx].amount == fundingList[idx].totalAmount) {
            return true;
        }

        return false;
    }

    // 컨트랙트 담긴 금액.
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    // 사용자 돈
    function getBalanceUser() internal view returns (uint256) {
        return address(msg.sender).balance;
    }

    function transfer(uint256 amount) public returns (bool) {
        msg.sender.transfer(amount);
        return true;
    }
}
