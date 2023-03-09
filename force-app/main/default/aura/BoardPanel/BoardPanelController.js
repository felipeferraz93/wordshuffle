({
    startGame : function(component, event, helper) {
        let gameModeComboBox = component.find("gameMode");
        let selectedValue = gameModeComboBox.get("v.value");

        component.set("v.selectedMode", selectedValue);
        alert("The game mode is "+selectedValue);
    },

    reshuffleBoard : function(component, event, helper) {
        console.log("reshuffleBoard!");
    }
});
