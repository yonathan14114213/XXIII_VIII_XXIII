
// בנו תכנית שמדמה את המשחק אבן נייר ומספריים
// התכנית תגדיר מי המנצח לפי חוקיות המשחק
// אבן מנצח מספריים שמנצחות נייר שמנצח אבן

// דגשים
// שחקן יכול לבחור בין אבן נייר ומספרים בלבד! אך שחקן יכול שלא תהיה לו בחירה
// התכנית יכולה להחזיר את המחרוזות
// 'tie', 'player1', 'player2' 
// התשובה שלכם חייבת להכיל
// ENUM
// type/interface
// union
// במידה ולשחקן אין בחירה זרקו שגיאה
// ממשו את הפונקציה- הוסיפו טיפוסים לפרמטרים ולערך החזרה של הפונקציה

interface player1 {
    rock: "rock";
    paper: "paper";
    scissors: "scissors";
}
interface player2 {
    rock: "rock";
    paper:"paper";
    scissors: "scissors";
}


function playGame(player1:'rock'|'paper'|'scissors'|null, player2:'rock'|'paper'|'scissors'|null) {
    if (typeof player1 === null||typeof player2 === null){
        throw Error
    }if (player1)
}

const play = playGame(player1, player2);
console.log(play);
//Output: player1 or player2 or tie

