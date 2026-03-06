(function(global) {
  const GENRES = {
    water: {
      label: '水タイプ',
      shortName: '水',
      emoji: '💧',
      subtitle: '質量パーセント濃度',
      buttonClass: 'bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-600',
      badgeClass: 'bg-blue-500',
      explanation: `📋 解き方：\n濃度(%) = (溶質の質量g) ÷ (溶液の質量g) × 100\n\nポイント：\n• 溶液 = 溶質 + 溶媒\n• 濃度の単位は%です\n• 小数第1位で四捨五入`,
      generateQuestion: generateConcentrationQuestion
    },
    fighting: {
      label: '格闘タイプ',
      shortName: '格闘',
      emoji: '💪',
      subtitle: 'フックの法則',
      buttonClass: 'bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600',
      badgeClass: 'bg-orange-500',
      explanation: `📋 解き方：\nバネは、加えた力に比例してのびます。\n\nポイント：\n• 「1Nあたり何cmのびるか」を使って考えます\n• のび(cm) = 力(N) × (1Nあたりのびる長さ)\n• 力(N) = のび(cm) ÷ (1Nあたりのびる長さ)`,
      generateQuestion: generateHookQuestion
    },
    electric: {
      label: '電気タイプ',
      shortName: '電気',
      emoji: '⚡',
      subtitle: 'オームの法則',
      buttonClass: 'bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600',
      badgeClass: 'bg-yellow-500',
      explanation: `📋 解き方：\nオームの法則: V = IR\n(V: 電圧[V], I: 電流[A], R: 抵抗[Ω])\n\nポイント：\n• 電圧と電流は比例関係\n• 抵抗が大きいほど電流は小さくなります`,
      generateQuestion: generateOhmQuestion
    },
    wind: {
      label: '風タイプ',
      shortName: '風',
      emoji: '🌪️',
      subtitle: '圧力の計算',
      buttonClass: 'bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600',
      badgeClass: 'bg-teal-500',
      explanation: `📋 解き方：\n圧力(Pa) = 力(N) ÷ 面積(cm²)\n\nポイント：\n• 力が大きいほど圧力は大きくなります\n• 面積が小さいほど圧力は大きくなります\n• 求めたい値に合わせて式を変形しましょう`,
      generateQuestion: generatePressureQuestion
    }
  };

  function listGenres() {
    return Object.entries(GENRES).map(([key, value]) => ({ key, ...value }));
  }

  function getGenre(type) {
    return GENRES[type] || GENRES.water;
  }

  function generateQuestion(type) {
    return getGenre(type).generateQuestion();
  }

  function generateConcentrationQuestion() {
    const types = ['find_percent', 'find_solute', 'find_solution'];
    const type = types[Math.floor(Math.random() * types.length)];

    let solute, solution, percent, answer, question, hint;
    do {
      percent = (Math.floor(Math.random() * 9) + 1) * 10;
      solution = (Math.floor(Math.random() * 9) + 2) * 10;
      solute = solution * percent / 100;

      if (type === 'find_percent') {
        answer = percent;
        question = `${solution}gの水溶液に${solute}gの溶質が溶けている。この水溶液の濃度は何％？`;
        hint = `濃度(%) = 溶質 ÷ 溶液 × 100\n= ${solute} ÷ ${solution} × 100`;
      }

      if (type === 'find_solute') {
        answer = solute;
        question = `${percent}%の水溶液を${solution}g作るには、溶質は何g必要？`;
        hint = `溶質 = 溶液 × 濃度 ÷ 100\n= ${solution} × ${percent} ÷ 100`;
      }

      if (type === 'find_solution') {
        answer = solution;
        question = `${percent}%の水溶液で溶質が${solute}gある。この水溶液は全部で何g？`;
        hint = `溶液 = 溶質 ÷ 濃度 × 100\n= ${solute} ÷ ${percent} × 100`;
      }
    } while (!Number.isInteger(answer) || !(answer <= 9 || answer % 10 === 0));

    return {
      question,
      answer,
      hint,
      unit: type === 'find_percent' ? '%' : 'g'
    };
  }

  function generateHookQuestion() {
    const questionTypes = ['find_force', 'find_extension'];
    const qType = questionTypes[Math.floor(Math.random() * questionTypes.length)];

    const cmPerNOptions = [1, 2, 3, 4, 5, 6, 8, 10];
    const cmPerN = cmPerNOptions[Math.floor(Math.random() * cmPerNOptions.length)];
    const x = Math.floor(Math.random() * 10) + 1;

    if (qType === 'find_force') {
      const extension = x * cmPerN;
      return {
        question: `1Nあたり${cmPerN}cmのびるバネを${extension}cmのばすには、何Nの力が必要ですか？`,
        answer: x,
        hint: `力(N) = のび(cm) ÷ (1Nあたりのびる長さ)\n= ${extension} ÷ ${cmPerN}`,
        unit: 'N'
      };
    }

    const force = x;
    const extension = force * cmPerN;
    return {
      question: `1Nあたり${cmPerN}cmのびるバネに${force}Nの力を加えると、何cmのびますか？`,
      answer: extension,
      hint: `のび(cm) = 力(N) × (1Nあたりのびる長さ)\n= ${force} × ${cmPerN}`,
      unit: 'cm'
    };
  }

  function generateOhmQuestion() {
    const questionTypes = ['find_voltage', 'find_current', 'find_resistance'];
    const qType = questionTypes[Math.floor(Math.random() * questionTypes.length)];

    const R = (Math.floor(Math.random() * 10) + 1) * 2;
    const I = Math.floor(Math.random() * 5) + 1;
    const V = I * R;

    if (qType === 'find_voltage') {
      return {
        question: `${R}Ωの抵抗に${I}Aの電流が流れています。電圧は何Vですか？`,
        answer: V,
        hint: `電圧(V) = 電流(A) × 抵抗(Ω)\n= ${I} × ${R}`,
        unit: 'V'
      };
    }

    if (qType === 'find_current') {
      return {
        question: `${R}Ωの抵抗に${V}Vの電圧をかけました。流れる電流は何Aですか？`,
        answer: I,
        hint: `電流(A) = 電圧(V) ÷ 抵抗(Ω)\n= ${V} ÷ ${R}`,
        unit: 'A'
      };
    }

    return {
      question: `${V}Vの電圧をかけたら${I}Aの電流が流れました。抵抗は何Ωですか？`,
      answer: R,
      hint: `抵抗(Ω) = 電圧(V) ÷ 電流(A)\n= ${V} ÷ ${I}`,
      unit: 'Ω'
    };
  }

  function generatePressureQuestion() {
    const questionTypes = ['find_pressure', 'find_force', 'find_area'];
    const qType = questionTypes[Math.floor(Math.random() * questionTypes.length)];

    const area = Math.floor(Math.random() * 9) + 2; // 2〜10 cm²
    const pressure = (Math.floor(Math.random() * 9) + 2) * 10; // 20〜100 Pa
    const force = pressure * area;

    if (qType === 'find_pressure') {
      return {
        question: `${force}Nの力が${area}cm²の面にかかるとき、圧力は何Paですか？`,
        answer: pressure,
        hint: `圧力(Pa) = 力(N) ÷ 面積(cm²)\n= ${force} ÷ ${area}`,
        unit: 'Pa'
      };
    }

    if (qType === 'find_force') {
      return {
        question: `${pressure}Paの圧力を${area}cm²の面にかけるには、何Nの力が必要ですか？`,
        answer: force,
        hint: `力(N) = 圧力(Pa) × 面積(cm²)\n= ${pressure} × ${area}`,
        unit: 'N'
      };
    }

    return {
      question: `${force}Nの力で${pressure}Paの圧力をかけるとき、面積は何cm²ですか？`,
      answer: area,
      hint: `面積(cm²) = 力(N) ÷ 圧力(Pa)\n= ${force} ÷ ${pressure}`,
      unit: 'cm²'
    };
  }

  global.GenreSystem = {
    listGenres,
    getGenre,
    generateQuestion
  };
})(window);
