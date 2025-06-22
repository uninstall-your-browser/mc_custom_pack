ServerEvents.recipes(event => {
    event.remove({ id: "thermal:storage/copper_ingot_from_nuggets" });
    event.replaceOutput({output: "thermal:copper_nugget"}, "thermal:copper_nugget", "create:copper_nugget");
});
