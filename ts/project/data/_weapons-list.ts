export type Buki = {
    id: number;
    lid: number;
    ja: string;
    en: string;
    original: string;
    season: string;
    rank: number;
    sub: string;
    sp: string;
    type: string;
};

export const bukiListNormal:Buki[] = [
    { id: 0, lid: 20, ja: "ボールドマーカー", en: "Sploosh-o-matic", original: "ボールドマーカー", season: "0", rank: 9, sub: "curlingbomb", sp: "ultrahanko", type: "shooter",  },
    { id: 10, lid: 0, ja: "わかばシューター", en: "Splattershot Jr.", original: "わかばシューター", season: "0", rank: 1, sub: "splashbomb", sp: "greatbarrier", type: "shooter",  },
    { id: 20, lid: 30, ja: "シャープマーカー", en: "Splash-o-matic", original: "シャープマーカー", season: "0", rank: 16, sub: "quickbomb", sp: "kanitank", type: "shooter",  },
    { id: 30, lid: 40, ja: "プロモデラーMG", en: "Aerospray MG", original: "プロモデラーMG", season: "0", rank: 5, sub: "tansanbomb", sp: "sameride", type: "shooter",  },
    { id: 40, lid: 10, ja: "スプラシューター", en: "Splattershot", original: "スプラシューター", season: "0", rank: 2, sub: "kyubanbomb", sp: "ultrashot", type: "shooter",  },
    { id: 50, lid: 60, ja: ".52ガロン", en: ".52 Gal", original: ".52ガロン", season: "0", rank: 11, sub: "splashshield", sp: "megaphone51", type: "shooter",  },
    { id: 60, lid: 50, ja: "N-ZAP85", en: "N-ZAP '85", original: "N-ZAP85", season: "0", rank: 6, sub: "kyubanbomb", sp: "energystand", type: "shooter",  },
    { id: 70, lid: 80, ja: "プライムシューター", en: "Splattershot Pro", original: "プライムシューター", season: "0", rank: 9, sub: "linemarker", sp: "kanitank", type: "shooter",  },
    { id: 80, lid: 70, ja: ".96ガロン", en: ".96 Gal", original: ".96ガロン", season: "0", rank: 17, sub: "sprinkler", sp: "kyuinki", type: "shooter",  },
    { id: 90, lid: 90, ja: "ジェットスイーパー", en: "Jet Squelcher", original: "ジェットスイーパー", season: "0", rank: 15, sub: "linemarker", sp: "kyuinki", type: "shooter",  },
    { id: 100, lid: 150, ja: "スペースシューター", en: "Splattershot Nova", original: "スペースシューター", season: "2", rank: 8, sub: "pointsensor", sp: "megaphone51", type: "shooter",  },
    { id: 200, lid: 1000, ja: "ノヴァブラスター", en: "Luna Blaster", original: "ノヴァブラスター", season: "0", rank: 13, sub: "splashbomb", sp: "shokuwander", type: "blaster",  },
    { id: 210, lid: 1010, ja: "ホットブラスター", en: "Blaster", original: "ホットブラスター", season: "0", rank: 3, sub: "robotbomb", sp: "greatbarrier", type: "blaster",  },
    { id: 220, lid: 1020, ja: "ロングブラスター", en: "Range Blaster", original: "ロングブラスター", season: "0", rank: 11, sub: "kyubanbomb", sp: "hopsonar", type: "blaster",  },
    { id: 230, lid: 1030, ja: "クラッシュブラスター", en: "Clash Blaster", original: "クラッシュブラスター", season: "0", rank: 22, sub: "splashbomb", sp: "ultrashot", type: "blaster",  },
    { id: 240, lid: 1040, ja: "ラピッドブラスター", en: "Rapid Blaster", original: "ラピッドブラスター", season: "0", rank: 7, sub: "trap", sp: "tripletornado", type: "blaster",  },
    { id: 250, lid: 1050, ja: "Rブラスターエリート", en: "Rapid Blaster Pro", original: "Rブラスターエリート", season: "0", rank: 26, sub: "poisonmist", sp: "kyuinki", type: "blaster",  },
    { id: 260, lid: 1060, ja: "S-BLAST92", en: "S-BLAST '92", original: "S-BLAST92", season: "4", rank: 20, sub: "sprinkler", sp: "sameride", type: "blaster",  },
    { id: 300, lid: 100, ja: "L3リールガン", en: "L-3 Nozzlenose", original: "L3リールガン", season: "0", rank: 13, sub: "curlingbomb", sp: "kanitank", type: "shooter",  },
    { id: 310, lid: 110, ja: "H3リールガン", en: "H-3 Nozzlenose", original: "H3リールガン", season: "0", rank: 24, sub: "pointsensor", sp: "energystand", type: "shooter",  },
    { id: 400, lid: 120, ja: "ボトルガイザー", en: "Squeezer", original: "ボトルガイザー", season: "0", rank: 19, sub: "splashshield", sp: "ultrashot", type: "shooter",  },
    { id: 1000, lid: 2000, ja: "カーボンローラー", en: "Carbon Roller", original: "カーボンローラー", season: "0", rank: 6, sub: "robotbomb", sp: "shokuwander", type: "roller",  },
    { id: 1010, lid: 2010, ja: "スプラローラー", en: "Splat Roller", original: "スプラローラー", season: "0", rank: 2, sub: "curlingbomb", sp: "greatbarrier", type: "roller",  },
    { id: 1020, lid: 2030, ja: "ダイナモローラー", en: "Dynamo Roller", original: "ダイナモローラー", season: "0", rank: 12, sub: "sprinkler", sp: "energystand", type: "roller",  },
    { id: 1030, lid: 2020, ja: "ヴァリアブルローラー", en: "Flingza Roller", original: "ヴァリアブルローラー", season: "0", rank: 20, sub: "trap", sp: "missile", type: "roller",  },
    { id: 1040, lid: 2040, ja: "ワイドローラー", en: "Big Swig Roller", original: "ワイドローラー", season: "2", rank: 16, sub: "splashshield", sp: "kyuinki", type: "roller",  },
    { id: 1100, lid: 3000, ja: "パブロ", en: "Inkbrush", original: "パブロ", season: "0", rank: 7, sub: "splashbomb", sp: "megaphone51", type: "brush",  },
    { id: 1110, lid: 3010, ja: "ホクサイ", en: "Octobrush", original: "ホクサイ", season: "0", rank: 4, sub: "kyubanbomb", sp: "shokuwander", type: "brush",  },
    { id: 1120, lid: 3020, ja: "フィンセント", en: "Painbrush", original: "フィンセント", season: "4", rank: 14, sub: "curlingbomb", sp: "hopsonar", type: "brush",  },
    { id: 2000, lid: 4000, ja: "スクイックリンα", en: "Squiffer", original: "スクイックリンα", season: "0", rank: 8, sub: "pointsensor", sp: "greatbarrier", type: "charger",  },
    { id: 2010, lid: 4010, ja: "スプラチャージャー", en: "Splat Charger", original: "スプラチャージャー", season: "0", rank: 2, sub: "splashbomb", sp: "kyuinki", type: "charger",  },
    { id: 2030, lid: 4030, ja: "リッター4K", en: "E-liter 4K", original: "リッター4K", season: "0", rank: 18, sub: "trap", sp: "hopsonar", type: "charger",  },
    { id: 2050, lid: 4060, ja: "14式竹筒銃・甲", en: "Bamboozler 14", original: "14式竹筒銃・甲", season: "0", rank: 23, sub: "robotbomb", sp: "megaphone51", type: "charger",  },
    { id: 2060, lid: 4050, ja: "ソイチューバー", en: "Goo Tuber", original: "ソイチューバー", season: "0", rank: 25, sub: "torpedo", sp: "missile", type: "charger",  },
    { id: 2070, lid: 4070, ja: "R-PEN/5H", en: "Snipewriter 5H", original: "R-PEN/5H", season: "2", rank: 14, sub: "sprinkler", sp: "energystand", type: "charger",  },
    { id: 3000, lid: 5000, ja: "バケットスロッシャー", en: "Slosher", original: "バケットスロッシャー", season: "0", rank: 3, sub: "splashbomb", sp: "tripletornado", type: "slosher",  },
    { id: 3010, lid: 5010, ja: "ヒッセン", en: "Tri-Slosher", original: "ヒッセン", season: "0", rank: 10, sub: "poisonmist", sp: "jetpack", type: "slosher",  },
    { id: 3020, lid: 5020, ja: "スクリュースロッシャー", en: "Sloshing Machine", original: "スクリュースロッシャー", season: "0", rank: 14, sub: "tansanbomb", sp: "nicedama", type: "slosher",  },
    { id: 3030, lid: 5030, ja: "オーバーフロッシャー", en: "Bloblobber", original: "オーバーフロッシャー", season: "0", rank: 19, sub: "sprinkler", sp: "amefurashi", type: "slosher",  },
    { id: 3040, lid: 5040, ja: "エクスプロッシャー", en: "Explosher", original: "エクスプロッシャー", season: "0", rank: 29, sub: "pointsensor", sp: "amefurashi", type: "slosher",  },
    { id: 3050, lid: 5050, ja: "モップリン", en: "Dread Wringer", original: "モップリン", season: "5", rank: 15, sub: "kyubanbomb", sp: "sameride", type: "slosher",  },
    { id: 4000, lid: 6000, ja: "スプラスピナー", en: "Mini Splatling", original: "スプラスピナー", season: "0", rank: 12, sub: "quickbomb", sp: "ultrahanko", type: "splatling",  },
    { id: 4010, lid: 6010, ja: "バレルスピナー", en: "Heavy Splatling", original: "バレルスピナー", season: "0", rank: 4, sub: "sprinkler", sp: "hopsonar", type: "splatling",  },
    { id: 4020, lid: 6020, ja: "ハイドラント", en: "Hydra Splatling", original: "ハイドラント", season: "0", rank: 20, sub: "robotbomb", sp: "nicedama", type: "splatling",  },
    { id: 4030, lid: 6030, ja: "クーゲルシュライバー", en: "Ballpoint Splatling", original: "クーゲルシュライバー", season: "0", rank: 30, sub: "tansanbomb", sp: "jetpack", type: "splatling",  },
    { id: 4040, lid: 6040, ja: "ノーチラス47", en: "Nautilus 47", original: "ノーチラス47", season: "0", rank: 28, sub: "pointsensor", sp: "amefurashi", type: "splatling",  },
    { id: 4050, lid: 6050, ja: "イグザミナー", en: "Heavy Edit Splatling", original: "イグザミナー", season: "5", rank: 13, sub: "curlingbomb", sp: "energystand", type: "splatling",  },
    { id: 5000, lid: 7000, ja: "スパッタリー", en: "Dapple Dualies", original: "スパッタリー", season: "0", rank: 14, sub: "jumpbeacon", sp: "energystand", type: "dualies",  },
    { id: 5010, lid: 7010, ja: "スプラマニューバー", en: "Splat Dualies", original: "スプラマニューバー", season: "0", rank: 3, sub: "kyubanbomb", sp: "kanitank", type: "dualies",  },
    { id: 5020, lid: 7030, ja: "ケルビン525", en: "Glooga Dualies", original: "ケルビン525", season: "0", rank: 21, sub: "splashshield", sp: "nicedama", type: "dualies",  },
    { id: 5030, lid: 7020, ja: "デュアルスイーパー", en: "Dualie Squelchers", original: "デュアルスイーパー", season: "0", rank: 8, sub: "splashbomb", sp: "hopsonar", type: "dualies",  },
    { id: 5040, lid: 7040, ja: "クアッドホッパーブラック", en: "Tetra Dualies", original: "クアッドホッパーブラック", season: "0", rank: 17, sub: "robotbomb", sp: "sameride", type: "dualies",  },
    { id: 6000, lid: 8000, ja: "パラシェルター", en: "Splat Brella", original: "パラシェルター", season: "0", rank: 5, sub: "sprinkler", sp: "tripletornado", type: "brella",  },
    { id: 6010, lid: 8010, ja: "キャンピングシェルター", en: "Tenta Brella", original: "キャンピングシェルター", season: "0", rank: 16, sub: "jumpbeacon", sp: "kyuinki", type: "brella",  },
    { id: 6020, lid: 8020, ja: "スパイガジェット", en: "Undercover Brella", original: "スパイガジェット", season: "0", rank: 18, sub: "trap", sp: "sameride", type: "brella",  },
    { id: 7010, lid: 9000, ja: "トライストリンガー", en: "Tri-Stringer", original: "トライストリンガー", season: "0", rank: 4, sub: "poisonmist", sp: "megaphone51", type: "stringer",  },
    { id: 7020, lid: 9010, ja: "LACT-450", en: "REEF-LUX 450", original: "LACT-450", season: "0", rank: 10, sub: "curlingbomb", sp: "missile", type: "stringer",  },
    { id: 8000, lid: 10010, ja: "ジムワイパー", en: "Splatana Stamper", original: "ジムワイパー", season: "0", rank: 15, sub: "quickbomb", sp: "shokuwander", type: "splatana",  },
    { id: 8010, lid: 10000, ja: "ドライブワイパー", en: "Splatana Wiper", original: "ドライブワイパー", season: "0", rank: 5, sub: "torpedo", sp: "ultrahanko", type: "splatana",  },
    { id: 8010, lid: 10000, ja: "ドライブワイパー", en: "Splatana Wiper", original: "ドライブワイパー", season: "0", rank: 5, sub: "torpedo", sp: "ultrahanko", type: "splatana",  },
    { id: 9000, lid: 10000, ja: "フルイドV", en: "Splatana Wiper", original: "ドライブワイパー", season: "0", rank: 5, sub: "torpedo", sp: "ultrahanko", type: "splatana",  },
];

export const bukiListGrizzco:Buki[] = [
    { id: 27900, lid: 20040, ja: "クマサン印のストリンガー", en: "Grizzco Stringer", original: "クマサン印のストリンガー", season: "0", rank: 0, sub: "", sp: "", type: "stringer",  },
    { id: 20900, lid: 20000, ja: "クマサン印のブラスター", en: "Grizzco Blaster", original: "クマサン印のブラスター", season: "0", rank: 0, sub: "", sp: "", type: "blaster",  },
    { id: 26900, lid: 20010, ja: "クマサン印のシェルター", en: "Grizzco Brella", original: "クマサン印のシェルター", season: "0", rank: 0, sub: "", sp: "", type: "brella",  },
    { id: 22900, lid: 20020, ja: "クマサン印のチャージャー", en: "Grizzco Charger", original: "クマサン印のチャージャー", season: "0", rank: 0, sub: "", sp: "", type: "charger",  },
    { id: 23900, lid: 20030, ja: "クマサン印のスロッシャー", en: "Grizzco Slosher", original: "クマサン印のスロッシャー", season: "0", rank: 0, sub: "", sp: "", type: "slosher",  },
    { id: 28900, lid: 20050, ja: "クマサン印のワイパー", en: "Grizzco Splatana", original: "クマサン印のワイパー", season: "0", rank: 0, sub: "", sp: "", type: "splatana",  },
    { id: 25900, lid: 20060, ja: "クマサン印のマニューバー", en: "Grizzco Dualies", original: "クマサン印のマニューバー", season: "0", rank: 0, sub: "", sp: "", type: "dualies",  },
    
];

export const bukiListAll:Buki[] = [
    { id: 0, lid: 20, ja: "ボールドマーカー", en: "Sploosh-o-matic", original: "ボールドマーカー", season: "0", rank: 9, sub: "curlingbomb", sp: "ultrahanko", type: "shooter",  },
    { id: 1, lid: 21, ja: "ボールドマーカーネオ", en: "Neo Sploosh-o-matic", original: "ボールドマーカー", season: "3", rank: 13, sub: "jumpbeacon", sp: "megaphone51", type: "shooter",  },
    { id: 10, lid: 0, ja: "わかばシューター", en: "Splattershot Jr.", original: "わかばシューター", season: "0", rank: 1, sub: "splashbomb", sp: "greatbarrier", type: "shooter",  },
    { id: 11, lid: 1, ja: "もみじシューター", en: "Custom Splattershot Jr.", original: "わかばシューター", season: "0", rank: 6, sub: "torpedo", sp: "hopsonar", type: "shooter",  },
    { id: 20, lid: 30, ja: "シャープマーカー", en: "Splash-o-matic", original: "シャープマーカー", season: "0", rank: 16, sub: "quickbomb", sp: "kanitank", type: "shooter",  },
    { id: 21, lid: 31, ja: "シャープマーカーネオ", en: "Neo Splash-o-matic", original: "シャープマーカー", season: "3", rank: 21, sub: "kyubanbomb", sp: "tripletornado", type: "shooter",  },
    { id: 30, lid: 40, ja: "プロモデラーMG", en: "Aerospray MG", original: "プロモデラーMG", season: "0", rank: 5, sub: "tansanbomb", sp: "sameride", type: "shooter",  },
    { id: 31, lid: 41, ja: "プロモデラーRG", en: "Aerospray RG", original: "プロモデラーMG", season: "2", rank: 18, sub: "sprinkler", sp: "nicedama", type: "shooter",  },
    { id: 40, lid: 10, ja: "スプラシューター", en: "Splattershot", original: "スプラシューター", season: "0", rank: 2, sub: "kyubanbomb", sp: "ultrashot", type: "shooter",  },
    { id: 41, lid: 11, ja: "スプラシューターコラボ", en: "Tentatek Splattershot", original: "スプラシューター", season: "2", rank: 10, sub: "splashbomb", sp: "tripletornado", type: "shooter",  },
    { id: 45, lid: 12, ja: "ヒーローシューター レプリカ", en: "Hero Shot Replica", original: "スプラシューター", season: "0", rank: 1, sub: "kyubanbomb", sp: "ultrashot", type: "shooter",  },
    { id: 50, lid: 60, ja: ".52ガロン", en: ".52 Gal", original: ".52ガロン", season: "0", rank: 11, sub: "splashshield", sp: "megaphone51", type: "shooter",  },
    { id: 60, lid: 50, ja: "N-ZAP85", en: "N-ZAP '85", original: "N-ZAP85", season: "0", rank: 6, sub: "kyubanbomb", sp: "energystand", type: "shooter",  },
    { id: 61, lid: 51, ja: "N-ZAP89", en: "N-ZAP '89", original: "N-ZAP85", season: "3", rank: 11, sub: "robotbomb", sp: "decoy", type: "shooter",  },
    { id: 70, lid: 80, ja: "プライムシューター", en: "Splattershot Pro", original: "プライムシューター", season: "0", rank: 9, sub: "linemarker", sp: "kanitank", type: "shooter",  },
    { id: 71, lid: 81, ja: "プライムシューターコラボ", en: "Forge Splattershot Pro", original: "プライムシューター", season: "2", rank: 20, sub: "kyubanbomb", sp: "nicedama", type: "shooter",  },
    { id: 80, lid: 70, ja: ".96ガロン", en: ".96 Gal", original: ".96ガロン", season: "0", rank: 17, sub: "sprinkler", sp: "kyuinki", type: "shooter",  },
    { id: 81, lid: 71, ja: ".96ガロンデコ", en: ".96 Gal Deco", original: ".96ガロン", season: "3", rank: 23, sub: "splashshield", sp: "teioika", type: "shooter",  },
    { id: 90, lid: 90, ja: "ジェットスイーパー", en: "Jet Squelcher", original: "ジェットスイーパー", season: "0", rank: 15, sub: "linemarker", sp: "kyuinki", type: "shooter",  },
    { id: 91, lid: 91, ja: "ジェットスイーパーカスタム", en: "Custom Jet Squelcher", original: "ジェットスイーパー", season: "3", rank: 20, sub: "poisonmist", sp: "amefurashi", type: "shooter",  },
    { id: 100, lid: 150, ja: "スペースシューター", en: "Splattershot Nova", original: "スペースシューター", season: "2", rank: 8, sub: "pointsensor", sp: "megaphone51", type: "shooter",  },
    { id: 101, lid: 151, ja: "スペースシューターコラボ", en: "Annaki Splattershot Nova", original: "スペースシューター", season: "4", rank: 12, sub: "trap", sp: "jetpack", type: "shooter",  },
    { id: 200, lid: 1000, ja: "ノヴァブラスター", en: "Luna Blaster", original: "ノヴァブラスター", season: "0", rank: 13, sub: "splashbomb", sp: "shokuwander", type: "blaster",  },
    { id: 201, lid: 1001, ja: "ノヴァブラスターネオ", en: "Luna Blaster Neo", original: "ノヴァブラスター", season: "2", rank: 24, sub: "tansanbomb", sp: "ultrahanko", type: "blaster",  },
    { id: 210, lid: 1010, ja: "ホットブラスター", en: "Blaster", original: "ホットブラスター", season: "0", rank: 3, sub: "robotbomb", sp: "greatbarrier", type: "blaster",  },
    { id: 220, lid: 1020, ja: "ロングブラスター", en: "Range Blaster", original: "ロングブラスター", season: "0", rank: 11, sub: "kyubanbomb", sp: "hopsonar", type: "blaster",  },
    { id: 230, lid: 1030, ja: "クラッシュブラスター", en: "Clash Blaster", original: "クラッシュブラスター", season: "0", rank: 22, sub: "splashbomb", sp: "ultrashot", type: "blaster",  },
    { id: 231, lid: 1031, ja: "クラッシュブラスターネオ", en: "Clash Blaster Neo", original: "クラッシュブラスター", season: "3", rank: 25, sub: "curlingbomb", sp: "decoy", type: "blaster",  },
    { id: 240, lid: 1040, ja: "ラピッドブラスター", en: "Rapid Blaster", original: "ラピッドブラスター", season: "0", rank: 7, sub: "trap", sp: "tripletornado", type: "blaster",  },
    { id: 241, lid: 1041, ja: "ラピッドブラスターデコ", en: "Rapid Blaster Deco", original: "ラピッドブラスター", season: "3", rank: 10, sub: "torpedo", sp: "jetpack", type: "blaster",  },
    { id: 250, lid: 1050, ja: "Rブラスターエリート", en: "Rapid Blaster Pro", original: "Rブラスターエリート", season: "0", rank: 26, sub: "poisonmist", sp: "kyuinki", type: "blaster",  },
    { id: 251, lid: 1051, ja: "Rブラスターエリートデコ", en: "Rapid Blaster Pro Deco", original: "Rブラスターエリート", season: "4", rank: 29, sub: "linemarker", sp: "megaphone51", type: "blaster",  },
    { id: 260, lid: 1060, ja: "S-BLAST92", en: "S-BLAST '92", original: "S-BLAST92", season: "4", rank: 20, sub: "sprinkler", sp: "sameride", type: "blaster",  },
    { id: 300, lid: 100, ja: "L3リールガン", en: "L-3 Nozzlenose", original: "L3リールガン", season: "0", rank: 13, sub: "curlingbomb", sp: "kanitank", type: "shooter",  },
    { id: 301, lid: 101, ja: "L3リールガンD", en: "L-3 Nozzlenose D", original: "L3リールガン", season: "3", rank: 19, sub: "quickbomb", sp: "ultrahanko", type: "shooter",  },
    { id: 310, lid: 110, ja: "H3リールガン", en: "H-3 Nozzlenose", original: "H3リールガン", season: "0", rank: 24, sub: "pointsensor", sp: "energystand", type: "shooter",  },
    { id: 311, lid: 111, ja: "H3リールガンD", en: "H-3 Nozzlenose D", original: "H3リールガン", season: "4", rank: 27, sub: "splashshield", sp: "greatbarrier", type: "shooter",  },
    { id: 400, lid: 120, ja: "ボトルガイザー", en: "Squeezer", original: "ボトルガイザー", season: "0", rank: 19, sub: "splashshield", sp: "ultrashot", type: "shooter",  },
    { id: 1000, lid: 2000, ja: "カーボンローラー", en: "Carbon Roller", original: "カーボンローラー", season: "0", rank: 6, sub: "robotbomb", sp: "shokuwander", type: "roller",  },
    { id: 1001, lid: 2001, ja: "カーボンローラーデコ", en: "Carbon Roller Deco", original: "カーボンローラー", season: "2", rank: 22, sub: "quickbomb", sp: "ultrashot", type: "roller",  },
    { id: 1010, lid: 2010, ja: "スプラローラー", en: "Splat Roller", original: "スプラローラー", season: "0", rank: 2, sub: "curlingbomb", sp: "greatbarrier", type: "roller",  },
    { id: 1011, lid: 2011, ja: "スプラローラーコラボ", en: "Krak-On Splat Roller", original: "スプラローラー", season: "3", rank: 7, sub: "jumpbeacon", sp: "teioika", type: "roller",  },
    { id: 1020, lid: 2030, ja: "ダイナモローラー", en: "Dynamo Roller", original: "ダイナモローラー", season: "0", rank: 12, sub: "sprinkler", sp: "energystand", type: "roller",  },
    { id: 1021, lid: 2031, ja: "ダイナモローラーテスラ", en: "Gold Dynamo Roller", original: "ダイナモローラー", season: "5", rank: 17, sub: "splashbomb", sp: "decoy", type: "roller",  },
    { id: 1030, lid: 2020, ja: "ヴァリアブルローラー", en: "Flingza Roller", original: "ヴァリアブルローラー", season: "0", rank: 20, sub: "trap", sp: "missile", type: "roller",  },
    { id: 1040, lid: 2040, ja: "ワイドローラー", en: "Big Swig Roller", original: "ワイドローラー", season: "2", rank: 16, sub: "splashshield", sp: "kyuinki", type: "roller",  },
    { id: 1041, lid: 2041, ja: "ワイドローラーコラボ", en: "Big Swig Roller Express", original: "ワイドローラー", season: "4", rank: 18, sub: "linemarker", sp: "amefurashi", type: "roller",  },
    { id: 1100, lid: 3000, ja: "パブロ", en: "Inkbrush", original: "パブロ", season: "0", rank: 7, sub: "splashbomb", sp: "megaphone51", type: "brush",  },
    { id: 1101, lid: 3001, ja: "パブロ・ヒュー", en: "Inkbrush Nouveau", original: "パブロ", season: "2", rank: 15, sub: "trap", sp: "ultrahanko", type: "brush",  },
    { id: 1110, lid: 3010, ja: "ホクサイ", en: "Octobrush", original: "ホクサイ", season: "0", rank: 4, sub: "kyubanbomb", sp: "shokuwander", type: "brush",  },
    { id: 1111, lid: 3011, ja: "ホクサイ・ヒュー", en: "Octobrush Nouveau", original: "ホクサイ", season: "5", rank: 9, sub: "jumpbeacon", sp: "amefurashi", type: "brush",  },
    { id: 1120, lid: 3020, ja: "フィンセント", en: "Painbrush", original: "フィンセント", season: "4", rank: 14, sub: "curlingbomb", sp: "hopsonar", type: "brush",  },
    { id: 2000, lid: 4000, ja: "スクイックリンα", en: "Squiffer", original: "スクイックリンα", season: "0", rank: 8, sub: "pointsensor", sp: "greatbarrier", type: "charger",  },
    { id: 2010, lid: 4010, ja: "スプラチャージャー", en: "Splat Charger", original: "スプラチャージャー", season: "0", rank: 2, sub: "splashbomb", sp: "kyuinki", type: "charger",  },
    { id: 2011, lid: 4011, ja: "スプラチャージャーコラボ", en: "Z+F Splat Charger", original: "スプラチャージャー", season: "3", rank: 9, sub: "splashshield", sp: "tripletornado", type: "charger",  },
    { id: 2020, lid: 4020, ja: "スプラスコープ", en: "Splatterscope", original: "スプラスコープ", season: "0", rank: 10, sub: "splashbomb", sp: "kyuinki", type: "charger",  },
    { id: 2021, lid: 4021, ja: "スプラスコープコラボ", en: "Z+F Splatterscope", original: "スプラスコープ", season: "3", rank: 15, sub: "splashshield", sp: "tripletornado", type: "charger",  },
    { id: 2030, lid: 4030, ja: "リッター4K", en: "E-liter 4K", original: "リッター4K", season: "0", rank: 18, sub: "trap", sp: "hopsonar", type: "charger",  },
    { id: 2040, lid: 4040, ja: "4Kスコープ", en: "E-liter 4K Scope", original: "4Kスコープ", season: "0", rank: 27, sub: "trap", sp: "hopsonar", type: "charger",  },
    { id: 2050, lid: 4060, ja: "14式竹筒銃・甲", en: "Bamboozler 14", original: "14式竹筒銃・甲", season: "0", rank: 23, sub: "robotbomb", sp: "megaphone51", type: "charger",  },
    { id: 2060, lid: 4050, ja: "ソイチューバー", en: "Goo Tuber", original: "ソイチューバー", season: "0", rank: 25, sub: "torpedo", sp: "missile", type: "charger",  },
    { id: 2061, lid: 4051, ja: "ソイチューバーカスタム", en: "Custom Goo Tuber", original: "ソイチューバー", season: "5", rank: 28, sub: "tansanbomb", sp: "ultrahanko", type: "charger",  },
    { id: 2070, lid: 4070, ja: "R-PEN/5H", en: "Snipewriter 5H", original: "R-PEN/5H", season: "2", rank: 14, sub: "sprinkler", sp: "energystand", type: "charger",  },
    { id: 3000, lid: 5000, ja: "バケットスロッシャー", en: "Slosher", original: "バケットスロッシャー", season: "0", rank: 3, sub: "splashbomb", sp: "tripletornado", type: "slosher",  },
    { id: 3001, lid: 5001, ja: "バケットスロッシャーデコ", en: "Slosher Deco", original: "バケットスロッシャー", season: "2", rank: 12, sub: "linemarker", sp: "shokuwander", type: "slosher",  },
    { id: 3010, lid: 5010, ja: "ヒッセン", en: "Tri-Slosher", original: "ヒッセン", season: "0", rank: 10, sub: "poisonmist", sp: "jetpack", type: "slosher",  },
    { id: 3011, lid: 5011, ja: "ヒッセン・ヒュー", en: "Tri-Slosher Nouveau", original: "ヒッセン", season: "3", rank: 17, sub: "tansanbomb", sp: "energystand", type: "slosher",  },
    { id: 3020, lid: 5020, ja: "スクリュースロッシャー", en: "Sloshing Machine", original: "スクリュースロッシャー", season: "0", rank: 14, sub: "tansanbomb", sp: "nicedama", type: "slosher",  },
    { id: 3021, lid: 5021, ja: "スクリュースロッシャーネオ", en: "Sloshing Machine Neo", original: "スクリュースロッシャー", season: "5", rank: 21, sub: "pointsensor", sp: "ultrashot", type: "slosher",  },
    { id: 3030, lid: 5030, ja: "オーバーフロッシャー", en: "Bloblobber", original: "オーバーフロッシャー", season: "0", rank: 19, sub: "sprinkler", sp: "amefurashi", type: "slosher",  },
    { id: 3031, lid: 5031, ja: "オーバーフロッシャーデコ", en: "Bloblobber Deco", original: "オーバーフロッシャー", season: "5", rank: 20, sub: "linemarker", sp: "teioika", type: "slosher",  },
    { id: 3040, lid: 5040, ja: "エクスプロッシャー", en: "Explosher", original: "エクスプロッシャー", season: "0", rank: 29, sub: "pointsensor", sp: "amefurashi", type: "slosher",  },
    { id: 3050, lid: 5050, ja: "モップリン", en: "Dread Wringer", original: "モップリン", season: "5", rank: 15, sub: "kyubanbomb", sp: "sameride", type: "slosher",  },
    { id: 4000, lid: 6000, ja: "スプラスピナー", en: "Mini Splatling", original: "スプラスピナー", season: "0", rank: 12, sub: "quickbomb", sp: "ultrahanko", type: "splatling",  },
    { id: 4001, lid: 6001, ja: "スプラスピナーコラボ", en: "Zink Mini Splatling", original: "スプラスピナー", season: "2", rank: 25, sub: "poisonmist", sp: "greatbarrier", type: "splatling",  },
    { id: 4010, lid: 6010, ja: "バレルスピナー", en: "Heavy Splatling", original: "バレルスピナー", season: "0", rank: 4, sub: "sprinkler", sp: "hopsonar", type: "splatling",  },
    { id: 4011, lid: 6011, ja: "バレルスピナーデコ", en: "Heavy Splatling Deco", original: "バレルスピナー", season: "4", rank: 15, sub: "pointsensor", sp: "teioika", type: "splatling",  },
    { id: 4020, lid: 6020, ja: "ハイドラント", en: "Hydra Splatling", original: "ハイドラント", season: "0", rank: 20, sub: "robotbomb", sp: "nicedama", type: "splatling",  },
    { id: 4030, lid: 6030, ja: "クーゲルシュライバー", en: "Ballpoint Splatling", original: "クーゲルシュライバー", season: "0", rank: 30, sub: "tansanbomb", sp: "jetpack", type: "splatling",  },
    { id: 4031, lid: 6031, ja: "クーゲルシュライバー・ヒュー", en: "Ballpoint Splatling Nouveau", original: "クーゲルシュライバー", season: "5", rank: 30, sub: "trap", sp: "kyuinki", type: "splatling",  },
    { id: 4040, lid: 6040, ja: "ノーチラス47", en: "Nautilus 47", original: "ノーチラス47", season: "0", rank: 28, sub: "pointsensor", sp: "amefurashi", type: "splatling",  },
    { id: 4050, lid: 6050, ja: "イグザミナー", en: "Heavy Edit Splatling", original: "イグザミナー", season: "5", rank: 13, sub: "curlingbomb", sp: "energystand", type: "splatling",  },
    { id: 5000, lid: 7000, ja: "スパッタリー", en: "Dapple Dualies", original: "スパッタリー", season: "0", rank: 14, sub: "jumpbeacon", sp: "energystand", type: "dualies",  },
    { id: 5001, lid: 7001, ja: "スパッタリー・ヒュー", en: "Dapple Dualies Nouveau", original: "スパッタリー", season: "2", rank: 26, sub: "torpedo", sp: "sameride", type: "dualies",  },
    { id: 5010, lid: 7010, ja: "スプラマニューバー", en: "Splat Dualies", original: "スプラマニューバー", season: "0", rank: 3, sub: "kyubanbomb", sp: "kanitank", type: "dualies",  },
    { id: 5020, lid: 7030, ja: "ケルビン525", en: "Glooga Dualies", original: "ケルビン525", season: "0", rank: 21, sub: "splashshield", sp: "nicedama", type: "dualies",  },
    { id: 5030, lid: 7020, ja: "デュアルスイーパー", en: "Dualie Squelchers", original: "デュアルスイーパー", season: "0", rank: 8, sub: "splashbomb", sp: "hopsonar", type: "dualies",  },
    { id: 5031, lid: 7021, ja: "デュアルスイーパーカスタム", en: "Custom Dualie Squelchers", original: "デュアルスイーパー", season: "4", rank: 16, sub: "jumpbeacon", sp: "decoy", type: "dualies",  },
    { id: 5040, lid: 7040, ja: "クアッドホッパーブラック", en: "Tetra Dualies", original: "クアッドホッパーブラック", season: "0", rank: 17, sub: "robotbomb", sp: "sameride", type: "dualies",  },
    { id: 5041, lid: 7041, ja: "クアッドホッパーホワイト", en: "Light Tetra Dualies", original: "クアッドホッパーブラック", season: "4", rank: 24, sub: "sprinkler", sp: "shokuwander", type: "dualies",  },
    { id: 6000, lid: 8000, ja: "パラシェルター", en: "Splat Brella", original: "パラシェルター", season: "0", rank: 5, sub: "sprinkler", sp: "tripletornado", type: "brella",  },
    { id: 6001, lid: 8001, ja: "パラシェルターソレーラ", en: "Sorella Brella", original: "パラシェルター", season: "5", rank: 19, sub: "robotbomb", sp: "jetpack", type: "brella",  },
    { id: 6010, lid: 8010, ja: "キャンピングシェルター", en: "Tenta Brella", original: "キャンピングシェルター", season: "0", rank: 16, sub: "jumpbeacon", sp: "kyuinki", type: "brella",  },
    { id: 6011, lid: 8011, ja: "キャンピングシェルターソレーラ", en: "Tenta Sorella Brella", original: "キャンピングシェルター", season: "4", rank: 22, sub: "trap", sp: "ultrashot", type: "brella",  },
    { id: 6020, lid: 8020, ja: "スパイガジェット", en: "Undercover Brella", original: "スパイガジェット", season: "0", rank: 18, sub: "trap", sp: "sameride", type: "brella",  },
    { id: 7010, lid: 9000, ja: "トライストリンガー", en: "Tri-Stringer", original: "トライストリンガー", season: "0", rank: 4, sub: "poisonmist", sp: "megaphone51", type: "stringer",  },
    { id: 7011, lid: 9001, ja: "トライストリンガーコラボ", en: "Inkline Tri-Stringer", original: "トライストリンガー", season: "5", rank: 11, sub: "sprinkler", sp: "decoy", type: "stringer",  },
    { id: 7020, lid: 9010, ja: "LACT-450", en: "REEF-LUX 450", original: "LACT-450", season: "0", rank: 10, sub: "curlingbomb", sp: "missile", type: "stringer",  },
    { id: 8000, lid: 10010, ja: "ジムワイパー", en: "Splatana Stamper", original: "ジムワイパー", season: "0", rank: 15, sub: "quickbomb", sp: "shokuwander", type: "splatana",  },
    { id: 8010, lid: 10000, ja: "ドライブワイパー", en: "Splatana Wiper", original: "ドライブワイパー", season: "0", rank: 5, sub: "torpedo", sp: "ultrahanko", type: "splatana",  },
    { id: 8011, lid: 10001, ja: "ドライブワイパーデコ", en: "Splatana Wiper Deco", original: "ドライブワイパー", season: "4", rank: 10, sub: "jumpbeacon", sp: "missile", type: "splatana",  },
];

export const bukiListHero:Buki[] = [
    { id: 45, lid: 12, ja: "ヒーローシューター レプリカ", en: "Hero Shot Replica", original: "スプラシューター", season: "0", rank: 1, sub: "kyubanbomb", sp: "ultrashot", type: "shooter",  },
];

export const freeItemsList:Buki[] = [
    { id: -10, lid: -10, ja: "FREE", en: "FREE", original: "FREE", season: "0", rank: 0, sub: "", sp: "", type: "",  },
    { id: -11, lid: -11, ja: "FREE", en: "FREE", original: "FREE", season: "0", rank: 0, sub: "", sp: "", type: "",  },
];

const bukiList = bukiListAll.concat(bukiListGrizzco).concat(freeItemsList);
export const bukiLib: { [key: number]: Buki } = {};
for (const buki of bukiList) {
    bukiLib[buki.lid] = buki;
}
