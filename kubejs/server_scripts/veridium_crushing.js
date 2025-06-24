ServerEvents.recipes(event => {
    event.remove({id: "create:crushing/veridium_recycling"});
    event.remove({id: "create:crushing/veridium"});
    event.recipes.createCrushing(
        [Item.of("create:crushed_raw_copper").withChance(0.1), Item.of("create:copper_nugget").withChance(0.1)],
                                 "create:veridium"
    );
});
