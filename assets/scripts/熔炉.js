const library = require("base/library");
//const myitems = require("资源");

const furnace = library.MultiCrafter(
    GenericCrafter, 
    GenericCrafter.GenericCrafterBuild, 
    "熔炉", 
    [
        {
            input: {
                items: ["铜矿/5"],
                liquids: [],
            },
            output: {
                items: ["copper/1"],
            },
            craftTime: 5,
        },
       
        {
            input: {
                items: ["锡矿/3"],
            },
            output: {
                items: ["锡锭/1"],
            },
            craftTime: 5,
        },
        
        {
            input: {
                items: ["铁矿/3"],
            },
            output: {
                items: ["铁锭/1"],
            },
            craftTime: 5,
        },
        
        {
            input: {
                items: ["铅矿/3"],
            },
            output: {
                items: ["lead/1"],
            },
            craftTime: 5,
        },
        
        {
            input: {
                items: ["银矿/4"],
            },
            output: {
                items: ["银锭/1"],
            },
            craftTime: 5,
        },
        
        {
            input: {
                items: ["钨矿/4"],
            },
            output: {
                items: ["钨锭/1"],
            },
            craftTime: 5,
        },
        
        {
            input: {
                items: ["金矿/4"],
            },
            output: {
                items: ["金锭/1"],
            },
            craftTime: 5,
        },
        
        {
            input: {
                items: ["铂金矿/4"],
            },
            output: {
                items: ["铂金锭/1"],
            },
            craftTime: 5,
        },
        {
            input: {
                items: ["魔矿/3"],
            },
            output: {
                items: ["魔锭/1"],
            },
            craftTime: 5,
        },
        // 以下为新增的腥红矿与魔矿合成配方
        {
            input: {
                items: ["腥红矿/3"],
            },
            output: {
                items: ["腥红锭/1"],
            },
            craftTime: 5,
        }
    ]
);