import { updateSnake, drawSnake, snakeBody } from "./snake.js";
import { updateFood, drawFood } from "./food.js";
import { checkIfLost, outofBoundary, headCollision } from "./endgame.js";
import { inputDirection } from "./input.js"
const board = document.querySelector(".board");

let SNAKE_SPEED = 6;
let lastRenderTime = 0;
let gameLost = false;

function main(currentTime) {
    window.requestAnimationFrame(main)

    if (outofBoundary() || headCollision()) {
        document.querySelector(".restart").addEventListener("click", () => {
            snakeBody.length = 1;
            document.querySelector(".end-game").style.display = "none";
            gameLost = false;
            snakeBody[0].x = 11;
            snakeBody[0].y = 11;
            inputDirection.x = 0;
            inputDirection.y = 0;
            main();
        })
    }
    else if ((currentTime - lastRenderTime) / 1000 > 1 / SNAKE_SPEED) {
        lastRenderTime = currentTime;
        update();
        draw();
        endGame();
    }
}

main();

function update() {
    updateSnake();
    updateFood();
}

function draw() {
    board.innerHTML = "";
    drawSnake();
    drawFood();
}

function endGame() {
    checkIfLost();
}

