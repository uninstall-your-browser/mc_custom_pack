function copperSequence(baseBlockId)
{
    const modId = baseBlockId.split(":", 1)[0];
    const blockId = baseBlockId.slice(modId.length + 1);
    return ["", "exposed", "weathered", "oxidized"].map(stage =>
    `${modId}:${stage}${stage ? '_' : ''}${blockId}`
    );
}

ServerEvents.recipes(event => {
    const block_sequences = [
        ["minecraft:copper_block", "minecraft:exposed_copper", "minecraft:weathered_copper", "minecraft:oxidized_copper"],
        copperSequence("create:copper_shingles"),
        copperSequence("create:copper_tiles"),
        copperSequence("minecraft:cut_copper"),
        copperSequence("minecraft:cut_copper_stairs"),
        copperSequence("create:copper_shingle_stairs"),
        copperSequence("create:copper_tile_stairs"),
        copperSequence("minecraft:cut_copper_slab"),
        copperSequence("create:copper_shingle_slab"),
        copperSequence("create:copper_tile_slab"),
    ];

    for (var blocks of block_sequences)
    {
        for(var i = 0; i < blocks.length - 1; i++)
        {
            event.recipes.create.splashing(blocks[i + 1], blocks[i]);
        }
    }
});
