/* 音タイプ: 距離・時間・速さ、雷、反響。問題文の条件から答えを算出。 */
(function (global) {
  'use strict';
  const choose = items => items[Math.floor(Math.random() * items.length)];
  const round = value => Math.round(value * 10) / 10;
  function generateSoundQuestion() {
    const kind = choose(['distance', 'time', 'speed', 'thunder', 'echo_distance', 'echo_time', 'echo_speed']);
    const speed = choose([320, 330, 340, 350]);
    const time = choose([0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.5, 2, 3]);
    const travelDistance = round(speed * time);
    const distance = kind.startsWith('echo_') ? round(travelDistance / 2) : travelDistance;
    const values = { speed, time, distance, travelDistance };
    let text, answer, unit, hint;
    if (kind === 'distance') {
      text = `音の速さが${speed}m/sのとき、音が${time}秒間に進む距離は何mですか？`;
      answer = distance; unit = 'm';
      hint = `距離(m) = 音の速さ(m/s) × 時間(秒)\n= ${speed} × ${time}`;
    } else if (kind === 'time') {
      text = `音の速さが${speed}m/sのとき、音が${distance}m先の人に届くまで何秒かかりますか？`;
      answer = time; unit = '秒';
      hint = `時間(秒) = 距離(m) ÷ 音の速さ(m/s)\n= ${distance} ÷ ${speed}`;
    } else if (kind === 'speed') {
      text = `${distance}m離れた場所で出た音が${time}秒後に届きました。このときの音の速さは何m/sですか？`;
      answer = speed; unit = 'm/s';
      hint = `音の速さ(m/s) = 距離(m) ÷ 時間(秒)\n= ${distance} ÷ ${time}`;
    } else if (kind === 'thunder') {
      text = `稲妻が光ってから${time}秒後に雷鳴が聞こえました。音の速さを${speed}m/sとすると、雷が発生した場所までの距離は何mですか？ 光が届く時間は無視します。`;
      answer = distance; unit = 'm';
      hint = `光が届く時間を無視すると、${time}秒は音が届くまでの時間です。\n距離(m) = 音の速さ(m/s) × 時間(秒)\n= ${speed} × ${time}\n雷の音は片道なので、2では割りません。`;
    } else if (kind === 'echo_distance') {
      text = `大きな壁に向かって音を出すと、${time}秒後に反射した音が同じ場所へ戻りました。音の速さを${speed}m/sとすると、壁までの距離は何mですか？`;
      answer = distance; unit = 'm';
      hint = `音は壁まで行って戻るため、進んだ距離は壁までの2倍です。\n壁までの距離(m) = 音の速さ(m/s) × 往復時間(秒) ÷ 2\n= ${speed} × ${time} ÷ 2`;
    } else if (kind === 'echo_time') {
      text = `${distance}m先の壁に向かって音を出しました。音の速さを${speed}m/sとすると、反射した音が同じ場所へ戻るまで何秒かかりますか？`;
      answer = time; unit = '秒';
      hint = `音の進む往復距離(m) = 壁までの距離(m) × 2\n往復時間(秒) = 往復距離(m) ÷ 音の速さ(m/s)\n= ${distance} × 2 ÷ ${speed}`;
    } else {
      text = `${distance}m先の壁に向かって音を出すと、${time}秒後に反射した音が同じ場所へ戻りました。このときの音の速さは何m/sですか？`;
      answer = speed; unit = 'm/s';
      hint = `音は壁まで往復しています。\n音の速さ(m/s) = 壁までの距離(m) × 2 ÷ 往復時間(秒)\n= ${distance} × 2 ÷ ${time}`;
    }
    return { kind, question: text, answer: round(answer), unit, hint, values, explanation: `📋 解き方：\n${hint}` };
  }
  global.GenreSystem.registerGenre('sound', {
    label: '音タイプ', shortName: '音', emoji: '♪',
    subtitle: '音の速さ・伝わる時間・反響',
    buttonClass: 'bg-gradient-to-r from-violet-500 to-fuchsia-600 hover:from-violet-600 hover:to-fuchsia-700',
    badgeClass: 'bg-violet-600',
    explanation: '📋 解き方：\n距離(m) = 音の速さ(m/s) × 時間(秒)\n時間(秒) = 距離(m) ÷ 音の速さ(m/s)\n音の速さ(m/s) = 距離(m) ÷ 時間(秒)\n\n反響では音が往復します。\n壁までの距離 = 音の速さ × 往復時間 ÷ 2\n雷鳴の問題は片道です。\n音の速さは問題文の値を使います。',
    generateQuestion: generateSoundQuestion
  });
  const entries = SOUND_MONSTER_DATA;
  for (const [key, monster] of Object.entries(entries)) {
    global.MonsterData.monsters[key] = { ...monster, type: 'sound', emoji: '♪', color: '#c084fc' };
    global.MonsterData.descriptions[key] = monster.description;
    global.MonsterData.imageOverrides[key] = `https://sppv6779-hama.github.io/rikamon/assets/sound-20261105/${key}.png`;
  }
})(window);
