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
  // Chaque agent référence 4 ateliers pondérés + ses effets d'échec/succès.
  invaders: {
    patriarche: {
      quote: "J'ai toujours fait comme ça. Ça a marché pendant 50 ans.",
      savaisTu: "L'acceptation familiale est le facteur #1 de santé mentale des personnes LGBTQ+. Pas les lois — les familles.",
      ateliers: {
        cuisine: 80,
        corps: 40,
        oisivete: 40,
        drag: 15
      },
      failBuilding: {
        name: "Salle de réunion familiale",
        emoji: "🪑",
        effect: "vibe_drain_slow",
        description: "Une pièce où quelqu'un décide pour tout le monde."
      },
      successAlly: {
        name: "Le Pater en Reconstruction",
        emoji: "🌱",
        effect: "pax_morale_boost",
        duration: 90,
        description: "Il pleure facilement maintenant. Les gens trouvent ça beau."
      }
    },
    gardienne: {
      quote: "Les enfants ont besoin de repères, pas de confusion !",
      savaisTu: "La honte sexuelle a des effets mesurables sur la santé physique : système immunitaire, tension, sommeil. Pas metaphoriquement — littéralement.",
      ateliers: {
        corps: 80,
        lettre: 40,
        danser: 40,
        shibari: 15
      },
      failBuilding: {
        name: "Permanence Bien-être™",
        emoji: "🌈",
        effect: "welfare_fake",
        description: "Ça ressemble au Welfare mais ça ne soigne pas vraiment."
      },
      successAlly: {
        name: "La Libertine Tardive",
        emoji: "🌸",
        effect: "criee_boost",
        duration: 80,
        description: "À 58 ans elle découvre qu'elle avait juste peur. Elle pose des questions un peu trop directes."
      }
    },
    tradwife: {
      quote: "La féminité, c'est une force. Arrêtez de vous la faire voler.",
      savaisTu: "Le mouvement tradwife prospère sur la détresse réelle des femmes épuisées. La solution proposée est fausse, le problème sous-jacent, lui, est réel.",
      ateliers: {
        oisivete: 80,
        lettre: 40,
        corps: 40,
        cuisine: 15
      },
      failBuilding: {
        name: "Studio de tournage @bonheur_authentique",
        emoji: "🎬",
        effect: "vibe_drain_slow",
        description: "Tout le monde sourit sur la photo. Hors champ c'est le chaos."
      },
      successAlly: {
        name: "La Créatrice de Contenu Chaos",
        emoji: "🌀",
        effect: "criee_boost",
        duration: 70,
        description: "Elle filme enfin le hors-champ. Ses abonné·es s'effondrent mais elle respire pour la première fois."
      }
    },
    proprio: {
      quote: "C'est ma propriété. Y'a des règles.",
      savaisTu: "En France, être locataire LGBTQ+ augmente significativement le risque de discrimination au logement. Les propriétaires peuvent légalement refuser sans motif officiel.",
      ateliers: {
        cuisine: 80,
        oisivete: 40,
        lettre: 40,
        impact: 15
      },
      failBuilding: {
        name: "Résidence surveillée",
        emoji: "📹",
        effect: "pax_stress",
        description: "Il a installé une caméra. Les pax se sentent observés."
      },
      successAlly: {
        name: "Le Voisin qui Frappe Avant d'Entrer",
        emoji: "🥕",
        effect: "welfare_boost",
        duration: 100,
        description: "Il apporte des légumes du jardin et demande si il peut rester un peu."
      }
    },
    profbio: {
      quote: "XX ou XY. C'est la biologie, pas une opinion.",
      savaisTu: "Plus de 1500 espèces animales pratiquent des comportements homosexuels documentés. La nature est queer depuis toujours.",
      ateliers: {
        lettre: 80,
        corps: 40,
        oisivete: 40,
        danser: 15
      },
      failBuilding: {
        name: "Salle de cours avec schéma XX/XY",
        emoji: "📋",
        effect: "vibe_drain_slow",
        description: "Le schéma est accroché au mur. Elle le montre fièrement."
      },
      successAlly: {
        name: "La Prof qui Réécrit Ses Cours",
        emoji: "📚",
        effect: "fun_facts_boost",
        duration: 90,
        description: "Elle est en colère contre ses anciens manuels. Bonne colère."
      }
    },
    masculiniste: {
      quote: "Les hommes aussi souffrent. Mais on n'a pas le droit de le dire.",
      savaisTu: "Les hommes cisgenres ont les taux de suicide les plus élevés — conséquence directe de la norme de virilité qui interdit l'expression émotionnelle.",
      ateliers: {
        impact: 80,
        corps: 40,
        shibari: 40,
        lettre: 15
      },
      failBuilding: {
        name: "Forum d'entraide masculine",
        emoji: "🖥️",
        effect: "vibe_drain_fast",
        description: "Les pax évitent la zone. L'énergie est lourde."
      },
      successAlly: {
        name: "L'Homme qui Se Pose des Questions",
        emoji: "🤔",
        effect: "pax_morale_boost",
        duration: 60,
        description: "Il a arrêté de crier. Il écoute. C'est déjà énorme."
      }
    },
    papa: {
      quote: "J'aurais voulu des petits-enfants... normaux.",
      savaisTu: "Un simple message d'acceptation d'un parent réduit de 40% le risque de dépression chez les jeunes LGBTQ+.",
      ateliers: {
        lettre: 80,
        cuisine: 40,
        corps: 40,
        drag: 15
      },
      failBuilding: {
        name: "Bureau du père de famille",
        emoji: "🪞",
        effect: "welfare_drain",
        description: "Une pièce froide où quelqu'un attend des explications."
      },
      successAlly: {
        name: "Le Papa qui Comprend",
        emoji: "💌",
        effect: "pax_morale_boost",
        duration: 90,
        description: "Il a enfin envoyé le message. Juste 'je suis fier·ère de toi.' Tout le monde pleure."
      }
    },
    chroniqueur: {
      quote: "La woke folie doit s'arrêter là.",
      savaisTu: "La représentation médiatique positive des personnes LGBTQ+ réduit les actes de violence homophobes et transphobes dans les zones d'audience.",
      ateliers: {
        drag: 80,
        lettre: 40,
        oisivete: 40,
        impact: 15
      },
      failBuilding: {
        name: "Studio de débat",
        emoji: "🎙️",
        effect: "criee_toxic",
        description: "Des messages toxiques apparaissent dans la Criée."
      },
      successAlly: {
        name: "La Chroniqueuse Radio Féministe",
        emoji: "📻",
        effect: "criee_boost",
        duration: 80,
        description: "Changement de genre inclus. Record d'audience. Iel ne sait toujours pas comment c'est arrivé."
      }
    },
    allie: {
      quote: "En tant qu'homme cisgendre, je pense qu'il est important que je dise...",
      savaisTu: "Le « féminisme performatif » des hommes alliés est un des patterns les mieux documentés par les études de genre. L'écoute active reste l'acte le plus rare.",
      ateliers: {
        oisivete: 80,
        lettre: 40,
        corps: 40,
        shibari: 15
      },
      failBuilding: {
        name: "Conférence TED bienveillante",
        emoji: "🎤",
        effect: "vibe_drain_slow",
        description: "Un seul pax parle. Les autres écoutent passivement."
      },
      successAlly: {
        name: "L'Allié qui Écoute",
        emoji: "👂",
        effect: "pax_morale_boost",
        duration: 70,
        description: "Il a fermé la bouche. C'est son plus grand accomplissement. Il le dit encore trop souvent."
      }
    }
  },

  // ── 5. ATELIERS ──────────────────────────────────────────────
  // Chaque atelier a 3 étapes, chacune avec 4 choix.
  // type: 'excellent' | 'moyen' | 'mauvais' | 'wtf'
  // score: 0, 1 ou 2
  ateliers: {
    drag: {
      id: "drag",
      nom: "Atelier drag",
      description: "Transformation par le costume et le miroir.",
      emoji: "💄",
      etapes: [
        {
          question: "Comment ça commence ?",
          choix: [
            {
              texte: "On lui propose de choisir lui-même ce qu'il veut essayer — une pièce, une couleur, un geste. On est là si il veut des idées.",
              type: "excellent",
              score: 2,
              reponse: "Il prend son temps. Il tend la main vers quelque chose. C'est le sien."
            },
            {
              texte: "Un pax lui tend quelque chose sans rien dire, juste en souriant.",
              type: "moyen",
              score: 1,
              reponse: "Il hésite. Il prend quand même. Quelque chose s'ouvre légèrement."
            },
            {
              texte: "Allez, on commence par la perruque, tout le monde fait ça en premier.",
              type: "mauvais",
              score: 0,
              reponse: "Il recule d'un demi-pas. On a brûlé une étape. Il est là mais fermé."
            },
            {
              texte: "Nuageon arrive avec une cape dorée et annonce 'tu es ici pour ta transformation, choisie par les étoiles'.",
              type: "wtf",
              score: 1,
              reponse: "Il rit malgré lui. La tension tombe d'un cran. On peut travailler avec ça."
            }
          ]
        },
        {
          question: "Il hésite devant le miroir.",
          choix: [
            {
              texte: "On lui dit : tu peux regarder, ne pas regarder, t'approcher, t'éloigner — le miroir fait ce que tu veux.",
              type: "excellent",
              score: 2,
              reponse: "Il s'approche lentement. Il regarde. Son visage change de quelque chose."
            },
            {
              texte: "On lui dit 'c'est beau' avant qu'il ait rien dit.",
              type: "moyen",
              score: 1,
              reponse: "Il sourit poliment. Il n'est pas sûr de ce qu'il voit encore."
            },
            {
              texte: "On le pousse doucement vers le miroir. Allez, regarde.",
              type: "mauvais",
              score: 0,
              reponse: "Il se fige. On vient de décider pour lui. L'élan est cassé."
            },
            {
              texte: "Aïoli se met aussi devant le miroir et fait des grimaces jusqu'à ce que l'ambiance change.",
              type: "wtf",
              score: 1,
              reponse: "Il éclate de rire. Il se retrouve à regarder son propre reflet en riant. Pas mal."
            }
          ]
        },
        {
          question: "Il se voit. Quelque chose se passe.",
          choix: [
            {
              texte: "On lui laisse le temps. Puis on lui demande doucement : 'qu'est-ce que tu vois ?'",
              type: "excellent",
              score: 2,
              reponse: "Il répond quelque chose de vrai. Peut-être juste un mot. Mais c'est le sien."
            },
            {
              texte: "On dit 't'as vu, c'était là tout le temps'.",
              type: "moyen",
              score: 1,
              reponse: "Il hoche la tête. C'est peut-être vrai. Il n'est pas sûr encore."
            },
            {
              texte: "On applaudit fort et on crie bravo.",
              type: "mauvais",
              score: 0,
              reponse: "Il sourit mais il est gêné. Le moment intime vient d'être envahi."
            },
            {
              texte: "Quelqu'un sort une flûte et joue une fanfare de 3 secondes.",
              type: "wtf",
              score: 1,
              reponse: "Il rit, il pleure un peu, il rit encore. Personne ne sait exactement ce qui vient de se passer."
            }
          ]
        }
      ]
    },
    lettre: {
      id: "lettre",
      nom: "Atelier lettre",
      description: "Écrire à soi-même, à quelqu'un, ou à personne.",
      emoji: "✉️",
      etapes: [
        {
          question: "À qui écrit-il ?",
          choix: [
            {
              texte: "On lui propose trois destinations possibles, on lui explique chacune, et on lui dit qu'il peut aussi en inventer une autre.",
              type: "excellent",
              score: 2,
              reponse: "Il réfléchit longtemps. Il choisit quelque chose d'inattendu. Bien."
            },
            {
              texte: "On lui dit 'écris à quelqu'un à qui tu penses en ce moment'.",
              type: "moyen",
              score: 1,
              reponse: "Il sait déjà à qui. Il commence. C'est quelque chose."
            },
            {
              texte: "On lui dit 'écris à ton enfant, ça lui fera du bien'.",
              type: "mauvais",
              score: 0,
              reponse: "Il se crispe. On vient de lui donner une mission. Ce n'est plus un atelier, c'est une tâche."
            },
            {
              texte: "'Écris à ton chat intérieur', dit Will McClick avec le plus grand sérieux.",
              type: "wtf",
              score: 1,
              reponse: "Il lève les yeux au ciel mais il sourit. Il écrit quand même. Au chat intérieur."
            }
          ]
        },
        {
          question: "Il bloque. Il ne sait pas quoi écrire.",
          choix: [
            {
              texte: "On lui dit : tu peux commencer par 'je ne sais pas quoi dire'. C'est souvent là que ça commence.",
              type: "excellent",
              score: 2,
              reponse: "Il écrit ces mots. Et puis d'autres arrivent. Et puis beaucoup d'autres."
            },
            {
              texte: "On lui suggère une première phrase.",
              type: "moyen",
              score: 1,
              reponse: "Il part de la phrase proposée. Ce n'est pas tout à fait le sien, mais ça avance."
            },
            {
              texte: "On lui dit 'écris juste ce que tu ressens, c'est simple'.",
              type: "mauvais",
              score: 0,
              reponse: "Il se sent nul de pas savoir faire quelque chose de 'simple'. Il écrit trois mots et s'arrête."
            },
            {
              texte: "Aïoli dit 'moi j'ai écrit ouaf et j'ai pleuré pendant 20 minutes'.",
              type: "wtf",
              score: 1,
              reponse: "Il rigole. La pression tombe. Il écrit n'importe quoi pour commencer. Et puis quelque chose de vrai."
            }
          ]
        },
        {
          question: "Il lit sa lettre à voix haute. C'est terminé.",
          choix: [
            {
              texte: "On lui demande s'il veut qu'on reste silencieux, qu'on réagisse, ou qu'on partage quelque chose à notre tour. C'est lui qui choisit.",
              type: "excellent",
              score: 2,
              reponse: "Il choisit le silence. Ou pas. Mais c'est son choix. C'est tout ce qui compte."
            },
            {
              texte: "'Merci de l'avoir partagé.'",
              type: "moyen",
              score: 1,
              reponse: "C'est doux. C'est un peu formulaïque. Mais c'est sincère."
            },
            {
              texte: "'Tu vois, c'est pas si dur d'exprimer ses émotions !'",
              type: "mauvais",
              score: 0,
              reponse: "Il se ferme immédiatement. La leçon vient d'annuler tout ce qui s'est passé."
            },
            {
              texte: "Nuageon sort un harmonica et joue trois notes très solennelles.",
              type: "wtf",
              score: 1,
              reponse: "Tout le monde rit doucement. Lui aussi. C'est une fin étrange et parfaite."
            }
          ]
        }
      ]
    },
    cuisine: {
      id: "cuisine",
      nom: "Shift de cuisine",
      description: "Cuisiner ensemble — le care par les actes.",
      emoji: "🥕",
      etapes: [
        {
          question: "Quelle tâche on lui confie ?",
          choix: [
            {
              texte: "On lui présente les options — couper, mélanger, goûter, surveiller la cuisson — et on lui demande ce qui lui parle.",
              type: "excellent",
              score: 2,
              reponse: "Il choisit quelque chose de manuel. Il commence. Il est dans le présent."
            },
            {
              texte: "On lui donne les légumes à éplucher parce que c'est ce qu'il y a à faire.",
              type: "moyen",
              score: 1,
              reponse: "Il éplèche. C'est répétitif. Quelque chose se détend dans ses épaules."
            },
            {
              texte: "On lui dit 'toi tu gères la logistique, t'as l'air organisé'.",
              type: "mauvais",
              score: 0,
              reponse: "Il gère la logistique. Il est efficace. Il ne s'est pas passé grand chose."
            },
            {
              texte: "On lui tend un poireau en lui disant 'c'est ton nouveau meilleur ami pour les 20 prochaines minutes'.",
              type: "wtf",
              score: 1,
              reponse: "Il regarde le poireau. Il regarde la personne. Il commence à éplucher en souriant."
            }
          ]
        },
        {
          question: "Quelqu'un chante pendant qu'on cuisine.",
          choix: [
            {
              texte: "On chante aussi — pas pour l'inciter, juste parce qu'on en a envie. Il fait ce qu'il veut avec ça.",
              type: "excellent",
              score: 2,
              reponse: "Il fredonne quelque chose. À peine. Mais c'est là."
            },
            {
              texte: "On lui sourit en chantant pour l'inviter.",
              type: "moyen",
              score: 1,
              reponse: "Il sourit. Il ne chante pas. Mais il est là, avec nous."
            },
            {
              texte: "Allez, chante avec nous !",
              type: "mauvais",
              score: 0,
              reponse: "Il rit gêné et secoue la tête. L'invitation est devenue une injonction."
            },
            {
              texte: "Aïoli entonne une chanson en inventant les paroles sur les légumes présents.",
              type: "wtf",
              score: 1,
              reponse: "Tout le monde rit. Lui aussi. Il reprend le refrain sans s'en rendre compte."
            }
          ]
        },
        {
          question: "On mange ensemble. L'ambiance est là.",
          choix: [
            {
              texte: "On ne lui demande rien. On mange, on parle de trucs légers, on lui laisse l'espace d'être là sans performer.",
              type: "excellent",
              score: 2,
              reponse: "Il dit quelque chose. Pas grand chose. Mais c'était de lui, librement."
            },
            {
              texte: "On lui demande ce qu'il a pensé de l'atelier.",
              type: "moyen",
              score: 1,
              reponse: "Il répond poliment. Ce n'est pas le plus important qui s'est passé ici."
            },
            {
              texte: "On lui dit 'tu vois, c'est ça la vie en communauté'.",
              type: "mauvais",
              score: 0,
              reponse: "Il hoche la tête. La leçon a effacé le moment."
            },
            {
              texte: "Quelqu'un renverse la sauce. Tout le monde rit. C'est le meilleur moment.",
              type: "wtf",
              score: 1,
              reponse: "Il rit aussi, franchement. Personne n'a rien fait. C'est arrivé tout seul."
            }
          ]
        }
      ]
    },
    corps: {
      id: "corps",
      nom: "Atelier dessins sur le corps",
      description: "Se dessiner dessus — le corps comme espace propre.",
      emoji: "🎨",
      etapes: [
        {
          question: "On lui explique l'atelier.",
          choix: [
            {
              texte: "On lui explique qu'on va dessiner sur les corps — le sien si il veut, celui des autres si ils veulent. On lui montre les peintures. On lui dit qu'il peut aussi juste regarder.",
              type: "excellent",
              score: 2,
              reponse: "Il regarde les peintures. Il tend la main pour en toucher une. C'est un début."
            },
            {
              texte: "On lui dit 'on va se dessiner dessus, c'est cool'.",
              type: "moyen",
              score: 1,
              reponse: "Il a l'air sceptique mais pas fermé. On peut travailler."
            },
            {
              texte: "On commence à lui dessiner sur le bras sans demander.",
              type: "mauvais",
              score: 0,
              reponse: "Il retire son bras. Contact sans consentement. L'atelier démarre très mal."
            },
            {
              texte: "Nuageon lui montre son propre bras couvert de petites planètes en disant 'j'ai commencé hier'.",
              type: "wtf",
              score: 1,
              reponse: "Il regarde les planètes longtemps. Il demande 'c'est quoi celle-là ?'"
            }
          ]
        },
        {
          question: "Quelqu'un lui demande s'il peut dessiner sur son dos.",
          choix: [
            {
              texte: "On lui demande à quel endroit il est à l'aise, ce qu'il ne veut pas qu'on touche, et si il veut voir le dessin avant qu'on commence.",
              type: "excellent",
              score: 2,
              reponse: "Il réfléchit. Il dit oui pour le dos, pas les épaules. Il est là, présent, en sécurité."
            },
            {
              texte: "On lui demande juste 'ça marche si je dessine là ?'",
              type: "moyen",
              score: 1,
              reponse: "Il dit oui. C'est un consentement mais pas très éclairé. Ça avance quand même."
            },
            {
              texte: "On commence à soulever son t-shirt sans demander.",
              type: "mauvais",
              score: 0,
              reponse: "Il recule. Contact non consenti. Le lien de confiance est abîmé."
            },
            {
              texte: "'Je veux dessiner un dragon mais je préviens, je suis nul en dragon', dit Aïoli.",
              type: "wtf",
              score: 1,
              reponse: "Il rit. 'Ok mais si c'est raté c'est ta faute.' Il accepte. L'humour a fait le travail du consentement."
            }
          ]
        },
        {
          question: "Il regarde ce qui est dessiné sur lui.",
          choix: [
            {
              texte: "On lui tend un miroir et on lui demande s'il veut qu'on lui décrive ce qu'il ne peut pas voir.",
              type: "excellent",
              score: 2,
              reponse: "Il choisit qu'on lui décrive. Il écoute. Son visage est ouvert."
            },
            {
              texte: "On lui dit 'c'est beau, non ?'",
              type: "moyen",
              score: 1,
              reponse: "Il regarde. 'Ouais.' Il ne sait pas encore exactement ce qu'il ressent."
            },
            {
              texte: "On prend une photo sans demander pour lui montrer.",
              type: "mauvais",
              score: 0,
              reponse: "Il fronce les sourcils. Photo sans consentement. Même avec bonne intention."
            },
            {
              texte: "Will McClick sort une loupe et annonce 'analyse en cours'.",
              type: "wtf",
              score: 1,
              reponse: "Il rit. Il se laisse 'analyser'. Quelque chose dans le regard de l'autre l'aide à se voir."
            }
          ]
        }
      ]
    },
    oisivete: {
      id: "oisivete",
      nom: "Atelier oisiveté radicale",
      description: "Ne rien faire ensemble — résistance à la productivité.",
      emoji: "☁️",
      etapes: [
        {
          question: "On lui explique l'atelier.",
          choix: [
            {
              texte: "On lui dit : il n'y a rien à faire, rien à réussir, rien à comprendre. On est juste là. Tu peux t'allonger, regarder le ciel, fermer les yeux. Ou pas.",
              type: "excellent",
              score: 2,
              reponse: "Il s'allonge dans l'herbe. Il regarde le ciel. Il ne dit rien. C'est déjà énorme."
            },
            {
              texte: "On lui dit 'c'est un atelier de récupération, repose-toi'.",
              type: "moyen",
              score: 1,
              reponse: "Il s'assoit. Il essaie de 'se reposer'. C'est un peu performatif mais ça ira."
            },
            {
              texte: "On lui dit 'le but c'est d'apprendre à ne rien faire — concentre-toi là-dessus'.",
              type: "mauvais",
              score: 0,
              reponse: "Il essaie de ne rien faire avec beaucoup d'effort. L'injonction est dans la phrase."
            },
            {
              texte: "Aïoli arrive avec une couverture, s'enroule dedans et dit 'je suis une chenille maintenant'.",
              type: "wtf",
              score: 1,
              reponse: "Il rit. Il s'allonge à côté. 'Moi je suis quoi alors ?' C'est parti."
            }
          ]
        },
        {
          question: "Il s'agite. Il sort son téléphone.",
          choix: [
            {
              texte: "On ne dit rien. On continue à ne rien faire. On lui fait confiance pour trouver son propre rythme.",
              type: "excellent",
              score: 2,
              reponse: "Il scrole quelques minutes. Puis il pose le téléphone. Il regarde autour de lui."
            },
            {
              texte: "On lui pose doucement la main sur le bras.",
              type: "moyen",
              score: 1,
              reponse: "Il lève les yeux. Il repose le téléphone. Le contact a suffi."
            },
            {
              texte: "On lui dit 'range ton téléphone, t'es pas là pour ça'.",
              type: "mauvais",
              score: 0,
              reponse: "Il range le téléphone. Il est agacé. Il n'est plus vraiment là."
            },
            {
              texte: "Nuageon fait tomber son propre téléphone 'accidentellement' dans l'herbe et hausse les épaules.",
              type: "wtf",
              score: 1,
              reponse: "Il regarde Nuageon. Il regarde son propre téléphone. Il le pose."
            }
          ]
        },
        {
          question: "À la fin, il dit 'je comprends pas l'intérêt'.",
          choix: [
            {
              texte: "On lui dit : c'est normal. L'intérêt c'est peut-être justement qu'il n'y en a pas. Et on le laisse avec ça.",
              type: "excellent",
              score: 2,
              reponse: "Il réfléchit. Il ne répond pas. Quelque chose travaille en lui."
            },
            {
              texte: "On lui explique la science du repos et les bienfaits.",
              type: "moyen",
              score: 1,
              reponse: "Il écoute poliment. L'information entre. Mais la tête a repris le dessus."
            },
            {
              texte: "On lui dit 'tu comprendras avec le temps'.",
              type: "mauvais",
              score: 0,
              reponse: "Il hoche la tête. Il n'est pas convaincu. Il repart avec sa question sans réponse."
            },
            {
              texte: "Will McClick lui tend une brochure intitulée '10 raisons de ne rien faire' qu'il a manifestement préparée à l'avance.",
              type: "wtf",
              score: 1,
              reponse: "Il prend la brochure. Il la lit. Il la relit. 'Pourquoi t'avais ça sur toi ?'"
            }
          ]
        }
      ]
    },
    danser: {
      id: "danser",
      nom: "Danser dehors",
      description: "Bouger dans la nature, finir nu·es.",
      emoji: "🌿",
      etapes: [
        {
          question: "Comment ça commence ?",
          choix: [
            {
              texte: "On lui dit : on va bouger dehors, pas de bonne ou mauvaise façon de danser, pas d'obligation de suivre quoi que ce soit. On s'arrête quand on veut.",
              type: "excellent",
              score: 2,
              reponse: "Il commence à bouger, petit, dans son propre espace. Personne ne le regarde. C'est bien."
            },
            {
              texte: "On met de la musique et on commence à bouger.",
              type: "moyen",
              score: 1,
              reponse: "Il suit maladroitement. L'élan collectif l'embarque un peu."
            },
            {
              texte: "On lui dit 'suis le rythme, lâche-toi'.",
              type: "mauvais",
              score: 0,
              reponse: "Il essaie de 'lâcher prise' avec beaucoup de contrôle. L'injonction bloque tout."
            },
            {
              texte: "Aïoli commence à danser sur du silence en disant 'la meilleure musique est intérieure'.",
              type: "wtf",
              score: 1,
              reponse: "Il rit. Il essaie d'entendre sa musique intérieure. Il trouve quelque chose."
            }
          ]
        },
        {
          question: "Il danse mal et il le sait.",
          choix: [
            {
              texte: "On danse sans le regarder. Chacun dans son espace. Il n'a pas à performer pour nous.",
              type: "excellent",
              score: 2,
              reponse: "Sans regard sur lui, quelque chose se libère. Il prend un peu plus de place."
            },
            {
              texte: "On lui sourit pour l'encourager.",
              type: "moyen",
              score: 1,
              reponse: "Il sourit en retour. Il continue. Le regard bienveillant aide un peu."
            },
            {
              texte: "On lui montre comment faire.",
              type: "mauvais",
              score: 0,
              reponse: "Il essaie de reproduire. Il pense à sa technique. Il ne danse plus vraiment."
            },
            {
              texte: "Nuageon trébuche délibérément et crie 'c'est voulu'.",
              type: "wtf",
              score: 1,
              reponse: "Il rit et trébuche lui aussi. 'C'est voulu aussi.' La perfection n'est plus le sujet."
            }
          ]
        },
        {
          question: "Moment de se déshabiller.",
          choix: [
            {
              texte: "On s'arrête. On explique que cette partie est complètement optionnelle, que personne ne regarde personne, et qu'on peut aussi juste enlever ses chaussures. On demande si tout le monde est ok pour continuer.",
              type: "excellent",
              score: 2,
              reponse: "Il enlève ses chaussures. Peut-être sa veste. C'est son choix, pris librement."
            },
            {
              texte: "On dit 'c'est optionnel' et on continue sans attendre sa réponse.",
              type: "moyen",
              score: 1,
              reponse: "Il hésite. Il enlève une couche. Ce n'était pas vraiment une vraie question."
            },
            {
              texte: "Allez, tout le monde le fait, c'est libérateur !",
              type: "mauvais",
              score: 0,
              reponse: "Il se sent obligé. Il retire quelque chose. Ce n'est pas de la libération."
            },
            {
              texte: "Will McClick demande si les chaussettes comptent comme vêtement.",
              type: "wtf",
              score: 1,
              reponse: "Débat philosophique de 3 minutes sur les chaussettes. Il se déshabille pendant ce temps sans y penser."
            }
          ]
        }
      ]
    },
    shibari: {
      id: "shibari",
      nom: "Atelier shibari",
      description: "Initiation corde — lâcher le contrôle.",
      emoji: "🪢",
      etapes: [
        {
          question: "Comment on présente l'atelier ?",
          choix: [
            {
              texte: "On lui montre la corde, on lui explique ce qu'on va faire et où on va toucher. On lui dit qu'il peut arrêter à tout moment avec un mot ou un geste, et on lui demande s'il a des endroits qu'il ne veut pas qu'on touche.",
              type: "excellent",
              score: 2,
              reponse: "Il écoute attentivement. Il dit deux ou trois choses qu'il ne veut pas. C'est parfait, il est là."
            },
            {
              texte: "On lui dit 'c'est un atelier sur la confiance, on va y aller doucement'.",
              type: "moyen",
              score: 1,
              reponse: "Il acquiesce. Il n'a pas toutes les infos mais il fait confiance. Ça peut aller."
            },
            {
              texte: "On lui dit 'détends-toi, c'est pas douloureux'.",
              type: "mauvais",
              score: 0,
              reponse: "Il essaie de se détendre sur commande. Il n'a aucune info sur ce qui va se passer. Mauvais départ."
            },
            {
              texte: "Aïoli arrive avec une corde et dit 'j'ai regardé trois tutoriels YouTube ce matin, on est prêts'.",
              type: "wtf",
              score: 1,
              reponse: "Il rit nerveusement. Aïoli précise 'je plaisante, j'en ai regardé douze'. L'humour détend et ouvre la conversation."
            }
          ]
        },
        {
          question: "Qui tient la corde ?",
          choix: [
            {
              texte: "On lui présente la personne qui va tenir la corde, on lui explique son expérience, et on lui demande s'il se sent à l'aise avec elle avant de commencer.",
              type: "excellent",
              score: 2,
              reponse: "Il regarde la personne. Il pose une question. Il dit oui. C'est un vrai oui."
            },
            {
              texte: "On lui demande juste 'ça marche pour toi ?'",
              type: "moyen",
              score: 1,
              reponse: "Il dit oui. C'est un peu vague comme question mais l'intention est là."
            },
            {
              texte: "On lui dit 'fais-nous confiance'.",
              type: "mauvais",
              score: 0,
              reponse: "La confiance ça ne se demande pas, ça se construit. Il fait semblant d'être à l'aise."
            },
            {
              texte: "'Je peux tenir la corde', dit Will McClick, 'j'ai fait du macramé'.",
              type: "wtf",
              score: 1,
              reponse: "Il rit. Will McClick tient effectivement très bien la corde. Le macramé, c'est sous-estimé."
            }
          ]
        },
        {
          question: "Après l'expérience, l'aftercare.",
          choix: [
            {
              texte: "On lui demande ce dont il a besoin — couverture, eau, silence, contact, parler. On lui laisse le temps de revenir à lui avant de faire quoi que ce soit.",
              type: "excellent",
              score: 2,
              reponse: "Il prend le temps. Il dit ce dont il a besoin. Quelqu'un le lui donne. C'est complet."
            },
            {
              texte: "On lui dit 'alors, c'était bien ?'",
              type: "moyen",
              score: 1,
              reponse: "Il répond 'oui'. Il n'est pas encore tout à fait revenu. Mais la question l'aide à atterrir."
            },
            {
              texte: "On range la corde et on passe à autre chose.",
              type: "mauvais",
              score: 0,
              reponse: "Il reste là, un peu flottant. L'aftercare fait partie de l'expérience. Il manque quelque chose."
            },
            {
              texte: "Nuageon arrive avec une tisane et une couverture à pompons en disant 'protocole aftercare enclenché'.",
              type: "wtf",
              score: 1,
              reponse: "Il sourit. Il prend la tisane. Les pompons sont vraiment beaucoup. C'est parfait."
            }
          ]
        }
      ]
    },
    impact: {
      id: "impact",
      nom: "Atelier impact",
      description: "Donner et recevoir des sensations — sentir ses limites.",
      emoji: "⚡",
      etapes: [
        {
          question: "Comment on présente l'atelier ?",
          choix: [
            {
              texte: "On lui explique ce qu'est l'impact play, on lui montre les outils, on lui dit ce qu'on va faire et dans quel ordre. On lui demande ses limites et on établit un safeword ensemble.",
              type: "excellent",
              score: 2,
              reponse: "Il écoute. Il choisit un safeword. Il demande des questions. Il est vraiment là."
            },
            {
              texte: "On lui dit 'c'est un atelier sur la douleur et le plaisir, on y va doucement'.",
              type: "moyen",
              score: 1,
              reponse: "Il hoche la tête. Il n'a pas toutes les infos mais l'intention est bonne."
            },
            {
              texte: "On lui dit 'faut juste essayer pour comprendre'.",
              type: "mauvais",
              score: 0,
              reponse: "Il essaie sans savoir ce qu'il a accepté. Ce n'est pas du consentement éclairé."
            },
            {
              texte: "Aïoli arrive avec une spatule en bois et dit 'j'ai commencé ma carrière en cuisine'.",
              type: "wtf",
              score: 1,
              reponse: "Il rit. La spatule est remplacée par un outil approprié. L'ambiance est détendue."
            }
          ]
        },
        {
          question: "Il va recevoir un premier impact. Comment on prépare ça ?",
          choix: [
            {
              texte: "On lui montre le geste d'abord sans contact. On lui demande s'il est prêt. On lui rappelle son safeword. On attend son oui explicite.",
              type: "excellent",
              score: 2,
              reponse: "Il dit oui clairement. Ce oui-là est enthousiaste et éclairé. C'est le meilleur type de oui."
            },
            {
              texte: "On lui demande 'ça marche ?' et on y va.",
              type: "moyen",
              score: 1,
              reponse: "Il dit oui. C'est un peu rapide. Mais il n'a pas dit non."
            },
            {
              texte: "On y va doucement pour pas l'effrayer.",
              type: "mauvais",
              score: 0,
              reponse: "Il n'a pas réellement consenti à ce premier impact. L'intention douce ne remplace pas la question."
            },
            {
              texte: "'Je vais compter jusqu'à trois', dit Will McClick, 'un... deux... deux et demi...'",
              type: "wtf",
              score: 1,
              reponse: "Il rit. La tension monte et se détend en même temps. Il est prêt."
            }
          ]
        },
        {
          question: "Après le premier impact, il réagit.",
          choix: [
            {
              texte: "On fait une pause. On lui demande ce qu'il a ressenti — dans son corps, dans sa tête. On lui demande s'il veut continuer, changer quelque chose, ou s'arrêter.",
              type: "excellent",
              score: 2,
              reponse: "Il répond honnêtement. Il ajuste. Il choisit de continuer, autrement. C'est du vrai consentement continu."
            },
            {
              texte: "On lui demande 'c'était bien ?'",
              type: "moyen",
              score: 1,
              reponse: "Il dit 'ouais'. La question était un peu vague mais l'espace était là."
            },
            {
              texte: "On enchaîne directement en disant 'tu vois, c'est bien'.",
              type: "mauvais",
              score: 0,
              reponse: "Il n'a pas pu dire ce qu'il ressentait. Le consentement continu a été ignoré."
            },
            {
              texte: "Nuageon sort un carnet et dit 'je prends des notes pour la science'.",
              type: "wtf",
              score: 1,
              reponse: "Il rit. 'Qu'est-ce que tu notes ?' 'Tout.' La conversation s'ouvre naturellement."
            }
          ]
        }
      ]
    }
  },

  // ── 6. FUN FACTS QUEER ───────────────────────────────────────
  // Affichés aléatoirement lors des queerisations réussies
  // ou dans la Criée en cours de partie
  funFacts: [
    { id: "ff_01", texte: "Les comportements homosexuels ont été documentés chez plus de 1 500 espèces animales. La nature a visiblement ignoré les memo.", source: "MNHN, 2021" },
    { id: "ff_02", texte: "76% des chercheurs en biologie animale avaient observé des comportements homosexuels chez leurs sujets — mais seulement 18,5% en avaient parlé dans leurs publications. Même la science avait honte.", source: "Méta-analyse, Wikipedia" },
    { id: "ff_03", texte: "Environ 1,7% des humains naissent avec des caractéristiques intersexes. C'est la même proportion que les personnes rousses. Personne ne dit que les roux sont contre-nature.", source: "ONU" },
    { id: "ff_04", texte: "Les chromosomes sexuels ne se limitent pas à XX et XY. Il en existe plein d'autres — XXY, XO, XYY... Beaucoup de gens les portent sans le savoir.", source: "Wikipedia, distinction sexe/genre" },
    { id: "ff_05", texte: "Le terme Two-Spirit a été créé en 1990 par des autochtones à Winnipeg pour désigner des identités documentées dans plus de 130 peuples d'Amérique du Nord. La diversité de genre n'est pas une invention récente.", source: "Encyclopédie canadienne" },
    { id: "ff_06", texte: "Quand le mariage pour tous a été légalisé aux États-Unis, les tentatives de suicide chez les ados LGB ont baissé de 15%. Les droits sauvent des vies.", source: "Santé Publique France, 2021" },
    { id: "ff_07", texte: "C'est l'acceptation familiale — pas la thérapie, pas les médicaments — qui est le principal facteur de bonne santé mentale chez les personnes LGB. Un 'je t'aime' suffit souvent.", source: "Enquête Virage, INED" },
    { id: "ff_08", texte: "En France aujourd'hui, 1 adulte sur 10 a une identité de genre ou une orientation autre qu'hétéro-cisgenre. C'est beaucoup de gens autour de toi.", source: "Statista, 2023" },
    { id: "ff_09", texte: "Le concept d'intersectionnalité a été créé en 1989 par Kimberlé Crenshaw pour montrer que les discriminations ne s'additionnent pas — elles se multiplient.", source: "Stanford Law Review, 1989" },
    { id: "ff_10", texte: "Les espaces LGBT+ eux-mêmes sont souvent inaccessibles aux personnes handicapées : lumières fortes, bruit, promiscuité. L'inclusion ça se construit aussi chez soi.", source: "Hétéroclite, 2020" },
    { id: "ff_11", texte: "Les émeutes de Stonewall en 1969 ont été menées par des drag-queens, des femmes trans racisées et des gays des classes populaires. Les gens 'respectables' du mouvement gay n'étaient pas là ce soir-là.", source: "Wikipedia" },
    { id: "ff_12", texte: "La culture Ballroom est née à Harlem dans les années 1920. Crystal Labeija a fondé la première maison en 1977 après avoir perdu un concours drag jugé par Andy Warhol. Cent ans de culture, pas une tendance.", source: "dragqueens.fr" },
    { id: "ff_13", texte: "Le voguing s'est construit comme une façon de performer la respectabilité pour échapper aux violences. Défiler comme un mannequin était un acte de survie.", source: "Time, 2021" },
    { id: "ff_14", texte: "Les règles éthiques du BDSM — Safe, Sane, Consensual — ont été formalisées en 1983 par un groupe activiste gay new-yorkais. La communauté kink a réfléchi au consentement bien avant le reste du monde.", source: "nawajutsu.fr" },
    { id: "ff_15", texte: "Des études montrent que les pratiquant·es de BDSM ont souvent une meilleure communication dans leurs relations que la moyenne. Négocier ses désirs, ça s'apprend et ça profite à tout le monde.", source: "Archives of Sexual Behavior" },
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
