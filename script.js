// ======================================
// Choose Your Own Adventure Engine (Fresh)
// Theme: Whispers on Willow Lane — a small-town mystery
// ======================================
// Data model
// - Each scene: key, text, art, caption, options[]
// - An ending has options: []
// - 10 endings, all with distinct images

const scenesMap = {
  gate: {
    key: 'gate',
    text: `You arrive on **Willow Lane** where odd letters have appeared on doorsteps. The wind carries a faint chime. Tonight, you investigate. Where first?`,
    art: 'https://picsum.photos/seed/willowgate/960/540',
    caption: 'Twilight over Willow Lane.',
    options: [
      { label: 'Talk to Mrs. Harrow (house 3)', go: 'harrow' },
      { label: 'Check the community board', go: 'board' },
      { label: 'Examine the creek footbridge', go: 'bridge' },
    ],
  },

  harrow: {
    key: 'harrow',
    text: 'Mrs. Harrow peers through the chain. "The letters? Mine said: *return what you borrowed.* But I borrowed nothing."',
    art: 'https://picsum.photos/seed/harrow/960/540',
    caption: 'A wary neighbor with a perfect memory.',
    options: [
      { label: 'Ask about her late husband', go: 'husband' },
      { label: 'Inspect the mailbox', go: 'ending_mail' },
      { label: 'Leave politely', go: 'board' },
    ],
  },

  husband: {
    key: 'husband',
    text: 'She sighs. "He kept a shed by the creek. Said he heard *whispers* at night."',
    art: 'https://picsum.photos/seed/shedhint/960/540',
    caption: 'Secrets gather where tools rust.',
    options: [
      { label: 'Head to the shed', go: 'shed' },
      { label: 'Question neighbors instead', go: 'board' },
    ],
  },

  board: {
    key: 'board',
    text: 'Pinned flyers flap. A map shows houses with circles. Someone marked **3, 5, 7, and the bridge**.',
    art: 'https://picsum.photos/seed/boardwillow/960/540',
    caption: 'Clues public, meaning private.',
    options: [
      { label: 'Go to house 5', go: 'house5' },
      { label: 'Go to house 7', go: 'house7' },
      { label: 'Go to the bridge', go: 'bridge' },
    ],
  },

  bridge: {
    key: 'bridge',
    text: 'Under the planks, something tink-tinks: a string of metal letters, tangled in reeds.',
    art: 'https://picsum.photos/seed/bridgewillow/960/540',
    caption: 'Messages caught where water slows.',
    options: [
      { label: 'Pull up the string', go: 'ending_charm' },
      { label: 'Follow the creek upstream', go: 'shed' },
      { label: 'Wait and watch', go: 'ending_watch' },
    ],
  },

  shed: {
    key: 'shed',
    text: 'The padlock hangs open. Inside: a workbench, a type tray of **old printing letters**, and a ledger titled *Borrowers*.',
    art: 'https://picsum.photos/seed/shedinside/960/540',
    caption: 'Tools for shaping words—and rumors.',
    options: [
      { label: 'Read the ledger', go: 'ledger' },
      { label: 'Pocket a few letters', go: 'ending_karma' },
      { label: 'Search the yard', go: 'yard' },
    ],
  },

  ledger: {
    key: 'ledger',
    text: 'Names with dates. Many owe **small favors**. Some entries are stamped PAID, others marked with a crescent.',
    art: 'https://picsum.photos/seed/ledger/960/540',
    caption: 'Debts written in tidy lines.',
    options: [
      { label: 'Visit someone who owes (house 7)', go: 'house7' },
      { label: 'Visit someone who paid (house 5)', go: 'house5' },
      { label: 'Confront Mrs. Harrow gently', go: 'ending_confess' },
    ],
  },

  yard: {
    key: 'yard',
    text: 'Footprints lead to a buried tin. Inside: letter stamps that spell **LISTEN**.',
    art: 'https://picsum.photos/seed/yardtin/960/540',
    caption: 'When the ground speaks, kneel.',
    options: [
      { label: 'Arrange stamps into a message', go: 'ending_listen' },
      { label: 'Return stamps to the tray', go: 'ledger' },
    ],
  },

  house5: {
    key: 'house5',
    text: 'A teenager shrugs. "We paid our favor. He fixed the boardwalk lights. But letters still came."',
    art: 'https://picsum.photos/seed/house5/960/540',
    caption: 'Light fixed, shadows remain.',
    options: [
      { label: 'Check the boardwalk lights', go: 'ending_lights' },
      { label: 'Ask who else got notes', go: 'board' },
    ],
  },

  house7: {
    key: 'house7',
    text: 'An empty porch. A parcel waits: **PLEASE DELIVER** to the shed.',
    art: 'https://picsum.photos/seed/house7/960/540',
    caption: 'Promises left on steps.',
    options: [
      { label: 'Open the parcel now', go: 'ending_open' },
      { label: 'Deliver it to the shed', go: 'ending_return' },
    ],
  },

  // ===== Endings (10 total) =====
  ending_mail: {
    key: 'ending_mail',
    text: 'The mailbox snaps. A raccoon rockets out. You retreat with dignity minus one scream. *(Ending: Mailbox Menace)*',
    art: 'https://picsum.photos/seed/mailbox/960/540',
    caption: 'Not every clue is human.',
    options: [],
  },
  ending_charm: {
    key: 'ending_charm',
    text: 'The string spells neighbors’ names. When untangled, the creek hushes—as if the message reached its reader. *(Ending: Water-Carried Words)*',
    art: 'https://picsum.photos/seed/charm/960/540',
    caption: 'Letters dry, meaning remains.',
    options: [],
  },
  ending_watch: {
    key: 'ending_watch',
    text: 'Hours pass. A heron dozes nearby. You’re rewarded with… peace. *(Ending: Patient Detective)*',
    art: 'https://picsum.photos/seed/watch/960/540',
    caption: 'Sometimes waiting is an answer.',
    options: [],
  },
  ending_karma: {
    key: 'ending_karma',
    text: 'You pocket letters. By morning, the whole lane receives **accusing notes** with your initials. *(Ending: Stamped Guilty)*',
    art: 'https://picsum.photos/seed/karma/960/540',
    caption: 'Words can point back.',
    options: [],
  },
  ending_confess: {
    key: 'ending_confess',
    text: 'You ask Mrs. Harrow about an old, unreturned favor. She nods, then leaves a pie on every porch at dawn. Notes stop. *(Ending: Paid in Kind)*',
    art: 'https://picsum.photos/seed/confess/960/540',
    caption: 'Apologies travel in baskets.',
    options: [],
  },
  ending_listen: {
    key: 'ending_listen',
    text: 'You stamp LISTEN on the ledger’s cover. The wind chime stops; the lane feels lighter. *(Ending: The Quiet Lane)*',
    art: 'https://picsum.photos/seed/listen/960/540',
    caption: 'Hearing is half of speaking.',
    options: [],
  },
  ending_lights: {
    key: 'ending_lights',
    text: 'The boardwalk flickers a message in Morse: **TAKE CARE OF EACH OTHER**. You document it—then the bulbs go normal. *(Ending: Blinks of Wisdom)*',
    art: 'https://picsum.photos/seed/lights/960/540',
    caption: 'Electricity with an opinion.',
    options: [],
  },
  ending_open: {
    key: 'ending_open',
    text: 'Inside the parcel: cookies and letter-stamps that form **THANK YOU**. You were the courier all along. *(Ending: Sweet Delivery)*',
    art: 'https://picsum.photos/seed/open/960/540',
    caption: 'Gratitude tastes like cinnamon.',
    options: [],
  },
  ending_return: {
    key: 'ending_return',
    text: 'You return the parcel. A small plaque appears on the shed: *Debts settled.* Notes cease. *(Ending: The Returned Favor)*',
    art: 'https://picsum.photos/seed/return/960/540',
    caption: 'Resolve can be quiet.',
    options: [],
  },
};

// ===== State & Elements =====
let activeKey = 'gate';
const storyEl = document.getElementById('story');
const imageEl = document.getElementById('storyImage');
const captionEl = document.getElementById('imageCaption');
const choicesEl = document.getElementById('choices');
const restartBtn = document.getElementById('restartBtn');

// ===== Boot & Render =====
function bootGame() {
  activeKey = 'gate';
  renderScene();
}

function renderScene() {
  const node = scenesMap[activeKey];
  if (!node) return;

  storyEl.innerHTML = liteMarkdown(node.text);
  imageEl.src = node.art;
  imageEl.alt = node.caption || 'Scene image';
  captionEl.textContent = node.caption || '';

  choicesEl.innerHTML = '';
  if (!node.options || node.options.length === 0) {
    finalize();
    return;
  }

  node.options.forEach((opt, i) => {
    const b = document.createElement('button');
    b.className = 'btn';
    b.type = 'button';
    b.textContent = opt.label;
    b.setAttribute('aria-label', `Choice ${i + 1}: ${opt.label}`);
    b.addEventListener('click', () => {
      activeKey = opt.go;
      renderScene();
    });
    choicesEl.appendChild(b);
  });
}

function finalize() {
  choicesEl.innerHTML = '';
  const again = document.createElement('button');
  again.className = 'btn small';
  again.type = 'button';
  again.textContent = 'Play again';
  again.addEventListener('click', bootGame);
  choicesEl.appendChild(again);
}

function liteMarkdown(md) {
  return md
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code>$1</code>');
}

restartBtn.addEventListener('click', bootGame);
window.addEventListener('DOMContentLoaded', bootGame);
