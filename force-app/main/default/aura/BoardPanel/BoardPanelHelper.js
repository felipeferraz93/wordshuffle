({
    addResultRecord : function(component, gameResult) {
        const action = component.get("c.addResult");
        const modeValue = component.get("v.selectedMode").toUpperCase();

        action.setParams({
            result: gameResult,
            mode: modeValue
        });

        action.setCallback(this, function(response){
            const state = response.getState();
            if(state !== 'SUCCESS'){
                console.error("Error in saving record");
            }
        });

        $A.enqueueAction(action);
    },

    showToast : function(tittleValue, messageValue, typeValue) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": tittleValue,
            "message": messageValue,
            "type": typeValue
        });
        toastEvent.fire();
    }
})
