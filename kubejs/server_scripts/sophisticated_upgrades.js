// makes SS stack upgrades less stupidly expensive

ServerEvents.recipes(event => {
    const items = [
        ["1", "#minecraft:planks"],
        ["1_plus", "minecraft:copper_ingot"],
        ["2", "minecraft:iron_ingot"],
        ["3", "minecraft:gold_ingot"],
        ["4", "minecraft:diamond"],
        ["5", "minecraft:netherite_ingot"],
    ];

    for (const [tier, ingredient] of items) {
        let upgradeItem = `sophisticatedstorage:stack_upgrade_tier_${tier}`;
        event.remove({output: upgradeItem});
        event.shaped(
            upgradeItem,
            [
                'SSS',
                'XBX',
                'SSS'
            ],
            {
                S: "minecraft:stick",
                B: "sophisticatedstorage:upgrade_base",
                X: ingredient
            }
        );
    }

    event.remove([{output:"sophisticatedstorage:advanced_void_upgrade"}, {output:"sophisticatedbackpacks:advanced_void_upgrade"}]);
    event.replaceOutput({output: "sophisticatedstorage:void_upgrade"}, "sophisticatedstorage:void_upgrade", "sophisticatedstorage:advanced_void_upgrade");
    event.replaceOutput({output: "sophisticatedbackpacks:void_upgrade"}, "sophisticatedbackpacks:void_upgrade", "sophisticatedbackpacks:advanced_void_upgrade");
    event.replaceInput({output: "sophisticatedbackpacks:advanced_void_upgrade"}, "sophisticatedstorage:void_upgrade", "sophisticatedstorage:advanced_void_upgrade")
});

