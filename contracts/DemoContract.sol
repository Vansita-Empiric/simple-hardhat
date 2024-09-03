// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract DemoContract {
    struct Memo {
        string name;
        string message;
        uint timestamp;
        address from;
    }

    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    Memo[] memos;

    function buyChai(
        string memory _name,
        string memory _message
    ) public payable {
        require(msg.value > 0, "Amount is not set");
        owner.transfer(msg.value);
        memos.push(Memo(_name, _message, block.timestamp, msg.sender));
    }

    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }

    function getInt() public pure returns (uint) {
        return 29;
    }

    function getStr() public pure returns (string memory) {
        return "Hello";
    }

    receive() external payable { }
    fallback() external payable { }
}
