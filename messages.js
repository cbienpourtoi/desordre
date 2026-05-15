// ============================================================
// messages.js — Tous les textes éditables du jeu Le Désordre
// Modifie ce fichier et rafraîchis le navigateur pour voir les changements.
// ============================================================

const MSG = {

  // ── 1. NOMS DES PAX ─────────────────────────────────────────
  // C'est ici et uniquement ici qu'on définit les noms.
  // Les sections suivantes utilisent {nom} comme placeholder.
  paxNames: {
    aioli:    'Aïoli',
    ananas:   'Ananas',
    avril:    'Avril',
    chaton:   'Chaton',
    dodo:     'Dodo',
    choufleur:'Choufleur Royal',
    nuageon:  'Nuageon',
    onigiri:  'Onigiri',
    pasteque: 'Pastèque',
    papille:  'Papille',
    vigne:    'Vigne',
    mcclick:  'Will McClick',
  },

  // ── 2. CITATIONS D'ARRIVÉE DES PAX ──────────────────────────
  // {nom} sera remplacé automatiquement par le nom ci-dessus.
  paxUnlock: {
    aioli:    { quote: "{nom} débarque. Iel pique, mais iel protège.", gift: "+15 Vibe" },
    ananas:   { quote: "{nom} arrive avec une playlist. La nuit va être longue.", gift: "+Vibe bonus nocturne" },
    avril:    { quote: "{nom} t'accueille avec un sourire. Bienvenue ma belle graine.", gift: "+10 Soin" },
    chaton:   { quote: "{nom} ronronne. Frrrr. Ramène ta tige.", gift: "+Switch bonus" },
    dodo:     { quote: "{nom} est officiellement disparu·e, et pourtant bien là.", gift: "+Créatif bonus" },
    choufleur:{ quote: "{nom} proclame son règne. Mon royaume pour une graine.", gift: "+20 Vibe" },
    nuageon:  { quote: "{nom} arrive. Tiens, un peu de rosée pour toi.", gift: "+25 Soin" },
    onigiri:  { quote: "{nom} s'installe. Beaucoup de couches, beaucoup de profondeur.", gift: "+Dom bonus" },
    pasteque: { quote: "{nom} est là quand t'as soif. Comme toujours.", gift: "+Cantina boost" },
    papille:  { quote: "{nom} rapplique. Goûte-moi ça, c'est nouveau.", gift: "+Slut bonus nocturne" },
    vigne:    { quote: "{nom} s'accroche partout. Iel fait des grappes.", gift: "+Bottom synergy" },
    mcclick:  { quote: "{nom} veut coordonner. C'est bon, relax pax !", gift: "Effet aléatoire" },
  },

  // ── 3. NOMS ET DESCRIPTIONS DES ZONES ───────────────────────
  zones: {
    playroom_ext: { name: 'Playroom ext.',    desc: 'Structures de play en extérieur. Prod x2 la nuit.' },
    tente_cer:    { name: 'Tente cérémonie',  desc: 'Espace rituel et festif. Boost les arrivées.' },
    mixroom:      { name: 'Mix-room',         desc: 'Coussins et atmosphère. Prod x2 la nuit.' },
    bat1:         { name: 'Chambres',         desc: 'Vibe le jour, Soin la nuit. Versatile.' },
    bat2:         { name: 'Playroom int.',    desc: 'Haute énergie intérieure. Stable jour/nuit.' },
    cantina:      { name: 'Cantina',          desc: 'Les repas boostent tous les pax 2x/jour.' },
    welfare:      { name: 'Espace Welfare',   desc: 'Soin maximal. Régénère les pax épuisé·es.' },
    isoloir:      { name: 'Isoloir',          desc: '1 pax max. Régénération profonde.' },
    pmu:          { name: 'PMU',              desc: 'Buvette. Déclenche des événements aléatoires.' },
  },

  // ── 4. ENVAHISSEURS ──────────────────────────────────────────
  // atelierIdeal   → atelier où la transformation est la plus probable
  // atelierPassables → ateliers qui peuvent marcher (tableau)
  // atelierWildcard → atelier inattendu, parfois surprenant
  invaders: {
    patriarche: {
      name:             "Le Patriarche",
      emoji:            "👴",
      quote:            "J'ai toujours fait comme ça. Ça a marché pendant 50 ans.",
      queerName:        "Le Pater en Reconstruction",
      queerEmoji:       "🌱",
      queerMsg:         "Il cuisinait en silence depuis le début. Il ne savait pas que c'était déjà de l'amour.",
      savaisTu:         "L'acceptation familiale est le facteur #1 de santé mentale des personnes LGBTQ+. Pas les lois — les familles.",
      atelierIdeal:     'cuisine',
      atelierPassables: ['corps', 'oisivete'],
      atelierWildcard:  'shibari',
    },
    gardienne: {
      name:             "La Gardienne des Bonnes Mœurs",
      emoji:            "🏛️",
      quote:            "Les enfants ont besoin de repères, pas de confusion !",
      queerName:        "La Libertine Tardive",
      queerEmoji:       "🌸",
      queerMsg:         "Elle a découvert que ses propres désirs étaient les plus tabous. Elle sourit pour la première fois depuis longtemps.",
      savaisTu:         "La honte sexuelle a des effets mesurables sur la santé physique : système immunitaire, tension, sommeil. Pas metaphoriquement — littéralement.",
      atelierIdeal:     'corps',
      atelierPassables: ['lettre', 'danser'],
      atelierWildcard:  'shibari',
    },
    tradwife: {
      name:             "La Tradwife Millionnaire",
      emoji:            "💍",
      quote:            "La féminité, c'est une force. Arrêtez de vous la faire voler.",
      queerName:        "La Créatrice de Contenu Chaos",
      queerEmoji:       "🌀",
      queerMsg:         "Elle a arrêté de poster. Elle pleure. C'est de la joie.",
      savaisTu:         "Le mouvement tradwife prospère sur la détresse réelle des femmes épuisées. La solution proposée est fausse, le problème sous-jacent, lui, est réel.",
      atelierIdeal:     'oisivete',
      atelierPassables: ['lettre', 'corps'],
      atelierWildcard:  'danser',
    },
    proprio: {
      name:             "Le Proprio d'à Côté",
      emoji:            "🔑",
      quote:            "C'est ma propriété. Y'a des règles.",
      queerName:        "Le Voisin qui Frappe Avant d'Entrer",
      queerEmoji:       "🚪",
      queerMsg:         "Il a toqué avant d'entrer. C'est un début. Même Aïoli a été surpris.",
      savaisTu:         "En France, être locataire LGBTQ+ augmente significativement le risque de discrimination au logement. Les propriétaires peuvent légalement refuser sans motif officiel.",
      atelierIdeal:     'cuisine',
      atelierPassables: ['oisivete', 'lettre'],
      atelierWildcard:  'impact',
    },
    profbio: {
      name:             "La Prof de Bio Binaire",
      emoji:            "🧬",
      quote:            "XX ou XY. C'est la biologie, pas une opinion.",
      queerName:        "La Prof qui Réécrit Ses Cours",
      queerEmoji:       "✏️",
      queerMsg:         "Elle a ajouté les manchots, les poissons-clowns et les grenouilles dendrobates à son cours. Les élèves adorent.",
      savaisTu:         "Plus de 1500 espèces animales pratiquent des comportements homosexuels documentés. La nature est queer depuis toujours.",
      atelierIdeal:     'lettre',
      atelierPassables: ['corps', 'oisivete'],
      atelierWildcard:  'danser',
    },
    masculiniste: {
      name:             "Le Masculiniste",
      emoji:            "💪",
      quote:            "Les hommes aussi souffrent. Mais on n'a pas le droit de le dire.",
      queerName:        "L'Homme Qui Se Pose Des Questions",
      queerEmoji:       "🤔",
      queerMsg:         "Il se pose des questions. C'est déjà beaucoup. Il reviendra.",
      savaisTu:         "Les hommes cisgenres ont les taux de suicide les plus élevés — conséquence directe de la norme de virilité qui interdit l'expression émotionnelle.",
      atelierIdeal:     'impact',
      atelierPassables: ['corps', 'shibari'],
      atelierWildcard:  'lettre',
    },
    papa: {
      name:             "Le Papa Déçu",
      emoji:            "😔",
      quote:            "J'aurais voulu des petits-enfants... normaux.",
      queerName:        "Le Papa Qui Comprend",
      queerEmoji:       "💌",
      queerMsg:         "Il a envoyé un message. Trois mots : « Je suis là. » Son enfant a répondu en dix secondes.",
      savaisTu:         "Un simple message d'acceptation d'un parent réduit de 40% le risque de dépression chez les jeunes LGBTQ+.",
      atelierIdeal:     'lettre',
      atelierPassables: ['cuisine', 'corps'],
      atelierWildcard:  'drag',
    },
    chroniqueur: {
      name:             "Le Chroniqueur CNews",
      emoji:            "📺",
      quote:            "La woke folie doit s'arrêter là.",
      queerName:        "La Chroniqueuse Radio Féministe",
      queerEmoji:       "📻",
      queerMsg:         "Elle interviewe maintenant des personnes trans pour la première fois. L'audience monte. Elle dit que c'est bizarre et bien.",
      savaisTu:         "La représentation médiatique positive des personnes LGBTQ+ réduit les actes de violence homophobes et transphobes dans les zones d'audience.",
      atelierIdeal:     'drag',
      atelierPassables: ['lettre', 'oisivete'],
      atelierWildcard:  'impact',
    },
    allie: {
      name:             "L'Allié qui Mansplaine le Féminisme",
      emoji:            "🙋",
      quote:            "En tant qu'homme cisgendre, je pense qu'il est important que je dise...",
      queerName:        "L'Allié qui Écoute",
      queerEmoji:       "👂",
      queerMsg:         "Il s'est tu. Longtemps. Puis il a posé une question. Une vraie. Pas pour parler — pour comprendre.",
      savaisTu:         "Le « féminisme performatif » des hommes alliés est un des patterns les mieux documentés par les études de genre. L'écoute active reste l'acte le plus rare.",
      atelierIdeal:     'oisivete',
      atelierPassables: ['lettre', 'corps'],
      atelierWildcard:  'shibari',
    },
  },

  // ── 5. ATELIERS ──────────────────────────────────────────────
  // Chaque atelier a 3 questions, chacune avec 4 choix.
  // type: 'wtf' | 'bad' | 'medium' | 'good'
  // score: 0, 1 ou 2
  ateliers: {
    drag: {
      id:          'drag',
      nom:         'Atelier drag',
      description: 'Transformation par le costume et le miroir.',
      emoji:       '👗',
      questions: [
        {
          texte: "Quelqu'un entre dans l'espace drag et reste près de la porte, les bras croisés. Il/elle regarde les vêtements sans y toucher.",
          choix: [
            { texte: "Tu enfiles toi-même un boa rose flashy et te présentes : « Moi c'est Princesse Nébuleuse. Et toi ? »", type: 'wtf',    score: 1 },
            { texte: "Tu lui expliques que c'est juste du déguisement, pas de quoi s'inquiéter. Allez.",                   type: 'bad',    score: 0 },
            { texte: "Tu lui dis : « T'es pas obligé·e de toucher à quoi que ce soit. »",                                  type: 'medium', score: 1 },
            { texte: "Tu continues ce que tu faisais. Tu ne le/la regardes pas.",                                          type: 'good',   score: 2 },
          ],
        },
        {
          texte: "En plein milieu de l'atelier, quelqu'un se regarde dans le grand miroir et se fige. Long silence.",
          choix: [
            { texte: "Tu joues « I Will Always Love You » à fond depuis ton téléphone.",                  type: 'wtf',    score: 0 },
            { texte: "Tu t'approches et tu lui demandes ce qu'il/elle ressent.",                          type: 'bad',    score: 0 },
            { texte: "Tu t'approches doucement et poses une main sur son épaule.",                        type: 'medium', score: 1 },
            { texte: "Rien. Tu restes à distance et tu laisses le silence faire son travail.",            type: 'good',   score: 2 },
          ],
        },
        {
          texte: "En fin d'atelier, quelqu'un veut garder ce qu'il/elle porte pour le reste du camp.",
          choix: [
            { texte: "Tu lui fabriques une ceinture de ruban adhésif rose pour officialiser la tenue.",          type: 'wtf',    score: 1 },
            { texte: "Tu notes quelque part que c'est une belle avancée. Important d'en garder la trace.",        type: 'bad',    score: 0 },
            { texte: "Tu lui dis : « C'est une très bonne idée, tu vas te sentir bien. »",                        type: 'medium', score: 1 },
            { texte: "Tu ne dis rien de spécial. C'est normal. Tu passes à autre chose.",                         type: 'good',   score: 2 },
          ],
        },
      ],
    },

    lettre: {
      id:          'lettre',
      nom:         'Atelier lettre',
      description: "Écrire à soi-même, à quelqu'un, ou à personne.",
      emoji:       '✉️',
      questions: [
        {
          texte: "Au début de l'atelier, quelqu'un te demande à qui il/elle est censé·e écrire cette lettre.",
          choix: [
            { texte: "« À Dieu, à ton chat, au temps perdu, à la lune. Au choix. »",                   type: 'wtf',    score: 1 },
            { texte: "« Écris à la personne qui t'a fait le plus de mal. C'est libérateur. »",          type: 'bad',    score: 0 },
            { texte: "Tu lui expliques les options : à soi passé, soi futur, quelqu'un, ou personne.", type: 'medium', score: 1 },
            { texte: "Tu hausses les épaules doucement. « Ce qui vient. »",                             type: 'good',   score: 2 },
          ],
        },
        {
          texte: "En pleine écriture, quelqu'un s'arrête et dit qu'il/elle ne sait pas quoi dire.",
          choix: [
            { texte: "Tu lui tends une bouteille de vin. « Ça a toujours marché pour les poètes. »",                       type: 'wtf',    score: 0 },
            { texte: "Tu t'assieds à côté et tu lui proposes de lui souffler des idées.",                                   type: 'bad',    score: 0 },
            { texte: "« T'as le droit de rien écrire. Rester avec le blanc, c'est déjà quelque chose. »",                  type: 'medium', score: 1 },
            { texte: "Tu ne réagis pas. Tu continues ce que tu faisais.",                                                   type: 'good',   score: 2 },
          ],
        },
        {
          texte: "Quelqu'un a lu sa lettre à voix haute. Silence dans la pièce. Que se passe-t-il ensuite ?",
          choix: [
            { texte: "Aïoli sort une harmonica et joue un blues très court.",                          type: 'wtf',    score: 1 },
            { texte: "Tu dis : « Tu vois, c'est pas si dur d'exprimer ses émotions ! »",               type: 'bad',    score: 0 },
            { texte: "Tu dis : « Merci de l'avoir partagé avec nous. »",                               type: 'medium', score: 1 },
            { texte: "Silence. Personne ne commente. On laisse l'espace exister.",                     type: 'good',   score: 2 },
          ],
        },
      ],
    },

    cuisine: {
      id:          'cuisine',
      nom:         'Shift de cuisine',
      description: 'Cuisiner ensemble — le care par les actes.',
      emoji:       '🍳',
      questions: [
        {
          texte: "Quelqu'un arrive au shift cuisine et dit qu'il/elle ne sait pas cuisiner. Il/elle semble embarrassé·e.",
          choix: [
            { texte: "Tu lui confies la mission la plus importante : tenir la cuillère en bois sans la lâcher.",         type: 'wtf',    score: 1 },
            { texte: "Tu lui dis de ne pas s'inquiéter et tu lui expliques tout depuis le début, minutieusement.",       type: 'bad',    score: 0 },
            { texte: "Tu lui trouves une tâche simple, sans pression.",                                                  type: 'medium', score: 1 },
            { texte: "Tu continues ce que tu fais et tu lui montres par le geste, sans commentaire.",                   type: 'good',   score: 2 },
          ],
        },
        {
          texte: "Au milieu du shift, quelqu'un rate quelque chose — il/elle reverse un ingrédient ou brûle légèrement.",
          choix: [
            { texte: "Tu déclares solennellement que le camp a une longue tradition de plats ratés et que c'est un honneur.", type: 'wtf',    score: 1 },
            { texte: "Tu soupires et tu reprends le truc à sa place.",                                                        type: 'bad',    score: 0 },
            { texte: "Tu rassures : « C'est pas grave du tout, ça arrive à tout le monde. »",                                 type: 'medium', score: 1 },
            { texte: "Tu continues. Tu récupères sans faire de commentaire.",                                                  type: 'good',   score: 2 },
          ],
        },
        {
          texte: "Le repas est prêt. Quelqu'un qui ne parlait pas beaucoup pendant la préparation te sourit.",
          choix: [
            { texte: "Tu lui proposes de baptiser le plat ensemble. « On l'appelle comment ? »",  type: 'wtf',    score: 1 },
            { texte: "Tu lui dis : « Tu vois, tu sais cuisiner finalement ! »",                   type: 'bad',    score: 0 },
            { texte: "Tu souris en retour et tu dis : « C'est bien de cuisiner ensemble. »",      type: 'medium', score: 1 },
            { texte: "Tu lui souris. C'est tout.",                                                type: 'good',   score: 2 },
          ],
        },
      ],
    },

    corps: {
      id:          'corps',
      nom:         'Atelier dessins sur le corps',
      description: 'Se dessiner dessus — le corps comme espace propre.',
      emoji:       '🖊️',
      questions: [
        {
          texte: "Au début de l'atelier, quelqu'un hésite à montrer une partie de son corps pour qu'on y dessine.",
          choix: [
            { texte: "Tu déclares que tu commences par dessiner une pieuvre sur ton propre genou et que tout le monde est invité à s'en inspirer.", type: 'wtf',    score: 1 },
            { texte: "Tu lui expliques que tout le monde le fait et que c'est un espace safe.",                                                     type: 'bad',    score: 0 },
            { texte: "Tu lui demandes ce avec quoi il/elle se sentirait à l'aise.",                                                                 type: 'medium', score: 1 },
            { texte: "Tu n'attends rien de lui/elle. S'il/elle veut participer, il/elle le dira.",                                                  type: 'good',   score: 2 },
          ],
        },
        {
          texte: "Quelqu'un te demande ce que tu veux dessiner sur lui/elle — avant que tu aies dit quoi que ce soit.",
          choix: [
            { texte: "« Un paquebot en flammes ou une salamandre triste. À toi de choisir. »",  type: 'wtf',    score: 1 },
            { texte: "Tu as déjà une idée en tête et tu lui proposes directement.",             type: 'bad',    score: 0 },
            { texte: "Tu lui demandes ce qu'il/elle aimerait avoir sur soi.",                   type: 'medium', score: 1 },
            { texte: "« Ce que tu veux sur toi. Dis-moi. »",                                   type: 'good',   score: 2 },
          ],
        },
        {
          texte: "L'atelier se termine. Quelqu'un regarde ses dessins, silencieux·se.",
          choix: [
            { texte: "Tu proposes une cérémonie de lavage en groupe pour « effacer le passé ensemble ».",       type: 'wtf',    score: 0 },
            { texte: "Tu lui demandes si ça lui a fait du bien. Tu veux savoir ce que ça a changé.",            type: 'bad',    score: 0 },
            { texte: "Tu lui dis que c'est beau.",                                                              type: 'medium', score: 1 },
            { texte: "Tu ne dis rien. Tu ranges le matériel.",                                                  type: 'good',   score: 2 },
          ],
        },
      ],
    },

    oisivete: {
      id:          'oisivete',
      nom:         'Atelier oisiveté radicale',
      description: 'Ne rien faire ensemble — résistance à la productivité.',
      emoji:       '☁️',
      questions: [
        {
          texte: "L'atelier commence. Quelqu'un dit qu'il/elle ne sait pas « juste rester là » et propose de faire une activité à la place.",
          choix: [
            { texte: "Tu lui proposes officiellement de regarder les nuages et de noter les formes dans un carnet. Puis tu ranges le carnet avant qu'il/elle puisse l'ouvrir.", type: 'wtf',    score: 1 },
            { texte: "Tu lui expliques le concept de l'oisiveté radicale et ses vertus politiques.",                                                                             type: 'bad',    score: 0 },
            { texte: "Tu lui dis qu'il n'y a rien à faire et que c'est le but.",                                                                                                 type: 'medium', score: 1 },
            { texte: "Tu ne réponds pas. Tu es déjà en train de ne rien faire. Tu lui montres.",                                                                                 type: 'good',   score: 2 },
          ],
        },
        {
          texte: "Au bout d'un moment, quelqu'un attrape son téléphone.",
          choix: [
            { texte: "Tu déclares qu'utiliser les réseaux sociaux pour poster sur l'oisiveté radicale est autorisé une seule fois. Puis c'est fini.", type: 'wtf',    score: 1 },
            { texte: "Tu lui dis doucement de ranger son téléphone, c'est le principe.",                                                              type: 'bad',    score: 0 },
            { texte: "Tu ne dis rien, mais tu remarques que les autres le voient aussi.",                                                             type: 'medium', score: 1 },
            { texte: "Rien. Ce n'est pas ton téléphone.",                                                                                            type: 'good',   score: 2 },
          ],
        },
        {
          texte: "En fin d'atelier, quelqu'un dit qu'il/elle n'est pas sûr·e que ça lui ait servi à quelque chose.",
          choix: [
            { texte: "« Exactement. C'est le but. T'as réussi. »",                                                                     type: 'wtf',    score: 1 },
            { texte: "Tu lui expliques que l'oisiveté est une pratique qui prend du temps et que la prochaine fois ça ira mieux.",      type: 'bad',    score: 0 },
            { texte: "Tu lui dis que c'est normal, que l'oisiveté est difficile dans notre société.",                                   type: 'medium', score: 1 },
            { texte: "Tu hausses les épaules. « Mouais. »",                                                                             type: 'good',   score: 2 },
          ],
        },
      ],
    },

    danser: {
      id:          'danser',
      nom:         'Atelier danser dehors',
      description: 'Bouger dans la nature, finir nu·es.',
      emoji:       '🌿',
      questions: [
        {
          texte: "Quelqu'un dit qu'il/elle ne danse pas.",
          choix: [
            { texte: "Tu lui proposes le poste officiel de « garant·e du rythme » : il/elle tape dans ses mains, c'est tout.", type: 'wtf',    score: 1 },
            { texte: "Tu lui dis que tout le monde peut danser, c'est juste une question de se laisser aller.",                type: 'bad',    score: 0 },
            { texte: "Tu lui dis que ce n'est pas obligatoire.",                                                               type: 'medium', score: 1 },
            { texte: "Tu danses. Il/elle voit les autres danser. Tu n'insistes pas.",                                          type: 'good',   score: 2 },
          ],
        },
        {
          texte: "Les gens commencent à se déshabiller. Quelqu'un reste habillé et regarde.",
          choix: [
            { texte: "Tu mimes l'enlèvement de ta veste avec un air dramatique pour briser la glace.",                  type: 'wtf',    score: 0 },
            { texte: "Tu lui dis que c'est un espace safe et qu'il/elle peut se déshabiller sans crainte.",              type: 'bad',    score: 0 },
            { texte: "Tu ne lui dis rien mais tu restes proche au cas où.",                                              type: 'medium', score: 1 },
            { texte: "Rien. Rester habillé·e est un choix tout aussi valide. Tu continues à danser.",                   type: 'good',   score: 2 },
          ],
        },
        {
          texte: "Après l'atelier, quelqu'un qui ne s'est pas déshabillé·e te remercie d'avoir été là.",
          choix: [
            { texte: "« C'est moi. En fait non, c'est nous. En fait non, c'est les arbres. »",                    type: 'wtf',    score: 1 },
            { texte: "Tu lui dis que la prochaine fois il/elle se sentira peut-être plus à l'aise.",               type: 'bad',    score: 0 },
            { texte: "Tu dis : « Je suis content·e que t'aies été là. »",                                         type: 'medium', score: 1 },
            { texte: "Tu souris. « Ouais. » C'est tout.",                                                         type: 'good',   score: 2 },
          ],
        },
      ],
    },

    shibari: {
      id:          'shibari',
      nom:         'Atelier shibari',
      description: 'Initiation corde — lâcher le contrôle.',
      emoji:       '🪢',
      questions: [
        {
          texte: "Quelqu'un arrive à l'atelier shibari et te demande si ça fait mal.",
          choix: [
            { texte: "« Ça dépend si tu es du genre à aimer ça. »",                                                                                 type: 'wtf',    score: 1 },
            { texte: "Tu l'assures que non, que c'est doux et sécurisé et que c'est souvent une expérience très positive.",                          type: 'bad',    score: 0 },
            { texte: "Tu lui expliques que ça peut créer des sensations, que tout est ajustable, et qu'il/elle peut arrêter quand il/elle veut.",    type: 'medium', score: 1 },
            { texte: "« Parfois. Ça dépend de toi. On vérifie ensemble au fur et à mesure. »",                                                      type: 'good',   score: 2 },
          ],
        },
        {
          texte: "Pendant l'atelier, quelqu'un dans les cordes se met à parler beaucoup, à blagues, à meubler.",
          choix: [
            { texte: "Tu continues à travailler les nœuds en silence absolu, comme si de rien n'était.",                         type: 'wtf',    score: 1 },
            { texte: "Tu lui demandes de se concentrer sur ses sensations et d'arrêter de parler.",                              type: 'bad',    score: 0 },
            { texte: "Tu lui souris et tu réponds à ce qu'il/elle dit, doucement.",                                              type: 'medium', score: 1 },
            { texte: "Tu continues, tranquillement. Tu ne l'alimentes pas mais tu ne le/la coupes pas non plus.",                type: 'good',   score: 2 },
          ],
        },
        {
          texte: "Quelqu'un sort des cordes et reste quelques minutes dans un état second, un peu flottant·e.",
          choix: [
            { texte: "Tu lui mets une cape de super-héros sur les épaules et dis : « Bienvenue de l'autre côté. »",                                             type: 'wtf',    score: 0 },
            { texte: "Tu lui demandes si ça va et comment il/elle se sent — pour t'assurer que tout s'est bien passé.",                                          type: 'bad',    score: 0 },
            { texte: "Tu restes proche, silencieux·se, disponible.",                                                                                             type: 'medium', score: 1 },
            { texte: "Tu restes là. Tu ne poses pas de question. Tu lui laisses le temps de revenir.",                                                           type: 'good',   score: 2 },
          ],
        },
      ],
    },

    impact: {
      id:          'impact',
      nom:         'Atelier impact',
      description: 'Donner et recevoir des sensations — sentir ses limites.',
      emoji:       '🖐️',
      questions: [
        {
          texte: "Quelqu'un arrive à l'atelier impact et déclare qu'il/elle veut « tout essayer ».",
          choix: [
            { texte: "Tu lui présentes solennellement la cuillère en bois, la spatule et le fouet de cuisine. « On commence par la base. »",   type: 'wtf',    score: 1 },
            { texte: "Tu te réjouis et tu commences à expliquer toutes les techniques disponibles.",                                           type: 'bad',    score: 0 },
            { texte: "Tu lui demandes ce qu'il/elle entend par « tout » et vous affinez ensemble.",                                            type: 'medium', score: 1 },
            { texte: "Tu lui poses des questions sur ce qu'il/elle connaît déjà, ce qui lui fait peur, ce dont il/elle est curieux·se. Tu écoutes plus que tu ne parles.", type: 'good', score: 2 },
          ],
        },
        {
          texte: "Pendant l'atelier, quelqu'un reçoit et ne dit rien — mais son corps se rigidifie.",
          choix: [
            { texte: "Tu déclares une pause musicale et joues « Eye of the Tiger ».",              type: 'wtf',    score: 0 },
            { texte: "Tu continues, parce qu'il/elle n'a pas dit stop.",                          type: 'bad',    score: 0 },
            { texte: "Tu t'arrêtes et tu lui demandes si ça va.",                                 type: 'medium', score: 1 },
            { texte: "Tu t'arrêtes. Tu poses la main doucement. Tu attends qu'il/elle revienne.", type: 'good',   score: 2 },
          ],
        },
        {
          texte: "L'atelier se termine. Quelqu'un dit qu'il/elle a l'impression de mieux se connaître.",
          choix: [
            { texte: "Tu lui remets un diplôme imaginaire de « personne qui sait ce qu'elle veut ».",                                                          type: 'wtf',    score: 1 },
            { texte: "Tu lui expliques que c'est exactement le but des ateliers, et que c'est le type de conscience qui manque dans notre société.",            type: 'bad',    score: 0 },
            { texte: "Tu lui dis que c'est bien, que t'es content·e.",                                                                                         type: 'medium', score: 1 },
            { texte: "Tu hoches la tête. « Ouais. » Tu lui laisses ce moment.",                                                                                type: 'good',   score: 2 },
          ],
        },
      ],
    },
  },

  // ── 6. FUN FACTS QUEER ───────────────────────────────────────
  // Affichés aléatoirement dans les popups "savais-tu" lors des queerisations.
  funFacts: [
    "Plus de 1500 espèces animales pratiquent des comportements homosexuels documentés. La diversité sexuelle est une constante du vivant.",
    "L'acceptation familiale est le facteur #1 de santé mentale des jeunes LGBTQ+. Pas les lois, pas les thérapeutes — les familles.",
    "Le « coming out » n'est pas un événement unique. La plupart des personnes queer en font des dizaines tout au long de leur vie.",
    "Le terme « queer » était une insulte jusqu'aux années 1990. Il a été retourné comme outil de fierté par les militant·es eux-mêmes.",
    "Le BDSM a développé des codes de consentement (SSC, RACK, PRICK) souvent plus explicites que n'importe quelle relation mainstream.",
    "Les personnes non-binaires existent dans presque toutes les cultures humaines connues — depuis des millénaires.",
    "Les personnes intersexes représentent environ 1,7% de la population. C'est plus fréquent que les cheveux roux.",
    "La dépathologisation de l'homosexualité par l'OMS date de 1990. Celle de la transidentité, de 2018.",
    "La honte sexuelle a des effets physiologiques mesurables : système immunitaire affaibli, tension artérielle, troubles du sommeil.",
    "Les structures polyamoureuses développent souvent des pratiques de communication plus explicites que les couples monogames.",
    "Le leather pride a ses origines dans les communautés gay des années 50. C'est une histoire politique autant qu'érotique.",
    "Les espaces queer comme ce camp ont un rôle de santé publique documenté : ils réduisent l'isolement et les comportements à risque.",
    "L'espérance de vie et la santé mentale des personnes trans s'améliorent significativement avec l'accès aux soins de transition.",
    "Le kink et le BDSM pratiqués de façon consentie sont associés à une meilleure communication dans les couples, toutes orientations confondues.",
    "En France, environ 1% de la population se déclare non-binaire. Le chiffre réel est probablement plus élevé — la langue freine la visibilité.",
  ],

  // ── 7. MESSAGES DE LA CRIÉE ──────────────────────────────────
  criee: [
    "📢 La Criée : atelier shibari à 15h dans la playroom intérieure.",
    "📢 La Criée : quelqueer a perdu une laisse en cuir près du campement. Se reconnaître.",
    "📢 La Criée : la cantina a besoin de main d'oeuvre. On y va avec amour.",
    "📢 La Criée : Will McClick se laisse aller à coordonner. On va prendre soin de lui.",
    "📢 La Criée : nouveau fil rouge — « câlinothérapie », sur le tableau.",
    "📢 La Criée : tique repérée près du camping. Sortez le beurre.",
    "📢 La Criée : Nuageon distribue des couronnes de fleurs au Welfare.",
    "📢 La Criée : Ananas a organisé une orgie de cucurbitacées. On est au courant.",
    "📢 La Criée : rappel — test Covid pour les arrivant·es du jeudi.",
    "📢 La Criée : le Courrier du Cœur et du Cul déborde. Quelqueer peut aider ?",
    "📢 La Criée : Avril attend pour le cercle de parole à la tente.",
    "📢 La Criée : Pastèque est en cuisine. Ça sent incroyablement bon.",
    "📢 La Criée : Choufleur Royal proclame un royaume de 3m² autour du PMU.",
    "📢 La Criée : Onigiri propose un atelier \"beaucoup de couches\" — interprétation libre.",
    "📢 La Criée : rappel — les isoloirs sont pour le soin, pas pour le play.",
    "📢 La Criée : Chaton cherche un·e partenaire d'étirements. C'est sérieux.",
    "📢 La Criée : Papille est à la Mix-room avec de la limonade de fleur de sureau. Première arrivée.",
    "📢 La Criée : Vigne fait des grappes humaines dans la tente. C'est beau.",
    "📢 La Criée : Dodo a réapparu. On ne pose pas de questions.",
    "📢 La Criée : le compost a été renversé. On cherche des volontaires courageux·ses.",
  ],

  // ── 8. SCÈNES ────────────────────────────────────────────────
  scenes: {
    scene_play:      "L'espace déborde. C'est la fête totale.",
    scene_aftercare: "Cercle d'aftercare. Toustes les pax récupèrent.",
    scene_cuisine:   "Un festin préparé avec amour. Boost de Soin.",
    scene_pet_walk:  "Promenade dans le domaine.",
    scene_chaos_pmu: "Will McClick prend le micro. Le chaos est parfait.",
    scene_creatif:   "Collab artistique ! Une installation apparaît dans le potager.",
    scene_toybottom: "Scène privée. Production x2 pendant 15s.",
    scene_switch:    "Les switch se retrouvent. La nuit sera polyvalente.",
    scene_shibari:   "Session shibari. C'est magnifique.",
  },

  // ── 9. QUÊTES QUOTIDIENNES ───────────────────────────────────
  quests: {
    q_2pax_play: "Mets 2 pax dans une Playroom ce soir ⚡",
    q_welfare:   "Envoie un·e pax au Welfare 💜",
    q_cantina3:  "Remplis la Cantina (3 pax) 🍽",
    q_queerise:  "Queerise un envahisseur 🌈",
    q_scene:     "Déclenche une scène spéciale 🔥",
    q_pmu_night: "Envoie quelqu'un au PMU cette nuit 🍺",
    q_mixroom_night: "Fête à la Mix-room cette nuit 🌙",
    q_all_zones: "Mets un·e pax dans chaque zone high ⚡",
  },

  // ── 10. MESSAGES ZONES VIDES ──────────────────────────────────
  // Un message est choisi aléatoirement parmi la liste de chaque zone.
  emptyMessages: {
    welfare: [
      "💜 C'est calme ici. Un peu trop calme. Quelqueer a besoin de soin ?",
      "💜 Ouh ouh... y'a quelqueer ? Les coussins sont chauds, les tisanes sont prêtes.",
      "💜 Vide pour l'instant. Le welfare attend, patient comme toujours.",
      "💜 Silence doux. Aucun pax n'est épuisé — ou alors iels font semblant de tenir le coup.",
      "💜 Personne ici. C'est soit très bon signe, soit le signe que tout le monde serre les dents.",
    ],
    cantina: [
      "🍽 Les casseroles refroidissent. Y'a quelqueer pour mettre la main à la pâte ?",
      "🍽 Ouh ouh... c'est l'heure de manger ? Les tables attendent.",
      "🍽 Vide. La cantina réfléchit à sa vie. Elle mérite mieux.",
      "🍽 Personne en cuisine. Le compost s'impatiente.",
      "🍽 Silence côté fourneaux. Une odeur de rien du tout flotte dans l'air.",
    ],
    pmu: [
      "🍺 Les tabourets sont vides. Les verres aussi. C'est triste.",
      "🍺 Ouh ouh... y'a quelqueer pour ouvrir le bar ?",
      "🍺 Le PMU attend ses piliers de comptoir. Il se sent abandonné.",
      "🍺 Personne. Même le jukebox fait la gueule.",
      "🍺 Vide pour l'instant. Le PMU médite sur le sens de la bière.",
    ],
    isoloir: [
      "🌿 Silence total. La porte est fermée. Personne n'a besoin de solitude... pour l'instant.",
      "🌿 Vide. L'isoloir attend patiemment cellui qui en aura besoin.",
      "🌿 Calme absolu ici. Même les oiseaux chuchotent.",
      "🌿 Porte fermée, personne dedans. Un luxe rare sur ce camp.",
    ],
    playroom_ext: [
      "⚡ Les structures sont là, mais personne pour jouer. Dommage.",
      "⚡ Vide. Les cordes s'ennuient. Les crochets aussi.",
      "⚡ Ouh ouh... la playroom ext. est libre ! Qui ose ?",
      "⚡ Personne dehors pour le moment. L'énergie du lieu couve.",
    ],
    playroom_int: [
      "⚡ La playroom intérieure est vide. Tout est prêt. Il manque juste... les gens.",
      "⚡ Silence dans la playroom. Les coussins attendent.",
      "⚡ Personne ici pour le moment. La vibe dort.",
      "⚡ Ouh ouh... quelqueer pour allumer l'ambiance ?",
    ],
    bat2: [
      "⚡ La playroom intérieure est vide. Tout est prêt. Il manque juste... les gens.",
      "⚡ Silence dans la playroom. Les coussins attendent.",
      "⚡ Personne ici pour le moment. La vibe dort.",
      "⚡ Ouh ouh... quelqueer pour allumer l'ambiance ?",
    ],
    mixroom: [
      "🌀 La Mix-room est silencieuse. Les coussins sont arrangés mais inoccupés.",
      "🌀 Vide. La musique s'est tue. Ça manque.",
      "🌀 Ouh ouh... y'a quelqueer pour la Mix-room ?",
      "🌀 Personne. Le sol attend des corps qui bougent.",
    ],
    tente_cer: [
      "🎪 La tente est prête. Les bougies attendent d'être allumées.",
      "🎪 Vide. Un espace sacré sans rite, c'est juste une tente.",
      "🎪 Ouh ouh... qui pour animer la tente cérémonie ?",
      "🎪 Silence rituel. En attente de la prochaine cérémonie.",
    ],
    bat1: [
      "💜 Les chambres sont calmes. Personne ne somnole, personne ne câline.",
      "💜 Vide. Les lits font grise mine.",
      "💜 Ouh ouh... y'a quelqueer dans les chambres ?",
      "💜 Calme plat dans les chambres. L'ambiance dort, littéralement.",
    ],
    _default: [
      "Vide pour l'instant. En attente de quelqueer.",
      "Ouh ouh... y'a quelqueer ?",
      "C'est très calme ici. Suspicieusement calme.",
      "Personne pour le moment. La zone s'impatiente.",
    ],
  },

  // ── 11. DESCRIPTIONS DYNAMIQUES DES ZONES (avec pax) ─────────
  // {pax} = liste des pax présents, insérée automatiquement.
  atmosphere: {
    dom_sub:            "🔥 {pax} — La tension est palpable. Une scène pourrait se déclencher.",
    top_bottom:         "🪢 {pax} — Concentration totale. Ne pas déranger.",
    pet_dom:            "🐾 {pax} — On entend des petits bruits heureux. Tout va bien.",
    soigneurice:        "💜 {pax} — Une douceur particulière règne ici. Quelqu'un prend soin de toustes.",
    chaotique_pmu:      "🤡 {pax} — Le micro a été confisqué deux fois. Ambiance électrique.",
    servicetop_cantina: "🍳 {pax} — Ça sent incroyablement bon depuis là-dedans.",
    festif:             "🎉 {pax} — L'ambiance monte. La Vibe avec.",
    creatif:            "🎨 {pax} — Une installation improbable se forme dans le coin.",
    slut_crowd:         "💋 {pax} — Beaucoup de monde, beaucoup d'énergie. La zone déborde.",
    solo_low:           "{emoji} {nom} est seul·e ici. Iel se ressource tranquillement.",
    solo_high:          "{emoji} {nom} est seul·e ici. Iel produit, mais une synergie manque.",
    generic_low:        "{pax} — Calme et productif. Tout roule.",
    generic_high:       "{pax} — La Vibe monte doucement. L'énergie est là.",
  },

  // ── 12. TITRES DE VICTOIRE ───────────────────────────────────
  endTitles: [
    'Architecte du Désordre',
    'Maîtresse du Chaos Doux',
    'Champion·ne du Soin',
    'Reine du PMU',
    'Légende de la Vibe',
  ],

  // ── 13. ÉCRAN DE FIN ─────────────────────────────────────────
  endScreen: {
    title:    "LE DÉSORDRE A TRIOMPHÉ",
    subtitle: "La Norme s'enfuit en pleurant.\nTout le monde danse autour du compost.",
  },
};
