pragma solidity >=0.4.24 <=0.5.6;
contract Funding {
    address public owner;
    event Transfer(address indexed from, address indexed to, uint256 value);
    struct funding {
        //펀딩 구조체.
        address restaurant;
        string foodname;
        uint endTime;
        uint amount;
        uint totalAmount;
        uint people;
        uint price;
    }

    funding[] internal fundingList;

    constructor() public {
        owner = msg.sender;
    }
    
    function createFunding(address restaurant,
        string memory foodname,
        uint endTime,
        uint totalAmount,
        uint price
    ) public {
        fundingList.push(funding(restaurant, foodname,endTime, 0, totalAmount, 0, price));
    }
    
    /// 음식점 인덱스 찾기.
    function findTarget(
        address a,
        string memory f,
        uint _value
    ) public  returns (bool) {
        uint result = 0;
        for (uint i = 0; i < fundingList.length; i++) {
            if (fundingList[i].restaurant == a && keccak256(abi.encodePacked((fundingList[i].foodname))) == keccak256(abi.encodePacked((f)))) {
                result = i;
                break;
            }
        }
        if (result != 0) {
            UpdateValue(result, _value);
        }
        return false;
    }
    
    function UpdateValue(uint idx, uint _value) public returns (bool)
    {
        if (fundingList[idx].amount < fundingList[idx].totalAmount && now-fundingList[idx].endTime>=0) {
                fundingList[idx].price += _value;
                fundingList[idx].people++;
                deposit(_value);
        }
        if (checkDone(idx)) {
            //transferFromContract(fundingList[idx].totalAmount);
            transfer(fundingList[idx].totalAmount);
        }
    }

    function checkDone(uint idx) internal view returns (bool) {
        if (fundingList[idx].amount == fundingList[idx].totalAmount) {
            return true;
        }
        return false;
    }

    function deposit(uint _value) public payable {  
        require(getBalanceUser() >= _value);
        //address(this).transfer(_value);
    }   

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function getBalanceUser() public view returns (uint) {
        return address(msg.sender).balance;
    }


    function transfer(uint _value) public returns (bool) {
        require(getBalance() >= _value);
        msg.sender.transfer(_value);
        return true;
    }


    // function transferFromContract(uint _value) public returns (bool) {
    //     require(getBalanceUser()>=_value);
    //     address(this).transfer(_value);
    //     return true;
    // }

    // mapping(address => string) findfood;
    // mapping(string => uint256) findIdx;

    // uint256 value = 1000000000000000000; // 1Klay, peb단위
    
}


