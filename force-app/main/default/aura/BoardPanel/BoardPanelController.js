({
    startGame : function(component, event, helper) {
        let gameModeComboBox = component.find("gameMode");
        let selectedValue = gameModeComboBox.get("v.value");

        component.set("v.selectedMode", selectedValue);
    },

    reshuffleBoard : function(component, event, helper) {
        console.log("reshuffleBoard!");
    }
});
