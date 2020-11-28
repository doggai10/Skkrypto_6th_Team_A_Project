pragma solidity >=0.4.24 <=0.5.6;

library SafeMath {
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        assert(b <= a);
        return a - b;
    }

    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "SafeMath: addition overflow");

        return c;
    }
}

contract Funding {
    using SafeMath for uint256;
    mapping(address => uint256) private _balances;

    address public owner;
    event Transfer(address indexed from, address indexed to, uint256 value);
    struct funding {
        //펀딩 구조체.
        address restaurant;
        string foodname;
        uint256 endTime;
        uint256 amount;
        uint256 totalAmount;
        uint256 people;
        uint256 price;
    }

    funding[] internal fundingList;

    mapping(address => string) findfood;
    mapping(string => uint256) findIdx;

    uint256 value = 1000000000000000000; // 1Klay, peb단위

    constructor() public {
        owner = msg.sender;
    }

    function createFunding(
        address restaurant,
        string memory foodname,
        uint256 endTime,
        uint256 totalAmount,
        uint256 price
    ) public {
        fundingList.push(
            funding(restaurant, foodname, endTime, 0, totalAmount, 0, price)
        );
    }

    /// 음식점 인덱스 찾기.
    function findTarget(
        address a,
        string memory f,
        uint256 money
    ) public returns (bool) {
        uint256 result = 0;
        for (uint256 i = 0; i < fundingList.length; i++) {
            if (
                fundingList[i].restaurant == a &&
                keccak256(abi.encodePacked((fundingList[i].foodname))) ==
                keccak256(abi.encodePacked((f)))
            ) {
                result = i;
                break;
            }
        }
        if (result != 0) {
            UpdateValue(result, money);
        }
        return false;
    }

    function UpdateValue(uint256 idx, uint256 money) public returns (bool) {
        //uint256 userbalance = getBalance();
        if (fundingList[idx].amount < fundingList[idx].totalAmount) {
            if (getBalance() >= fundingList[idx].price) {
                fundingList[idx].amount += money;
                fundingList[idx].people++;
                //_transfer(msg.sender,owner,money);
            }
        }
        if (checkDone(idx)) {
            //fundingSuccess(idx);
        }
    }

    function checkDone(uint256 idx) public view returns (bool) {
        if (fundingList[idx].amount == fundingList[idx].totalAmount) {
            return true;
        }
        return false;
    }

    function deposit() public payable {
        require(msg.sender == owner);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    // function fundingSuccess(uint256 idx) public returns(bool) {
    //   _transfer(owner, fundingList[idx].restaurant, fundingList[idx].totalAmount);
    //   return true;
    // }

    // function transferFromContract(address recipient, uint256 amount) public returns (bool) {
    //     _transfer(owner, recipient, amount);
    //     return true;
    // }
    // function transferToContract(uint256 amount) public returns (bool) {
    //     msg.sender.transfer(amount);
    //     return true;
    // }
    // function _transfer(address sender, address recipient, uint256 amount) internal {
    //     _balances[sender] = _balances[sender].sub(amount);
    //     _balances[recipient] = _balances[recipient].add(amount);
    //     emit Transfer(sender, recipient, amount);
    // }

    function transfer(uint256 amount) public returns (bool) {
        msg.sender.transfer(amount);
        return true;
    }

    // function getBalanceUser() internal view returns (uint256) {
    //     return address(msg.sender).balance;
    // }
}
