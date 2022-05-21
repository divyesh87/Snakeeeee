import { snakeBody } from "./snake.js";
const winText = document.querySelector(".text-msg")
export let gameLost = false;
export function checkIfLost() {

    if (headCollision() || outofBoundary()) {

        document.querySelector(".end-game").style.display = "unset";
        gameLost = true;
        if (headCollision()) {
            winText.innerHTML = "You hit your own body!"
        }
        else if (outofBoundary()) {
            winText.innerHTML = "Stay inside the board!";
        }
    }
}


export function headCollision() {
    for (let i = 1; i < snakeBody.length; i++) {
        if (snakeBody[0].x == snakeBody[i].x && snakeBody[0].y == snakeBody[i].y) return true;
    }
}

export function outofBoundary() {
    if (snakeBody[0].x > 21 || snakeBody[0].x < 1 || snakeBody[0].y > 21 || snakeBody[0].y < 1) return true;
}
