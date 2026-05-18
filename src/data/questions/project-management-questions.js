const projectManagementQuestions =[
  {
    "id": 1,
    "question": "Che cos’è un progetto?",
    "answers": [
      "Un’attività permanente dell’azienda",
      "Uno sforzo temporaneo e complesso finalizzato a realizzare un prodotto o servizio",
      "Un insieme di reparti funzionali",
      "Un piano economico senza scadenza"
    ],
    "correct": 1,
    "explanation": "Uno sforzo temporaneo e complesso finalizzato a realizzare un prodotto o servizio: il progetto ha un inizio, una fine e un obiettivo definito. Le altre opzioni descrivono attività ordinarie, strutture organizzative o strumenti di pianificazione, non un progetto in senso proprio."
  },
  {
    "id": 2,
    "question": "Che cos’è un programma?",
    "answers": [
      "Un insieme di progetti correlati per raggiungere obiettivi strategici",
      "Una singola attività del progetto",
      "Un documento contabile",
      "Un diagramma di Gantt"
    ],
    "correct": 0,
    "explanation": "Un insieme di progetti correlati per raggiungere obiettivi strategici: il programma coordina più progetti legati tra loro per generare benefici complessivi. Le altre opzioni si riferiscono a elementi troppo piccoli o a strumenti diversi."
  },
  {
    "id": 3,
    "question": "Che cos’è un portafoglio di progetti?",
    "answers": [
      "L’elenco dei costi di un singolo progetto",
      "Un insieme di iniziative, progetti e programmi, raggruppate in funzione delle strategie di business",
      "La sola documentazione tecnica del progetto",
      "Un team temporaneo dedicato"
    ],
    "correct": 1,
    "explanation": "Un insieme di iniziative, progetti e programmi, raggruppate in funzione delle strategie di business: il portafoglio serve a governare l’insieme delle iniziative in chiave strategica. Le altre risposte restringono il concetto a costi, documenti o persone."
  },
  {
    "id": 4,
    "question": "A che cosa è collegato soprattutto il portfolio management?",
    "answers": [
      "Al valore e al rischio in rapporto agli obiettivi strategici",
      "Solo alla qualità dei deliverable",
      "Solo alle attività operative del team",
      "Solo ai benefici degli stakeholder"
    ],
    "correct": 0,
    "explanation": "Al valore e al rischio in rapporto agli obiettivi strategici: il portfolio management è guidato dal business impact e dall’allineamento con la strategia aziendale. Le altre opzioni appartengono più al project o program management."
  },
  {
    "id": 5,
    "question": "A che cosa è collegato soprattutto il program management?",
    "answers": [
      "Al valore per gli stakeholder e ai benefici attesi",
      "Solo alla baseline contrattuale",
      "Solo al controllo dei work package",
      "Solo alla logica reticolare"
    ],
    "correct": 0,
    "explanation": "Al valore per gli stakeholder e ai benefici attesi: il program management coordina progetti correlati con una logica orientata ai benefici complessivi. Le altre opzioni riguardano strumenti o aspetti operativi più tipici del project management."
  },
  {
    "id": 6,
    "question": "A che cosa è collegato soprattutto il project management?",
    "answers": [
      "Alla realizzazione di prodotti e servizi, con attenzione a scope, cost e schedule",
      "Solo alla strategia di portafoglio",
      "Solo alla governance societaria",
      "Solo alla selezione del personale"
    ],
    "correct": 0,
    "explanation": "Alla realizzazione di prodotti e servizi, con attenzione a scope, cost e schedule: il project management si concentra sull’output del progetto e sul controllo operativo dei vincoli principali. Le altre alternative spostano l’attenzione su livelli decisionali diversi."
  },
  {
    "id": 7,
    "question": "Quali sono le tre dipendenze principali del progetto richiamate negli appunti?",
    "answers": [
      "Qualità, sicurezza, comunicazione",
      "Costi, requisiti, tempi",
      "Budget, marketing, vendite",
      "Tecnologia, cultura, leadership"
    ],
    "correct": 1,
    "explanation": "Costi, requisiti, tempi: questi tre vincoli sintetizzano la logica di base del controllo di progetto. Le altre opzioni elencano fattori importanti ma non il trittico evidenziato come dipendenza principale."
  },
  {
    "id": 8,
    "question": "Come viene definito il project management?",
    "answers": [
      "L’arte di direzionare e coordinare risorse umane e materiali durante la vita di un progetto",
      "Una tecnica esclusivamente contabile",
      "Un metodo valido solo per progetti informatici",
      "Una procedura automatica senza ruolo umano"
    ],
    "correct": 0,
    "explanation": "L’arte di direzionare e coordinare risorse umane e materiali durante la vita di un progetto: la definizione mette insieme tecnica, coordinamento e gestione delle risorse. Le altre opzioni lo riducono a un aspetto troppo ristretto o lo spersonalizzano."
  },
  {
    "id": 9,
    "question": "Quale tra queste è una abilità del project manager?",
    "answers": [
      "Leadership",
      "Solo calcolo matematico",
      "Solo capacità di scrivere contratti",
      "Solo controllo di cassa"
    ],
    "correct": 0,
    "explanation": "Leadership: negli appunti il PM deve combinare competenze tecniche e capacità manageriali come leadership, comunicazione, problem solving e negoziazione. Le altre opzioni isolano un solo aspetto operativo e non rappresentano il profilo completo."
  },
  {
    "id": 10,
    "question": "Quale tra questi standard o riferimenti compare negli appunti?",
    "answers": [
      "PMI",
      "IFRS",
      "Six Sigma soltanto",
      "COBIT esclusivamente"
    ],
    "correct": 0,
    "explanation": "PMI: il Project Management Institute è citato come riferimento standard del project management, insieme ad altri organismi come IPMA e riferimenti Agile. Le altre opzioni appartengono ad ambiti diversi o non sono quelle evidenziate nel testo."
  },
  {
    "id": 11,
    "question": "Qual è la sequenza del processo a cascata riportata negli appunti?",
    "answers": [
      "Ideazione, pianificazione, esecuzione, monitoraggio, chiusura",
      "Analisi, collaudo, vendita, manutenzione",
      "Progettazione, outsourcing, audit, release",
      "Avvio, prototipazione, produzione, marketing"
    ],
    "correct": 0,
    "explanation": "Ideazione, pianificazione, esecuzione, monitoraggio, chiusura: questa è la sequenza lineare tipica del modello waterfall riportato nel corso. Le altre opzioni mescolano fasi non previste o cambiano l’ordine logico."
  },
  {
    "id": 12,
    "question": "Nel metodo tradizionale, a cosa è associato lo scope management?",
    "answers": [
      "Breakdown structures, deliverable e documentazione",
      "Solo fatturazione e incassi",
      "Solo assunzione del team",
      "Solo gestione del rischio"
    ],
    "correct": 0,
    "explanation": "Breakdown structures, deliverable e documentazione: lo scope management serve a definire che cosa deve essere prodotto e come strutturarlo. Le altre opzioni appartengono ad aree di gestione diverse."
  },
  {
    "id": 13,
    "question": "Nel metodo tradizionale, a cosa è associato il time management?",
    "answers": [
      "Project lifecycle, programmazione reticolare e milestone",
      "Solo bilancio economico",
      "Solo organigramma aziendale",
      "Solo change management"
    ],
    "correct": 0,
    "explanation": "Project lifecycle, programmazione reticolare e milestone: il time management riguarda la dimensione temporale del progetto e i suoi strumenti di programmazione. Le altre opzioni non gestiscono il tempo in senso progettuale."
  },
  {
    "id": 14,
    "question": "In una struttura a matrice, di che cosa si occupa il project management?",
    "answers": [
      "What & When",
      "Who & How",
      "Only budget approval",
      "Only legal compliance"
    ],
    "correct": 0,
    "explanation": "What & When: nella matrice il project management presidia cosa va fatto e quando, mentre i capi funzionali presidiano chi lavora e come. Le altre risposte non riflettono la ripartizione di responsabilità riportata."
  },
  {
    "id": 15,
    "question": "In una struttura a matrice, di che cosa si occupano i capi funzionali?",
    "answers": [
      "Who & How",
      "What & When",
      "Only contract milestones",
      "Only customer invoicing"
    ],
    "correct": 0,
    "explanation": "Who & How: i capi funzionali presidiano competenze, persone e modalità esecutive, mentre il PM governa obiettivi e tempi. Le altre opzioni invertono i ruoli o introducono compiti non centrali."
  },
  {
    "id": 16,
    "question": "Che cosa significa che una struttura a matrice va coltivata più che installata?",
    "answers": [
      "Che dipende da cultura aziendale e comportamenti individuali, non solo da un organigramma formale",
      "Che basta acquistare un software",
      "Che si può imporre senza cambiamento culturale",
      "Che vale solo nelle startup"
    ],
    "correct": 0,
    "explanation": "Che dipende da cultura aziendale e comportamenti individuali, non solo da un organigramma formale: la matrice funziona se le persone collaborano davvero tra logiche progettuali e funzionali. Le altre opzioni semplificano troppo o fraintendono il problema."
  },
  {
    "id": 17,
    "question": "Quale struttura organizzativa prevede un coordinatore con poca autorità sulle attività funzionali?",
    "answers": [
      "Functional matrix",
      "Task force",
      "Project oriented matrix",
      "Task schedule"
    ],
    "correct": 0,
    "explanation": "Functional matrix: in questa configurazione esiste un coordinatore di progetto, ma i capi funzionali mantengono il controllo sostanziale dei segmenti di competenza. Le altre strutture prevedono un ruolo di PM più forte o non sono strutture organizzative."
  },
  {
    "id": 18,
    "question": "Quale struttura organizzativa prevede che il capo progetto gestisca direttamente un team assegnato a tempo pieno?",
    "answers": [
      "Task force",
      "Funzionale",
      "Functional matrix",
      "OBS"
    ],
    "correct": 0,
    "explanation": "Task force: qui il project manager ha il controllo diretto di un team dedicato al progetto a tempo pieno. Le altre opzioni mantengono un peso maggiore dei reparti funzionali o non indicano una forma organizzativa di quel tipo."
  },
  {
    "id": 19,
    "question": "Che cosa significa pianificare un progetto?",
    "answers": [
      "Prevederne lo sviluppo per ottimizzare tempi, risorse e costi",
      "Registrare solo le spese sostenute",
      "Disegnare solo il Gantt finale",
      "Assegnare i premi al team"
    ],
    "correct": 0,
    "explanation": "Prevederne lo sviluppo per ottimizzare tempi, risorse e costi: pianificare significa costruire una visione anticipata del progetto per poterlo governare. Le altre alternative riducono la pianificazione a un singolo documento o a un’attività marginale."
  },
  {
    "id": 20,
    "question": "Che cos’è la WBS?",
    "answers": [
      "Una rappresentazione gerarchica che scompone il progetto in elementi gestibili",
      "Un organigramma aziendale",
      "Un piano dei rischi",
      "Un contratto di progetto"
    ],
    "correct": 0,
    "explanation": "Una rappresentazione gerarchica che scompone il progetto in elementi gestibili: la WBS serve a strutturare lo scope in parti controllabili e comunicabili. Le altre opzioni corrispondono a strumenti diversi, come OBS o registri di rischio."
  },
  {
    "id": 21,
    "question": "Qual è l’obiettivo della WBS?",
    "answers": [
      "Suddividere il progetto in parti di lavoro, componenti ed elementi gestibili",
      "Stimare solo il margine economico finale",
      "Definire l’organigramma delle funzioni",
      "Calcolare automaticamente i costi reali"
    ],
    "correct": 0,
    "explanation": "Suddividere il progetto in parti di lavoro, componenti ed elementi gestibili: la WBS crea una struttura comune per comunicazione, responsabilità e controllo di scope, costi e programma. Le altre risposte catturano solo effetti indiretti o strumenti differenti."
  },
  {
    "id": 22,
    "question": "Che cos’è un deliverable?",
    "answers": [
      "Un prodotto, risultato o capacità di servizio univoco e verificabile da realizzare",
      "Una riunione di avanzamento",
      "Una risorsa umana temporanea",
      "Un semplice promemoria"
    ],
    "correct": 0,
    "explanation": "Un prodotto, risultato o capacità di servizio univoco e verificabile da realizzare: il deliverable è ciò che deve essere consegnato o prodotto in modo controllabile. Le altre opzioni indicano eventi, persone o documenti privi di questa funzione."
  },
  {
    "id": 23,
    "question": "Che cosa sono le milestone?",
    "answers": [
      "Eventi che segnano momenti decisivi o punti di controllo del progetto",
      "Risorse economiche di riserva",
      "Attività sempre critiche",
      "Documenti di collaudo finale soltanto"
    ],
    "correct": 0,
    "explanation": "Eventi che segnano momenti decisivi o punti di controllo del progetto: le milestone non sono attività con durata, ma riferimenti chiave dell’evoluzione del progetto. Le altre opzioni le confondono con risorse, attività o soli documenti finali."
  },
  {
    "id": 24,
    "question": "Che cos’è un work package?",
    "answers": [
      "L’elemento finale della WBS, chiaramente identificabile e gestibile",
      "L’intero progetto nel suo complesso",
      "Una funzione aziendale permanente",
      "Un rischio classificato come alto"
    ],
    "correct": 0,
    "explanation": "L’elemento finale della WBS, chiaramente identificabile e gestibile: il work package è il livello a cui si possono associare responsabilità, costi, tempi e avanzamenti. Le altre opzioni sono troppo ampie o appartengono ad altre categorie concettuali."
  },
  {
    "id": 25,
    "question": "Quale tra queste informazioni è tipicamente associata a un work package?",
    "answers": [
      "Responsabile, costo, input, output e tempi di realizzazione",
      "Solo il logo del progetto",
      "Solo il rischio reputazionale",
      "Solo la data di fatturazione"
    ],
    "correct": 0,
    "explanation": "Responsabile, costo, input, output e tempi di realizzazione: il work package deve essere descritto abbastanza bene da poter essere pianificato e controllato. Le altre opzioni colgono solo frammenti non sufficienti."
  },
  {
    "id": 26,
    "question": "Quale beneficio garantisce la WBS?",
    "answers": [
      "Aiuta il PM a non trascurare nulla e costituisce una base per costi e coordinamento",
      "Sostituisce completamente il project manager",
      "Elimina ogni incertezza di durata",
      "Rende inutile l’OBS"
    ],
    "correct": 0,
    "explanation": "Aiuta il PM a non trascurare nulla e costituisce una base per costi e coordinamento: scomporre il progetto aumenta controllo, completezza e aggregazione delle informazioni. Le altre opzioni attribuiscono alla WBS effetti impossibili o impropri."
  },
  {
    "id": 27,
    "question": "Che cos’è la OBS?",
    "answers": [
      "L’identificazione dei partecipanti o delle funzioni aziendali nel progetto con le loro relazioni gerarchiche",
      "La scomposizione tecnica delle attività",
      "La lista delle milestone",
      "Il piano di fatturazione"
    ],
    "correct": 0,
    "explanation": "L’identificazione dei partecipanti o delle funzioni aziendali nel progetto con le loro relazioni gerarchiche: la OBS descrive la struttura organizzativa del progetto, simile a un organigramma. Le altre opzioni riguardano scope, tempo o aspetti economici."
  },
  {
    "id": 28,
    "question": "Che cosa nasce dall’incrocio tra WBS e OBS?",
    "answers": [
      "Una matrice compiti-responsabilità",
      "Il solo registro dei rischi",
      "Il contratto finale di fornitura",
      "Il cammino critico"
    ],
    "correct": 0,
    "explanation": "Una matrice compiti-responsabilità: incrociando attività e centri di responsabilità si chiarisce chi risponde di che cosa. Le altre opzioni derivano da strumenti o analisi differenti."
  },
  {
    "id": 29,
    "question": "Chi stima la durata delle attività,?",
    "answers": [
      "Il responsabile dell’attività",
      "Solo il cliente",
      "Solo l’amministrazione",
      "Sempre il PM da solo"
    ],
    "correct": 0,
    "explanation": "Il responsabile dell’attività: la durata viene stimata da chi conosce il lavoro richiesto e le risorse necessarie. Le altre opzioni semplificano troppo il processo o lo attribuiscono a soggetti non direttamente competenti."
  },
  {
    "id": 30,
    "question": "Quale tra queste è una tecnica di stima della durata?",
    "answers": [
      "Parere degli esperti",
      "Brand positioning",
      "Segmentazione di mercato",
      "Analisi SWOT commerciale"
    ],
    "correct": 0,
    "explanation": "Parere degli esperti: negli appunti la durata può essere stimata con giudizio esperto, analogie, basi quantitative o tempi di riserva. Le altre opzioni appartengono al marketing strategico e non alla programmazione temporale."
  },
  {
    "id": 31,
    "question": "Che cos’è l’Overall Master Schedule?",
    "answers": [
      "Il programma generale di commessa definito in fase d’offerta e incorporato nel contratto",
      "Il registro dei rischi aggiornato ogni settimana",
      "Il dettaglio dei task individuali del team",
      "Un semplice Gantt interno non contrattuale"
    ],
    "correct": 0,
    "explanation": "Il programma generale di commessa definito in fase d’offerta e incorporato nel contratto: rappresenta la baseline contrattuale e fissa obiettivi e milestone principali. Le altre opzioni descrivono documenti più operativi o di natura diversa."
  },
  {
    "id": 32,
    "question": "Che cosa rappresenta l’Overall Master Schedule dal punto di vista contrattuale?",
    "answers": [
      "La baseline contrattuale",
      "La matrice dei rischi",
      "La WBS di dettaglio",
      "Il piano ferie del team"
    ],
    "correct": 0,
    "explanation": "La baseline contrattuale: questo documento fissa i riferimenti temporali e gli obiettivi su base contrattuale, rispetto ai quali si confronteranno gli aggiornamenti. Le altre risposte riguardano strumenti diversi e non il riferimento ufficiale."
  },
  {
    "id": 33,
    "question": "Quando può essere aggiornato l’Overall Master Schedule?",
    "answers": [
      "In presenza di change orders o varianti",
      "Ogni giorno senza motivo",
      "Mai",
      "Solo a fine progetto"
    ],
    "correct": 0,
    "explanation": "In presenza di change orders o varianti: essendo una baseline contrattuale, non si cambia liberamente, ma solo quando mutano le condizioni concordate. Le altre opzioni sono troppo rigide o troppo arbitrarie."
  },
  {
    "id": 34,
    "question": "Che cos’è il Project Schedule?",
    "answers": [
      "Il programma ufficiale di commessa redatto dal PM in avvio di progetto",
      "La sola lista delle fatture",
      "Il documento che sostituisce la OBS",
      "Il piano di rischio qualitativo"
    ],
    "correct": 0,
    "explanation": "Il programma ufficiale di commessa redatto dal PM in avvio di progetto: è il documento operativo che riporta eventi, priorità, sequenze e durate delle attività. Le altre opzioni lo riducono o lo confondono con strumenti differenti."
  },
  {
    "id": 35,
    "question": "Che cosa rappresenta il Project Schedule?",
    "answers": [
      "La timeline di progetto",
      "La sola struttura organizzativa",
      "La lista dei rischi accettati",
      "Il bilancio finale del progetto"
    ],
    "correct": 0,
    "explanation": "La timeline di progetto: il Project Schedule è un documento operativo di programmazione che traduce il progetto nel tempo. Le altre opzioni riguardano struttura, rischio o consuntivo economico."
  },
  {
    "id": 36,
    "question": "Qual è uno dei vantaggi del diagramma di Gantt?",
    "answers": [
      "Comprensione visiva immediata del posizionamento temporale delle attività",
      "Esplicita perfettamente tutte le interdipendenze logiche",
      "Elimina i problemi di aggiornamento",
      "È sempre il migliore per progetti giganteschi"
    ],
    "correct": 0,
    "explanation": "Comprensione visiva immediata del posizionamento temporale delle attività: il Gantt è molto efficace per comunicare quando accadono le attività. Le altre opzioni descrivono capacità che il Gantt non ha o attribuiscono una superiorità universale non corretta."
  },
  {
    "id": 37,
    "question": "Qual è uno dei limiti del diagramma di Gantt?",
    "answers": [
      "Non esplicita bene la logica del progetto e le interdipendenze tra attività",
      "Non rappresenta mai le date",
      "Non consente di visualizzare durate",
      "È inutilizzabile per progetti piccoli"
    ],
    "correct": 0,
    "explanation": "Non esplicita bene la logica del progetto e le interdipendenze tra attività: il Gantt mostra bene il tempo, ma non rende chiari come un reticolo i legami logici. Le altre opzioni sono false perché il Gantt visualizza proprio date e durate ed è utile anche nei progetti piccoli."
  },
  {
    "id": 38,
    "question": "Per quali progetti il Gantt è particolarmente adatto?",
    "answers": [
      "Progetti di dimensioni ridotte o standard",
      "Solo progetti ad altissimo rischio",
      "Solo portafogli strategici",
      "Solo programmi pluriennali"
    ],
    "correct": 0,
    "explanation": "Progetti di dimensioni ridotte o standard: in questi casi la semplicità visiva del Gantt è un grande vantaggio. Le altre alternative si riferiscono a contesti in cui servono spesso strumenti più articolati."
  },
  {
    "id": 39,
    "question": "Quali sono i due elementi fondamentali delle tecniche reticolari?",
    "answers": [
      "Nodi e archi",
      "Costi e ricavi",
      "Milestone e budget",
      "Deliverable e contratti"
    ],
    "correct": 0,
    "explanation": "Nodi e archi: il reticolo è una rappresentazione grafica fondata su eventi o attività collegate da relazioni. Le altre coppie appartengono ad altre dimensioni della gestione di progetto."
  },
  {
    "id": 40,
    "question": "Che cos’è un’attività nelle tecniche reticolari?",
    "answers": [
      "Un atto necessario per raggiungere un obiettivo, caratterizzato da una durata",
      "Un evento senza durata",
      "Un costo non preventivato",
      "Una relazione gerarchica"
    ],
    "correct": 0,
    "explanation": "Un atto necessario per raggiungere un obiettivo, caratterizzato da una durata: l’attività consuma tempo e rappresenta lavoro da svolgere. Le altre opzioni descrivono eventi, costi o legami organizzativi, non attività."
  },
  {
    "id": 41,
    "question": "Che cos’è un evento nelle tecniche reticolari?",
    "answers": [
      "L’istante da cui può iniziare l’attività successiva o che segna completamenti significativi",
      "Un’attività con durata ridotta",
      "Un costo extra di progetto",
      "Un work package completo"
    ],
    "correct": 0,
    "explanation": "L’istante da cui può iniziare l’attività successiva o che segna completamenti significativi: l’evento non ha durata, ma colloca nel tempo un punto rilevante del reticolo. Le altre opzioni confondono evento con attività o con elementi economici."
  },
  {
    "id": 42,
    "question": "Che cos’è un vincolo di precedenza?",
    "answers": [
      "Il legame logico che condiziona la sequenza temporale di realizzazione delle attività",
      "La responsabilità del capo funzione",
      "La durata minima contrattuale",
      "Una regola di budgeting"
    ],
    "correct": 0,
    "explanation": "Il legame logico che condiziona la sequenza temporale di realizzazione delle attività: serve a stabilire quali attività devono venire prima di altre. Le altre risposte riguardano ruoli, durate o costi, non la logica del flusso."
  },
  {
    "id": 43,
    "question": "Che cosa rappresenta la durata nelle tecniche reticolari?",
    "answers": [
      "La stima del tempo di esecuzione di ogni attività",
      "Il numero di risorse assegnate",
      "Il costo del materiale",
      "La probabilità di rischio"
    ],
    "correct": 0,
    "explanation": "La stima del tempo di esecuzione di ogni attività: la durata dipende dal lavoro richiesto e dalle risorse ipotizzate. Le altre opzioni misurano aspetti diversi che non coincidono con il tempo."
  },
  {
    "id": 44,
    "question": "Che cosa sono le attività critiche?",
    "answers": [
      "Attività che non tollerano ritardi o anticipi senza influire sulla durata totale del progetto",
      "Attività che costano di più",
      "Attività affidate al cliente",
      "Attività senza responsabile"
    ],
    "correct": 0,
    "explanation": "Attività che non tollerano ritardi o anticipi senza influire sulla durata totale del progetto: sono le attività su cui il tempo del progetto è più sensibile. Le altre opzioni possono essere correlate ma non definiscono la criticità in senso reticolare."
  },
  {
    "id": 45,
    "question": "Che cosa definisce il cammino critico?",
    "answers": [
      "L’insieme delle attività critiche",
      "L’insieme di tutte le milestone",
      "La lista dei costi accelerati",
      "Il piano di comunicazione"
    ],
    "correct": 0,
    "explanation": "L’insieme delle attività critiche: il cammino critico individua il percorso temporale che determina la durata complessiva del progetto. Le altre opzioni raccolgono elementi importanti ma diversi."
  },
  {
    "id": 46,
    "question": "Che cos’è lo slittamento di un’attività?",
    "answers": [
      "L’intervallo di tempo entro cui può iniziare o finire senza modificare la durata del progetto",
      "Il ritardo già avvenuto e irreversibile",
      "Il costo extra per recuperare il tempo",
      "Il cambio di responsabile"
    ],
    "correct": 0,
    "explanation": "L’intervallo di tempo entro cui può iniziare o finire senza modificare la durata del progetto: lo slittamento misura la flessibilità temporale disponibile. Le altre opzioni descrivono conseguenze o eventi differenti."
  },
  {
    "id": 47,
    "question": "Qual è uno dei vantaggi della programmazione reticolare?",
    "answers": [
      "Identifica attività problematiche e supporta il controllo dell’avanzamento",
      "Sostituisce ogni bisogno di stima",
      "Elimina i vincoli di risorsa",
      "Serve solo a disegnare grafici più belli"
    ],
    "correct": 0,
    "explanation": "Identifica attività problematiche e supporta il controllo dell’avanzamento: il reticolo rende più chiara la struttura del progetto e aiuta a intervenire sul programma. Le altre opzioni attribuiscono alla tecnica poteri che non possiede o la banalizzano."
  },
  {
    "id": 48,
    "question": "Che cosa caratterizza il CPM rispetto al PERT?",
    "answers": [
      "Usa durate deterministiche e collega tempi e costi",
      "Usa solo giudizi qualitativi",
      "Elimina completamente l’incertezza dei costi",
      "È identico al Gantt"
    ],
    "correct": 0,
    "explanation": "Usa durate deterministiche e collega tempi e costi: il CPM considera per ogni attività valori unici di durata nella prima analisi e approfondisce poi la relazione tempi-costi. Le altre opzioni confondono il metodo con tecniche diverse o gli attribuiscono effetti assoluti."
  },
  {
    "id": 49,
    "question": "Quali valori possono essere associati a ogni attività nel CPM-Costi?",
    "answers": [
      "Durata e costo normali, durata e costo accelerati o ridotti",
      "Solo budget annuale e fatturato",
      "Solo probabilità e impatto",
      "Solo data di inizio e data di fine"
    ],
    "correct": 0,
    "explanation": "Durata e costo normali, durata e costo accelerati o ridotti: questa distinzione serve a valutare come comprimere i tempi cambiando i costi diretti. Le altre opzioni non descrivono il meccanismo del CPM-Costi."
  },
  {
    "id": 50,
    "question": "Che cosa aggiunge il Precedence Path Method rispetto al CPM classico?",
    "answers": [
      "Legami tra attività anche diversi dal solo fine-inizio, come SS, FF e SF",
      "Solo il controllo qualità",
      "La valutazione dei fornitori",
      "L’eliminazione della rete di precedenze"
    ],
    "correct": 0,
    "explanation": "Legami tra attività anche diversi dal solo fine-inizio, come SS, FF e SF: il metodo amplia la gamma delle relazioni temporali rappresentabili. Le altre opzioni non riguardano la struttura dei vincoli di precedenza."
  },
  {
    "id": 51,
    "question": "Che cosa assume l’approccio PERT/CPM riguardo alle risorse?",
    "answers": [
      "Disponibilità illimitata delle risorse",
      "Disponibilità nulla delle risorse",
      "Disponibilità casuale senza pianificazione",
      "Solo risorse finanziarie e non umane"
    ],
    "correct": 0,
    "explanation": "Disponibilità illimitata delle risorse: questa è una delle semplificazioni base del modello, che nella realtà spesso non vale. Le altre opzioni non descrivono l’assunto teorico richiamato negli appunti."
  },
  {
    "id": 52,
    "question": "Quale tra questi è un limite reale dei progetti che supera l’assunto PERT/CPM?",
    "answers": [
      "Disponibilità numerica delle risorse",
      "Assenza totale di vincoli temporali",
      "Mancanza di ogni obiettivo",
      "Impossibilità di stimare le durate"
    ],
    "correct": 0,
    "explanation": "Disponibilità numerica delle risorse: nella realtà le risorse sono limitate, interdipendenti e soggette a conflitti di priorità. Le altre opzioni descrivono condizioni troppo estreme o estranee al problema."
  },
  {
    "id": 53,
    "question": "Che cos’è un rischio di progetto in senso negativo?",
    "answers": [
      "La probabilità che si verifichi un evento sfavorevole che danneggia gli obiettivi di progetto",
      "Qualsiasi attività complessa",
      "Qualsiasi costo non pianificato",
      "Una variazione sempre positiva del contesto"
    ],
    "correct": 0,
    "explanation": "La probabilità che si verifichi un evento sfavorevole che danneggia gli obiettivi di progetto: il rischio lega evento incerto e possibile danno. Le altre opzioni confondono il rischio con difficoltà generiche o con semplici costi."
  },
  {
    "id": 54,
    "question": "Qual è la catena concettuale della definizione di rischio negativo riportata negli appunti?",
    "answers": [
      "Causa → rischio → effetto (danno)",
      "Costo → attività → utile",
      "Obiettivo → team → qualità",
      "Evento → contratto → fattura"
    ],
    "correct": 0,
    "explanation": "Causa → rischio → effetto (danno): questa sequenza aiuta a distinguere origine, manifestazione del rischio e conseguenza sugli obiettivi. Le altre combinazioni non spiegano la logica causale del rischio."
  },
  {
    "id": 55,
    "question": "Qual è la differenza tra rischi interni ed esterni?",
    "answers": [
      "Gli interni sono più controllabili, gli esterni no",
      "Gli interni sono sempre economici e gli esterni sempre tecnici",
      "Gli esterni non hanno effetti sui tempi",
      "Gli interni sono sempre positivi"
    ],
    "correct": 0,
    "explanation": "Gli interni sono più controllabili, gli esterni no: i rischi interni dipendono più direttamente dall’organizzazione, mentre quelli esterni derivano dal contesto naturale, economico o politico. Le altre opzioni sono semplificazioni scorrette."
  },
  {
    "id": 56,
    "question": "Che cos’è il Project Risk Management?",
    "answers": [
      "Il processo di identificazione, analisi e risposta ai rischi di progetto",
      "La sola assicurazione dei beni aziendali",
      "La registrazione dei ritardi subiti",
      "Il monitoraggio esclusivo dei costi"
    ],
    "correct": 0,
    "explanation": "Il processo di identificazione, analisi e risposta ai rischi di progetto: la gestione del rischio mira a minimizzare gli eventi negativi e massimizzare quelli positivi. Le altre risposte catturano solo una piccola parte del processo o lo deformano."
  },
  {
    "id": 57,
    "question": "Quale tra queste è una tecnica di identificazione dei rischi?",
    "answers": [
      "Brainstorming",
      "Customer journey mapping commerciale",
      "Break-even analysis di mercato",
      "A/B test pubblicitario"
    ],
    "correct": 0,
    "explanation": "Brainstorming: negli appunti compare tra le tecniche di identificazione, insieme a interviste agli esperti, mappe di flusso, what-if, analisi delle cause e RBS. Le altre tecniche appartengono ad ambiti differenti."
  },
  {
    "id": 58,
    "question": "Che cos’è la Risk Breakdown Structure?",
    "answers": [
      "Una rappresentazione grafica dei rischi organizzata per categorie e sottocategorie",
      "Una scomposizione del budget per centri di costo",
      "La versione rischi del Gantt",
      "La lista delle sole assicurazioni da stipulare"
    ],
    "correct": 0,
    "explanation": "Una rappresentazione grafica dei rischi organizzata per categorie e sottocategorie: la RBS aiuta a vedere aree e cause di rischio potenziale in modo strutturato. Le altre opzioni scambiano la RBS con strumenti economici o di scheduling."
  },
  {
    "id": 59,
    "question": "A che cosa serve la matrice probabilità-impatto?",
    "answers": [
      "A classificare i rischi in base a priorità bassa, media o elevata",
      "A definire l’organigramma del progetto",
      "A stimare i ricavi futuri",
      "A costruire la WBS"
    ],
    "correct": 0,
    "explanation": "A classificare i rischi in base a priorità bassa, media o elevata: combinando probabilità e impatto si capisce su quali rischi intervenire prima. Le altre opzioni appartengono a strumenti di natura completamente diversa."
  },
  {
    "id": 60,
    "question": "Che cosa contiene tipicamente un risk report?",
    "answers": [
      "Rischio, attività, probabilità, impatto e prodotto P×I",
      "Solo l’elenco dei responsabili funzionali",
      "Solo i costi consuntivi",
      "Solo le milestone contrattuali"
    ],
    "correct": 0,
    "explanation": "Rischio, attività, probabilità, impatto e prodotto P×I: il risk report serve a sintetizzare e ordinare le informazioni rilevanti per il trattamento del rischio. Le altre alternative lasciano fuori proprio i dati centrali di valutazione."
  },
  {
    "id": 61,
    "question": "Che cosa fa il piano di risposta ai rischi?",
    "answers": [
      "Assegna un risk owner, definisce la strategia e progetta l’azione di risposta",
      "Sostituisce la pianificazione del progetto",
      "Elimina tutti i rischi residui",
      "Serve solo a comunicare con il cliente finale"
    ],
    "correct": 0,
    "explanation": "Assegna un risk owner, definisce la strategia e progetta l’azione di risposta: il piano traduce l’analisi del rischio in responsabilità e azioni concrete. Le altre opzioni attribuiscono al piano funzioni eccessive o sbagliate."
  },
  {
    "id": 62,
    "question": "Chi è il risk owner?",
    "answers": [
      "Il soggetto che si assume la responsabilità della gestione di un rischio",
      "Il cliente che approva il contratto",
      "Il fornitore più economico",
      "Il revisore contabile del progetto"
    ],
    "correct": 0,
    "explanation": "Il soggetto che si assume la responsabilità della gestione di un rischio: assegnare un owner evita che il rischio resti senza presidio. Le altre figure possono essere coinvolte, ma non coincidono con la responsabilità specifica del rischio."
  },
  {
    "id": 63,
    "question": "Che cos’è il contingency budget?",
    "answers": [
      "Una riserva accantonata a inizio progetto per far fronte al verificarsi di rischi",
      "Il margine di profitto finale",
      "Il budget del solo marketing",
      "Il costo accelerato di tutte le attività"
    ],
    "correct": 0,
    "explanation": "Una riserva accantonata a inizio progetto per far fronte al verificarsi di rischi: serve a reagire a eventi incerti senza destabilizzare il progetto. Le altre opzioni riguardano profitto o voci di spesa con significato diverso."
  },
  {
    "id": 64,
    "question": "Quale strategia di risposta al rischio consiste nel decidere di non fare il progetto o modificarlo in modo sostenibile?",
    "answers": [
      "Evitare",
      "Mitigare",
      "Trasferire",
      "Accettare"
    ],
    "correct": 0,
    "explanation": "Evitare: qui si agisce alla radice eliminando o cambiando il progetto per non esporsi al rischio. Le altre strategie invece convivono con il rischio, riducendolo, spostandolo o tollerandolo."
  },
  {
    "id": 65,
    "question": "Quale strategia di risposta al rischio consiste nell’alleggerire la probabilità o gli effetti del rischio?",
    "answers": [
      "Mitigare",
      "Evitare",
      "Accettare",
      "Ignorare"
    ],
    "correct": 0,
    "explanation": "Mitigare: la mitigazione non elimina del tutto il rischio, ma ne riduce probabilità o impatto per renderlo più gestibile. Le altre opzioni seguono logiche diverse o non costituiscono una risposta formalizzata."
  },
  {
    "id": 66,
    "question": "Quale strategia di risposta al rischio consiste nel trasferire il rischio a un soggetto esterno, ad esempio con un’assicurazione?",
    "answers": [
      "Trasferire",
      "Accettare",
      "Mitigare",
      "Scomporre"
    ],
    "correct": 0,
    "explanation": "Trasferire: il rischio viene spostato economicamente o contrattualmente verso terzi, come accade con un’assicurazione. Le altre opzioni non spostano il rischio fuori dal progetto."
  },
  {
    "id": 67,
    "question": "Quale strategia di risposta al rischio consiste nell’attrezzarsi per gestirlo senza eliminarlo, tipicamente quando ha basso livello di accadimento?",
    "answers": [
      "Accettare",
      "Evitare",
      "Trasferire",
      "Ottimizzare"
    ],
    "correct": 0,
    "explanation": "Accettare: in questo caso il rischio viene riconosciuto e si preparano eventuali azioni o riserve, ma non si interviene per eliminarlo subito. Le altre opzioni seguono strategie diverse o non sono quelle previste dagli appunti."
  },
  {
    "id": 68,
    "question": "Per che cosa si può usare la contingency reserve?",
    "answers": [
      "Per correggere il progetto dopo il verificarsi dei rischi, accelerare lo schedule o attivare piani di contingency",
      "Solo per premiare il team",
      "Solo per campagne commerciali",
      "Solo per sostituire il PM"
    ],
    "correct": 0,
    "explanation": "Per correggere il progetto dopo il verificarsi dei rischi, accelerare lo schedule o attivare piani di contingency: la riserva serve a proteggere l’esecuzione dagli effetti dei rischi. Le altre opzioni non hanno relazione con la finalità della contingency."
  },
  {
    "id": 69,
    "question": "Che cosa comprende il monitoraggio e controllo dei rischi?",
    "answers": [
      "Identificazione e analisi di nuovi rischi, gestione delle priorità e integrazione con l’analisi degli scostamenti",
      "Solo la chiusura amministrativa del progetto",
      "Solo la revisione del contratto iniziale",
      "Solo il controllo qualità dei deliverable"
    ],
    "correct": 0,
    "explanation": "Identificazione e analisi di nuovi rischi, gestione delle priorità e integrazione con l’analisi degli scostamenti: il rischio non si gestisce una volta sola, ma lungo tutto il progetto. Le altre risposte restringono troppo il controllo a fasi o aree specifiche."
  },
  {
    "id": 70,
    "question": "Perché la gestione del rischio genera un costo?",
    "answers": [
      "Perché prevenire, mitigare o preparare risposte richiede risorse, tempo e budget",
      "Perché tutti i rischi si trasformano automaticamente in danni",
      "Perché il rischio esiste solo nei grandi progetti",
      "Perché il PM deve sempre acquistare software nuovi"
    ],
    "correct": 0,
    "explanation": "Perché prevenire, mitigare o preparare risposte richiede risorse, tempo e budget: gestire il rischio non è gratuito, ma serve a ridurre danni potenzialmente maggiori. Le altre opzioni generalizzano o inventano condizioni non presenti negli appunti."
  }
];

export default projectManagementQuestions;