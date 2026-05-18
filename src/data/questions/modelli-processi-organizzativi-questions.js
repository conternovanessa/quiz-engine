const modelliProcessiOrganizzativiQuestions = [
  {
    "id": 1,
    "question": "Quale tra questi può essere un segnale di problema organizzativo in un’azienda?",
    "answers": ["Scarsa chiarezza dei ruoli", "Aumento della liquidità", "Riduzione dei costi di magazzino", "Presenza di brevetti"],
    "correct": 0,
    "explanation": "La scarsa chiarezza dei ruoli è un tipico problema organizzativo, perché genera confusione, inefficienza e sovrapposizioni di attività. Le altre opzioni non descrivono necessariamente una criticità organizzativa."
  },
  {
    "id": 2,
    "question": "Che cosa si intende per sottodimensionamento in ambito organizzativo?",
    "answers": ["Una situazione in cui poche persone hanno troppo lavoro", "Una situazione in cui ogni dipendente ha poco lavoro da fare", "Un eccesso di investimenti tecnologici", "Una riduzione della gamma di prodotti"],
    "correct": 0,
    "explanation": "Il sottodimensionamento indica che le risorse umane sono insufficienti rispetto al carico di lavoro, con effetti negativi sull’efficacia. Le altre opzioni descrivono situazioni diverse."
  },
  {
    "id": 3,
    "question": "Che effetto può avere il sovradimensionamento di personale?",
    "answers": ["Ridurre l’efficienza", "Aumentare automaticamente la motivazione", "Eliminare i conflitti interni", "Migliorare sempre la comunicazione"],
    "correct": 0,
    "explanation": "Il sovradimensionamento può portare a inefficienza, perché ci sono più risorse del necessario rispetto al lavoro da svolgere. Non garantisce né motivazione né buona comunicazione."
  },
  {
    "id": 4,
    "question": "Quale metafora descrive l’organizzazione come sistema chiuso, razionale e burocratico?",
    "answers": ["Macchina", "Organismo", "Tribù", "Iceberg"],
    "correct": 0,
    "explanation": "La metafora della macchina rappresenta l’organizzazione come sistema razionale, chiuso e orientato alla specializzazione e standardizzazione. Le altre metafore mettono in evidenza aspetti diversi."
  },
  {
    "id": 5,
    "question": "Quali strumenti sono tipici della visione dell’organizzazione come macchina?",
    "answers": ["Organigramma, job description e procedure", "Riti, simboli e miti", "Coalizioni informali e giochi di potere", "Emozioni, paure e desideri"],
    "correct": 0,
    "explanation": "Nella visione meccanicistica dell’organizzazione contano struttura formale, mansionari e procedure. Le altre opzioni appartengono ad altre letture dell’organizzazione."
  },
  {
    "id": 6,
    "question": "Che cosa mette in evidenza la metafora dell’organizzazione come organismo?",
    "answers": ["La capacità di adattarsi all’ambiente", "La rigida applicazione delle procedure", "La centralità esclusiva della gerarchia", "L’assenza di influenze esterne"],
    "correct": 0,
    "explanation": "L’organizzazione come organismo interagisce con l’ambiente e si adatta ai suoi cambiamenti. Non è quindi un sistema chiuso né rigidamente definito solo da regole."
  },
  {
    "id": 7,
    "question": "Quale elemento è centrale nella metafora dell’organizzazione come organismo?",
    "answers": ["Il rapporto con clienti, concorrenti, fornitori e contesto", "La sola catena gerarchica", "La sola riduzione dei costi", "La sola standardizzazione dei compiti"],
    "correct": 0,
    "explanation": "La metafora dell’organismo mette al centro la relazione dinamica con l’ambiente esterno, quindi clienti, concorrenti, fornitori e contesto socioeconomico."
  },
  {
    "id": 8,
    "question": "Che cosa evidenzia la metafora dell’organizzazione come tribù o clan?",
    "answers": ["La cultura organizzativa, i valori condivisi e i legami sociali", "La sola struttura formale", "La sola divisione del lavoro", "La sola analisi economico-finanziaria"],
    "correct": 0,
    "explanation": "La metafora di tribù o clan sottolinea l’importanza di cultura, ideali condivisi e legami sociali. Non si concentra sulla sola struttura formale."
  },
  {
    "id": 9,
    "question": "Quale tipo di leadership è associata alla metafora di tribù e clan?",
    "answers": ["Leadership carismatica", "Leadership algoritmica", "Leadership impersonale automatica", "Leadership esclusivamente burocratica"],
    "correct": 0,
    "explanation": "Nel modello tribù e clan la coesione è spesso sostenuta da valori condivisi e da una leadership carismatica, non solo da regole scritte."
  },
  {
    "id": 10,
    "question": "Che cosa descrive la metafora dell’organizzazione come arena politica?",
    "answers": ["Un contesto in cui individui e gruppi competono per potere, risorse e influenza", "Un sistema totalmente armonico e privo di conflitti", "Un’organizzazione governata solo da procedure", "Un ambiente in cui la cultura non conta"],
    "correct": 0,
    "explanation": "L’arena politica mette in luce conflitti di interesse, coalizioni e lotte per il potere. Le altre opzioni negano proprio questo aspetto."
  },
  {
    "id": 11,
    "question": "Perché in un’arena politica è importante comprendere gli stakeholder?",
    "answers": ["Per capire quanto potere hanno e come influenzano i risultati", "Per assegnare i colori dell’organigramma", "Per evitare ogni forma di negoziazione", "Per ridurre il numero di reparti"],
    "correct": 0,
    "explanation": "Capire gli stakeholder significa comprendere chi detiene potere, risorse e capacità di influenza sui processi e sui risultati organizzativi."
  },
  {
    "id": 12,
    "question": "Che cosa indica la metafora dell’organizzazione come iceberg?",
    "answers": ["Che la parte visibile è sostenuta da dinamiche nascoste come emozioni, paure e relazioni di potere", "Che tutto ciò che conta è scritto nelle procedure", "Che conta solo ciò che si vede nell’organigramma", "Che la struttura formale spiega sempre tutto"],
    "correct": 0,
    "explanation": "L’iceberg distingue tra una parte visibile e una nascosta, mostrando che molti problemi organizzativi nascono da fattori invisibili ma decisivi."
  },
  {
    "id": 13,
    "question": "Quale tra questi appartiene alla parte nascosta dell’iceberg organizzativo?",
    "answers": ["Paure, desideri e relazioni di potere", "Job description e procedure", "Organigramma ufficiale", "Obiettivi dichiarati"],
    "correct": 0,
    "explanation": "Paure, desideri e relazioni di potere fanno parte della dimensione invisibile dell’organizzazione. Gli altri elementi appartengono alla parte emersa e formale."
  },
  {
    "id": 14,
    "question": "Quale insegnamento emerge dal caso Frair France e Perrin?",
    "answers": ["Non basta intervenire sulla struttura formale se non si considerano anche cultura, politica interna e dimensione psicologica", "È sufficiente cambiare l’organigramma per risolvere ogni problema", "I bisogni dei lavoratori non incidono sui risultati", "La formazione è irrilevante nei cambiamenti organizzativi"],
    "correct": 0,
    "explanation": "Il caso mostra che un cambiamento organizzativo efficace deve considerare non solo struttura e compiti, ma anche motivazione, cultura, potere e vissuto delle persone."
  },
  {
    "id": 15,
    "question": "Nel caso Frair France, quale cambiamento di contesto ha reso inadeguata la vecchia organizzazione?",
    "answers": ["Il passaggio da una clientela pubblica a una privata", "Il trasferimento della sede centrale", "L’eliminazione del project management", "La riduzione dei fornitori a uno solo"],
    "correct": 0,
    "explanation": "L’azienda era organizzata bene per servire clienti pubblici in un contesto diverso, ma l’espansione verso clienti privati richiedeva logiche nuove su tempi, costi e qualità."
  },
  {
    "id": 16,
    "question": "Perché la sola modifica della job description dei project manager non era sufficiente nel caso studiato?",
    "answers": ["Perché il cambiamento richiedeva anche motivazione, competenze e attenzione ai bisogni dei lavoratori", "Perché i project manager non hanno alcun ruolo nelle organizzazioni", "Perché la job description non incide mai su nulla", "Perché bastava cambiare il logo aziendale"],
    "correct": 0,
    "explanation": "La revisione formale dei ruoli era troppo limitata rispetto a un cambiamento che coinvolgeva anche abitudini di lavoro, competenze e dinamiche interne."
  },
  {
    "id": 17,
    "question": "Come viene definita l’organizzazione dal punto di vista della progettazione organizzativa?",
    "answers": ["Un sistema socio-tecnico costituito per raggiungere un obiettivo prefissato", "Un insieme casuale di persone senza relazioni", "Una sola struttura gerarchica", "Un insieme di strumenti informatici"],
    "correct": 0,
    "explanation": "L’organizzazione è descritta come sistema socio-tecnico, quindi formato da componenti tecniche e sociali che interagiscono per raggiungere obiettivi."
  },
  {
    "id": 18,
    "question": "Che cosa significa dire che l’organizzazione è un sistema socio-tecnico?",
    "answers": ["Che include sia variabili strumentali sia variabili sociali", "Che è composta solo da tecnologie", "Che si basa solo sulle relazioni umane", "Che non ha legami con l’ambiente esterno"],
    "correct": 0,
    "explanation": "Sistema socio-tecnico significa che tecnologie, strutture e meccanismi convivono con persone, relazioni, cultura e potere."
  },
  {
    "id": 19,
    "question": "Perché si dice che il sistema organizzativo è aperto?",
    "answers": ["Perché è in rapporto di scambio continuo con l’ambiente", "Perché non ha alcuna regola interna", "Perché non ha confini organizzativi", "Perché non ha obiettivi"],
    "correct": 0,
    "explanation": "Un sistema organizzativo è aperto perché interagisce costantemente con l’ambiente esterno e si evolve con esso."
  },
  {
    "id": 20,
    "question": "Qual è una condizione fondamentale per l’efficacia e l’efficienza di un sistema organizzativo?",
    "answers": ["La ricerca di coerenza ed equilibrio tra le variabili", "L’aumento continuo del numero di reparti", "La riduzione automatica della gerarchia", "L’eliminazione di ogni formalizzazione"],
    "correct": 0,
    "explanation": "L’organizzazione funziona bene quando le sue variabili sono coerenti e in equilibrio rispetto a obiettivi, strategia e ambiente."
  },
  {
    "id": 21,
    "question": "Che cosa rappresenta l’organigramma?",
    "answers": ["La descrizione della struttura organizzativa risultante dalla divisione e ricomposizione del lavoro", "Il piano economico dell’azienda", "La lista dei clienti principali", "L’insieme delle procedure informatiche"],
    "correct": 0,
    "explanation": "L’organigramma rappresenta la struttura organizzativa e i rapporti formali tra unità e ruoli."
  },
  {
    "id": 22,
    "question": "Quali modelli strutturali vengono richiamati nel materiale?",
    "answers": ["Funzionale, divisionale, per progetto, a matrice e ibrido", "Lineare, circolare, digitale e remoto", "Solo funzionale e divisionale", "Solo matrice e team autonomi"],
    "correct": 0,
    "explanation": "Il materiale presenta cinque principali modelli strutturali: funzionale, divisionale, per progetto, a matrice e ibrido."
  },
  {
    "id": 23,
    "question": "Su che cosa si basa la struttura organizzativa per funzioni?",
    "answers": ["Sulle specializzazioni funzionali come produzione, vendite e finanza", "Sui singoli clienti", "Sulle aree geografiche soltanto", "Sui progetti temporanei"],
    "correct": 0,
    "explanation": "La struttura funzionale divide il lavoro per funzioni omogenee, valorizzando specializzazione e competenza tecnica."
  },
  {
    "id": 24,
    "question": "Qual è un vantaggio tipico della struttura per funzioni?",
    "answers": ["Alto livello di specializzazione", "Massima flessibilità di mercato", "Riduzione totale delle barriere tra reparti", "Assenza di burocrazia"],
    "correct": 0,
    "explanation": "La struttura funzionale eccelle nella specializzazione e spesso nell’efficienza. Non è invece famosa per flessibilità o comunicazione trasversale."
  },
  {
    "id": 25,
    "question": "Qual è uno svantaggio tipico della struttura per funzioni?",
    "answers": ["Scarsa comunicazione trasversale tra i reparti", "Costo sempre troppo elevato per duplicazione delle funzioni", "Assenza di competenze tecniche", "Impossibilità di definire ruoli"],
    "correct": 0,
    "explanation": "La struttura funzionale tende a creare silos verticali, con difficoltà di coordinamento e comunicazione tra unità diverse."
  },
  {
    "id": 26,
    "question": "In quale contesto è più adatta una struttura per funzioni?",
    "answers": ["In contesti stabilizzati con pochi prodotti e mercato maturo", "In contesti molto instabili con prodotti a ciclo di vita breve", "Quando si lavora solo per progetto", "Quando il mercato cambia ogni settimana"],
    "correct": 0,
    "explanation": "La struttura per funzioni è più adatta ad ambienti relativamente stabili, con processi ripetitivi e gamma limitata di prodotti."
  },
  {
    "id": 27,
    "question": "Su quale criterio si basa la struttura organizzativa per divisioni o business unit?",
    "answers": ["Sul tipo di prodotto, mercato o area geografica", "Sulle sole competenze tecniche individuali", "Sulle relazioni informali tra dipendenti", "Sui turni di lavoro"],
    "correct": 0,
    "explanation": "La struttura divisionale crea unità dedicate a prodotti, mercati o territori differenti."
  },
  {
    "id": 28,
    "question": "Quale linea dell’organigramma indica un riporto gerarchico?",
    "answers": ["La linea continua", "La linea tratteggiata", "La linea doppia", "La linea curva"],
    "correct": 0,
    "explanation": "Nel materiale la linea continua rappresenta il riporto gerarchico. La linea tratteggiata indica invece un riporto funzionale."
  },
  {
    "id": 29,
    "question": "Che cosa indica una linea tratteggiata in un organigramma?",
    "answers": ["Un riporto funzionale", "Un rapporto di proprietà", "Una relazione di amicizia", "L’assenza di responsabilità"],
    "correct": 0,
    "explanation": "La linea tratteggiata segnala un riporto funzionale, cioè un legame di indirizzo o coordinamento non strettamente gerarchico."
  },
  {
    "id": 30,
    "question": "Qual è un vantaggio tipico della struttura divisionale?",
    "answers": ["Maggiore efficacia e flessibilità rispetto ai cambiamenti di mercato", "Massima semplicità di coordinamento", "Costi sempre bassissimi", "Eliminazione totale dei conflitti interni"],
    "correct": 0,
    "explanation": "La struttura divisionale è più vicina al mercato e reagisce meglio ai cambiamenti, quindi privilegia efficacia e flessibilità."
  },
  {
    "id": 31,
    "question": "Qual è uno svantaggio tipico della struttura divisionale?",
    "answers": ["Duplica funzioni e quindi è costosa", "Riduce troppo la specializzazione", "Non consente adattamento al mercato", "È sempre inadatta a organizzazioni grandi"],
    "correct": 0,
    "explanation": "La struttura divisionale richiede spesso funzioni replicate nelle diverse divisioni, con un aumento dei costi."
  },
  {
    "id": 32,
    "question": "In quale contesto è particolarmente utile la struttura divisionale?",
    "answers": ["In mercati instabili, con ampia gamma di prodotti e cicli di vita brevi", "In ambienti molto stabili con un solo prodotto", "Quando non esiste mercato", "Quando si vuole eliminare del tutto il management"],
    "correct": 0,
    "explanation": "La struttura divisionale è adatta a mercati dinamici e a organizzazioni con più prodotti o aree geografiche, perché offre maggiore adattabilità."
  },
  {
    "id": 33,
    "question": "Qual è la caratteristica distintiva della struttura per progetti?",
    "answers": ["La temporaneità legata a un progetto con scadenza", "La rigidità permanente dei reparti", "La divisione solo per aree geografiche", "La totale assenza di coordinamento"],
    "correct": 0,
    "explanation": "La struttura per progetti nasce e si organizza intorno a iniziative temporanee, con obiettivi e tempi definiti."
  },
  {
    "id": 34,
    "question": "Che cosa caratterizza un progetto debole?",
    "answers": ["Le persone vi lavorano part-time e il project manager ha poca autorità", "Le persone vi lavorano full-time e il project manager ha massima autorità", "Non esiste un project manager", "Dura più di dieci anni"],
    "correct": 0,
    "explanation": "Nei progetti deboli il coinvolgimento è parziale e il project manager dispone di un’autorità limitata, rendendo il coordinamento più difficile."
  },
  {
    "id": 35,
    "question": "Che cosa caratterizza una task force o progetto forte?",
    "answers": ["Coinvolgimento a tempo pieno delle persone e maggiore autorità del project manager", "Assenza di scadenze", "Partecipazione solo simbolica dei membri", "Riduzione totale delle responsabilità del PM"],
    "correct": 0,
    "explanation": "Nel progetto forte le persone sono dedicate pienamente per un periodo definito e il project manager ottiene maggiore potere formale."
  },
  {
    "id": 36,
    "question": "Qual è una criticità tipica delle task force?",
    "answers": ["Gestire il prima e il dopo del progetto, cioè selezione e ricollocazione delle persone", "La totale assenza di autorità del PM", "La mancanza di obiettivi temporali", "L’impossibilità di lavorare in team"],
    "correct": 0,
    "explanation": "Nelle task force il durante è spesso più semplice, mentre è complesso decidere chi coinvolgere e come reinserire le persone a progetto concluso."
  },
  {
    "id": 37,
    "question": "Che cosa unifica la struttura a matrice?",
    "answers": ["La struttura per funzioni e quella per divisioni", "La struttura informale e quella sindacale", "Solo i reparti di produzione e vendite", "Le task force e i gruppi amicali"],
    "correct": 0,
    "explanation": "La matrice combina due criteri organizzativi, tipicamente funzioni e divisioni, generando una struttura più ricca ma anche più complessa."
  },
  {
    "id": 38,
    "question": "Quale principio classico viene messo in crisi dalla struttura a matrice?",
    "answers": ["Ogni dipendente ha un solo capo", "La necessità di comunicare", "La definizione degli obiettivi", "La specializzazione tecnica"],
    "correct": 0,
    "explanation": "La matrice rompe il principio dell’unità di comando, perché una persona può dipendere contemporaneamente da più linee di autorità."
  },
  {
    "id": 39,
    "question": "Qual è un vantaggio della struttura a matrice?",
    "answers": ["Favorisce lo sviluppo di competenze tecniche e manageriali", "Elimina la complessità", "Garantisce sempre chiarezza assoluta", "Riduce al minimo la negoziazione"],
    "correct": 0,
    "explanation": "La matrice espone le persone a più dimensioni organizzative, favorendo crescita professionale tecnica e manageriale."
  },
  {
    "id": 40,
    "question": "Qual è uno svantaggio della struttura a matrice?",
    "answers": ["Grande complessità di gestione", "Scarsa possibilità di carriera", "Assenza di competenze trasversali", "Impossibilità di adattarsi"],
    "correct": 0,
    "explanation": "La struttura a matrice è difficile da gestire perché richiede negoziazione continua, chiarezza di ruoli e capacità di coordinamento elevate."
  },
  {
    "id": 41,
    "question": "Quale caratteristica distingue la struttura ibrida dalla matrice?",
    "answers": ["Nella struttura ibrida c’è sempre un solo capo", "Nella struttura ibrida non esistono divisioni", "Nella struttura ibrida non esistono funzioni", "Nella struttura ibrida ogni persona dipende da tre capi"],
    "correct": 0,
    "explanation": "La struttura ibrida combina elementi funzionali e divisionali, ma mantiene il principio di un solo capo, risultando più semplice della matrice."
  },
  {
    "id": 42,
    "question": "Perché la struttura ibrida è considerata oggi molto diffusa?",
    "answers": ["Perché si adatta meglio ai contesti attuali unendo flessibilità e chiarezza", "Perché elimina completamente le funzioni", "Perché funziona solo nei monopoli pubblici", "Perché rende inutile il coordinamento"],
    "correct": 0,
    "explanation": "La struttura ibrida cerca un equilibrio tra esigenze di specializzazione, adattamento e semplicità organizzativa, risultando adatta a contesti contemporanei."
  },
  {
    "id": 43,
    "question": "Che cosa significa che le variabili organizzative sono interdipendenti?",
    "answers": ["Che modificare una variabile può influenzarne altre, come struttura e cultura", "Che ogni variabile agisce sempre in modo isolato", "Che contano solo le tecnologie", "Che la cultura non cambia mai"],
    "correct": 0,
    "explanation": "Le variabili organizzative sono collegate tra loro: cambiare la struttura, per esempio, può avere effetti su cultura, relazioni e processi."
  },
  {
    "id": 44,
    "question": "Che cosa significa progettare l’organizzazione in modo coerente con il modello di business?",
    "answers": ["Scegliere la struttura più adatta agli obiettivi, alla strategia e al contesto", "Usare sempre la stessa struttura in ogni situazione", "Copiare l’organigramma dei concorrenti", "Separare completamente organizzazione e strategia"],
    "correct": 0,
    "explanation": "La progettazione organizzativa deve essere coerente con strategia, ambiente, prodotti e obiettivi dell’impresa."
  },
  {
    "id": 45,
    "question": "Perché la struttura funzionale tende alla burocratizzazione?",
    "answers": ["Perché enfatizza specializzazione verticale, regole e procedure", "Perché è priva di ruoli definiti", "Perché elimina ogni coordinamento", "Perché si basa solo su gruppi informali"],
    "correct": 0,
    "explanation": "La struttura funzionale, proprio perché molto specializzata e formalizzata, può rallentare e irrigidire i processi organizzativi."
  },
  {
    "id": 46,
    "question": "Perché la struttura divisionale viene associata più all’efficacia che all’efficienza?",
    "answers": ["Perché consente di reagire meglio al mercato anche se comporta costi maggiori", "Perché elimina tutte le duplicazioni", "Perché riduce sempre i costi fissi", "Perché non richiede adattamento"],
    "correct": 0,
    "explanation": "La struttura divisionale favorisce risposta al mercato e adattamento, ma spesso accetta una minore efficienza a causa della duplicazione di funzioni."
  },
  {
    "id": 47,
    "question": "Quale problema può emergere tra le divisioni in una struttura divisionale?",
    "answers": ["Dinamiche competitive interne", "Assenza totale di responsabilità", "Impossibilità di definire obiettivi", "Mancanza di funzioni replicate"],
    "correct": 0,
    "explanation": "Le divisioni possono entrare in competizione tra loro per risorse, riconoscimento o priorità, generando conflitti interni."
  },
  {
    "id": 48,
    "question": "Perché in un progetto debole il coordinamento è più difficile?",
    "answers": ["Perché le persone lavorano su più fronti e il project manager ha autorità limitata", "Perché tutti lavorano a tempo pieno sul progetto", "Perché non ci sono interdipendenze", "Perché il progetto non ha scadenza"],
    "correct": 0,
    "explanation": "Nel progetto debole il personale non è completamente dedicato e il PM ha meno potere, quindi il coordinamento quotidiano si complica."
  },
  {
    "id": 49,
    "question": "Perché la matrice richiede forti capacità di negoziazione?",
    "answers": ["Perché i dipendenti si trovano al crocevia di più linee di autorità", "Perché non esistono obiettivi", "Perché manca qualunque specializzazione", "Perché non ci sono più manager"],
    "correct": 0,
    "explanation": "La matrice genera sovrapposizioni di responsabilità e autorità, quindi richiede mediazione e negoziazione continue."
  },
  {
    "id": 50,
    "question": "Quale struttura cerca di combinare efficacia ed efficienza mantenendo maggiore semplicità rispetto alla matrice?",
    "answers": ["La struttura ibrida", "La struttura per progetti debole", "La struttura tribale", "La struttura puramente funzionale"],
    "correct": 0,
    "explanation": "La struttura ibrida nasce proprio per combinare logiche diverse, ma mantenendo un’unica linea di comando e una gestione più semplice."
  },
  {
    "id": 51,
    "question": "Che cosa implica considerare l’organizzazione anche come arena politica?",
    "answers": ["Riconoscere che esistono interessi individuali, coalizioni e giochi di potere", "Negare l’esistenza di conflitti", "Pensare che basti l’organigramma per capire tutto", "Considerare irrilevanti gli stakeholder"],
    "correct": 0,
    "explanation": "La lettura politica dell’organizzazione aiuta a comprendere conflitti, alleanze e distribuzione del potere, che spesso non emergono formalmente."
  },
  {
    "id": 52,
    "question": "Quale delle seguenti affermazioni descrive meglio la parte emersa dell’iceberg organizzativo?",
    "answers": ["Comprende struttura formale, procedure scritte e comportamenti espliciti", "Comprende paure, ansie e desideri", "Comprende solo le relazioni di potere nascoste", "Comprende solo la cultura informale"],
    "correct": 0,
    "explanation": "La parte emersa dell’iceberg è ciò che si vede: organigramma, regole, obiettivi dichiarati e comportamenti osservabili."
  },
  {
    "id": 53,
    "question": "Perché la metafora del clan richiede spesso osservazione e dialogo sul campo?",
    "answers": ["Perché i valori condivisi non si colgono solo dai documenti formali", "Perché i clan non hanno mai leader", "Perché non esistono relazioni sociali", "Perché tutto è scritto nelle procedure"],
    "correct": 0,
    "explanation": "Cultura, simboli e valori non emergono solo dai documenti: vanno osservati nei comportamenti e nelle interazioni reali."
  },
  {
    "id": 54,
    "question": "Quale fattore rende una persona particolarmente potente in un’arena politica organizzativa?",
    "answers": ["Possedere competenze critiche e difficilmente sostituibili", "Avere il ruolo con il nome più lungo", "Lavorare sempre da remoto", "Essere il più giovane del team"],
    "correct": 0,
    "explanation": "Chi possiede conoscenze rilevanti e scarse, cioè difficili da sostituire, acquisisce potere negoziale nell’organizzazione."
  },
  {
    "id": 55,
    "question": "Perché i veri problemi organizzativi spesso non si vedono subito?",
    "answers": ["Perché risiedono nella parte nascosta dell’iceberg organizzativo", "Perché sono sempre visibili nei numeri di bilancio", "Perché dipendono solo dal software usato", "Perché si manifestano solo all’esterno"],
    "correct": 0,
    "explanation": "Molti problemi organizzativi nascono da fattori invisibili come relazioni, paure, cultura o conflitti, che però influenzano fortemente i risultati visibili."
  },
  {
    "id": 56,
    "question": "Quale tra questi elementi rientra nelle variabili strumentali del sistema socio-tecnico?",
    "answers": ["Tecnologie, strutture e meccanismi operativi", "Emozioni, ansie e desideri", "Valori personali e cultura informale", "Coalizioni e cordate"],
    "correct": 0,
    "explanation": "Le variabili strumentali sono quelle tecniche e organizzative, come tecnologie, strutture e meccanismi operativi. Le altre sono variabili sociali o politiche."
  },
  {
    "id": 57,
    "question": "Quale tra questi elementi rientra nelle variabili sociali del sistema socio-tecnico?",
    "answers": ["Persone, relazioni, potere e cultura", "Solo il layout degli uffici", "Solo il software gestionale", "Solo le procedure operative standard"],
    "correct": 0,
    "explanation": "Le variabili sociali riguardano le persone e le loro relazioni, inclusi potere, cultura e dinamiche interpersonali."
  },
  {
    "id": 58,
    "question": "Che cosa si intende per divisione e ricomposizione orizzontale e verticale del lavoro?",
    "answers": ["Il processo con cui si suddividono compiti e responsabilità e poi li si coordina nella struttura", "La semplice riduzione del numero di dipendenti", "La sola eliminazione dei livelli gerarchici", "La sostituzione delle persone con tecnologie"],
    "correct": 0,
    "explanation": "La struttura organizzativa nasce dalla scomposizione del lavoro e dal successivo coordinamento di attività, ruoli e livelli gerarchici."
  },
  {
    "id": 59,
    "question": "Perché la funzione non è più centrale nella struttura ibrida?",
    "answers": ["Perché alcune funzioni vengono portate dentro le divisioni", "Perché le funzioni vengono eliminate del tutto", "Perché si lavora solo per progetto", "Perché il vertice non esiste più"],
    "correct": 0,
    "explanation": "Nella struttura ibrida alcune logiche funzionali vengono integrate dentro le divisioni, così da bilanciare meglio efficienza ed efficacia."
  },
  {
    "id": 60,
    "question": "Quale affermazione riassume meglio l’idea generale del programma sui modelli organizzativi?",
    "answers": ["Non esiste una struttura migliore in assoluto: conta la coerenza con contesto, strategia e obiettivi", "La struttura funzionale è sempre la migliore", "La matrice è sempre da preferire", "La cultura organizzativa è irrilevante nella progettazione"],
    "correct": 0,
    "explanation": "Il messaggio di fondo è che ogni modello organizzativo ha vantaggi e limiti e va scelto in coerenza con ambiente, strategia, attività e persone coinvolte."
  }
];

export default modelliProcessiOrganizzativiQuestions;
