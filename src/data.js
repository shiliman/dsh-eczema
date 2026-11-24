export const DATA = {
  id: 'dsh-eczema',
  name: '湿疹',
  prefix: 'eczema',
  label: '湿疹',
  defaultEeriness: 2,
  gain: 0.3,
  flareChance: 0.26,
  flareGain: 20,
  triggerWeight: 0.95,
  flareWeight: 0.9,
  reliefs: [
    { id: 'cream', label: '涂药膏', relief: 20, minutes: 40, calm: 7 },
    { id: 'ice', label: '冰敷止痒', relief: 14, minutes: 20, calm: 5 },
    { id: 'glove', label: '戴上薄手套', relief: 10, minutes: 30, calm: 4 },
  ],
  body: {
    stiff: '手肘内侧有点痒，隔着袖子蹭了一下。',
    ache: '那片皮肤又红又干，越抓越痒；说话时手一直在桌子底下抓。',
    flare: '痒得坐不住，抓到破皮还是想抓；一句话说完得停一下才接得上。',
  },
  voice: {
    base: '允许对话中间断在「等一下」，允许把一句长句拆成两次说；不要说「我湿疹」。',
    flare: '允许先说一句「等我一下」再回来接上；别反复说痒，别自嘲。',
  },
}
