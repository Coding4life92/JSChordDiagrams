const canvas = document.getElementById('chordCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 350;
canvas.height = 300;

const drawCircle = (x, y, radius, text) => {
  ctx.beginPath();

  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.stroke(); // Draw the circle

  ctx.fillStyle = 'black'; // Set text color
  ctx.textAlign = 'center'; // Center text horizontally
  ctx.textBaseline = 'middle'; // Center text vertically
  ctx.font = '14px Arial'; // Set font style and size
  ctx.fillText(text, x, y); // Render text inside the circle
}

const configureChordDiagram = () => {
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'black';

   // Draw Vertical Lines
   for (let i = 0; i < 6; i++) {
    ctx.rect(i * 70, 0, 70, 300);
    ctx.stroke();
  }

  // Draw Horizontal Lines
  for (let i = 1; i < 6; i++) {
    ctx.rect(0, i * 50, 350, 100);
    ctx.stroke();
  }
}

const chordPositions = {
  Cmaj: [
    { x: 175, y: 25, text: 'G' },
    { x: 40, y: 75, text: 'C' },
    { x: 100, y: 175, text: 'E' },
    { x: 180, y: 225, text: 'C' }
  ],
  Dmaj: [
    { x: 100, y: 25, text: 'F#' },
    { x: 180, y: 75, text: 'D' },
    { x: 100, y: 125, text: 'A' },
  ],
  Emaj: [
    { x: 40, y: 125, text: 'G#' },
    { x: 100, y: 175, text: 'E' },
    { x: 100, y: 225, text: 'B' },
  ],
  Fmaj: [
    { x: 40, y: 25, text: 'F' },
    { x: 40, y: 75, text: 'C' },
    { x: 100, y: 125, text: 'A' },
    { x: 180, y: 175, text: 'F' },
    { x: 180, y: 225, text: 'C' },
    { x: 40, y: 275, text: 'F' },
  ],
  Gmaj: [
    { x: 180, y: 25, text: 'G' },
    { x: 180, y: 75, text: 'D' },
    { x: 100, y: 225, text: 'B' },
    { x: 180, y: 275, text: 'G' },
  ],
  Amaj: [
    { x: 100, y: 75, text: 'C#' },
    { x: 100, y: 125, text: 'A' },
    { x: 100, y: 175, text: 'E' },
  ],
  Bmaj: [
    { x: 180, y: 75, text: 'D' },
    { x: 180, y: 125, text: 'B' },
    { x: 180, y: 175, text: 'F#' },
    { x: 100, y: 225, text: 'B' },
  ],
}

const drawChord = (chordName) => {
  const chordTitle = document.getElementById('chordTitle');

  const chord = chordPositions[chordName];
  chord.forEach(({ x, y, text }) => {
    drawCircle(x, y, 12, text);
  });

  chordTitle.textContent = chordName;
}

const handleBtnClick = () => {
  const btns = document.querySelectorAll('.btn');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {

      btns.forEach((button) => {
        button.classList.remove('active');
      });

      btn.classList.add('active');
      // Clear the entire canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      configureChordDiagram();

      switch (btn.id) {
        case 'cMajorBtn':
          drawChord('Cmaj');
          break;
        case 'dMajorBtn':
          drawChord('Dmaj');
          break;
        case 'eMajorBtn':
          drawChord('Emaj');
          break;
        case 'fMajorBtn':
          drawChord('Fmaj');
          break;
        case 'gMajorBtn':
          drawChord('Gmaj');
          break;
        case 'aMajorBtn':
          drawChord('Amaj');
          break;
        case 'bMajorBtn':
          drawChord('Bmaj');
          break;
      }
    });
  });
}

handleBtnClick();