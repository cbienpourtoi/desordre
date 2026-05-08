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
    choufleur:'Prince Choufleur',
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
  invaders: {
    patriarche: {
      name:      "Le Patriarche",
      quote:     "Mais c'est pas naturel !",
      queerName: "Le Pater en jupe",
      queerMsg:  "Iel a essayé un cours de danse. Plus jamais iel ne jugera personne.",
      savaisTu:  "Le BDSM queer célèbre toutes les expressions de genre — y compris celles que personne n'attendait.",
    },
    flic_genre: {
      name:      "Le Flic du Genre",
      quote:     "Il y a deux genres, c'est tout.",
      queerName: "L'ex-flic non-binaire",
      queerMsg:  "Iel a rendu son insigne et s'est inscrit·e à un atelier drag. Un nouveau monde s'ouvre.",
      savaisTu:  "La non-binarité est reconnue dans de nombreux pays. La France avance doucement, mais elle avance.",
    },
    cishet: {
      name:      "Le Cishet Productiviste",
      quote:     "Vous êtes pas un peu... perdus ?",
      queerName: "Le mec en burn-out libéré",
      queerMsg:  "Il a posé son ordinateur. Il découvre l'oisiveté radicale. Il pleure un peu (de soulagement).",
      savaisTu:  "Le repos comme acte de résistance au capitalisme, c'est une vraie pratique politique queer.",
    },
    morale: {
      name:      "La Morale",
      quote:     "Pensez aux enfants !",
      queerName: "L'ex-bigot·e qui lit bell hooks",
      queerMsg:  "Iel a lu \"tout le monde peut aimer\". Iel demande où s'inscrire au prochain atelier.",
      savaisTu:  "bell hooks a écrit sur l'amour, le féminisme et la libération — des incontournables.",
    },
    influenceur: {
      name:      "L'Influenceur Lifestyle",
      quote:     "Contenu authentique !",
      queerName: "Le Créateur de Contenu Compost",
      queerMsg:  "Iel filme désormais des vidéos ASMR de vers de terre. Ses abonné·es ne comprennent pas, mais iel s'en fout.",
      savaisTu:  "La culture queer a toujours subverti les codes médiatiques — la banalité radicale, c'est queer.",
    },
    coach: {
      name:      "Le Coach Développement Perso",
      quote:     "Sortez de votre zone de confort !",
      queerName: "Le Coach de Dépersonnalisation Radicale",
      queerMsg:  "Iel a tout quitté et rejoint un collectif d'entraide. Iel pleure et dit que c'est sa meilleure décision.",
      savaisTu:  "La décroissance et le slow life sont des pratiques militantes, pas juste une tendance Instagram.",
    },
    voisin: {
      name:      "Le Voisin Chelou",
      quote:     "C'est qui ces gens ?",
      queerName: "Le Voisin Allié",
      queerMsg:  "Iel apporte des légumes du jardin et demande si on peut lui expliquer ce que veut dire non-binaire.",
      savaisTu:  "Les alliés inattendus existent partout. La curiosité sincère est toujours la bienvenue.",
    },
    manager: {
      name:      "Le Manager de Réunion",
      quote:     "Avez-vous un agenda ?",
      queerName: "Le Bottom Corporate",
      queerMsg:  "Iel a découvert son côté réceptif. Son safeword est \"agenda\". Il est très heureux.",
      savaisTu:  "Le BDSM peut être un espace de libération pour des personnes formatées à tout contrôler.",
    },
    papa: {
      name:      "Le Papa Déçu",
      quote:     "J'aurais voulu des petits-enfants...",
      queerName: "Le Papa qui Comprend",
      queerMsg:  "Iel a enfin envoyé un message à son enfant : \"Je suis fier·ère de toi.\" Toustes pleurent.",
      savaisTu:  "L'acceptation familiale est le facteur le plus déterminant pour la santé mentale des personnes LGBTQ+.",
    },
    prof: {
      name:      "Le Prof de SVT",
      quote:     "La reproduction est binaire !",
      queerName: "Le Prof qui Réécrit Ses Cours",
      queerMsg:  "Iel a ajouté les manchots, les poissons clown et les grenouilles à son cours. Les élèves adorent.",
      savaisTu:  "Plus de 1500 espèces animales pratiquent l'homosexualité. La nature est queer depuis toujours.",
    },
    musclor: {
      name:      "Le Monsieur Musclé",
      quote:     "C'est des malades !",
      queerName: "Le Gros Sub Timide",
      queerMsg:  "Iel a découvert qu'iel aime se faire attacher. Iel est maintenant le pax le plus enthousiaste.",
      savaisTu:  "Le BDSM déconstruit les normes de genre, de pouvoir et de corps. Tout le monde peut y trouver sa place.",
    },
    mediatique: {
      name:      "Le Chroniqueur CNews",
      quote:     "La woke folie doit cesser !",
      queerName: "La Chroniqueuse Radio Féministe",
      queerMsg:  "Iel anime désormais une émission sur les sexualités positives. Record d'audience.",
      savaisTu:  "La représentation médiatique des personnes LGBTQ+ a un impact direct sur les violences et discriminations.",
    },
  },

  // ── 5. MESSAGES DE LA CRIÉE ──────────────────────────────────
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
    "📢 La Criée : Prince Choufleur proclame un royaume de 3m² autour du PMU.",
    "📢 La Criée : Onigiri propose un atelier \"beaucoup de couches\" — interprétation libre.",
    "📢 La Criée : rappel — les isoloirs sont pour le soin, pas pour le play.",
    "📢 La Criée : Chaton cherche un·e partenaire d'étirements. C'est sérieux.",
    "📢 La Criée : Papille est à la Mix-room avec de la limonade de fleur de sureau. Première arrivée.",
    "📢 La Criée : Vigne fait des grappes humaines dans la tente. C'est beau.",
    "📢 La Criée : Dodo a réapparu. On ne pose pas de questions.",
    "📢 La Criée : le compost a été renversé. On cherche des volontaires courageux·ses.",
  ],

  // ── 6. SCÈNES ────────────────────────────────────────────────
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

  // ── 7. QUÊTES QUOTIDIENNES ───────────────────────────────────
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

  // ── 8. MESSAGES ZONES VIDES ──────────────────────────────────
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

  // ── 9. DESCRIPTIONS DYNAMIQUES DES ZONES (avec pax) ─────────
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

  // ── 10. TITRES DE VICTOIRE ───────────────────────────────────
  endTitles: [
    'Architecte du Désordre',
    'Maîtresse du Chaos Doux',
    'Champion·ne du Soin',
    'Reine du PMU',
    'Légende de la Vibe',
  ],

  // ── 11. ÉCRAN DE FIN ─────────────────────────────────────────
  endScreen: {
    title:    "LE DÉSORDRE A TRIOMPHÉ",
    subtitle: "La Norme s'enfuit en pleurant.\nTout le monde danse autour du compost.",
  },
};
