//Clears card board to make space for new cards

export function clearAll() {
    const cardBoard = document.getElementById('project-grid');

    while (cardBoard.firstChild != null) {
        cardBoard.removeChild(cardBoard.firstChild);
    }
}