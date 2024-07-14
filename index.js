let tracker = Array(9).fill(null);
let currentIcon = 'X'

function checkWinner(array) {
    if (
        ( array[0] !== null && array[0] === array[1] && array[1] === array[2]) ||
        ( array[3] !== null && array[3] === array[4] && array[4] === array[5]) ||
        ( array[6] !== null && array[6] === array[7] && array[7] === array[8]) ||
        ( array[0] !== null && array[0] === array[3] && array[3] === array[6]) ||
        ( array[1] !== null && array[1] === array[4] && array[4] === array[7]) ||
        ( array[2] !== null && array[2] === array[5] && array[5] === array[8]) ||
        ( array[0] !== null && array[0] === array[4] && array[4] === array[8]) ||
        ( array[2] !== null && array[2] === array[4] && array[4] === array[6])
    ) {
        Toastify({
            text: `Current Winner is ${currentIcon}`,
            className: "toastify-center", 
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                color: "#fff", 
                padding: "20px", 
                borderRadius: "10px", 
                duration: 3000,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
            }
        }).showToast();
        
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
}
function handleClick (element){
    const currentElement = Number(element.id);
    if (element.innerText.length > 0) {
        return ;
    }
    tracker[currentElement] = currentIcon ;
    element.innerText = currentIcon ;
    checkWinner(tracker) ;
    currentIcon === 'X' ? currentIcon = "O" : currentIcon = "X" ;
    const hasNull = tracker.some(item => item === null);
    if (!hasNull) {
        Toastify({
            text: " OOPS !! Match has been draw",
            className: "toastify-center", 
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                color: "#fff", 
                padding: "20px", 
                borderRadius: "10px", 
                duration: 3000,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
            }
        }).showToast();
                setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
}