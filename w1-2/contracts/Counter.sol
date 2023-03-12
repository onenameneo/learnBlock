// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

contract Counter {
  uint public counter;
  address owner;
  
  constructor() {
    counter = 0;
    owner = msg.sender;
  }
  function count() public {
    require(msg.sender == owner, "Only the owner can count");
    counter = counter + 1;
  }
}