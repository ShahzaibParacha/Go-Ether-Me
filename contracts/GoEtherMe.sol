pragma solidity ^0.5.0;

contract Projects {
    address[] public allProjects;

    function createProjects(uint minumum) public {
        Project newProject = new Project(minumum, msg.sender);
        allProjects.push(address(newProject));
    }
    
    function getAllProjects() public view returns(address[] memory) {
        return allProjects;
    }
    
}

contract Project {
    
    struct Withdraw {
        uint value;
        address recipient;
    }
    
    address public creator;
    uint public goal;
    uint public balance;
    uint public pledged;
    uint public beleivers;
    
    function addBeleiver() public {
        beleivers++;
    }
    
    function getBeleivers() public view returns (uint) {
        return beleivers;
    }
    
    modifier checkValidity {
        require(msg.value >= 0);
        _;
    }
    
    modifier checkCreator {
        require(msg.sender == creator);
        _;
    }
    
    constructor(uint _goal,address _creator) public {
        creator = _creator;
        goal = _goal;
        pledged = 0;
        balance = 0;
    }
    
    function contribute() checkValidity public payable {
            pledged += msg.value;
            balance += msg.value;
    }
    
    function withdrawFunds(address payable _recipient) checkCreator public payable{
        require(_recipient == creator);
        balance = 0;
        _recipient.transfer(balance);
    }
}