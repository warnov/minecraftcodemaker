player.onChat("windowedTower", function (sideLength, floors) {
    for (let i = 0; i < floors; i++) {
        buildSquaredFloor(sideLength, i % 2 + 1)
    }
})



player.onChat("intertower", function (sideLength, floors) {
    for (let i = 0; i < floors; i++) {
        buildSquaredFloor(sideLength)
        penUp()
        agent.move(SixDirection.Up, 1)
    }
})
player.onChat("square", function () {
    penDown()
    for (let index = 0; index <= 19; index++) {
        agent.move(SixDirection.Forward, 3)
        if (agent.detect(AgentDetection.Block, SixDirection.Forward)) {
            agent.move(SixDirection.Up, 1)
            penUp()
            agent.move(SixDirection.Forward, 1)
            penDown()
        }
        agent.turn(TurnDirection.Left)
    }
})
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
function penDown() {
    agent.setAssist(AgentAssist.PlaceOnMove, true)
}
function penUp() {
    agent.setAssist(AgentAssist.PlaceOnMove, false)
}
function buildSquaredFloor(len: number, slot = 1) {
    penDown();
    agent.setSlot(slot);
    for (let index2 = 0; index2 <= 3; index2++) {
        agent.move(SixDirection.Forward, len)
        if (agent.detect(AgentDetection.Block, SixDirection.Forward)) {
            agent.move(SixDirection.Up, 1)
            penUp()
            agent.move(SixDirection.Forward, 1)
            penDown()
        }
        agent.turn(TurnDirection.Left)
    }
}
