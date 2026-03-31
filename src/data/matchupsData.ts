import type { Matchup } from "../types/matchup"

export const matchupsData: Matchup[] = [
  {
    championName: 'Malphite',
    difficult: 'easy',
    notes: [
      'Malphite ganha poke e troca curta; Camille ganha troca longa.',
      'A passiva dele define a troca — sempre quebrar antes de lutar.',
      'Grasp deixa a lane mais estável e consistente.',
      'Q dele custa muita mana no early.',
      'Se ele ultar e não te matar, você ganha a troca.'
    ],
    toDo: [
      'Jogar lv 1–3 safe (evitar poke gratuito).',
      'Punir quando ele gastar Q ou estiver sem mana.',
      'Quebrar a passiva → trocar imediatamente.',
      'Deixar a wave puxar pra você.',
      'All-in pós 6 quando:',
      'passiva quebrada',
      'HP médio/baixo',
      'ult dele não mata',
      'Usar E + R pra forçar troca longa.',
      'Chipar até deixar diveável.',
      'Negar farm com freeze.'
    ],
    notToDo: [
      'Não trocar com a passiva ativa.',
      'Não tomar poke sem responder.',
      'Não dar all-in pré 6 sem vantagem.',
      'Não jogar avançado sem visão.',
      'Não usar E sem propósito.',
      'Não forçar kill — matchup é de desgaste.'
    ]
  },

  {
    championName: 'Aatrox',
    difficult: 'even',
    notes: [
      'Aatrox ganha poke e sustain, você ganha all-in bem executado.',
      'Desviar dos Qs é a lane inteira.',
      'Conqueror é melhor aqui.',
      'Early é mais difícil, mid game você fica mais forte.',
      'WIN CONDITION: desviar Qs + punir cooldown → all-in.'
    ],
    toDo: [
      'Movimentação constante pra evitar Q.',
      'Punir quando ele errar Q3.',
      'Trocas curtas até ele errar habilidade.',
      'All-in quando ele estiver sem Q ou low HP.',
      'Wave puxando pra você.',
      'Usar R pra evitar heal dele.'
    ],
    notToDo: [
      'Não tomar Qs completos.',
      'Não lutar dentro do range dele parado.',
      'Não forçar early sem vantagem.',
      'Não ignorar sustain dele.'
    ]
  },
  {
    championName: 'Sett',
    difficult: 'hard',
    notes: [
      'Sett ganha troca curta e média.',
      'W dele decide a fight.',
      'Grasp é mais seguro.',
      'Você só ganha se baitar W.',
      'WIN CONDITION: baitar W → re-engage → ganhar troca.'
    ],
    toDo: [
      'Trocar curto e sair.',
      'Baitar o W antes de all-in.',
      'Punir cooldown do W.',
      'Wave puxando pra você.',
      'All-in só depois do W usado.',
      'Kitar com Q + movimentação.'
    ],
    notToDo: [
      'Não tankar W cheio.',
      'Não lutar parado.',
      'Não dar engage sem informação do W.',
      'Não forçar troca longa.'
    ]
  },
  {
    championName: 'Jax',
    difficult: 'very hard',
    notes: [
      'Jax escala melhor no 1v1.',
      'E dele cancela seu dano.',
      'Grasp é melhor.',
      'Você ganha early leve, perde depois.',
      'WIN CONDITION: ganhar cedo e impactar mapa.'
    ],
    toDo: [
      'Punir antes do lv 6.',
      'Trocar quando E dele estiver em cooldown.',
      'Q2 pra burst rápido.',
      'Wave controlada perto da torre.',
      'Snowball cedo.',
      'Rotacionar mid game.'
    ],
    notToDo: [
      'Não lutar dentro do E dele.',
      'Não deixar escalar free.',
      'Não splitar contra ele late.',
      'Não dar all-in sem vantagem.'
    ]
  },
  {
    championName: 'Renekton',
    difficult: 'hard',
    notes: [
      'Renekton domina early game.',
      'Fúria define a troca.',
      'Grasp obrigatório.',
      'Você escala melhor.',
      'WIN CONDITION: sobreviver early → ganhar mid game.'
    ],
    toDo: [
      'Respeitar barra de fúria.',
      'Trocar quando ele não tiver fúria.',
      'Wave puxando pra você.',
      'Farmar seguro early.',
      'All-in só depois lv 6 com vantagem.',
      'Punir cooldowns.'
    ],
    notToDo: [
      'Não lutar com fúria cheia.',
      'Não avançar sem visão.',
      'Não forçar early.',
      'Não tomar stun gratuito.'
    ]
  },
  {
    championName: 'Ornn',
    difficult: 'easy',
    notes: [
      'Ornn é previsível.',
      'Você ganha troca longa.',
      'Grasp é ótimo aqui.',
      'Ele escala muito pro time.',
      'WIN CONDITION: pressionar lane e negar scaling.'
    ],
    toDo: [
      'Desviar do knock-up.',
      'Punir quando ele errar combo.',
      'Trocas longas.',
      'Wave pressionando.',
      'All-in quando ele estiver sem cooldown.',
      'Zonear ele do farm.'
    ],
    notToDo: [
      'Não tomar combo completo.',
      'Não deixar ele farmar free.',
      'Não jogar passivo.',
      'Não ignorar ult dele em teamfight.'
    ]
  },
  {
    championName: 'Sion',
    difficult: 'easy',
    notes: [
      'Sion é lento e previsível.',
      'Você cancela engage fácil.',
      'Grasp funciona bem.',
      'Ele vira tank impossível depois.',
      'WIN CONDITION: ganhar lane cedo ou ignorar e jogar mapa.'
    ],
    toDo: [
      'Desviar do Q carregado.',
      'Punir cooldown.',
      'Trocar sempre que possível.',
      'Pressionar lane.',
      'All-in antes dele tankar demais.',
      'Rotacionar se ele ficar só splitando.'
    ],
    notToDo: [
      'Não tomar Q full.',
      'Não ignorar scaling.',
      'Não ficar preso na lane sem impacto.',
      'Não lutar quando ele estiver muito tank.'
    ]
  },
  {
    championName: 'Teemo',
    difficult: 'easy',
    notes: [
      'Ranged matchup.',
      'Press the Attack é MUITO melhor.',
      'Você ganha all-in fácil.',
      'Ele depende de poke.',
      'WIN CONDITION: sobreviver early → all-in lv 3+.'
    ],
    toDo: [
      'Jogar safe lv 1–2.',
      'All-in lv 3 com E.',
      'Usar W pra sustain.',
      'Punir cooldown de blind.',
      'Wave puxando pra você.',
      'Forçar luta longa.'
    ],
    notToDo: [
      'Não tomar poke gratuito.',
      'Não lutar com blind ativo.',
      'Não jogar passivo demais.',
      'Não deixar ele poke sem resposta.'
    ]
  },
  {
    championName: 'Garen',
    difficult: 'easy',
    notes: [
      'Garen é linear.',
      'Você controla a troca.',
      'Grasp é padrão.',
      'Ele tem sustain alto.',
      'WIN CONDITION: quebrar passiva dele e pressionar.'
    ],
    toDo: [
      'Quebrar passiva sempre.',
      'Trocar curto e constante.',
      'Punir cooldown de Q.',
      'Wave controlada.',
      'All-in quando ele estiver sem sustain.',
      'Zonear farm.'
    ],
    notToDo: [
      'Não deixar ele regenerar.',
      'Não tomar silence + spin free.',
      'Não jogar passivo.',
      'Não ignorar ult dele.'
    ]
  },

  {
    championName: 'Darius',
    difficult: 'very hard',
    notes: [
      'Darius ganha qualquer troca longa no early.',
      'Você joga em volta do cooldown do E (pull).',
      'Grasp é mais consistente, mas Conqueror pode ser usado se souber espaçar.',
      'Se tomar 5 stacks, a lane acabou pra você.',
      'WIN CONDITION: ganhar em janelas curtas e snowball antes dele fechar item defensivo.'
    ],
    toDo: [
      'Lv 1–3: jogar safe, usar W pra farm e poke leve.',
      'Punir quando ele errar o E (janela enorme).',
      'Trocas MUITO curtas: Q2 + recua.',
      'Wave puxando pra você (evita all-in dele).',
      'All-in só quando ele estiver sem E ou low HP.',
      'Usar E (hookshot) defensivamente na maior parte do tempo.',
      'Snowball cedo — se ele fechar Plated Steelcaps, fica bem mais difícil.'
    ],
    notToDo: [
      'Nunca lutar com 3+ stacks.',
      'Não dar engage com E se ele tiver tudo up.',
      'Não estender troca.',
      'Não jogar avançado sem visão (ele te runa).',
      'Não tentar forçar kill sem vantagem clara.'
    ]
  },
  {
    championName: 'Fiora',
    difficult: 'very hard',
    notes: [
      'Skill matchup puro.',
      'Fiora pode dar parry no seu E ou R.',
      'Conqueror é melhor aqui (troca longa).',
      'Você ganha teamfight, ela ganha split.',
      'WIN CONDITION: vencer no mid game antes dela escalar no 1v1.'
    ],
    toDo: [
      'Baitar o parry antes de usar E ou R.',
      'Trocar quando passiva dela estiver ruim pra ela.',
      'Q2 bem usado pra burst rápido.',
      'Wave neutra ou puxando pra você.',
      'All-in quando parry estiver em cooldown.',
      'Rotacionar pro time — você impacta mais.'
    ],
    notToDo: [
      'Não usar E direto (ela vai parryar).',
      'Não lutar com passiva aberta fácil pra ela.',
      'Não ficar splitando contra ela late game.',
      'Não subestimar scaling dela.'
    ]
  },
  {
    championName: 'Riven',
    difficult: 'even',
    notes: [
      'Skill matchup intenso.',
      'Riven ganha early se jogar bem.',
      'Grasp é mais seguro; Conqueror se quiser brigar.',
      'Ela depende muito de cooldowns.',
      'WIN CONDITION: punir cooldowns e ganhar consistência — não é lane free.'
    ],
    toDo: [
      'Lv 1–2: jogar safe, respeitar engage.',
      'Punir quando ela gastar Qs ou E.',
      'Trocas curtas, nunca estendidas.',
      'All-in só com vantagem de HP/cooldown.',
      'Usar R pra travar ela e impedir escape.',
      'Wave perto da sua torre.'
    ],
    notToDo: [
      'Não lutar quando ela tem tudo up.',
      'Não errar E (você perde a lane).',
      'Não estender troca.',
      'Não subestimar burst dela com ult.'
    ]
  },
  {
    championName: 'Irelia',
    difficult: 'even',
    notes: [
      'Depende MUITO da wave.',
      'Se ela tiver minion pra resetar Q, você perde troca.',
      'Conqueror é melhor.',
      'Você ganha se controlar wave.',
      'WIN CONDITION: impedir setup de minions e punir erros.'
    ],
    toDo: [
      'Evitar lutar no meio de wave grande.',
      'Punir quando ela errar reset de Q.',
      'Trocar quando ela não tiver stack.',
      'Wave puxando pra você.',
      'All-in quando ela não tiver minion pra usar.',
      'Usar R pra impedir mobilidade.'
    ],
    notToDo: [
      'Não lutar com wave grande.',
      'Não deixar ela stackar passiva de graça.',
      'Não usar E de forma previsível.',
      'Não jogar avançado sem visão.'
    ]
  },
  {
    championName: 'Gwen',
    difficult: 'easy',
    notes: [
      'Você domina early e mid game.',
      'Gwen escala muito bem.',
      'Conqueror ou Grasp funcionam.',
      'Ela depende do W (zona).',
      'WIN CONDITION: punir cedo e criar vantagem antes do scaling.'
    ],
    toDo: [
      'Punir early agressivamente.',
      'Trocar quando W estiver em cooldown.',
      'All-in com E + R (ela não escapa fácil).',
      'Wave controlada pra pressionar.',
      'Forçar vantagem cedo.',
      'Rotacionar se ganhar lane.'
    ],
    notToDo: [
      'Não lutar dentro do W dela.',
      'Não deixar ela escalar de graça.',
      'Não jogar passivo demais.',
      'Não ignorar scaling dela.'
    ]
  },
  {
    championName: 'Gangplank',
    difficult: 'easy',
    notes: [
      'GP é fraco contra engage direto.',
      'Press the Attack é MUITO melhor aqui.',
      'Barril é tudo pra ele.',
      'Você controla a lane.',
      'WIN CONDITION: snowball forte no early e negar scaling.'
    ],
    toDo: [
      'Destruir barris sempre que possível.',
      'All-in quando ele errar barril.',
      'Punir early constantemente.',
      'Wave puxando pra você ou neutra.',
      'Dive quando estiver low.',
      'Forçar troca longa — ele não aguenta.'
    ],
    notToDo: [
      'Não tomar poke de graça.',
      'Não ignorar barris.',
      'Não jogar passivo.',
      'Não deixar ele farmar tranquilo.'
    ]
  },

  {
    championName: 'Mordekaiser',
    difficult: 'even',
    notes: [
      'Morde ganha troca longa dentro da ult.',
      'Você ganha mobilidade e controle de fight.',
      'Conqueror é melhor.',
      'Early é jogável, pós 6 fica perigoso.',
      'WIN CONDITION: ganhar antes do 6 ou solar fora da ult.'
    ],
    toDo: [
      'Punir early lv 1–5.',
      'Trocar curto pra evitar passiva.',
      'All-in só com vantagem clara.',
      'Kitar dentro da ult usando E.',
      'Wave puxando pra você.',
      'Forçar troca antes dele stackar passiva.'
    ],
    notToDo: [
      'Não lutar com passiva ativa.',
      'Não all-in dentro da ult sem vantagem.',
      'Não ficar parado tomando Q.',
      'Não subestimar dano dele.'
    ]
  },
  {
    championName: 'Nasus',
    difficult: 'easy',
    notes: [
      'Lane free no early.',
      'Você destrói ele cedo.',
      'Grasp ou Conqueror funcionam.',
      'Ele escala MUITO.',
      'WIN CONDITION: negar stacks e snowball.'
    ],
    toDo: [
      'Punir cada minion que ele for pegar.',
      'Zonear agressivamente.',
      'Freeze perto da sua torre.',
      'All-in cedo várias vezes.',
      'Chamar jungler pra dive.',
      'Finalizar a lane antes dele escalar.'
    ],
    notToDo: [
      'Não deixar farmar free.',
      'Não jogar passivo.',
      'Não ignorar scaling.',
      'Não deixar ele stackar wave grande.'
    ]
  },
  {
    championName: 'Tryndamere',
    difficult: 'hard',
    notes: [
      'Trynda ganha troca longa com crit.',
      'RNG early pode decidir lane.',
      'Grasp é mais seguro.',
      'Ele domina side lane.',
      'WIN CONDITION: punir early e não deixar snowball.'
    ],
    toDo: [
      'Trocar quando ele estiver sem fúria.',
      'Punir early lv 1–3.',
      'Wave puxando pra você.',
      'Kitar usando E.',
      'All-in só quando ele estiver baixo.',
      'Evitar extended fights.'
    ],
    notToDo: [
      'Não lutar com fúria cheia.',
      'Não confiar em troca longa.',
      'Não subestimar ult dele.',
      'Não jogar avançado sem visão.'
    ]
  },
  {
    championName: 'Ambessa',
    difficult: 'hard',
    notes: [
      'Ambessa tem mobilidade e troca forte.',
      'Ela ganha troca curta.',
      'Grasp é melhor.',
      'Você perde pressão early.',
      'WIN CONDITION: sobreviver early e punir erro.'
    ],
    toDo: [
      'Jogar safe early.',
      'Punir quando ela errar engage.',
      'Trocas rápidas e sair.',
      'Wave puxando pra você.',
      'All-in só com vantagem clara.',
      'Esperar erro dela.'
    ],
    notToDo: [
      'Não trocar cedo agressivo.',
      'Não usar E sem pensar.',
      'Não lutar troca longa.',
      'Não jogar avançado.'
    ]
  },
  {
    championName: 'Jayce',
    difficult: 'hard',
    notes: [
      'Ranged bully forte.',
      'Press the Attack é melhor.',
      'Você ganha all-in.',
      'Ele domina early poke.',
      'WIN CONDITION: sobreviver early → all-in lv 3+.'
    ],
    toDo: [
      'Jogar safe lv 1–2.',
      'Usar W pra sustain.',
      'All-in quando ele errar combo.',
      'Wave puxando pra você.',
      'Forçar engage com E.',
      'Punir cooldown.'
    ],
    notToDo: [
      'Não tomar poke gratuito.',
      'Não jogar avançado early.',
      'Não hesitar no all-in.',
      'Não deixar ele te zonear.'
    ]
  },
  {
    championName: 'Yasuo',
    difficult: 'easy',
    notes: [
      'Você controla a lane.',
      'Ele depende de minions.',
      'Conqueror é melhor.',
      'Você ganha all-in.',
      'WIN CONDITION: impedir mobilidade e forçar luta.'
    ],
    toDo: [
      'Lutar longe da wave.',
      'Punir quando ele não tiver minion.',
      'All-in direto.',
      'Usar R pra travar.',
      'Wave controlada.',
      'Punir erro constantemente.'
    ],
    notToDo: [
      'Não lutar na wave grande.',
      'Não deixar ele stackar Q.',
      'Não respeitar demais.',
      'Não jogar passivo.'
    ]
  },
  {
    championName: 'Yone',
    difficult: 'even',
    notes: [
      'Yone escala bem.',
      'Trocas são baseadas no E dele.',
      'Conqueror é melhor.',
      'Você ganha se punir erro.',
      'WIN CONDITION: punir E e ganhar consistência.'
    ],
    toDo: [
      'Punir quando ele usar E.',
      'Trocar curto e sair.',
      'All-in quando E estiver em cooldown.',
      'Wave controlada.',
      'Kitar bem.',
      'Evitar Q3 engage.'
    ],
    notToDo: [
      'Não lutar quando ele ativar E.',
      'Não tomar Q3 free.',
      'Não estender troca.',
      'Não jogar previsível.'
    ]
  },
  {
    championName: 'Poppy',
    difficult: 'hard',
    notes: [
      'Poppy cancela seu E.',
      'Ela countera sua mobilidade.',
      'Grasp é melhor.',
      'Lane bem chata.',
      'WIN CONDITION: jogar paciente e punir erro.'
    ],
    toDo: [
      'Esperar ela usar W antes de engajar.',
      'Trocar curto.',
      'Wave puxando pra você.',
      'Punir cooldown.',
      'All-in só com vantagem clara.',
      'Jogar mais reativo.'
    ],
    notToDo: [
      'Não usar E direto.',
      'Não lutar perto da parede.',
      'Não forçar fight.',
      'Não jogar agressivo sem info.'
    ]
  },
  {
    championName: 'Urgot',
    difficult: 'even',
    notes: [
      'Urgot é forte no mid game.',
      'Troca depende do E dele.',
      'Grasp funciona bem.',
      'Você ganha mobilidade.',
      'WIN CONDITION: punir cooldown e não tomar engage.'
    ],
    toDo: [
      'Desviar do E.',
      'Punir quando ele errar.',
      'Trocar curto.',
      'Wave controlada.',
      'All-in quando ele estiver sem E.',
      'Kitar bem.'
    ],
    notToDo: [
      'Não tomar E.',
      'Não lutar parado.',
      'Não subestimar ult.',
      'Não forçar troca ruim.'
    ]
  },
  {
    championName: 'Illaoi',
    difficult: 'hard',
    notes: [
      'Illaoi domina área.',
      'Se tomar E, perdeu troca.',
      'Grasp é melhor.',
      'Você ganha fora do E.',
      'WIN CONDITION: desviar E e punir.'
    ],
    toDo: [
      'Desviar do E SEMPRE.',
      'Punir quando ela errar.',
      'Trocar fora dos tentáculos.',
      'Wave puxando pra você.',
      'All-in só sem E.',
      'Kitar fight.'
    ],
    notToDo: [
      'Não lutar com E ativo.',
      'Não lutar dentro da ult.',
      'Não ficar parado.',
      'Não forçar troca ruim.'
    ]
  },

  {
    championName: 'KSante',
    difficult: 'even',
    notes: [
      'K’Sante é tank no início, mas vira lutador no All Out (R).',
      'Trocas curtas favorecem ele; Camille ganha trocas longas bem executadas.',
      'Ele tem muito CC — erro de posicionamento é punido forte.',
      'Grasp deixa a lane mais estável.',
      'Sem cooldowns, ele é muito mais fraco.'
    ],
    toDo: [
      'Jogar lv 1–3 controlado (evitar engage ruim).',
      'Punir quando ele errar Q3 ou gastar W.',
      'Trocar curto para chipar e preparar all-in.',
      'Deixar a wave puxar pra você.',
      'All-in quando:',
      'ele sem W',
      'sem Q3 preparado',
      'HP já chipado',
      'Usar E para reposicionar e evitar engage direto.',
      'Usar R para travar fight longa quando ele errar.',
      'Kitar durante All Out até ele ficar vulnerável.'
    ],
    notToDo: [
      'Não lutar dentro do Q3 dele.',
      'Não tomar engage perto da parede (risco de R).',
      'Não usar E agressivo sem visão.',
      'Não forçar troca longa com cooldowns dele up.',
      'Não ignorar o All Out — respeitar o spike dele.',
      'Não lutar sem espaço pra kitar.'
    ]
  }
]

