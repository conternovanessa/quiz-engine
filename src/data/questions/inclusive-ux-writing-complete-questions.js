const inclusiveWritingQuestions = [
  {
    "id": 1,
    "question": "Che cosa rende un testo davvero accessibile?",
    "answers": [
      "La capacità di essere compreso da più persone possibile",
      "L’uso di parole ricercate",
      "La presenza di molti tecnicismi",
      "La lunghezza del testo"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché l’accessibilità nasce dalla comprensibilità per il numero più ampio possibile di persone."
  },
  {
    "id": 2,
    "question": "Che cosa aggiunge un testo inclusivo rispetto a uno solo accessibile?",
    "answers": [
      "Rispetta anche le individualità di chi legge",
      "Diventa più lungo per forza",
      "Usa sempre un linguaggio tecnico",
      "Elimina ogni differenza tra i lettori"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché un testo inclusivo non solo si capisce, ma evita anche di urtare o escludere gruppi specifici."
  },
  {
    "id": 3,
    "question": "Perché il gergo può diventare una barriera?",
    "answers": [
      "Perché ghettizza chi non lo conosce e chiude al cambiamento",
      "Perché rende il testo sempre più breve",
      "Perché migliora la comprensione di tutti",
      "Perché elimina ogni ambiguità"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché il gergo in mano a pochi esclude chi non lo padroneggia e rallenta il cambiamento."
  },
  {
    "id": 4,
    "question": "A chi può essere utile la scrittura chiara?",
    "answers": [
      "A molte persone, non solo a chi ha difficoltà di lettura",
      "Solo a chi ha una disabilità visiva",
      "Solo a chi studia comunicazione",
      "Solo a chi usa lo smartphone"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché la scrittura chiara aiuta DSA, anziani, non madrelingua, persone di fretta e molti altri."
  },
  {
    "id": 5,
    "question": "Quale insieme descrive il linguaggio chiaro?",
    "answers": [
      "Pertinenza, reperibilità, comprensibilità e usabilità",
      "Originalità, ironia, complessità e sorpresa",
      "Sintesi, gergo, formalità e distanza",
      "Creatività, ambiguità, varietà e stile"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché queste sono le quattro caratteristiche indicate nelle slide."
  },
  {
    "id": 6,
    "question": "Quale struttura sintattica è preferibile?",
    "answers": [
      "Soggetto, verbo, complemento",
      "Complemento, soggetto, verbo",
      "Frasi totalmente invertite",
      "Sequenze nominali senza verbo"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché la sequenza soggetto-verbo-complemento è la più lineare."
  },
  {
    "id": 7,
    "question": "Perché è meglio evitare le doppie negazioni?",
    "answers": [
      "Aumentano la complessità della frase",
      "Rendono il testo più elegante",
      "Accorciano sempre il contenuto",
      "Sono obbligatorie nei testi formali"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché le doppie negazioni rallentano la comprensione e possono creare ambiguità."
  },
  {
    "id": 8,
    "question": "Quale voce verbale è in genere più chiara?",
    "answers": [
      "La forma attiva",
      "La forma passiva sempre",
      "Il congiuntivo in ogni frase",
      "L’infinito nominale"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché nella forma attiva è immediato capire chi compie l’azione."
  },
  {
    "id": 9,
    "question": "Perché è utile usare la stessa parola per lo stesso concetto?",
    "answers": [
      "Per evitare confusione e mantenere coerenza",
      "Per sembrare più creativi",
      "Per aumentare il numero di sinonimi",
      "Per rendere il testo più tecnico"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché la coerenza lessicale aiuta il lettore a orientarsi."
  },
  {
    "id": 10,
    "question": "Come conviene organizzare le informazioni?",
    "answers": [
      "Con una sequenza chiara e mettendo le informazioni importanti all’inizio",
      "Con concetti sparsi in ordine casuale",
      "Con un lungo elenco di parole separate da virgole",
      "Nascondendo il punto principale alla fine"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché l’ordine facilita scansione e comprensione."
  },
  {
    "id": 11,
    "question": "Perché titoli e grassetti sono utili?",
    "answers": [
      "Aiutano l’orientamento nel testo",
      "Servono solo a decorare la pagina",
      "Possono sostituire il contenuto",
      "Rendono automaticamente il testo più lungo"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché titoli e grassetti organizzano l’informazione."
  },
  {
    "id": 12,
    "question": "Perché gli elenchi puntati sono preferibili?",
    "answers": [
      "Migliorano leggibilità e scansione visiva",
      "Sono più difficili da leggere",
      "Eliminano la necessità di titoli",
      "Funzionano solo nei social"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché gli elenchi rendono i contenuti più chiari e ordinati."
  },
  {
    "id": 13,
    "question": "Che cosa indica che l’informazione accessibile è un diritto?",
    "answers": [
      "Che le persone devono poter accedere alle informazioni senza barriere",
      "Che solo alcuni utenti possono riceverla",
      "Che basta pubblicare un PDF qualsiasi",
      "Che vale solo per i testi lunghi"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché l’accesso alle informazioni è essenziale per partecipare alla società."
  },
  {
    "id": 14,
    "question": "Perché gli alt text sono importanti?",
    "answers": [
      "Aiutano persone cieche o ipovedenti e chi non carica le immagini",
      "Servono solo per il SEO",
      "Sono utili solo agli sviluppatori",
      "Non hanno alcuna funzione pratica"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché gli alt text rendono comprensibile il contenuto dell’immagine anche senza vederla."
  },
  {
    "id": 15,
    "question": "Come dovrebbe essere scritto un buon alt text?",
    "answers": [
      "Breve, rilevante e diretto",
      "Molto lungo e descrittivo di tutto",
      "Con frasi introduttive tipo “l’immagine rappresenta”",
      "Con dettagli casuali non pertinenti"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché un alt text efficace va subito al punto."
  },
  {
    "id": 16,
    "question": "Come si gestisce un’immagine decorativa?",
    "answers": [
      "Con un alt text vuoto",
      "Con una descrizione molto lunga",
      "Con il nome del file letto al lettore di schermo",
      "Con un titolo in maiuscolo"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché se l’immagine è decorativa non deve appesantire la lettura assistiva."
  },
  {
    "id": 17,
    "question": "Che cosa rende un link accessibile?",
    "answers": [
      "Un testo chiaro che dica dove porta",
      "L’uso obbligatorio di un URL completo visibile",
      "La formula “clicca qui”",
      "La sottolineatura anche dei testi non cliccabili"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché il link deve far capire subito la destinazione o l’azione."
  },
  {
    "id": 18,
    "question": "Perché i tag semantici sono importanti?",
    "answers": [
      "Strutturano la pagina e la rendono comprensibile a browser e lettori di schermo",
      "Servono solo per il colore del testo",
      "Sono un’alternativa ai contenuti",
      "Sono utili solo ai motori di ricerca"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché i tag semantici organizzano il contenuto per persone e tecnologie assistive."
  },
  {
    "id": 19,
    "question": "Che cosa significa una sezione social accessibile?",
    "answers": [
      "Uso parsimonioso di emoji e niente font speciali non leggibili",
      "Uso massiccio di simboli decorativi",
      "Testi scritti solo in maiuscolo",
      "Frasi volutamente ambigue"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché font speciali ed emoji eccessive possono essere poco leggibili per i lettori di schermo."
  },
  {
    "id": 20,
    "question": "Che cosa significa che le parole possono cambiare la realtà?",
    "answers": [
      "Il linguaggio contribuisce a costruire rappresentazioni sociali e disuguaglianze",
      "Le parole non hanno mai effetti concreti",
      "Il linguaggio è solo una forma estetica",
      "La comunicazione non incide sui comportamenti"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché il linguaggio influenza ciò che una comunità rende visibile o invisibile."
  },
  {
    "id": 21,
    "question": "Che cosa indica la prospettiva dell’intento rispetto a quella dell’impatto?",
    "answers": [
      "Non basta voler fare bene: contano anche gli effetti reali generati",
      "L’intento coincide sempre con il risultato",
      "L’impatto non è misurabile",
      "L’intento è irrilevante"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché il valore di una comunicazione dipende anche dalle conseguenze concrete."
  },
  {
    "id": 22,
    "question": "Che cosa sono normocentrismo, androcentrismo ed eurocentrismo?",
    "answers": [
      "Tre modi di guardare il mondo che assumono come standard un punto di vista dominante",
      "Tre forme di scrittura inclusiva",
      "Tre tecniche di semplificazione testuale",
      "Tre categorie di accessibilità digitale"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché descrivono prospettive che prendono come norma una soggettività dominante."
  },
  {
    "id": 23,
    "question": "Perché l’idea del “si è sempre fatto così” è problematica?",
    "answers": [
      "Blocca il cambiamento e consolida schemi poco inclusivi",
      "Garantisce sempre innovazione",
      "Migliora la personalizzazione",
      "Rende il testo più breve"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché le abitudini possono diventare scorciatoie che impediscono di vedere alternative."
  },
  {
    "id": 24,
    "question": "Che cosa sono le persone minorizzate?",
    "answers": [
      "Gruppi resi minoranza socialmente, anche se non lo sono numericamente",
      "Solo le persone numericamente poche",
      "Solo le categorie giuridiche protette",
      "Solo i gruppi più visibili"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché lo status di minoranza può essere costruito socialmente."
  },
  {
    "id": 25,
    "question": "Che cosa si intende per minority stress?",
    "answers": [
      "Stress aggiuntivo vissuto da persone appartenenti a gruppi emarginati o minorizzati",
      "Stress legato solo al lavoro da ufficio",
      "Stress tipico dei teenager",
      "Stress prodotto dalle password"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché la marginalizzazione aggiunge un carico psicologico specifico."
  },
  {
    "id": 26,
    "question": "Quale forma di discriminazione è apertamente ostile?",
    "answers": [
      "La discriminazione ostile",
      "La discriminazione benevola",
      "La discriminazione interiorizzata",
      "La comunicazione neutra"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché è la forma esplicitamente negativa e aggressiva."
  },
  {
    "id": 27,
    "question": "Che cosa caratterizza la discriminazione benevola?",
    "answers": [
      "Sembra positiva ma rinforza la subalternità",
      "È sempre invisibile e innocua",
      "Coincide con la tutela formale",
      "Elimina i pregiudizi"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché può sembrare gentile ma mantiene rapporti di inferiorità."
  },
  {
    "id": 28,
    "question": "Che cosa indica la discriminazione interiorizzata?",
    "answers": [
      "L’assunzione, da parte delle persone minorizzate, di giudizi discriminatori su se stesse",
      "Una politica aziendale inclusiva",
      "Un tipo di onboarding",
      "Una forma di accessibilità visiva"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché riguarda l’interiorizzazione del giudizio discriminatorio."
  },
  {
    "id": 29,
    "question": "Che cosa significa usare un linguaggio person-first?",
    "answers": [
      "Mettere la persona prima della condizione o dell’etichetta",
      "Mettere sempre prima la diagnosi",
      "Usare solo il cognome",
      "Evitare ogni riferimento alle persone"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché il focus resta sulla persona e non sulla sua caratteristica."
  },
  {
    "id": 30,
    "question": "Perché è importante parlare di disabilità in modo preciso?",
    "answers": [
      "Per evitare parole abiliste e rappresentazioni riduttive",
      "Per rendere il testo più complesso",
      "Per evitare ogni descrizione",
      "Per usare sempre e solo termini medici"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché le parole influenzano la percezione sociale della disabilità."
  },
  {
    "id": 31,
    "question": "Quale termine è più corretto in molti contesti?",
    "answers": [
      "Persona con disabilità",
      "Portatore di handicap",
      "Diversamente abile",
      "Costretto in carrozzina"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché è una formulazione rispettosa e centrata sulla persona."
  },
  {
    "id": 32,
    "question": "Che cosa significa abilismo benevolo?",
    "answers": [
      "Eroicizzare o infantilizzare la disabilità con un tono compassionevole",
      "Riconoscere pari diritti e autonomia",
      "Usare un linguaggio neutro e preciso",
      "Favorire l’autodeterminazione"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché l’abilismo benevolo trasforma la disabilità in pietà o eroismo."
  },
  {
    "id": 33,
    "question": "Che cos’è la neurodiversità?",
    "answers": [
      "La variabilità dei sistemi nervosi delle persone",
      "Una malattia singola",
      "Una categoria solo clinica",
      "Un sinonimo di disabilità motoria"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché la neurodiversità riguarda la variabilità neurologica umana."
  },
  {
    "id": 34,
    "question": "Che cosa si intende per ageismo?",
    "answers": [
      "Pregiudizi e stereotipi legati all’età",
      "Discriminazione solo economica",
      "Una forma di accessibilità",
      "Un tipo di linguaggio tecnico"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché l’ageismo riguarda stereotipi su età giovane o anziana."
  },
  {
    "id": 35,
    "question": "Quando è meglio non parlare dell’età di una persona?",
    "answers": [
      "Quando non aggiunge nulla al contesto",
      "Quando la persona è adulta",
      "Quando si scrive un titolo",
      "Quando l’età è esatta"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché l’età va citata solo se davvero rilevante."
  },
  {
    "id": 36,
    "question": "Quale formulazione è più inclusiva?",
    "answers": [
      "Persone tra i 18 e i 30 anni",
      "Giovani tra i 18 e i 30 anni",
      "Vecchi sopra i 65 anni",
      "Ragazzi di tutte le età"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché è precisa e non stereotipa."
  },
  {
    "id": 37,
    "question": "Che cosa sono i microtesti nel UX writing?",
    "answers": [
      "Piccoli testi che guidano, rassicurano e orientano nell’interfaccia",
      "Lunghi documenti di policy",
      "Soltanto i titoli della home page",
      "I commenti di marketing non editati"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché i microtesti sono elementi brevi ma decisivi della conversazione."
  },
  {
    "id": 38,
    "question": "Quale ruolo ha il UX writer?",
    "answers": [
      "Progettare e migliorare i microtesti dell’esperienza utente",
      "Fare solo pubblicità persuasiva",
      "Gestire solo il codice dell’interfaccia",
      "Tradurre manuali tecnici in modo letterale"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché il UX writer accompagna le persone con testi chiari ed efficaci."
  },
  {
    "id": 39,
    "question": "Qual è l’obiettivo principale dello UX writing?",
    "answers": [
      "Rendere le esperienze accessibili, fruttuose e chiare per il maggior numero di persone possibile",
      "Aumentare la quantità di testo in pagina",
      "Usare il linguaggio più creativo possibile",
      "Ridurre la coerenza narrativa"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché il fine è aiutare le persone a raggiungere i loro obiettivi."
  },
  {
    "id": 40,
    "question": "Perché le esperienze digitali sono anche esperienze verbali?",
    "answers": [
      "Perché le persone interagiscono con testi, microtesti e feedback come in una conversazione",
      "Perché i pulsanti non contano",
      "Perché il design non influenza la comprensione",
      "Perché i contenuti scritti sono opzionali"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché le parole sono una vera interfaccia di dialogo."
  },
  {
    "id": 41,
    "question": "Quale caratteristica distingue il buon UX writing?",
    "answers": [
      "È onesto, empatico e utile",
      "È sempre ironico",
      "È volutamente ambiguo",
      "Fa compiere azioni non volute"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché il buon UX writing aiuta senza manipolare."
  },
  {
    "id": 42,
    "question": "Perché nel brand storytelling serve coerenza narrativa?",
    "answers": [
      "Perché il messaggio deve restare coerente lungo tutto il percorso",
      "Perché i testi non devono cambiare mai",
      "Perché conta solo il logo",
      "Perché la narrazione non influisce sull’esperienza"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché il racconto del brand funziona se è consistente e riconoscibile."
  },
  {
    "id": 43,
    "question": "Chi è l’eroe nella narrazione di un brand?",
    "answers": [
      "La persona che usa il prodotto e vuole risolvere un problema",
      "L’azienda stessa sempre e comunque",
      "Il reparto legale",
      "Il concorrente principale"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché nel racconto l’utente è il protagonista che affronta difficoltà."
  },
  {
    "id": 44,
    "question": "Che cosa sono le “domande drammatiche” nello storytelling di brand?",
    "answers": [
      "I dubbi e i bisogni che motivano l’azione dell’utente",
      "Le FAQ aziendali",
      "Le domande del team marketing solo interno",
      "Le questioni fiscali del brand"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché indicano i problemi che il brand promette di aiutare a risolvere."
  },
  {
    "id": 45,
    "question": "Perché la gioia è importante nella user experience?",
    "answers": [
      "Perché aumenta piacere, naturalezza e desiderio di continuare",
      "Perché elimina ogni bisogno di chiarezza",
      "Perché sostituisce la funzionalità",
      "Perché è utile solo nelle landing page"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché la gioia rende l’esperienza più piacevole e memorabile."
  },
  {
    "id": 46,
    "question": "Che ruolo ha l’ansia nelle interfacce digitali?",
    "answers": [
      "Può bloccare attenzione e azione, quindi va anticipata e ridotta",
      "È sempre positiva",
      "È irrilevante per il design",
      "Serve a rendere i testi più lunghi"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché l’ansia può frenare l’azione e aumentare gli errori."
  },
  {
    "id": 47,
    "question": "Come si può rassicurare una persona prima di un’azione delicata?",
    "answers": [
      "Settando aspettative chiare e ribadendo i benefici importanti",
      "Usando ironia e ambiguità",
      "Nascondendo le informazioni utili",
      "Aumentando i campi del modulo"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché prima dell’azione bisogna chiarire cosa succederà e perché conviene."
  },
  {
    "id": 48,
    "question": "Come si può rassicurare una persona dopo un’azione conclusa?",
    "answers": [
      "Dando conferma, anticipando domande e offrendo vie per proseguire",
      "Lasciandola senza feedback",
      "Mostrando errori generici",
      "Ripetendo la stessa richiesta"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché dopo l’azione servono conferma e orientamento."
  },
  {
    "id": 49,
    "question": "Perché gli stati vuoti non devono sembrare errori?",
    "answers": [
      "Perché spesso indicano solo assenza momentanea di contenuti e vanno spiegati",
      "Perché l’utente non deve sapere cosa sta succedendo",
      "Perché sono un guasto tecnico per definizione",
      "Perché vanno nascosti"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché uno stato vuoto va spiegato e trasformato in una nuova opportunità."
  },
  {
    "id": 50,
    "question": "Che cosa devono fare i messaggi di errore?",
    "answers": [
      "Informare senza tecnicismi, non colpevolizzare e offrire una soluzione",
      "Colpevolizzare l’utente",
      "Essere ironici e vaghi",
      "Nascondere la causa del problema"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché un errore ben scritto aiuta a capire e a riprovare."
  },
  {
    "id": 51,
    "question": "Perché i form complessi aumentano il rischio di abbandono?",
    "answers": [
      "Perché più sono lunghi, più aumentano frustrazione e carico cognitivo",
      "Perché le persone amano compilare molti campi",
      "Perché il contenuto è sempre inutile",
      "Perché il design non conta"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché la complessità aumenta fatica, errori e abbandono."
  },
  {
    "id": 52,
    "question": "Che cosa aiuta a ridurre il carico cognitivo nei processi complessi?",
    "answers": [
      "Svelamento progressivo e solo i campi necessari",
      "Aggiungere istruzioni in ogni punto",
      "Riempire la pagina di testo",
      "Usare sempre più scelte possibili"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché mostrare informazioni a piccoli passi facilita l’azione."
  },
  {
    "id": 53,
    "question": "Che cosa deve fare un testo rivolto a persone con disabilità cognitiva?",
    "answers": [
      "Essere semplice, concreto e prevedibile",
      "Usare metafore complesse",
      "Preferire numeri romani e frasi ambigue",
      "Aumentare il numero di abbreviazioni"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché servono chiarezza e struttura molto leggibile."
  },
  {
    "id": 54,
    "question": "Perché le maiuscole sono sconsigliate nei testi accessibili?",
    "answers": [
      "Perché rendono la lettura più difficile",
      "Perché sono sempre vietate per legge",
      "Perché non si possono usare nei titoli",
      "Perché migliorano troppo la leggibilità"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché le parole in maiuscolo sono più faticose da leggere."
  },
  {
    "id": 55,
    "question": "Che cosa significa evitare il font serif nei testi accessibili?",
    "answers": [
      "Preferire caratteri più leggibili e semplici da decodificare",
      "Usare solo font decorativi",
      "Scrivere sempre in corsivo",
      "Ridurre lo spazio tra le lettere"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché i caratteri più semplici facilitano la lettura digitale."
  },
  {
    "id": 56,
    "question": "Perché il linguaggio ampio è importante?",
    "answers": [
      "Per rispettare identità diverse e non appiattire le persone in categorie rigide",
      "Per eliminare ogni riferimento alle persone",
      "Per complicare il testo",
      "Per sostituire la chiarezza con la neutralità assoluta"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché un linguaggio ampio prova a non escludere nessuno."
  },
  {
    "id": 57,
    "question": "Che cosa bisogna fare quando si parla di genere in un form?",
    "answers": [
      "Chiedere informazioni solo se davvero utili o necessarie per legge",
      "Chiedere sempre sesso e orientamento sessuale",
      "Usare solo il maschile sovraesteso",
      "Evitare ogni opzione di personalizzazione"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché le domande sul genere vanno poste solo se servono davvero."
  },
  {
    "id": 58,
    "question": "Qual è il messaggio complessivo delle slide?",
    "answers": [
      "Le parole possono includere o escludere, quindi vanno progettate con cura, chiarezza ed empatia",
      "La forma del testo è secondaria rispetto al contenuto",
      "L’accessibilità riguarda solo chi ha disabilità visive",
      "Basta tradurre testi difficili in versioni più corte"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché il linguaggio è parte del design e ha effetti concreti sulle persone."
  },
  {
    "id": 59,
    "question": "Che cosa indica la reperibilità nel linguaggio chiaro?",
    "answers": [
      "La facilità con cui chi legge trova ciò che cerca",
      "La velocità di download di una pagina",
      "La quantità di immagini presenti",
      "La presenza di link esterni"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché la reperibilità riguarda la facilità nel trovare le informazioni necessarie."
  },
  {
    "id": 60,
    "question": "Che cosa indica l’usabilità di un testo?",
    "answers": [
      "La possibilità di usare facilmente le informazioni trovate",
      "La sua bellezza grafica",
      "La lunghezza delle frasi",
      "La presenza di parole straniere"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché un testo usabile permette di agire con facilità a partire dalle informazioni lette."
  },
  {
    "id": 61,
    "question": "Quale stile è consigliato nelle slide per rivolgersi alle persone?",
    "answers": [
      "Dare del tu",
      "Usare sempre il voi",
      "Usare il lei burocratico",
      "Evitare ogni forma diretta"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché nelle slide il linguaggio chiaro privilegia un tono diretto e vicino."
  },
  {
    "id": 62,
    "question": "Perché le ripetizioni non vanno temute nel linguaggio chiaro?",
    "answers": [
      "Perché aiutano a mantenere lo stesso concetto riconoscibile",
      "Perché rendono il testo più poetico",
      "Perché sostituiscono i titoli",
      "Perché servono solo nei social"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché ripetere lo stesso termine evita ambiguità inutili."
  },
  {
    "id": 63,
    "question": "Quale lunghezza media delle frasi è consigliata nelle slide sul linguaggio chiaro?",
    "answers": [
      "Circa 15 parole",
      "Circa 40 parole",
      "Almeno 30 parole",
      "Non esiste alcun riferimento"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché le slide suggeriscono frasi brevi, intorno alle 15 parole."
  },
  {
    "id": 64,
    "question": "Che cosa è meglio usare tra indicativo e condizionale nel linguaggio chiaro?",
    "answers": [
      "L’indicativo, quando possibile",
      "Il condizionale sempre",
      "Il congiuntivo in ogni messaggio",
      "Una forma impersonale"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché indicativo e imperativo risultano più diretti e semplici."
  },
  {
    "id": 65,
    "question": "Che cosa è consigliato per i testi destinati a persone con disabilità cognitive?",
    "answers": [
      "Scrivere date per esteso, come 18 aprile 2024",
      "Usare solo numeri abbreviati come 18.04.24",
      "Usare numeri romani",
      "Omettere tutte le date"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché la data scritta per esteso è più facile da comprendere."
  },
  {
    "id": 66,
    "question": "Che cosa misura l’indice Gulpease?",
    "answers": [
      "La leggibilità di un testo in italiano",
      "La velocità di lettura ad alta voce",
      "La qualità grafica di una pagina",
      "Il numero di link accessibili"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché l’indice Gulpease serve a valutare la leggibilità dei testi italiani."
  },
  {
    "id": 67,
    "question": "Quali variabili considera l’indice Gulpease?",
    "answers": [
      "Lunghezza delle parole e lunghezza delle frasi",
      "Numero di immagini e di titoli",
      "Numero di verbi e aggettivi",
      "Colore del testo e font"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché Gulpease si basa soprattutto su lunghezza di parole e frasi."
  },
  {
    "id": 68,
    "question": "Che cos’è un cloze test?",
    "answers": [
      "Un test in cui si lasciano spazi nel testo da completare",
      "Un test solo visivo su layout e colori",
      "Un’intervista individuale non strutturata",
      "Un controllo tecnico del codice HTML"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché il cloze test verifica la comprensione chiedendo di completare un testo."
  },
  {
    "id": 69,
    "question": "Che cosa valuta il test dell’evidenziatore?",
    "answers": [
      "Quali parti del testo ispirano fiducia o creano confusione",
      "La velocità del server",
      "La correttezza grammaticale automatica",
      "Il numero di CTA presenti"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché il test chiede alle persone di evidenziare ciò che è chiaro o poco affidabile."
  },
  {
    "id": 70,
    "question": "A che cosa serve un A/B test nello UX writing?",
    "answers": [
      "A confrontare due versioni di un testo per capire quale funziona meglio",
      "A tradurre un testo in due lingue",
      "A scrivere due headline in rima",
      "A verificare la velocità di caricamento"
    ],
    "correct": 0,
    "explanation": "La risposta corretta è la prima perché l’A/B test mette a confronto due varianti per selezionare la migliore."
  }
];

export default inclusiveWritingQuestions;