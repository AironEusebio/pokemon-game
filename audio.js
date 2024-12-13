const audio = {
  Map: new Howl({
    src: "./audio/map.wav",
    html5: true,
    volume: 0.1,
    loop: true,
  }),
  initBattle: new Howl({
    src: "./audio/initBattle.wav",
    html5: true,
    volume: 0.1,
  }),
  battle: new Howl({
    src: "./audio/battle.mp3",
    html5: true,
    volume: 0.1,
    loop: true,
  }),
  tackleHit: new Howl({
    src: "./audio/tackleHit.wav",
    html5: true,
    volume: 0.1,
  }),
  victory: new Howl({
    src: "./audio/victory.wav",
    html5: true,
    volume: 1,
  }),
  level2: new Howl({
    src: "./audio/level2.mp3",
    html5: true,
    volume: 1,
    loop: true,
  }),
  level3: new Howl({
    src: "./audio/level3.mp3",
    html5: true,
    volume: 1,
    loop: true,
  }),
};
