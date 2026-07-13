const library = require("base/library");
//const myitems = require("资源");

const furnace = library.MultiCrafter(
    GenericCrafter, 
    GenericCrafter.GenericCrafterBuild, 
    "熔炉", 
    [
        {
            input: {
                items: ["泰拉世纪工厂-铜矿/5"],
                liquids: [],
            },
            output: {
                items: ["copper/1"],
            },
            craftTime: 5,
        },
       
        {
            input: {
                items: ["泰拉世纪工厂-锡矿/3"],
            },
            output: {
                items: ["泰拉世纪工厂-锡锭/1"],
            },
            craftTime: 5,
        },
        
        {
            input: {
                items: ["泰拉世纪工厂-铁矿/3"],
            },
            output: {
                items: ["泰拉世纪工厂-铁锭/1"],
            },
            craftTime: 5,
        },
        
        {
            input: {
                items: ["泰拉世纪工厂-铅矿/3"],
            },
            output: {
                items: ["lead/1"],
            },
            craftTime: 5,
        },
        
        {
            input: {
                items: ["泰拉世纪工厂-银矿/4"],
            },
            output: {
                items: ["泰拉世纪工厂-银锭/1"],
            },
            craftTime: 5,
        },
        
        {
            input: {
                items: ["泰拉世纪工厂-钨矿/4"],
            },
            output: {
                items: ["泰拉世纪工厂-钨锭/1"],
            },
            craftTime: 5,
        },
        
        {
            input: {
                items: ["泰拉世纪工厂-金矿/4"],
            },
            output: {
                items: ["泰拉世纪工厂-金锭/1"],
            },
            craftTime: 5,
        },
        
        {
            input: {
                items: ["泰拉世纪工厂-铂金矿/4"],
            },
            output: {
                items: ["泰拉世纪工厂-铂金锭/1"],
            },
            craftTime: 5,
        },
        {
            input: {
                items: ["泰拉世纪工厂-魔矿/3"],
            },
            output: {
                items: ["泰拉世纪工厂-魔锭/1"],
            },
            craftTime: 5,
        },
        // 以下为新增的腥红矿与魔矿合成配方
        {
            input: {
                items: ["泰拉世纪工厂-腥红矿/3"],
            },
            output: {
                items: ["泰拉世纪工厂-腥红锭/1"],
            },
            craftTime: 5,
        }
    ]
);