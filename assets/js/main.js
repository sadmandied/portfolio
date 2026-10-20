/**
 * Sadman Fahmid Raj - Portfolio Interactions
 * Faithfully inspired by jackiezhang.co.za
 * Includes:
 * 1. Web Audio API Acoustic Melody Synthesizer (Take Me Home, Country Roads)
 * 2. Draggable & Tiltable Polaroids on the Green Cutting Mat
 * 3. Interactive Checklist Toggle
 * 4. Connect Postcard Modal & Copy Email Toast
 * 5. Tactile audio feedback & smooth navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  initAudioPlayer();
  initPolaroidDrag();
  initChecklist();
  initConnectModal();
  initTactileInteractions();
});

/* ==========================================================================
   1. Country Roads Acoustic Synth Player (Web Audio API)
   ========================================================================== */
function initAudioPlayer() {
  const playBtn = document.getElementById('playPauseBtn');
  const viz = document.getElementById('playerVisualizer');
  if (!playBtn) return;

  let audioCtx = null;
  let isPlaying = false;
  let timerId = null;
  let noteIndex = 0;

  // "Take Me Home, Country Roads" acoustic melody note frequencies & durations
  // Country roads, take me home, to the place I belong...
  // Notes approx in A major (A3, C#4, D4, E4, F#4, G#4, A4)
  const melodyNotes = [
    { freq: 440.00, dur: 0.6 }, // A4
    { freq: 440.00, dur: 0.4 }, // A4
    { freq: 440.00, dur: 0.5 }, // A4
    { freq: 392.00, dur: 0.6 }, // G4
    { freq: 329.63, dur: 0.8 }, // E4
    { freq: 370.00, dur: 0.5 }, // F#4
    { freq: 440.00, dur: 0.8 }, // A4
    { freq: 493.88, dur: 0.6 }, // B4
    { freq: 440.00, dur: 0.6 }, // A4
    { freq: 370.00, dur: 0.5 }, // F#4
    { freq: 329.63, dur: 0.9 }, // E4
    { freq: 293.66, dur: 0.6 }, // D4
    { freq: 329.63, dur: 0.6 }, // E4
    { freq: 370.00, dur: 0.5 }, // F#4
    { freq: 440.00, dur: 1.2 }, // A4
    { freq: 0,      dur: 0.5 }, // Pause
  ];

  function playNote(freq, duration) {
    if (!audioCtx || freq <= 0) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      // Warm warm acoustic triangle / sine hybrid
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      // Acoustic envelope: gentle pluck attack, warm ring, soft decay
      gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.2, audioCtx.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration * 0.95);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      console.warn("Audio play note error", e);
    }
  }

  function playNextMelodyStep() {
    if (!isPlaying) return;
    const item = melodyNotes[noteIndex];
    playNote(item.freq, item.dur);
    noteIndex = (noteIndex + 1) % melodyNotes.length;
    timerId = setTimeout(playNextMelodyStep, item.dur * 1000);
  }

  playBtn.addEventListener('click', () => {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (!isPlaying) {
      isPlaying = true;
      playBtn.innerHTML = '⏸';
      playBtn.setAttribute('aria-label', 'Pause Country Roads');
      if (viz) viz.classList.remove('viz-paused');
      playNextMelodyStep();
    } else {
      isPlaying = false;
      playBtn.innerHTML = '▶';
      playBtn.setAttribute('aria-label', 'Play Country Roads');
      if (viz) viz.classList.add('viz-paused');
      clearTimeout(timerId);
    }
  });
}

/* ==========================================================================
   2. Draggable & Tiltable Polaroids on the Green Cutting Mat
   ========================================================================== */
function initPolaroidDrag() {
  const polaroids = document.querySelectorAll('.polaroid-frame');
  const mat = document.querySelector('.cutting-mat-container');
  if (!polaroids.length || !mat) return;

  let highestZ = 20;

  polaroids.forEach((card, idx) => {
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let currentY = 0;
    let origTransform = card.getAttribute('data-rot') || (idx % 2 === 0 ? '-3deg' : '3deg');

    card.addEventListener('mousedown', dragStart);
    card.addEventListener('touchstart', dragStart, { passive: true });

    function dragStart(e) {
      isDragging = true;
      highestZ++;
      card.style.zIndex = highestZ;

      const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
      const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
      
      startX = clientX - currentX;
      startY = clientY - currentY;

      card.style.transition = 'none';
      card.style.transform = `translate(${currentX}px, ${currentY}px) scale(1.08) rotate(0deg)`;

      document.addEventListener('mousemove', dragMove);
      document.addEventListener('touchmove', dragMove, { passive: false });
      document.addEventListener('mouseup', dragEnd);
      document.addEventListener('touchend', dragEnd);
    }

    function dragMove(e) {
      if (!isDragging) return;
      if (e.type.includes('touch')) e.preventDefault();

      const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
      const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;

      currentX = clientX - startX;
      currentY = clientY - startY;

      card.style.transform = `translate(${currentX}px, ${currentY}px) scale(1.08) rotate(0deg)`;
    }

    function dragEnd() {
      if (!isDragging) return;
      isDragging = false;

      card.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease';
      // Return to slight angle with updated position
      card.style.transform = `translate(${currentX}px, ${currentY}px) scale(1) rotate(${origTransform})`;

      document.removeEventListener('mousemove', dragMove);
      document.removeEventListener('touchmove', dragMove);
      document.removeEventListener('mouseup', dragEnd);
      document.removeEventListener('touchend', dragEnd);
    }
  });
}

/* ==========================================================================
   3. Interactive Checklist
   ========================================================================== */
function initChecklist() {
  const items = document.querySelectorAll('.checklist-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const box = item.querySelector('.custom-checkbox');
      if (box) {
        box.classList.toggle('checked');
        if (box.classList.contains('checked')) {
          box.innerHTML = '✓';
        } else {
          box.innerHTML = '';
        }
      }
    });
  });
}

/* ==========================================================================
   4. Connect Postcard Modal & Copy Email Toast
   ========================================================================== */
function initConnectModal() {
  const openBtns = document.querySelectorAll('.btn-connect, .open-connect-modal');
  const modalOverlay = document.getElementById('connectModal');
  const closeBtn = document.getElementById('closeModalBtn');
  const copyBtn = document.getElementById('copyEmailBtn');
  const toast = document.getElementById('copyToast');

  if (!modalOverlay) return;

  function openModal(e) {
    if (e) e.preventDefault();
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  openBtns.forEach(btn => btn.addEventListener('click', openModal));
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  if (copyBtn && toast) {
    copyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'sadmanfahmidraj69@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 2500);
      });
    });
  }
}

/* ==========================================================================
   5. Tactile UI Interactions
   ========================================================================== */
function initTactileInteractions() {
  // Add subtle sound / animation on sticker clicks
  const stickers = document.querySelectorAll('.sticker-img');
  stickers.forEach(sticker => {
    sticker.addEventListener('click', () => {
      sticker.style.transform = 'scale(1.25) rotate(-12deg)';
      setTimeout(() => {
        sticker.style.transform = '';
      }, 250);
    });
  });
}
