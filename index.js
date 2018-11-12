function shout(string) { 
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(shout(string));
}

function logWhisper(string){
  console.log(whisper(string));
}

function sayHiToGrandma(string) { 
  if (string == string.toLowerCase()){
    response = "I can't hear you";
  }
  if (string == string.toUpperCase()){
    response = "YES INDEED";
  }
}