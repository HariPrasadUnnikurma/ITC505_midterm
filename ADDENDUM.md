# Addendum: Process, Creative Choices, and Debugging Notes


## Concept & Planning
- **Theme**: "Starship at the Crossroads" — high‑stakes choices around knowledge, power, and ethics.
- **Flow Design**: Sketched a node graph with one start, several mid‑nodes, and **10 distinct endings**. Ensured no dead links.


## Implementation Choices
- **Data‑driven story**: Every stage is a JSON node with `text`, `choices`, `image`, and `caption`. This made it easy to add/rename branches.
- **DOM updates**: A single `updatePage()` re-renders story text, image, and dynamic buttons with event listeners.
- **Accessibility**: `aria-live` regions announce updates; buttons have descriptive `aria-label`s.
- **Images**: Used `picsum.photos` seeded URLs to guarantee unique images for each ending without hosting assets.
- **Styling**: Clean, responsive card layout; readable typography; focus on clarity.


## Challenges & How I Solved Them
- **Ending detection**: Chose the simple rule—no `choices` means an ending. `endGame()` cleans up and injects a replay button.
- **State handling**: Kept state as `currentId` keyed into `storyNodes` to avoid complex routing.
- **Content sanitization**: Implemented a tiny Markdown-to-HTML converter limited to bold, italics, and code to keep text expressive while safe.


## Testing Methodology
- Click‑through tested all branches to verify **every ending is reachable** and **each ending image is distinct**.
- Verified the **footer script** displays the correct "Last updated" date/time.


## What I\'d Improve Next
- Persist progress with `localStorage`.
- Add a mini‑map to visualize branches.
- Add transition animations and sound.


## Submission Checklist
- [ ] Hosted at `http://<your domain>/ITC505/mid-term-project/index.html`
- [ ] Screenshot taken of the working page
- [ ] Footer snippet included (see `index.html`)
- [ ] Uploaded HTML source code