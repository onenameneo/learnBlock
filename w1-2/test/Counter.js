const { expect } = require("chai");

describe('Counter', () => {
  it('should increment the counter', async () => {
    const Counter = await ethers.getContractFactory('Counter')
    const counter = await Counter.deploy()
    await counter.deployed()

    await counter.count()
    expect(await counter.counter()).to.equal(1)
  })
})