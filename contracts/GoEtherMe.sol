pragma solidity ^0.5.1;

contract Project {
    
    struct Withdraw {
        uint value;
        address recipient;
    }
    
    enum State {
        ACTIVE,
        ACCOMPLISHED
    }
    
    address public creator;
    uint public goal;
    uint public balance;
    uint public pledged;
    uint public beleivers;
    string name;
    State currentState;
    
    function addBeleiver() public {
        beleivers = beleivers + 1;
    }
    
    function getBeleivers() public view returns (uint) {
        return beleivers;
    }
    
    function getState() public view returns (State) {
        return currentState;
    }
    
    modifier checkValidity {
        require(pledged >= goal/2);
        _;
    }
    
    function test() public view returns(bool) {
        return(pledged >= goal/2);
    }
    
    modifier checkMinPledged {
        require(msg.value >= 0);
        _;
    }
    
    modifier checkCreator {
        require(msg.sender == creator);
        _;
    }
    
    modifier checkActive {
        require(currentState == State.ACTIVE);
        _;
    }
    
    function createNewProject(uint _goal, address _creator, string memory _name) public {
        creator = _creator;
        goal = _goal;
        pledged = 0;
        balance = 0;
        name = _name;
        currentState = State.ACTIVE;
    }
    
    function contribute() checkMinPledged checkActive public payable {
            pledged += msg.value;
            balance += msg.value;
            if (pledged > goal) {
                currentState = State.ACCOMPLISHED;
            }
    }
    
    function withdrawFunds() checkCreator checkValidity public payable{
        balance = 0;
        msg.sender.transfer(balance);
    }
    
    function getCurrentStatus() public view returns (address _creator, uint _goal, uint _balance, uint _pledged, uint _beleivers, string memory _name)
    {
    _creator = creator;
    _goal = goal;
    _balance = balance;
    _pledged = pledged;
    _beleivers = beleivers;
    _name = name;
    }
}
