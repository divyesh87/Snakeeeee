import { snakeBody } from "./snake.js";
import { inputDirection } from "./input.js";

let newSnakeElement = { x: 0, y: 0 };

export function grow() {
    if (inputDirection.x == 1) {
        newSnakeElement.x = ((snakeBody[snakeBody.length - 1].x) - 1);
        snakeBody.push(newSnakeElement);
    }
    else if (inputDirection.x == -1) {
        newSnakeElement.x = ((snakeBody[snakeBody.length - 1].x) + 1);
        snakeBody.push(newSnakeElement);
    }
    else if (inputDirection.y == 1) {
        newSnakeElement.y = ((snakeBody[snakeBody.length - 1].y) - 1);
        snakeBody.push(newSnakeElement);
    }
    else if (inputDirection.y == -1) {
        newSnakeElement.y = ((snakeBody[snakeBody.length - 1].y) - 1);
        snakeBody.push(newSnakeElement);
    }
}