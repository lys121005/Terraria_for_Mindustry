const library = require("base/library");
//const myitems = require("资源");

const furnace = library.MultiCrafter(
    GenericCrafter, 
    GenericCrafter.GenericCrafterBuild, 
    "熔炉", 
    [
        {
            input: {
                items: ["TerrariaforMindustry-铜矿/5"],
                liquids: [],
            },
            output: {
                items: ["copper/1"],
            },
            craftTime: 5,
        },
       
        {
            input: {
                items: ["TerrariaforMindustry-锡矿/3"],
            },
            output: {
                items: ["TerrariaforMindustry-锡锭/1"],
            },
            craftTime: 5,
        },
        
        {
            input: {
                items: ["TerrariaforMindustry-铁矿/3"],
            },
            output: {
                items: ["TerrariaforMindustry-铁锭/1"],
            },
            craftTime: 5,
        },
        
        {
            input: {
                items: ["TerrariaforMindustry-铅矿/3"],
            },
            output: {
                items: ["lead/1"],
            },
            craftTime: 5,
        },
        
        {
            input: {
                items: ["TerrariaforMindustry-银矿/4"],
            },
            output: {
                items: ["TerrariaforMindustry-银锭/1"],
            },
            craftTime: 5,
        },
        
        {
            input: {
                items: ["TerrariaforMindustry-钨矿/4"],
            },
            output: {
                items: ["TerrariaforMindustry-钨锭/1"],
            },
            craftTime: 5,
        },
        
        {
            input: {
                items: ["TerrariaforMindustry-金矿/4"],
            },
            output: {
                items: ["TerrariaforMindustry-金锭/1"],
            },
            craftTime: 5,
        },
        
        {
            input: {
                items: ["TerrariaforMindustry-铂金矿/4"],
            },
            output: {
                items: ["TerrariaforMindustry-铂金锭/1"],
            },
            craftTime: 5,
        },
        {
            input: {
                items: ["TerrariaforMindustry-魔矿/3"],
            },
            output: {
                items: ["TerrariaforMindustry-魔锭/1"],
            },
            craftTime: 5,
        },
        // 以下为新增的腥红矿与魔矿合成配方
        {
            input: {
                items: ["TerrariaforMindustry-腥红矿/3"],
            },
            output: {
                items: ["TerrariaforMindustry-腥红锭/1"],
            },
            craftTime: 5,
        }
    ]
);