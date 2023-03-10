({
    blockClickHandler : function(component, event, helper) {
        const open = component.get("v.open");
        if(!open){
            component.set("v.open", true);
            //get label value
            const label = component.get("v.label");
            //fire the block click
            let compEvent = component.getEvent("onclick", label);
            compEvent.setParams({value: label});
            compEvent.fire();
        }
    }
})
