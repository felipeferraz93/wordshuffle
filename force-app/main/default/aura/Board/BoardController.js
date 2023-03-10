({
    doInit : function(component, event, helper) {
        console.log("Initialiation");
        const gameMode = component.get("v.mode");
        let column = 0;

        if(gameMode && gameMode === "hard"){
            column = 6;
        }else if(gameMode === "medium"){
            column = 4;
        }else{
            column = 3;
        }

        let blockSize = 12/column;
        component.set("v.blockSize", blockSize);

        const words = helper.getWords(column * column);
        component.set("v.words", words)
        console.log("Words: " + words);

        const winWord = helper.getWinWord(words);
        component.set("v.winWord", winWord);
        console.log("Win Word: " + winWord);

    },
    doRender : function(component, event, helper) {
        console.log("Render");
    },

    blockClickHandler : function(component, event, helper){
        let clickCount = component.get("v.clickCount") + 1;
        //get event value
        const value = event.getParam("value");

        if(value === component.get("v.winWord")){
            //user win
            component.set("v.result", "YOU WIN!");
            console.log("You win");
        }else if(clickCount === 3){
            //user lose
            component.set("v.result", "YOU LOSE!");
            console.log("You lose");
        }

        component.set("v.clickCount", clickCount);
    }
})
