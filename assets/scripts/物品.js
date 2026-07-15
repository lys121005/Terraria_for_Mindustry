function newItem(name) {
    exports[name] = (() => {
        let myItem = extend(Item, name, {});
        return myItem;
    })();
}

// 矿石
newItem("铜矿");
newItem("锡矿");
newItem("铁矿");
newItem("铅矿");
newItem("银矿");
newItem("钨矿");
newItem("金矿");
newItem("铂金矿");
// 新增：腥红矿与魔矿
newItem("腥红矿");
newItem("魔矿");

// 锭
newItem("锡锭");
newItem("铁锭");
newItem("银锭");
newItem("钨锭");
newItem("金锭");
newItem("铂金锭");
// 新增：对应合成出的腥红锭与魔锭
newItem("腥红锭");
newItem("魔锭");
newItem("魔金");