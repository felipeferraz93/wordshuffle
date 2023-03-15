({
    fetchResult : function(component) {
        var action = component.get("c.getResults");
        action.setCallback(this,function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                const resp = response.getReturnValue();
                component.set("v.data", resp);
            }
        });
        $A.enqueueAction(action);
    }
})
