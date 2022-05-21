import { takeInput, inputDirection } from "./input.js"

export let snakeBody = [{ x: 11, y: 11 }];
const board = document.querySelector(".board");

export function updateSnake() {
    takeInput();

    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x -= inputDirection.x;
    snakeBody[0].y -= inputDirection.y;
}


export function drawSnake() {

    snakeBody.forEach(segment => {
        const snakeElement = document.createElement("div");
        snakeElement.classList.add("snake");
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.style.gridRowStart = segment.y;
        board.appendChild(snakeElement);
    });

}

