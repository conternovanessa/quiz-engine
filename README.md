# 🧠 Quiz Engine

Quiz Engine è una web app per la generazione dinamica di quiz universitari, pensata per lo studio attivo e la simulazione d’esame.

Il progetto permette di selezionare più materie e generare automaticamente un quiz randomizzato, con due modalità di utilizzo: **Exam Mode** e **Learning Mode**.

---

## 🚀 Live Demo

👉 https://quiz-engine.vercel.app *(sostituisci con il tuo link reale se diverso)*

---

## ⚙️ Funzionalità

### 🎯 Selezione materie
- Possibilità di selezionare una o più materie
- Generazione dinamica del quiz in base alla selezione

### 🧪 Exam Mode
- Simulazione d’esame reale
- Nessun feedback immediato
- Risultato finale con:
  - punteggio
  - risposte corrette/sbagliate
  - spiegazioni

### 📚 Learning Mode
- Feedback immediato dopo ogni risposta
- Evidenziazione risposta corretta/sbagliata
- Spiegazione immediata per ogni domanda

### 🔀 Generazione dinamica
- Domande randomizzate a ogni generazione
- Distribuzione bilanciata tra le materie
- Minimo 20 domande per quiz

---

## 🧱 Tecnologie utilizzate

- React
- Vite
- React Router
- JavaScript (ES6+)
- LocalStorage per gestione sessione

---

## 📁 Struttura del progetto

src/
├── data/ # Materie e database domande
├── pages/ # Home, Quiz, Results
├── utils/ # Logica generazione quiz
├── App.jsx # Routing principale


---

## 🧠 Come funziona

1. L’utente seleziona una o più materie
2. Sceglie la modalità (Exam o Learning)
3. Il sistema genera un quiz randomizzato
4. L’utente risponde alle domande
5. Viene mostrato il risultato finale o feedback progressivo

---

## 🎯 Obiettivo del progetto

Questo progetto nasce come strumento di studio per esami universitari, con focus su:

- apprendimento attivo
- ripasso strutturato
- simulazione d’esame realistica

---

## 📌 Possibili miglioramenti futuri

- timer per modalità esame
- livelli di difficoltà
- sistema di ripetizione errori
- salvataggio progressi su backend

---

## 👩‍💻 Autore

Progetto sviluppato da **Vanessa Conterno**

---

## 📜 Licenza

Uso personale / educativo

## 📦 Struttura delle domande

Le domande sono organizzate in file JavaScript separati per materia.

Ogni file esporta un array di oggetti con una struttura standard:

```js
{
  id: 1,
  question: "Testo della domanda",
  answers: [
    "Risposta A",
    "Risposta B",
    "Risposta C",
    "Risposta D"
  ],
  correct: 1,
  explanation: "Spiegazione della risposta corretta"
}

---

## 🧠 Scelta tecnica

```md id="v3l9aa" ```

## 🧠 Scelta tecnica (senza database)

Per semplicità e velocità di sviluppo, le domande sono gestite tramite file `.js` statici invece di un database.

Questa scelta è intenzionale perché:

- evita la complessità di un backend dedicato
- rende il progetto completamente frontend-based
- facilita manutenzione e aggiunta di nuove domande
- permette deploy immediato su Vercel senza configurazioni server

In una versione futura il sistema potrà essere facilmente migrato verso un database (es. MongoDB o PostgreSQL) mantenendo la stessa struttura logica delle domande.