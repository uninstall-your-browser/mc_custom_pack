ServerEvents.recipes(event => {
    event.remove({output: [Item.of("create:crushed_raw_copper").withChance(0.8), Item.of("create:copper_nugget").withChance(0.8)]});
    event.recipes.createCrushing(
        [Item.of("create:crushed_raw_copper").withChance(0.1), Item.of("create:copper_nugget").withChance(0.1)],
        "create:veridium"
    );
});
