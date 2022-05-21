export let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 }

export function takeInput() {
    window.addEventListener("keydown", function (e) {
        switch (e.key) {
            case "ArrowUp":

                if (lastInputDirection.y == -1) break;
                inputDirection = { x: 0, y: 1 };
                lastInputDirection = inputDirection;
                break;

            case "ArrowRight":

                if (lastInputDirection.x == 1) break;
                inputDirection = { x: -1, y: 0 };
                lastInputDirection = inputDirection;
                break

            case "ArrowDown":

                if (lastInputDirection.y == 1) break;
                inputDirection = { x: 0, y: -1 };
                lastInputDirection = inputDirection;
                break

            case "ArrowLeft":

                if (lastInputDirection.x == -1) break;
                inputDirection = { x: 1, y: 0 };
                lastInputDirection = inputDirection;
                break;
        }
    })
}

