import { grow } from "./grow.js";
import { snakeBody, updateSnake } from "./snake.js";

export let foodLocation = { x: 11, y: 11 };
const board = document.querySelector(".board");

export function updateFood() {
    headOnFood();
    foodOnBody();
}


export function drawFood() {
    const foodElement = document.createElement("div");
    foodElement.classList.add("food");
    foodElement.style.gridColumnStart = foodLocation.x;
    foodElement.style.gridRowStart = foodLocation.y;
    board.appendChild(foodElement);
}

function headOnFood() {
    if (snakeBody[0].x == foodLocation.x && snakeBody[0].y == foodLocation.y) {
        generateFoodLocation();
        grow();
        updateSnake();
    }
}

function foodOnBody() {
    snakeBody.forEach(snakeSegment => {
        if (snakeSegment.x == foodLocation.x && snakeSegment.y == foodLocation.y) {
            generateFoodLocation();
        }
    })
}

function generateFoodLocation() {
    let foodx = Math.floor(((Math.random() * 21) + 1));
    let foody = Math.floor(((Math.random() * 21) + 1));
    foodLocation.x = foodx;
    foodLocation.y = foody;
}