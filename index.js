function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    const spy = "hello";
    console.log(spy.toUpperCase());
}

function logWhisper(string){
    const spy = "HELLO";
    console.log(spy.toLowerCase());
}

function sayHiToHeadphonedRoommate(string){
    if (string === string.toLowerCase()) {
        return "I can\'t hear you!";
    }

    if (string === string.toUpperCase()) {
        return "YES INDEED!";
    }

    if (string === "Let\'s have dinner together!") {
        return "I would love to!";
    }
}