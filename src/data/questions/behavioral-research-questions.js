const behavioralResearchQuestions = [
  {
    "id": 1,
    "question": "Che cosa studia la ricerca sul comportamento dell’utente o consumatore?",
    "answers": ["Solo il momento dell’acquisto", "I processi con cui individui o gruppi selezionano, acquistano, usano o si disfano di prodotti, servizi, idee o esperienze per soddisfare bisogni e desideri", "Esclusivamente le campagne pubblicitarie", "Solo i comportamenti patologici di consumo"],
    "correct": 1,
    "explanation": "I processi con cui individui o gruppi selezionano, acquistano, usano o si disfano di prodotti, servizi, idee o esperienze per soddisfare bisogni e desideri: questa definizione include l’intero ciclo del consumo, non solo l’acquisto. Le altre opzioni restringono troppo il campo o lo confondono con ambiti specifici come la pubblicità o i comportamenti estremi."
  },
  {
    "id": 2,
    "question": "Quali sono gli elementi fondamentali della prospettiva adottata nel corso?",
    "answers": ["Attori, attività e processi, oggetto del consumo, obiettivo finale dei consumatori", "Prezzo, promozione, distribuzione, packaging", "Brand, reputazione, logo, testimonial", "Bisogni, acquisto, vendita, margine"],
    "correct": 0,
    "explanation": "Attori, attività e processi, oggetto del consumo, obiettivo finale dei consumatori: questi quattro elementi descrivono chi agisce, che cosa fa, su che cosa agisce e con quale finalità. Le altre alternative mescolano leve di marketing o variabili commerciali, che non coincidono con l’impianto teorico iniziale."
  },
  {
    "id": 3,
    "question": "Come viene definita la creatività?",
    "answers": ["Come capacità di produrre qualcosa di nuovo e appropriato", "Come capacità di copiare rapidamente idee esistenti", "Come semplice originalità senza utilità", "Come talento artistico innato"],
    "correct": 0,
    "explanation": "Come capacità di produrre qualcosa di nuovo e appropriato: la creatività non richiede solo novità, ma anche adeguatezza rispetto al problema o al contesto. Le altre opzioni trascurano uno dei due poli, riducendo la creatività a mera originalità, imitazione o talento artistico."
  },
  {
    "id": 4,
    "question": "Che cos’è il non intentional design?",
    "answers": ["Una tecnica professionale di product design", "La creatività spontanea che trasforma risorse disponibili in usi nuovi", "Una forma di sabotaggio del prodotto", "Un processo di progettazione completamente automatizzato"],
    "correct": 1,
    "explanation": "La creatività spontanea che trasforma risorse disponibili in usi nuovi: il non intentional design nasce dall’uso creativo quotidiano, non da un progetto formale top-down. Le altre opzioni lo confondono con design professionale, errore o automazione tecnica."
  },
  {
    "id": 5,
    "question": "Che tipo di valore crea un consumatore altamente creativo, competente, collaborativo e connesso?",
    "answers": ["Solo valore per sé stesso", "Solo valore per l’azienda", "Valore per sé stesso, per l’azienda e per altri clienti", "Solo valore simbolico"],
    "correct": 2,
    "explanation": "Valore per sé stesso, per l’azienda e per altri clienti: il consumatore creativo non è solo un utilizzatore, ma un attore che estende il valore lungo più direzioni. Le altre alternative riducono troppo la portata del suo contributo."
  },
  {
    "id": 6,
    "question": "Quali sono i tre pilastri della creatività?",
    "answers": ["Talento, tecnologia, velocità", "Motivazione, abilità, opportunità", "Interesse, reddito, istruzione", "Curiosità, premio, concorrenza"],
    "correct": 1,
    "explanation": "Motivazione, abilità, opportunità: la creatività emerge quando c’è spinta ad agire, capacità di farlo e un contesto che lo permette. Le altre opzioni elencano fattori parziali o non strutturati come modello teorico completo."
  },
  {
    "id": 7,
    "question": "Che cosa caratterizza la motivazione intrinseca?",
    "answers": ["Interesse, curiosità, soddisfazione e coinvolgimento personale", "Giudizio sociale e premi esterni", "Competizione e ricompense economiche", "Solo obbligo e disciplina"],
    "correct": 0,
    "explanation": "Interesse, curiosità, soddisfazione e coinvolgimento personale: la motivazione intrinseca nasce dall’attività stessa e dal piacere di svolgerla. Le altre risposte richiamano invece leve esterne, più vicine alla motivazione estrinseca o alla costrizione."
  },
  {
    "id": 8,
    "question": "Che cosa caratterizza la motivazione estrinseca?",
    "answers": ["Interesse autonomo per il compito", "Valutazione, competizione e ricompense esterne", "Soddisfazione personale e curiosità", "Esclusivamente piacere creativo"],
    "correct": 1,
    "explanation": "Valutazione, competizione e ricompense esterne: la spinta arriva da fattori fuori dall’attività, come premi o giudizio altrui. Le altre alternative descrivono invece elementi tipici della motivazione intrinseca."
  },
  {
    "id": 9,
    "question": "Secondo l’impostazione riportata, quale tipo di motivazione tende a generare risultati creativi migliori?",
    "answers": ["Quella intrinseca", "Quella estrinseca", "Entrambe sempre allo stesso modo", "Nessuna delle due"],
    "correct": 0,
    "explanation": "Quella intrinseca: quando si agisce per interesse e soddisfazione personale, la creatività tende a essere più ricca e autentica. Le altre opzioni ignorano la distinzione fatta tra spinta interna e pressione esterna."
  },
  {
    "id": 10,
    "question": "Da che cosa è data l’abilità creativa?",
    "answers": ["Da strumenti, competenze ed esperienza", "Solo dal quoziente intellettivo", "Solo dall’ispirazione del momento", "Dalla competizione con gli altri"],
    "correct": 0,
    "explanation": "Da strumenti, competenze ed esperienza: l’abilità non è un dono astratto, ma una base operativa che permette di generare soluzioni originali e appropriate. Le altre opzioni la riducono a una sola dimensione o a fattori insufficienti."
  },
  {
    "id": 11,
    "question": "Quali sono le tre abilità intellettive coinvolte nella creatività?",
    "answers": ["Memoria, concentrazione, velocità", "Abilità divergente, abilità analitica, abilità pratica contestuale", "Logica, intuizione, imitazione", "Osservazione, ripetizione, valutazione"],
    "correct": 1,
    "explanation": "Abilità divergente, abilità analitica, abilità pratica contestuale: prima si generano molte idee, poi si selezionano quelle funzionali e infine si adattano al contesto. Le altre opzioni non riflettono la tripartizione proposta nel corso."
  },
  {
    "id": 12,
    "question": "Che cosa indica l’abilità divergente?",
    "answers": ["La capacità di applicare una sola soluzione sicura", "La capacità di generare molte idee anche provenienti da ambiti lontani", "La capacità di eseguire istruzioni in modo preciso", "La capacità di scegliere subito l’alternativa più economica"],
    "correct": 1,
    "explanation": "La capacità di generare molte idee anche provenienti da ambiti lontani: l’abilità divergente serve ad aprire il campo delle possibilità e a non restare bloccati su uno stimolo unico. Le altre opzioni descrivono precisione esecutiva o selezione, non esplorazione creativa."
  },
  {
    "id": 13,
    "question": "Quale tra questi NON è un componente dell’abilità divergente?",
    "answers": ["Fluidità", "Flessibilità", "Originalità", "Conformità"],
    "correct": 3,
    "explanation": "Conformità: l’abilità divergente richiede produzione ampia, varia, originale ed elaborata, non adesione a schemi standard. Le altre opzioni sono invece componenti esplicitamente incluse nel modello."
  },
  {
    "id": 14,
    "question": "Che cosa indica l’abilità analitica?",
    "answers": ["La capacità di generare sempre nuove idee", "La capacità di scegliere tra molte idee una soluzione effettiva e funzionale", "La capacità di adattarsi ai desideri del gruppo", "La capacità di premiare il comportamento corretto"],
    "correct": 1,
    "explanation": "La capacità di scegliere tra molte idee una soluzione effettiva e funzionale: l’analisi serve a valutare ciò che può davvero funzionare. Le altre opzioni riguardano generazione di idee, adattamento sociale o meccanismi di controllo ambientale."
  },
  {
    "id": 15,
    "question": "Che cosa indica l’abilità pratica contestuale?",
    "answers": ["La capacità di rendere un’idea adottabile in uno specifico contesto", "La capacità di ricordare esempi passati", "La capacità di applicare un regolamento", "La capacità di vendere a qualsiasi prezzo"],
    "correct": 0,
    "explanation": "La capacità di rendere un’idea adottabile in uno specifico contesto: non basta avere una buona idea, bisogna renderla praticabile per altri. Le altre opzioni non colgono il passaggio dall’idea astratta alla soluzione contestualizzata."
  },
  {
    "id": 16,
    "question": "Da che cosa dipende soprattutto l’opportunità creativa?",
    "answers": ["Dall’ambiente", "Dal caso", "Dal reddito", "Dalla velocità di risposta"],
    "correct": 0,
    "explanation": "Dall’ambiente: l’opportunità dipende dal fatto che il contesto favorisca o inibisca l’espressione della creatività. Le altre opzioni colgono fattori secondari o non spiegano il ruolo strutturale del contesto."
  },
  {
    "id": 17,
    "question": "Che cosa sostiene il paradigma della co-creazione?",
    "answers": ["Che l’innovazione debba restare solo nelle mani dei produttori", "Che i consumatori siano solo un target da soddisfare", "Che i consumatori siano co-creatori di valore e non semplici destinatari delle offerte", "Che il marketing debba essere sostituito dalla sola community"],
    "correct": 2,
    "explanation": "Che i consumatori siano co-creatori di valore e non semplici destinatari delle offerte: il cambiamento di paradigma consiste proprio nello spostare il consumatore da voce passiva a soggetto attivo nel processo di innovazione. Le altre opzioni descrivono il modello precedente o lo estremizzano."
  },
  {
    "id": 18,
    "question": "Che cosa rende collettivo il processo di co-creazione?",
    "answers": ["La presenza di sole piattaforme digitali", "Le interazioni sociali che generano interpretazioni e scoperte nuove", "La presenza obbligatoria di ricompense economiche", "Il fatto che il brand rinunci del tutto a guidare il processo"],
    "correct": 1,
    "explanation": "Le interazioni sociali che generano interpretazioni e scoperte nuove: la co-creazione è collettiva perché produce risultati che il singolo da solo non avrebbe generato. Le altre opzioni confondono il mezzo, l’incentivo o il livello di controllo con il meccanismo centrale."
  },
  {
    "id": 19,
    "question": "Nel paradigma della co-creazione, quale ruolo mantengono i brand nei casi considerati?",
    "answers": ["Nessun ruolo", "Continuano a guidare l’innovazione di prodotto lasciando comunque spazio attivo ai clienti", "Si limitano a osservare passivamente", "Delegano interamente lo sviluppo ai consumatori"],
    "correct": 1,
    "explanation": "Continuano a guidare l’innovazione di prodotto lasciando comunque spazio attivo ai clienti: il modello non elimina il ruolo del brand, ma lo riequilibra. Le altre opzioni trasformano la co-creazione in abbandono totale della regia aziendale, che non è ciò che viene descritto."
  },
  {
    "id": 20,
    "question": "Che cosa mostra il caso MUJI?",
    "answers": ["Che i designer interni superano sempre gli utenti", "Che i prodotti generati dagli utenti possono avere performance di mercato più forti", "Che i clienti non sanno contribuire allo sviluppo prodotto", "Che l’innovazione utente vale solo nei servizi digitali"],
    "correct": 1,
    "explanation": "Che i prodotti generati dagli utenti possono avere performance di mercato più forti: il caso MUJI suggerisce che le idee degli utenti non sono semplici suggerimenti marginali, ma possono tradursi in risultati di mercato molto efficaci. Le altre opzioni vanno nella direzione opposta o generalizzano male."
  },
  {
    "id": 21,
    "question": "Che cosa caratterizza il caso DEWALT?",
    "answers": ["Una community di oltre 10.000 utenti finali e un programma di raccolta di invenzioni", "L’assenza di contatto con gli utenti professionali", "Una strategia basata solo su pubblicità televisiva", "L’eliminazione dei clienti dal processo di innovazione"],
    "correct": 0,
    "explanation": "Una community di oltre 10.000 utenti finali e un programma di raccolta di invenzioni: DEWALT usa il coinvolgimento strutturato dei professionisti per orientare l’innovazione. Le altre opzioni negano proprio l’elemento distintivo del caso."
  },
  {
    "id": 22,
    "question": "Perché il consumatore lavoratore può essere visto criticamente?",
    "answers": ["Perché riduce sempre i costi per tutti", "Perché il suo lavoro viene usato sistematicamente dalle imprese e può produrre doppio sfruttamento", "Perché elimina la creatività", "Perché rifiuta la collaborazione con i brand"],
    "correct": 1,
    "explanation": "Perché il suo lavoro viene usato sistematicamente dalle imprese e può produrre doppio sfruttamento: il consumatore contribuisce gratuitamente e può poi pagare un prezzo premium per il risultato del proprio contributo. Le altre risposte banalizzano o fraintendono la critica."
  },
  {
    "id": 23,
    "question": "In che cosa consiste il doppio sfruttamento dei consumatori lavoratori?",
    "answers": ["Lavorano gratuitamente e poi pagano un prezzo premium per i frutti del loro stesso lavoro", "Lavorano a pagamento e ricevono sconti esclusivi", "Pagano meno ma lavorano di più", "Forniscono solo dati senza partecipare davvero"],
    "correct": 0,
    "explanation": "Lavorano gratuitamente e poi pagano un prezzo premium per i frutti del loro stesso lavoro: questa formula rende evidente la tensione del modello. Le altre opzioni attenuano o modificano in modo improprio il problema descritto."
  },
  {
    "id": 24,
    "question": "Come viene definito un consumatore vulnerabile nella visione più aggiornata?",
    "answers": ["Una persona sempre incapace di scegliere", "Un consumatore che, per caratteristiche, situazione o contesto di mercato, è più esposto a esiti negativi e a difficoltà nel massimizzare il benessere", "Solo una persona anziana", "Solo una persona con basso reddito"],
    "correct": 1,
    "explanation": "Un consumatore che, per caratteristiche, situazione o contesto di mercato, è più esposto a esiti negativi e a difficoltà nel massimizzare il benessere: la vulnerabilità è definita in modo ampio e situato. Le altre risposte la riducono a categorie rigide o assolute."
  },
  {
    "id": 25,
    "question": "Quali sono i due principali approcci per identificare i consumatori vulnerabili?",
    "answers": ["Uno centrato solo sulla personalità e uno solo sulla tecnologia", "Uno centrato sulle caratteristiche individuali e uno sull’interazione tra individuo, circostanze e contesto di mercato", "Uno centrato sul prezzo e uno sulla distribuzione", "Uno psicologico e uno statistico"],
    "correct": 1,
    "explanation": "Uno centrato sulle caratteristiche individuali e uno sull’interazione tra individuo, circostanze e contesto di mercato: il primo approccio è più statico, il secondo più dinamico e situazionale. Le altre opzioni non descrivono la distinzione teorica proposta."
  },
  {
    "id": 26,
    "question": "Che cosa distingue la nuova visione della vulnerabilità dalla vecchia?",
    "answers": ["La nuova vede la vulnerabilità come condizione attivata dal contesto, anche temporanea", "La nuova considera vulnerabili solo gli anziani", "La nuova elimina del tutto i fattori individuali", "La nuova sostiene che tutti siano sempre vulnerabili nello stesso modo"],
    "correct": 0,
    "explanation": "La nuova vede la vulnerabilità come condizione attivata dal contesto, anche temporanea: questo sposta l’attenzione da etichette fisse alle situazioni concrete. Le altre opzioni reintroducono una lettura rigida o eccessivamente generalizzata."
  },
  {
    "id": 27,
    "question": "Quale esempio mostra bene la vulnerabilità come condizione contestuale?",
    "answers": ["Una persona altamente istruita che diventa vulnerabile durante un ricovero ospedaliero", "Un consumatore che sceglie sempre il brand preferito", "Un designer che lavora in team", "Un utente che legge molte recensioni"],
    "correct": 0,
    "explanation": "Una persona altamente istruita che diventa vulnerabile durante un ricovero ospedaliero: qui la vulnerabilità non deriva da una caratteristica permanente, ma da una situazione concreta che riduce capacità e controllo. Le altre opzioni non mostrano un cambio di condizione."
  },
  {
    "id": 28,
    "question": "Quale tra questi è un fattore di mercato della vulnerabilità?",
    "answers": ["Asimmetria informativa", "Stress emotivo", "Stigma", "Condizione di salute"],
    "correct": 0,
    "explanation": "Asimmetria informativa: è un fattore di mercato perché nasce dalla struttura dell’informazione e dello scambio. Le altre opzioni appartengono a sfere individuali o sociali."
  },
  {
    "id": 29,
    "question": "Quale tra questi è un fattore sociale della vulnerabilità?",
    "answers": ["Prezzi poco trasparenti", "Manipolazione algoritmica", "Discriminazione", "Limitazioni cognitive"],
    "correct": 2,
    "explanation": "Discriminazione: rientra tra i fattori sociali insieme a stigma ed esclusione. Le altre alternative appartengono a fattori di mercato o individuali."
  },
  {
    "id": 30,
    "question": "Quale tra questi è un fattore individuale della vulnerabilità?",
    "answers": ["Condizioni di salute", "Prezzi poco trasparenti", "Asimmetria informativa", "Stigma"],
    "correct": 0,
    "explanation": "Condizioni di salute: è un fattore individuale perché riguarda direttamente lo stato della persona. Le altre opzioni sono invece condizioni di mercato o sociali."
  },
  {
    "id": 31,
    "question": "Quali dimensioni emotive e psicologiche ricorrono spesso nella vulnerabilità del consumatore?",
    "answers": ["Paura, ansia, vergogna, dipendenza e perdita di controllo", "Solo gioia e sorpresa", "Soltanto indecisione cognitiva", "Solo stanchezza fisica"],
    "correct": 0,
    "explanation": "Paura, ansia, vergogna, dipendenza e perdita di controllo: la vulnerabilità non è solo economica o informativa, ma coinvolge fortemente la sfera emotiva. Le altre opzioni sono troppo parziali o incompatibili con la definizione data."
  },
  {
    "id": 32,
    "question": "Che cosa afferma la bounded rationality di Herbert Simon?",
    "answers": ["Gli individui calcolano sempre l’opzione ottimale", "Gli individui hanno risorse cognitive limitate e cercano soluzioni sufficientemente buone", "Le decisioni sono sempre casuali", "Le emozioni annullano ogni razionalità"],
    "correct": 1,
    "explanation": "Gli individui hanno risorse cognitive limitate e cercano soluzioni sufficientemente buone: Simon sostituisce l’ideale dell’ottimizzazione con quello del satisficing. Le altre risposte o estremizzano la razionalità perfetta o negano ogni struttura decisionale."
  },
  {
    "id": 33,
    "question": "Come viene descritta la razionalità nella prospettiva di Simon?",
    "answers": ["Ottimizzante e astratta", "Procedurale e situata", "Emotiva e irregolare", "Illimitata e matematica"],
    "correct": 1,
    "explanation": "Procedurale e situata: la razionalità dipende dal modo in cui si decide e dal contesto in cui si decide, non da un calcolo perfetto. Le altre opzioni richiamano il modello classico che Simon mette in discussione."
  },
  {
    "id": 34,
    "question": "Qual è la logica del satisficing?",
    "answers": ["Si cercano tutte le opzioni fino a trovare la migliore in assoluto", "Si fissa una soglia minima accettabile e ci si ferma quando un’opzione la supera", "Si sceglie sempre l’opzione più nota", "Si decide in base alla maggioranza"],
    "correct": 1,
    "explanation": "Si fissa una soglia minima accettabile e ci si ferma quando un’opzione la supera: questa è la logica del satisficing, coerente con risorse cognitive limitate. Le altre opzioni descrivono ottimizzazione totale o criteri diversi."
  },
  {
    "id": 35,
    "question": "Che cosa sostengono Kahneman e Tversky sulle decisioni in condizioni di incertezza?",
    "answers": ["Che gli individui usano solo regole probabilistiche corrette", "Che gli individui usano euristiche rapide che riducono lo sforzo ma generano bias prevedibili", "Che l’incertezza blocca ogni decisione", "Che la logica formale domina sempre il giudizio"],
    "correct": 1,
    "explanation": "Che gli individui usano euristiche rapide che riducono lo sforzo ma generano bias prevedibili: il punto non è l’irrazionalità casuale, ma la sistematicità delle deviazioni. Le altre opzioni ripropongono il modello classico o negano il funzionamento effettivo del giudizio."
  },
  {
    "id": 36,
    "question": "Che cosa distingue il Sistema 1 dal Sistema 2 secondo Kahneman?",
    "answers": ["Il Sistema 1 è rapido e automatico, il Sistema 2 è lento e analitico", "Il Sistema 1 è logico e il Sistema 2 è emotivo", "Il Sistema 1 opera solo nei matematici", "Il Sistema 2 è sempre dominante"],
    "correct": 0,
    "explanation": "Il Sistema 1 è rapido e automatico, il Sistema 2 è lento e analitico: la distinzione riguarda velocità, sforzo e livello di controllo. Le altre opzioni ribaltano o semplificano in modo scorretto il rapporto tra i due sistemi."
  },
  {
    "id": 37,
    "question": "Quale affermazione descrive correttamente la Prospect Theory?",
    "answers": ["Gli esiti vengono valutati in termini assoluti", "Le decisioni sono valutate rispetto a un punto di riferimento e le perdite pesano più dei guadagni equivalenti", "Le persone amano sempre il rischio", "Guadagni e perdite hanno lo stesso peso psicologico"],
    "correct": 1,
    "explanation": "Le decisioni sono valutate rispetto a un punto di riferimento e le perdite pesano più dei guadagni equivalenti: questo è il cuore della Prospect Theory. Le altre opzioni negano il riferimento, la loss aversion o la struttura asimmetrica del valore."
  },
  {
    "id": 38,
    "question": "Che cosa significa sensibilità decrescente nella Prospect Theory?",
    "answers": ["Che ogni variazione monetaria pesa allo stesso modo", "Che le differenze vicine al punto di riferimento contano più di differenze uguali ma più lontane", "Che le perdite non contano", "Che il consumatore smette di percepire il prezzo"],
    "correct": 1,
    "explanation": "Che le differenze vicine al punto di riferimento contano più di differenze uguali ma più lontane: per questo la differenza tra 10 e 20 appare più forte di quella tra 110 e 120. Le altre opzioni cancellano o banalizzano il principio."
  },
  {
    "id": 39,
    "question": "Che cosa propone Gigerenzer con la razionalità ecologica?",
    "answers": ["Che le euristiche sono sempre errori", "Che una decisione è razionale se è funzionale al contesto, grazie al fit tra mente e ambiente", "Che la razionalità coincide con il calcolo perfetto", "Che il contesto conta meno delle capacità individuali"],
    "correct": 1,
    "explanation": "Che una decisione è razionale se è funzionale al contesto, grazie al fit tra mente e ambiente: qui le euristiche possono essere adattive, non solo fonti di bias. Le altre opzioni tornano alla critica classica oppure ignorano il ruolo dell’ambiente."
  },
  {
    "id": 40,
    "question": "Che cos’è l’effetto ancora?",
    "answers": ["La tendenza a imitare gli altri", "L’influenza persistente del primo valore o informazione presentata sulle valutazioni successive", "La tendenza a restare fedeli al brand", "La paura di perdere una promozione"],
    "correct": 1,
    "explanation": "L’influenza persistente del primo valore o informazione presentata sulle valutazioni successive: l’ancora crea un riferimento iniziale che orienta i giudizi successivi. Le altre alternative descrivono meccanismi diversi come social proof, status quo o loss aversion."
  },
  {
    "id": 41,
    "question": "Perché i prezzi barrati funzionano come ancora?",
    "answers": ["Perché mostrano il costo reale di produzione", "Perché il prezzo precedente diventa un riferimento che fa sembrare più vantaggioso lo sconto", "Perché garantiscono qualità superiore", "Perché eliminano il rischio percepito"],
    "correct": 1,
    "explanation": "Perché il prezzo precedente diventa un riferimento che fa sembrare più vantaggioso lo sconto: il confronto non è con il valore assoluto, ma con il numero iniziale mostrato. Le altre opzioni attribuiscono al prezzo barrato funzioni che non gli appartengono."
  },
  {
    "id": 42,
    "question": "Che cosa si intende per framing?",
    "answers": ["La modifica del contenuto oggettivo di un’informazione", "Il cambiamento di giudizi e decisioni in base a come l’informazione viene presentata", "La memorizzazione selettiva di esperienze positive", "La percezione di possesso di un bene"],
    "correct": 1,
    "explanation": "Il cambiamento di giudizi e decisioni in base a come l’informazione viene presentata: il contenuto può restare identico, ma la cornice interpretativa cambia l’effetto. Le altre risposte descrivono bias differenti o modifiche sostanziali del contenuto."
  },
  {
    "id": 43,
    "question": "Quale messaggio è un esempio di framing orientato al guadagno?",
    "answers": ["Paghi 800€", "Risparmi 200€", "Prodotto standard", "Prezzo non disponibile"],
    "correct": 1,
    "explanation": "Risparmi 200€: il messaggio enfatizza ciò che si guadagna o si evita di perdere, risultando spesso più persuasivo. Le altre opzioni non usano un frame positivo esplicito o non sono informative."
  },
  {
    "id": 44,
    "question": "Che cos’è la loss aversion?",
    "answers": ["La preferenza per i prodotti gratuiti", "La tendenza per cui le perdite pesano psicologicamente più dei guadagni equivalenti", "La paura delle opzioni sconosciute", "La difficoltà a cambiare canale di vendita"],
    "correct": 1,
    "explanation": "La tendenza per cui le perdite pesano psicologicamente più dei guadagni equivalenti: perdere 10 euro fa più male di quanto piaccia guadagnarne 10. Le altre opzioni richiamano paure o rigidità diverse, ma non la specifica asimmetria della Prospect Theory."
  },
  {
    "id": 45,
    "question": "Perché i free trial possono aumentare la conversione al pagamento?",
    "answers": ["Perché il consumatore dimentica il prezzo", "Perché, dopo aver iniziato a usare il servizio, l’idea di perderlo attiva l’avversione alla perdita", "Perché eliminano ogni forma di valutazione", "Perché sono sempre più economici dell’acquisto diretto"],
    "correct": 1,
    "explanation": "Perché, dopo aver iniziato a usare il servizio, l’idea di perderlo attiva l’avversione alla perdita: il consumatore percepisce il servizio come qualcosa che ormai possiede o utilizza. Le altre opzioni non spiegano il meccanismo psicologico coinvolto."
  },
  {
    "id": 46,
    "question": "Che cos’è lo scarcity effect?",
    "answers": ["La tendenza a desiderare di più ciò che appare scarso o limitato", "La tendenza a preferire sempre il prezzo più basso", "La tendenza a scegliere l’opzione standard", "La tendenza a ricordare solo esperienze positive"],
    "correct": 0,
    "explanation": "La tendenza a desiderare di più ciò che appare scarso o limitato: la scarsità aumenta valore percepito, urgenza e desiderabilità. Le altre opzioni riguardano altri meccanismi decisionali come status quo o confirmation bias."
  },
  {
    "id": 47,
    "question": "Perché la scarsità può accelerare la decisione?",
    "answers": ["Perché aumenta il tempo di analisi", "Perché riduce il tempo percepito disponibile e spinge a scegliere più in fretta", "Perché elimina la pressione emotiva", "Perché rende tutte le opzioni uguali"],
    "correct": 1,
    "explanation": "Perché riduce il tempo percepito disponibile e spinge a scegliere più in fretta: la scarsità produce urgenza e comprime la riflessione. Le altre risposte descrivono effetti opposti o privi di base teorica."
  },
  {
    "id": 48,
    "question": "Che cos’è l’endowment effect?",
    "answers": ["La tendenza ad attribuire più valore a ciò che si possiede", "La tendenza a cambiare spesso marca", "La tendenza a seguire il gruppo", "La tendenza a ignorare il prezzo iniziale"],
    "correct": 0,
    "explanation": "La tendenza ad attribuire più valore a ciò che si possiede: il semplice possesso, anche psicologico, aumenta il valore soggettivo del bene. Le altre opzioni corrispondono ad altri fenomeni come social proof o assenza di ancoraggio."
  },
  {
    "id": 49,
    "question": "Perché la personalizzazione rafforza l’endowment effect?",
    "answers": ["Perché rende il prodotto più economico", "Perché crea possesso psicologico e rende più difficile rinunciare al bene", "Perché elimina il confronto tra alternative", "Perché obbliga all’acquisto"],
    "correct": 1,
    "explanation": "Perché crea possesso psicologico e rende più difficile rinunciare al bene: costruire o personalizzare un prodotto fa sentire che è già in parte proprio. Le altre risposte o esagerano l’effetto o lo spiegano in modo scorretto."
  },
  {
    "id": 50,
    "question": "Che cos’è il confirmation bias?",
    "answers": ["La tendenza a cercare e interpretare informazioni che confermano le proprie credenze iniziali", "La tendenza a cambiare facilmente opinione", "La tendenza a scegliere il prodotto più popolare", "La tendenza a rinviare la decisione"],
    "correct": 0,
    "explanation": "La tendenza a cercare e interpretare informazioni che confermano le proprie credenze iniziali: questo bias protegge la coerenza cognitiva e rafforza opinioni e scelte pregresse. Le altre opzioni descrivono conformismo sociale o procrastinazione."
  },
  {
    "id": 51,
    "question": "In che modo il confirmation bias sostiene la brand loyalty?",
    "answers": ["Riduce l’attenzione verso informazioni coerenti con la marca", "Porta a valorizzare selettivamente informazioni favorevoli al brand e a minimizzare quelle negative", "Obbliga il consumatore a comprare di nuovo", "Impedisce qualsiasi esperienza negativa"],
    "correct": 1,
    "explanation": "Porta a valorizzare selettivamente informazioni favorevoli al brand e a minimizzare quelle negative: così la fedeltà si rafforza anche quando esistono alternative migliori. Le altre opzioni o descrivono il contrario o attribuiscono al bias un potere assoluto che non ha."
  },
  {
    "id": 52,
    "question": "Che cos’è la social proof?",
    "answers": ["La tendenza a usare il prezzo come unica guida", "La tendenza a seguire il comportamento degli altri quando l’incertezza è alta", "La tendenza a restare con l’opzione predefinita", "La tendenza a preferire il prodotto più raro"],
    "correct": 1,
    "explanation": "La tendenza a seguire il comportamento degli altri quando l’incertezza è alta: la prova sociale funziona come scorciatoia informativa e normativa. Le altre opzioni descrivono ancoraggio, status quo o scarsità."
  },
  {
    "id": 53,
    "question": "Perché piccole differenze nei rating possono influenzare molto le vendite?",
    "answers": ["Perché i consumatori leggono ogni recensione in dettaglio", "Perché i rating funzionano come segnali sintetici di qualità percepita e riducono l’incertezza", "Perché i rating sono sempre oggettivi", "Perché i rating sostituiscono il prezzo"],
    "correct": 1,
    "explanation": "Perché i rating funzionano come segnali sintetici di qualità percepita e riducono l’incertezza: anche differenze minime orientano il confronto rapido tra opzioni. Le altre risposte sopravvalutano l’analisi approfondita o attribuiscono ai rating proprietà che non hanno."
  },
  {
    "id": 54,
    "question": "Che cos’è lo status quo bias?",
    "answers": ["La tendenza a preferire l’opzione corrente o predefinita anche quando esistono alternative migliori", "La tendenza a scegliere ciò che scelgono gli altri", "La tendenza a sopravvalutare ciò che si possiede", "La tendenza a rispondere alle emozioni"],
    "correct": 0,
    "explanation": "La tendenza a preferire l’opzione corrente o predefinita anche quando esistono alternative migliori: cambiare richiede sforzo, confronto e assunzione di rischio. Le altre opzioni corrispondono a social proof, endowment effect o affect heuristic."
  },
  {
    "id": 55,
    "question": "Perché i default settings sono così potenti?",
    "answers": ["Perché impongono legalmente una scelta", "Perché molti utenti li confermano per inerzia, costi cognitivi e asimmetrie informative", "Perché sono sempre l’opzione migliore", "Perché riducono la qualità del servizio"],
    "correct": 1,
    "explanation": "Perché molti utenti li confermano per inerzia, costi cognitivi e asimmetrie informative: il default riduce lo sforzo decisionale e sfrutta la preferenza per la continuità. Le altre risposte o assolutizzano il default o lo interpretano male."
  },
  {
    "id": 56,
    "question": "Che cos’è l’affect heuristic?",
    "answers": ["La valutazione di prodotti e situazioni sulla base delle emozioni immediate che evocano", "La preferenza per la marca più acquistata", "La paura di perdere un’occasione", "La tendenza a semplificare i menu"],
    "correct": 0,
    "explanation": "La valutazione di prodotti e situazioni sulla base delle emozioni immediate che evocano: le emozioni influenzano percezioni di rischio, qualità e valore. Le altre opzioni rimandano a social proof, FOMO o semplificazione dell’assortimento."
  },
  {
    "id": 57,
    "question": "Come può uno store design piacevole influenzare il consumatore?",
    "answers": ["Riduce il rischio percepito e aumenta la disponibilità a pagare", "Aumenta solo la memoria del prezzo", "Elimina completamente i bias", "Rende il prodotto oggettivamente migliore"],
    "correct": 0,
    "explanation": "Riduce il rischio percepito e aumenta la disponibilità a pagare: un ambiente piacevole attiva emozioni positive che si trasferiscono sul giudizio. Le altre opzioni attribuiscono all’atmosfera effetti troppo forti o sbagliati."
  },
  {
    "id": 58,
    "question": "Che cos’è il paradosso della scelta?",
    "answers": ["Avere più opzioni rende sempre più soddisfatti", "Oltre una certa soglia, troppe opzioni complicano la decisione e possono peggiorarla", "La scelta migliore è sempre quella centrale", "Le persone scelgono a caso quando ci sono molti prezzi"],
    "correct": 1,
    "explanation": "Oltre una certa soglia, troppe opzioni complicano la decisione e possono peggiorarla: l’eccesso di varietà aumenta carico cognitivo, rinvio e rimpianto. Le altre alternative negano o distorcono il fenomeno."
  },
  {
    "id": 59,
    "question": "Quale effetto può avere la riduzione del numero di varianti in assortimento?",
    "answers": ["Può aumentare le vendite semplificando la decisione", "Riduce sempre la soddisfazione", "Non ha effetti sul comportamento", "Obbliga a scegliere più lentamente"],
    "correct": 0,
    "explanation": "Può aumentare le vendite semplificando la decisione: meno alternative ben organizzate possono facilitare il confronto e diminuire il sovraccarico. Le altre risposte ignorano il legame tra complessità e decisione."
  },
  {
    "id": 60,
    "question": "Come viene definita l’impulsività nel comportamento del consumatore?",
    "answers": ["Come una scelta sempre irrazionale e patologica", "Come azioni intraprese senza attenta valutazione, guidate da stimoli emotivi o ambientali", "Come semplice entusiasmo verso i brand", "Come acquisto pianificato a lungo termine"],
    "correct": 1,
    "explanation": "Come azioni intraprese senza attenta valutazione, guidate da stimoli emotivi o ambientali: l’impulsività riguarda soprattutto il fallimento del controllo e della riflessione, non solo un forte coinvolgimento emotivo. Le altre opzioni la estremizzano o la confondono con comportamenti opposti."
  },
  {
    "id": 61,
    "question": "Quali funzioni esecutive sono coinvolte nel controllo dell’acquisto impulsivo?",
    "answers": ["Pianificazione, inibizione, flessibilità cognitiva", "Memoria fotografica, intuizione, imitazione", "Velocità, forza di volontà, riflesso", "Abitudine, fedeltà, preferenza"],
    "correct": 0,
    "explanation": "Pianificazione, inibizione, flessibilità cognitiva: queste funzioni regolano autocontrollo, confronto tra alternative e capacità di ritardare la gratificazione. Le altre opzioni non rappresentano il nucleo esecutivo richiamato nel testo."
  },
  {
    "id": 62,
    "question": "Perché l’acquisto impulsivo è descritto come un problema di controllo cognitivo?",
    "answers": ["Perché dipende solo dall’umore", "Perché si verifica quando falliscono i meccanismi che aiutano a valutare alternative, resistere agli stimoli e ritardare la gratificazione", "Perché elimina del tutto le emozioni", "Perché riguarda solo il credito"],
    "correct": 1,
    "explanation": "Perché si verifica quando falliscono i meccanismi che aiutano a valutare alternative, resistere agli stimoli e ritardare la gratificazione: il problema non è solo emotivo, ma esecutivo. Le altre risposte semplificano troppo o restringono il fenomeno."
  },
  {
    "id": 63,
    "question": "Quale caratteristica è centrale nei processi decisionali legati all’ADHD?",
    "answers": ["La prudenza estrema", "L’impulsività", "La memoria perfetta", "L’ottimizzazione razionale"],
    "correct": 1,
    "explanation": "L’impulsività: nell’ADHD le risposte rapide e poco pianificate agli stimoli influenzano fortemente le decisioni. Le altre opzioni sono incompatibili con il profilo descritto."
  },
  {
    "id": 64,
    "question": "Quale tra questi è un tratto dell’impulsività nell’ADHD?",
    "answers": ["Maggiore valutazione degli esiti a lungo termine", "Difficoltà a inibire azioni immediate", "Tendenza a esaminare tutte le alternative", "Bassa sensibilità agli stimoli salienti"],
    "correct": 1,
    "explanation": "Difficoltà a inibire azioni immediate: questo tratto spiega perché gli stimoli del contesto possano tradursi rapidamente in comportamento. Le altre opzioni descrivono il contrario della dinamica illustrata."
  },
  {
    "id": 65,
    "question": "Come evolve la vulnerabilità finanziaria nelle persone con ADHD secondo lo studio riportato?",
    "answers": ["È altissima fin dall’inizio dell’età adulta e poi cala", "Si accumula nel tempo, peggiorando risultati creditizi e difficoltà finanziarie in età adulta", "Non mostra differenze rispetto alla popolazione generale", "Dipende solo dal livello di reddito iniziale"],
    "correct": 1,
    "explanation": "Si accumula nel tempo, peggiorando risultati creditizi e difficoltà finanziarie in età adulta: il problema non emerge subito ma si stratifica con il passare degli anni. Le altre opzioni contraddicono il profilo temporale descritto."
  },
  {
    "id": 66,
    "question": "Quale metodologia viene usata nello studio sui consumatori con ADHD?",
    "answers": ["Esperimento di laboratorio puro", "Approccio netnografico con osservazione non partecipante di contenuti pubblici online e interviste profonde", "Solo questionari strutturati", "Solo analisi di dati bancari"],
    "correct": 1,
    "explanation": "Approccio netnografico con osservazione non partecipante di contenuti pubblici online e interviste profonde: la ricerca combina dati digitali spontanei e approfondimento qualitativo. Le altre opzioni descrivono disegni più ristretti di quello effettivamente adottato."
  },
  {
    "id": 67,
    "question": "Che cosa sono i dark patterns?",
    "answers": ["Errori casuali di progettazione delle interfacce", "Scelte di design che inducono, orientano o ingannano gli utenti verso decisioni non intenzionali e potenzialmente dannose", "Semplici elementi grafici scuri", "Messaggi pubblicitari tradizionali"],
    "correct": 1,
    "explanation": "Scelte di design che inducono, orientano o ingannano gli utenti verso decisioni non intenzionali e potenzialmente dannose: i dark patterns sono progettati per spingere il comportamento, non sono errori neutrali. Le altre opzioni banalizzano o fraintendono il fenomeno."
  },
  {
    "id": 68,
    "question": "Perché l’acquisto impulsivo viene collegato ai dark patterns?",
    "answers": ["Perché è solo un fenomeno emotivo interno all’individuo", "Perché può essere strutturalmente progettato attraverso il design dell’interfaccia", "Perché dipende unicamente dai prezzi bassi", "Perché riguarda solo i negozi fisici"],
    "correct": 1,
    "explanation": "Perché può essere strutturalmente progettato attraverso il design dell’interfaccia: il comportamento d’acquisto non nasce solo da tratti personali, ma anche da architetture digitali che comprimono deliberazione e controllo. Le altre risposte ignorano il ruolo del contesto progettato."
  },
  {
    "id": 69,
    "question": "Che cosa si intende per urgenza nel commercio digitale?",
    "answers": ["La velocità della connessione internet", "Elementi dell’interfaccia che impongono un vincolo temporale alla decisione di acquisto", "L’uso di colori accesi nel sito", "L’aumento improvviso dei costi di spedizione"],
    "correct": 1,
    "explanation": "Elementi dell’interfaccia che impongono un vincolo temporale alla decisione di acquisto: timer, offerte a tempo e scadenze di carrello servono a comprimere la finestra decisionale. Le altre opzioni non descrivono il meccanismo psicologico di urgenza."
  },
  {
    "id": 70,
    "question": "Quale effetto producono gli stimoli di urgenza sul processo decisionale?",
    "answers": ["Rendono le decisioni più lente e analitiche", "Producono decisioni più rapide e meno riflessive", "Aumentano il confronto sistematico di tutte le alternative", "Eliminano i bias cognitivi"],
    "correct": 1,
    "explanation": "Producono decisioni più rapide e meno riflessive: l’urgenza riduce il tempo percepito disponibile e sposta la scelta verso risposte automatiche. Le altre opzioni descrivono l’effetto opposto o attribuiscono all’urgenza un ruolo impossibile."
  },
  {
    "id": 71,
    "question": "Quali bias vengono sfruttati dagli stimoli di urgenza?",
    "answers": ["Bias di scarsità, bandwagon, FOMO e avversione alla perdita", "Solo la memoria di lavoro", "Solo il confirmation bias", "Solo lo status quo bias"],
    "correct": 0,
    "explanation": "Bias di scarsità, bandwagon, FOMO e avversione alla perdita: questi segnali lavorano insieme nel creare pressione decisionale. Le altre opzioni isolano un solo processo o ne indicano di non pertinenti."
  },
  {
    "id": 72,
    "question": "Perché gli stimoli di urgenza sono particolarmente rilevanti per i consumatori con ADHD?",
    "answers": ["Perché hanno sempre maggiore potere d’acquisto", "Perché comprimono il tempo decisionale e interagiscono con ridotto controllo inibitorio, percezione del tempo alterata, sensibilità agli stimoli salienti e preferenza per ricompense immediate", "Perché leggono più velocemente le condizioni contrattuali", "Perché sono meno esposti ai dark patterns"],
    "correct": 1,
    "explanation": "Perché comprimono il tempo decisionale e interagiscono con ridotto controllo inibitorio, percezione del tempo alterata, sensibilità agli stimoli salienti e preferenza per ricompense immediate: il design d’urgenza amplifica quindi vulnerabilità già presenti. Le altre opzioni sono irrilevanti o contrarie a quanto descritto."
  },
  {
    "id": 73,
    "question": "In questo contesto, come funziona la social proof come dark pattern?",
    "answers": ["Rallenta il processo decisionale", "Introduce urgenza competitiva e pressione normativa mostrando che altri stanno acquistando", "Riduce la visibilità del prodotto", "Fa diminuire il valore percepito del bene"],
    "correct": 1,
    "explanation": "Introduce urgenza competitiva e pressione normativa mostrando che altri stanno acquistando: la prova sociale qui non informa soltanto, ma spinge ad agire subito. Le altre opzioni descrivono effetti estranei o opposti."
  },
  {
    "id": 74,
    "question": "Che cosa segnala la scarsità come dark pattern?",
    "answers": ["La disponibilità illimitata del prodotto", "La disponibilità limitata o l’elevata domanda di un prodotto, aumentandone desiderabilità e valore percepito", "La qualità certificata del brand", "La neutralità dell’interfaccia"],
    "correct": 1,
    "explanation": "La disponibilità limitata o l’elevata domanda di un prodotto, aumentandone desiderabilità e valore percepito: il segnale di scarsità fa sembrare il bene più prezioso e urgente. Le altre opzioni attribuiscono alla scarsità significati che non ha."
  },
  {
    "id": 75,
    "question": "Quali due tipi di dark pattern legati alla scarsità vengono osservati?",
    "answers": ["Messaggi di scorte limitate e messaggi di alta domanda", "Sconti fedeltà e carte punti", "Garanzie estese e recensioni verificate", "Personalizzazione e reso gratuito"],
    "correct": 0,
    "explanation": "Messaggi di scorte limitate e messaggi di alta domanda: entrambi rafforzano il senso di urgenza e il valore percepito. Le altre alternative riguardano pratiche commerciali o leve diverse dalla scarsità."
  }
];

export default behavioralResearchQuestions;
