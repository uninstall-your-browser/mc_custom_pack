ServerEvents.recipes(event => {
    event.remove({output: "storagedrawers:controller"});
    event.remove({output: "storagedrawers:controller_slave"});
    event.remove({output: "storagedrawers:compacting_drawers_2"});
    event.remove({output: "storagedrawers:compacting_drawers_3"});

    event.shaped(
        "storagedrawers:controller",
        [
            'ITI',
            'IXI',
            'BCB'
        ],
        {
            I: "create:iron_sheet",
            B: "create:brass_sheet",
            X: "create:brass_casing",
            C: "create:chute",
            T: "create:electron_tube",
        }
    );

    event.shaped(
        "storagedrawers:controller_slave",
        [
            'III',
            'IXI',
            'ICI'
        ],
        {
            I: "create:iron_sheet",
            X: "create:andesite_casing",
            C: "create:chute",
        }
    );

    event.shaped(
        "storagedrawers:compacting_drawers_2",
        [
            ' P ',
            ' D ',
            ' C ',
        ],
        {
            P: "create:mechanical_press",
            D: "#storagedrawers:drawers",
            C: "create:cogwheel",
        }
    );

    event.shaped(
        "storagedrawers:compacting_drawers_3",
        [
            ' P ',
            ' D ',
            ' C ',
        ],
        {
            P: "create:mechanical_press",
            D: "#storagedrawers:drawers",
            C: "create:large_cogwheel",
        }
    );

});
