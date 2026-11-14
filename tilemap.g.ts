// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`15001300000000000000000000000000000000000000000000010101010101010101010101010100000000000000040404030303030303000000000101010101000100010101010101010101010001000103030003000100040403030303030000030001000101010001000100010101010101010100010001000000010001030100000000000000000100010001040100010301030100010101010101010100010001030100010301030100040000030303000000010301030100010301040100010101010101010100010301010100010301030100020000030303000000010401060000010001030100010101010101010100010001000101010001030100000000000000030100010001000103000001000100000101010101030100010001000100010001000100040101010101030101010101000100010001000100000000030303030000000000030000010301000100010101010101010101010101010100010301000100040404040303030303030303000000010301000100010101010101010101010101010100010401000005`, img`
.....................
22222222222222.......
.............22222.2.
2222222222.2.2.....2.
...........2.222.2.2.
22222222.2.2...2.2.2.
.......2.2.2.2.2.2.2.
22222222.2.2.2.2.2.2.
.........2.2.2.2.2.2.
22222222.2.222.2.2.2.
.........2.2...2.2.2.
22222222.2.2.222.2.2.
.......2.2.2.2...2.2.
.22222.2.2.2.2.2.2.2.
.22222.22222.2.2.2.2.
...............2.2.2.
22222222222222.2.2.2.
...............2.2.2.
22222222222222.2.2...
`, [myTiles.transparency16,myTiles.tile4,myTiles.tile5,myTiles.tile1,myTiles.tile6,myTiles.tile7,myTiles.tile8], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
