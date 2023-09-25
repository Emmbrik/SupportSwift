function getBotResponse(input){
    //simple responses
    if(input == ""){
        return "You can you come again";
    }
    else if(input == "hello"){
        return "Hello there, how can I help you today";
    }else if(input == "goodbye"){
        return "Talk to you later!";
    }
    else{
        return "sorry I didn't get that";
    }
}