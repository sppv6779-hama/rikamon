(function(global) {
  const IMAGE_OVERRIDES = {
"baby_fighting": "https://image2url.com/r2/default/images/1771984042687-86dac35c-9fd6-4cef-b69a-b379f9564bd3.png",
      "growth_fighting": "https://image2url.com/r2/default/images/1771984097501-0518af65-813a-400f-8df1-d0e632973fa7.png",
      "mature_fighting_accuracy": "https://image2url.com/r2/default/images/1771984128472-1de5acbf-d935-4e9f-9464-e077871cdf2a.png",
      "mature_fighting_balance": "https://image2url.com/r2/default/images/1771984156428-89825e7e-8a3e-4b86-8517-1ee6f44b3199.png",
      "mature_fighting_speed": "https://image2url.com/r2/default/images/1771984176531-21ced7c9-32b3-4512-982c-ea5ade0b41ce.png",
      "perfect_fighting_accuracy": "https://image2url.com/r2/default/images/1771984253015-9aded1d9-edc4-4813-bf32-15284bc165f7.png",
      "perfect_fighting_balance": "https://image2url.com/r2/default/images/1771984275675-43fcb4e5-c1c4-4b4c-b498-e8b89d704de0.png",
      "perfect_fighting_speed": "https://image2url.com/r2/default/images/1771984296510-c4db1127-8039-468d-8f99-a790376d0503.png",
      "ultimate_fighting_accuracy": "https://image2url.com/r2/default/images/1771984319657-ba68776d-c77f-4fce-8cf0-cda010a70b9d.png",
      "ultimate_fighting_balance": "https://image2url.com/r2/default/images/1771984421992-81b1415c-351d-4207-9ee8-deb618277f22.png",
      "ultimate_fighting_speed": "https://image2url.com/r2/default/images/1771984499980-00bf23b1-e1f9-4f0c-873c-a559eb5a5788.png",
  "baby_water": "https://image2url.com/r2/default/images/1772052961365-6c1f16ee-b0ce-42f8-b0bd-055c01255582.png",
  "growth_water": "https://image2url.com/r2/default/images/1772052997810-f5d03541-f93d-493c-af50-c7fb46b6bc68.png",
  "mature_water_accuracy": "https://image2url.com/r2/default/images/1772053023058-243b9003-b781-4c9a-a29c-5635cf902da8.png",
  "mature_water_balance": "https://image2url.com/r2/default/images/1772053090389-4afcaa95-3277-4397-898b-7e6579d63711.png",
  "mature_water_speed": "https://image2url.com/r2/default/images/1772053113781-cc88db56-5cc0-42b4-a47f-e69133e559b8.png",
  "perfect_water_accuracy": "https://image2url.com/r2/default/images/1772053135543-e8484efd-ffff-48ba-9bd7-b9b25db9236c.png",
  "perfect_water_balance": "https://image2url.com/r2/default/images/1772053170285-3e4439da-d6c2-4762-a1af-f7a874e135e2.png",
  "perfect_water_speed": "https://image2url.com/r2/default/images/1772053188423-0d15c695-5c3f-4744-881d-1266bd03c913.png",
  "ultimate_water_accuracy": "https://image2url.com/r2/default/images/1772053208009-98d02e23-8751-498c-b7ba-e787fade6443.png",
  "ultimate_water_balance": "https://image2url.com/r2/default/images/1772053258584-d5fcb244-3ff5-4527-9246-db2695ebb099.png",
  "ultimate_water_speed": "https://image2url.com/r2/default/images/1772053284796-a18c69f2-7436-41df-9c75-0b6ad7170456.png",
"baby_electric": "https://image2url.com/r2/default/images/1772110757407-907b4444-1991-42e5-bbc0-b5f27ec418d2.png",
  "growth_electric": "https://image2url.com/r2/default/images/1772110778066-1e994031-8da1-46a4-944f-f8fb6b486ed1.png",
  "mature_electric_accuracy": "https://image2url.com/r2/default/images/1772110796024-c653e00f-d353-4efd-87d1-8917a5bb68b2.png",
  "mature_electric_balance": "https://image2url.com/r2/default/images/1772110815929-73964329-1507-453d-96c9-42d491f45371.png",
  "mature_electric_speed": "https://image2url.com/r2/default/images/1772110837545-7c0834cd-90e6-47b8-b9c8-65dd51643ff1.png",
  "perfect_electric_accuracy": "https://image2url.com/r2/default/images/1772110852171-7a578cbb-b8f8-4477-b87f-f90f30704657.png",
  "perfect_electric_balance": "https://image2url.com/r2/default/images/1772110869078-5f835366-9ff8-4338-9474-f476a5918528.png",
  "perfect_electric_speed": "https://image2url.com/r2/default/images/1772110919734-8fbfff14-ae2f-4b6b-9eb1-151f3cf82ab1.png",
  "ultimate_electric_accuracy": "https://image2url.com/r2/default/images/1772110937794-52fc9750-a819-403c-b876-ac858ca74ecd.png",
  "ultimate_electric_balance": "https://image2url.com/r2/default/images/1772110952461-115e8bf5-f02f-4292-ab46-b174dee245b2.png",
  "ultimate_electric_speed": "https://image2url.com/r2/default/images/1772111017897-7f6683ac-5c1d-460d-8fef-7d9859298e2b.png"
};

  const MONSTERS = {
      egg: { name: 'タマゴ', stage: 'egg', emoji: '🥚', color: '#fcd34d' },

      baby_water: { name: 'アクアベビー', stage: 'baby', type: 'water', emoji: '💧', color: '#60a5fa' },
      baby_fighting: { name: 'ファイトベビー', stage: 'baby', type: 'fighting', emoji: '👊', color: '#f97316' },
      baby_electric: { name: 'スパークベビー', stage: 'baby', type: 'electric', emoji: '⚡', color: '#facc15' },

      // 成長期（分岐なし）
      growth_water: { name: 'アクアビアル', stage: 'growth', type: 'water', emoji: '🌊', color: '#3b82f6' },
      growth_fighting: { name: 'コイルパップ', stage: 'growth', type: 'fighting', emoji: '🔥', color: '#ef4444' },
      growth_electric: { name: 'バッテリドレイク', stage: 'growth', type: 'electric', emoji: '🌟', color: '#eab308' },

      // 成熟期（水）
      mature_water_accuracy: { name: 'ケミカルシェルター', stage: 'mature', type: 'water', variant: 'accuracy', emoji: '🐋', color: '#2563eb' },
      mature_water_speed: { name: 'ラブリシール', stage: 'mature', type: 'water', variant: 'speed', emoji: '🦈', color: '#0891b2' },
      mature_water_balance: { name: 'アクア・バースト', stage: 'mature', type: 'water', variant: 'balance', emoji: '🐬', color: '#0284c7' },

      // 成熟期（格闘）
      mature_fighting_accuracy: { name: 'フルール・バウンサー', stage: 'mature', type: 'fighting', variant: 'accuracy', emoji: '🦁', color: '#dc2626' },
      mature_fighting_speed: { name: 'オーラ・ストライカー', stage: 'mature', type: 'fighting', variant: 'speed', emoji: '🐯', color: '#ea580c' },
      mature_fighting_balance: { name: 'マッシブ・コイラー', stage: 'mature', type: 'fighting', variant: 'balance', emoji: '🦅', color: '#f97316' },

      // 成熟期（電気）
      mature_electric_accuracy: { name: 'エンジェル・ボルテージ', stage: 'mature', type: 'electric', variant: 'accuracy', emoji: '🦄', color: '#ca8a04' },
      mature_electric_speed: { name: 'グリッド・ナイトメア', stage: 'mature', type: 'electric', variant: 'speed', emoji: '🐉', color: '#eab308' },
      mature_electric_balance: { name: 'ボルテクス・レックス', stage: 'mature', type: 'electric', variant: 'balance', emoji: '🦋', color: '#fbbf24' },

      // 完全体（水）
      perfect_water_accuracy: { name: 'アクア・ジェネシス', stage: 'perfect', type: 'water', variant: 'accuracy', emoji: '🔱', color: '#1d4ed8' },
      perfect_water_speed: { name: 'サイバー・ラブリシール', stage: 'perfect', type: 'water', variant: 'speed', emoji: '🌊', color: '#0e7490' },
      perfect_water_balance: { name: 'ヘヴィ・ベッセル', stage: 'perfect', type: 'water', variant: 'balance', emoji: '👑', color: '#0369a1' },

      // 完全体（格闘）
      perfect_fighting_accuracy: { name: 'パッチワーク・バタリアン', stage: 'perfect', type: 'fighting', variant: 'accuracy', emoji: '🌋', color: '#b91c1c' },
      perfect_fighting_speed: { name: 'スプリング・セイント', stage: 'perfect', type: 'fighting', variant: 'speed', emoji: '🐦‍🔥', color: '#c2410c' },
      perfect_fighting_balance: { name: 'アイアン・ウォーデン', stage: 'perfect', type: 'fighting', variant: 'balance', emoji: '👑', color: '#ea580c' },

      // 完全体（電気）
      perfect_electric_accuracy: { name: 'エターナル・カムイ', stage: 'perfect', type: 'electric', variant: 'accuracy', emoji: '⚡', color: '#a16207' },
      perfect_electric_speed: { name: 'テンペスト・ハザード', stage: 'perfect', type: 'electric', variant: 'speed', emoji: '🐲', color: '#ca8a04' },
      perfect_electric_balance: { name: 'ライデン・サイバティクス', stage: 'perfect', type: 'electric', variant: 'balance', emoji: '👑', color: '#eab308' },

      // 究極体（水）
      ultimate_water_accuracy: { name: 'アーク・オケアノス', stage: 'ultimate', type: 'water', variant: 'accuracy', emoji: '🌌', color: '#1e40af' },
      ultimate_water_speed: { name: 'クリスタル・パレス', stage: 'ultimate', type: 'water', variant: 'speed', emoji: '🌀', color: '#155e75' },
      ultimate_water_balance: { name: 'トライデントレガリア', stage: 'ultimate', type: 'water', variant: 'balance', emoji: '👑', color: '#0c4a6e' },

      // 究極体（格闘）
      ultimate_fighting_accuracy: { name: 'パンドラ・トイ・キングダム', stage: 'ultimate', type: 'fighting', variant: 'accuracy', emoji: '☄️', color: '#7f1d1d' },
      ultimate_fighting_speed: { name: 'センジュ・コイル・デヴァ', stage: 'ultimate', type: 'fighting', variant: 'speed', emoji: '🌠', color: '#9a3412' },
      ultimate_fighting_balance: { name: 'タイタン・スプリング・デウス', stage: 'ultimate', type: 'fighting', variant: 'balance', emoji: '👑', color: '#c2410c' },

      // 究極体（電気）
      ultimate_electric_accuracy: { name: 'ヘヴンズ・オーム・セラフィム', stage: 'ultimate', type: 'electric', variant: 'accuracy', emoji: '⚡', color: '#713f12' },
      ultimate_electric_speed: { name: 'ヴォルテック・ストーム', stage: 'ultimate', type: 'electric', variant: 'speed', emoji: '🌩️', color: '#854d0e' },
      ultimate_electric_balance: { name: 'デウス・エクス・ケラウノス', stage: 'ultimate', type: 'electric', variant: 'balance', emoji: '👑', color: '#a16207' }
    };

  const DESCRIPTIONS = {
        egg: 'まだ何も知らないタマゴ。どんな力が目覚めるのか、可能性がつまっている。',
        baby_water: 'アクアベビー。水に親しむ小さな研究員。質量パーセント濃度の計算を覚えるほど、しずくの動きが安定していく。',
        baby_fighting: 'ファイトベビー。バネの反動でぴょんぴょん動く元気者。フックの法則を学ぶほど、パンチのキレが増す。',
        baby_electric: 'スパークベビー。体に小さな放電が走る。オームの法則（V=IR）を理解すると、光るリズムが整っていく。',

        growth_water: '自身の体よりも大きなフラスコを宝物のように抱えた海獣の子供。フラスコの中には高濃度の魔力水が満たされている。本人はその強大な力に気づいておらず、中身がパシャパシャと跳ねる音を楽しむために、いつも元気に跳ね回っている。',
        growth_fighting: '体の各所が小さなバネで構成された武道家の卵。ぴょんぴょんと跳ね回ることで攻撃を回避し、隙を見て「ばね」の反動を活かした正拳突きを放つ。',
        growth_electric: '胸部にエネルギー残量を表示する「蓄電メーター」を持つドラゴンの幼体。尻尾の先がコンセントプラグになっており、好奇心旺盛にいろいろな端子に尻尾を差し込んでは感電して喜んでいる。まだ放電する力は弱いが、体内に溜め込める電力のポテンシャルは計り知れず、将来の爆発的な進化を予感させる。',

        mature_water_accuracy: '「堅牢」を体現した重厚な姿。背負っていたフラスコは変質し、硬質の岩石と融合して難攻不落の甲羅となった。甲羅から突き出した複数の瓶からは常に特殊な冷却液が噴出しており、周囲に水の障壁を展開することで、あらゆる物理攻撃を無効化する。',
        mature_water_speed: '「もっと可愛くなりたい！」という強い願いによって進化した姿。フラスコは増殖し、リボンや宝石で着飾ることで、自身の愛らしさを最大限にアピールしているアイドルモンスター。フラスコの中の水は、浴びた者を幸せな気分にさせる「ハッピー・リキッド」に変化した。戦闘は好まないが、しつこい相手には、フラスコからキラキラした高圧の水流を放つ。',
        mature_water_balance: '「力強い」進化を遂げ、かつて抱えていたフラスコを肩に埋め込むことでエネルギーを肉体へと直接還元した姿。常に高圧の水流が肩から噴き出しており、その圧力によって筋肉が異常発達している。性格は極めて気性が荒く、自慢の牙で氷山を砕き、邪魔な存在を水圧で吹き飛ばす海の暴君。',

        mature_fighting_accuracy: '「可愛さこそが最強の武器」と悟り、華やかな衣装を纏った成熟期。見た目に反して、ばねの伸縮を一点に集中させた「スプリング・ストレート」は岩石をも粉砕する。',
        mature_fighting_speed: '厳しい修行の末、体内のエネルギーを黄金のオーラとして具現化し、鎧のように纏うことができるようになった成熟期。精神統一によってばねの弾性を自在にコントロールし、鋼鉄をも砕く強烈な正拳突きを放つ。',
        mature_fighting_balance: 'バネの密度が極限まで高まり、並大抵の攻撃では傷ひとつつかない鉄壁の肉体を得た姿。体内に蓄えたエネルギーを熱へと変換し、炎のオーラを纏いながら重戦車のように突進する。',

        mature_electric_accuracy: '神聖な力に目覚め、四枚の輝く翼を得た優雅な姿の竜。胸の電池は高密度の「ホーリー・リチウム」へと変化し、そこから生み出される電気は黄金の輪となって全身を包んでいる。邪悪なウイルスを浄化する「神聖放電」を操り、空から降り注ぐ雷は受ける者の属性によって、癒やしにも裁きにもなるという。その羽ばたきは電子の調べを奏で、戦場を静寂へと導く。',
        mature_electric_speed: 'スマートで冷徹な姿となったドラゴンの暗殺者。翼はソーラーパネルのような特殊な皮膜に覆われ、月明かりやわずかな光からも電力を吸収する。実体を持たない「電磁の影」を操って敵を幻惑し、影から影へと音もなく移動して背後からプラグ状の尾で致命的な放電を叩き込む。',
        mature_electric_balance: '力強い進化を遂げ、背中に巨大な「超高圧バッテリー」を背負った重量級の格闘竜。筋肉の発達に伴い、溢れ出す電力を制御しきれず、常に全身から青白い放電が漏れ出している。野生の荒々しさと電気エネルギーが融合しており、体当たり一つで都市の電網をショートさせるほどの破壊力を持つ。その咆哮は雷鳴そのもの。',

        perfect_water_accuracy: '背中の甲羅がひとつの生態系へと進化した姿。常に清らかな滝が流れ落ち、そこから生まれる精霊たちが周囲を浮遊している。もはや戦うための姿ではなく、傷ついた海を癒やすために存在する「移動する聖域」そのものである。',
        perfect_water_speed: '「世界中に可愛さとハッピーを届けたい」という使命感に目覚め、自らの体を機械化した。愛らしい外見はそのままに、四肢は強力なスラスターとなり、陸海空を自由に高速移動できるようになった。背中に背負った巨大なフラスコ型キャノンは、体内で精製した超高濃度のエネルギー液を充填しており、それを結晶化させて撃ち出す「クリスタル・キャノン・バースト」は、見た目の美しさに反して凄まじい破壊力を持つ。メカニカルなボディになっても、お茶目な性格は変わっていない。',
        perfect_water_balance: '暴走するエネルギーを制御するため、自らの肉体を強化ガラスと鋼鉄の装甲で包み込んだ重装歩兵。かつての「器」は、敵を粉砕するための巨大な質量兵器「デッドリー・フラスコ・ハンマー」へと形を変えた。内部に渦巻く超高圧の水流は、一振りで次元の壁すら歪める衝撃波を生み出す。冷静な戦士の瞳には、もはや幼い頃の無邪気さは残っていない。',

        perfect_fighting_accuracy: '進化の過程で、本体である豆が爆発的に増殖し、巨大なぬいぐるみの器を乗っ取った突然変異体。つぎはぎの体のあちこちにあるジッパーからは、常に新たな豆たちが「次の一手」を求めて覗いている。もはや個体としての意思はなく、集団の連携によって圧倒的な手数で敵を袋叩きにする。',
        perfect_fighting_speed: '武の道を極め、悟りを開いたことで神聖な存在へと進化した完全体。背中から放出される光のエネルギーが翼となり、重力から解き放たれて空中に浮遊している。もはや物理的な打撃を必要とせず、触れた相手の闘争心を浄化してしまうほどの聖なる波動を放つ。',
        perfect_fighting_balance: '自らの肉体をも超える巨大な「爆砕槌（スプリング・ハンマー）」と「重装盾」を装備した重装騎士。バネの伸縮を利用して巨大な獲物を軽々と振り回し、その衝撃波で敵を一掃する戦場の門番。',

        perfect_electric_accuracy: '肉体が「自然の精霊（雷雲）」へと変質した超越的な姿。全身の約半分が実体を失い、帯電した雲と浮遊するクリスタルへと変化している。もはや物理的な電池に頼る必要はなく、大気中の電子を無限に取り込み、自身の力へと変換できる。常に宙に浮き、足元から発生する巨大な竜巻と稲妻は彼の意思そのもの。自然現象を体現する姿でありながら、その眼差しには慈愛が満ちており、世界の均衡を乱す者には大自然の怒りをもって対峙する。',
        perfect_electric_speed: '成熟期の狡猾さを維持したまま、膨大な電力によって肉体が自然へと回帰した姿。全身の約半分が実体を失い、荒れ狂う雨雲と帯電した氷の結晶へと変質している。頭部には巨大な雷ボルト状の角が突き刺さり、常に周囲に局地的な落雷と竜巻を引き起こす。狡猾に嵐を操り、敵が疲弊した瞬間に「雲の体」で包み込んで内部から数万ボルトの電圧で分解する。かつての「電池」の面影は消え、世界そのものを脅かす「歩く気象災害」へと変貌した。',
        perfect_electric_balance: 'さらなる高出力を追求した結果、肉体を機械化した重装サイボーグ形態。右腕に装備された「多銃身型電磁ガトリング」は、自身の雷エネルギーを弾丸として射出し、鋼鉄の装甲すら容易に貫通する。背部の放熱フィンと機械翼により、莫大なエネルギー消費によるオーバーヒートを回避しつつ、空戦も可能となった。冷徹な電子頭脳とドラゴンの闘争本能が共存する、歩く戦略兵器。',

        ultimate_water_accuracy: '惑星のあらゆる水の源泉であり、全ての生命の種の守護者となった究極の存在。「フラスコ」は、生命の起源そのものを封じ込めた、決して破壊されることのない「聖なる櫃（アーク）」へと進化した。背中のクリスタル宮殿の内部には、太古の純粋な海洋環境がそのまま保存されており、世界の海が汚染され尽くした時、新たな創世を行うための「バックアップ」としての機能を持つ。',
        ultimate_water_speed: '海にある膨大なデータを吸収し、超巨大な「動くガラスの城塞」へと進化した姿。本体のアザラシ部分は城の制御ユニットとなり、背中にはフラスコが変化した巨大で美しいクリスタルの宮殿がそびえ立っている。宮殿の内部は、あらゆる生物が楽しく過ごせる理想郷となっており、常にパーティーが開かれている。しかし、外敵に対しては、宮殿の各所に設置された無数の砲門から、虹色の破壊光線を一斉発射し、一切の慈悲なく殲滅する。その姿は、まさに鉄壁の守りと圧倒的な火力を兼ね備えた、動く幻想都市である。',
        ultimate_water_balance: '海の最深部、超高圧の領域に封印されていた古代の遺産「海王のレガリア」と融合し、伝説の海神として覚醒した究極の神人型モンスター。背中に背負ったフラスコは、無限の海水を生成し続ける神器「アクア・グレイル」となり、そこから溢れ出る膨大なエネルギーが、自らの意志を持つ水龍として具現化している。手に持つ巨大な槍は、一振りで巨大な嵐を呼び、海を割るほどの雷撃を放つ権能を持つ。普段は深海の神殿で玉座に座り、海全域を静かに統治しているが、領域を侵す愚か者には、荒ぶる神としての容赦ない鉄槌を下す。',

        ultimate_fighting_accuracy: '増殖し続けた豆たちが、ついに器であるぬいぐるみの許容量を超え、周囲の建物やデータそのものを取り込んで巨大な「移動型領土」へと進化した姿。その巨体は、一見すると陽気な移動遊園地やサーカス団のように見えるが、中身は数億の豆たちが支配する混沌とした王国である。',
        ultimate_fighting_speed: '修行の果てに「個」としての肉体を捨て、世界の善なる思念と一体化した伝説の武神。もはや物理的な「ばね」の構造を超越し、因果そのものを伸縮・反転させる「理（ことわり）のバネ」を司る。',
        ultimate_fighting_balance: '「鉄壁の門番」が、世界の危機に際して限界を超えた進化を遂げた姿。その肉体は、世界全体を支える「世界の柱」そのものとも言われ、神話に語られる巨神（タイタン）のごとき威容を誇る。',

        ultimate_electric_accuracy: '世界の創生期から存在する「始原の雷データ」を継承し、六枚の翼を持つ熾天使の姿で現出した究極形態。もはや個別の生命体ではなく、世界に循環する全てのエネルギーの「抵抗（流れ）」を調整し、平穏を保つための「聖なる変電神」として定義されている。胸部に宿る「ジェネシス・セル」は、かつての電池の概念を超越した無限のエネルギー生成炉であり、ここから放たれる輝きは闇を払い、傷ついたモンスターのデータを瞬時に修復する。',
        ultimate_electric_speed: '世界の気象制御サーバーをハッキングし、その全権限を奪取することで進化した究極の姿。もはや「嵐」という現象を操るのではなく、自らが「大気の意思」として君臨している。「狡猾」な性質は神の如き冷徹さへと昇華されており、直接手を下すことなく、敵対する勢力を異常気象や連続する落雷によって静かに、そして確実に自滅へと追い込む。右手に持つ巨大な雷鎚は、かつての電池の概念を遥かに超え、惑星一つを焼き尽くすほどの電気エネルギーを一撃で放電する。',
        ultimate_electric_balance: '世界中に存在する膨大な電磁データと古代の神殿遺跡データを同時に取り込み、限界突破の果てに神格化した究極の姿。もはや単なる戦闘兵器ではなく、世界における全てのエネルギー循環を監視・管理する「雷神」として君臨している。普段はネットワークの最深部にある「雷雲の神域」で静観を貫いているが、世界の均衡を大きく乱す存在が現れた時、天罰として六枚の翼から惑星規模の裁きの雷を解き放つ。'
      };

  function getDescription(monsterKey) {
    return DESCRIPTIONS[monsterKey] || '未知のモンスター。さらなる研究が必要です。';
  }

  global.MonsterData = {
    imageOverrides: IMAGE_OVERRIDES,
    monsters: MONSTERS,
    descriptions: DESCRIPTIONS,
    getDescription
  };
})(window);
