(function (name, data) {
  if (typeof onTileMapLoaded === 'undefined') {
    if (typeof TileMaps === 'undefined') TileMaps = {};
    TileMaps[name] = data;
  } else {
    onTileMapLoaded(name, data);
  }
  if (typeof module === 'object' && module && module.exports) {
    module.exports = data;
  }
})('level1', {
  compressionlevel: -1,
  height: 20,
  infinite: false,
  layers: [
    {
      data: [
        355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355,
        355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355,
        355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355,
        355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355,
        355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355,
        355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355,
        355, 679, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355,
        355, 355, 355, 355, 355, 355, 355, 679, 355, 355, 355, 355, 355, 355,
        355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355,
        355, 355, 355, 355, 355, 355, 355, 679, 355, 355, 355, 355, 355, 355,
        355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 679,
        355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355,
        355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355,
        355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355,
        355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355,
        355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355,
        355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355,
        355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355,
        355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355,
        355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355,
        355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355,
        355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355,
        355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355,
        355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355,
        355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355,
        355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355,
        355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355,
        355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355, 355,
        355, 355, 355, 355, 355, 355, 355, 355
      ],
      height: 20,
      id: 2,
      name: 'Background',
      opacity: 1,
      type: 'tilelayer',
      visible: true,
      width: 20,
      x: 0,
      y: 0
    },
    {
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 0, 72, 0, 0, 0, 277,
        278, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 11, 72, 11, 72, 0, 0, 333,
        334, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 72, 11, 72, 11, 0, 0, 389,
        390, 0, 0, 51, 52, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 11, 0, 0, 0, 445, 446,
        0, 0, 107, 108, 0, 0, 0, 0, 245, 246, 360, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        679, 163, 164, 0, 0, 0, 247, 301, 302, 416, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 219, 220, 0, 0, 0, 0, 0, 360, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 416, 277, 278, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 333, 334, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 389, 390, 0, 0, 0, 0, 0, 0, 634, 635, 636, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 445, 446, 0, 0, 0, 0, 0, 0, 690, 858, 692, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 746, 747, 748, 0, 0, 0, 0, 0, 0, 0, 481, 482,
        0, 0, 0, 0, 0, 303, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 537, 538, 0, 0,
        0, 303, 0, 0, 304, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 593, 594, 0, 0, 0,
        0, 0, 182, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 649, 650, 0, 0, 0, 0,
        304, 0, 303, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 705, 706, 0, 0, 0, 0, 0,
        0, 0, 13, 13, 14, 0, 0, 0, 0, 0, 0, 0, 0, 761, 762, 0, 0, 0, 0, 0, 0, 0,
        10, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 11, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ],
      height: 20,
      id: 1,
      name: 'Tile Layer 1',
      opacity: 0.99,
      type: 'tilelayer',
      visible: true,
      width: 20,
      x: 0,
      y: 0
    },
    {
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ],
      height: 20,
      id: 4,
      name: 'Monster',
      opacity: 1,
      type: 'tilelayer',
      visible: false,
      width: 20,
      x: 0,
      y: 0
    }
  ],
  nextlayerid: 5,
  nextobjectid: 1,
  orientation: 'orthogonal',
  renderorder: 'right-down',
  tiledversion: '1.8.2',
  tileheight: 32,
  tilesets: [
    {
      firstgid: 1,
      source: 'Zen Garden.tsx'
    }
  ],
  tilewidth: 32,
  type: 'map',
  version: '1.8',
  width: 20
});
