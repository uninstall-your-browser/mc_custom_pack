ServerEvents.recipes(event => {
    // pow(0.908, 3) = ~0.75, to make the expected number of failures consume roughly the same amount of quartz as submerging it
    // note: pow(0.75, 1/3) = ~0.908
    event.recipes.vintageimprovements.polishing(Item.of('ae2:damaged_budding_quartz').withChance(0.908), 'ae2:quartz_block').speedLimits(1).fragile();
    event.recipes.vintageimprovements.polishing(Item.of('ae2:chipped_budding_quartz').withChance(0.908), 'ae2:damaged_budding_quartz').speedLimits(1).fragile();
    event.recipes.vintageimprovements.polishing(Item.of('ae2:flawed_budding_quartz').withChance(0.908), 'ae2:chipped_budding_quartz').speedLimits(1).fragile();

    // processingTime = energyCost / (maxChargeRate * 20)
    // Note: there is a global maximum charge rate in the config, which restricts the charging rate of maxChargeRate(), so you can't just set it to whatever because fuck you. By default it's 5000
    event.recipes.vintageimprovements.laser_cutting(Item.of('ae2:flawless_budding_quartz').withChance(0.7), 'ae2:flawed_budding_quartz').energyCost(2700000).maxChargeRate(2500);
});
