document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.querySelector('.mini-dialog');
  if (!dialog) return;
  const header = dialog.querySelector('.mini-header');
  const close = header.querySelector('[data-action="close"]');
  const controls = document.createElement('div'); controls.className = 'mini-window-actions';
  const expand = document.createElement('button'); expand.type = 'button'; expand.className = 'mini-expand';
  const centre = document.createElement('button'); centre.type = 'button'; centre.className = 'mini-centre'; centre.textContent = '⌖';
  controls.append(centre, expand, close); header.append(controls);
  let position;
  let dragging;
  const finePointer = window.matchMedia('(pointer: fine)');
  const canDrag = () => finePointer.matches && window.innerWidth >= 780 && !dialog.classList.contains('is-maximized');
  const t = key => window.portfolioI18n.t(key);
  function labels() {
    const full = dialog.classList.contains('is-maximized');
    expand.textContent = full ? '❐' : '□';
    expand.setAttribute('aria-label', t(full ? 'Restore window' : 'Expand window'));
    expand.title = t(full ? 'Restore window' : 'Expand window');
    expand.setAttribute('aria-pressed', String(full));
    centre.setAttribute('aria-label', t('Centre window')); centre.title = t('Centre window');
    centre.hidden = !position || full;
    header.tabIndex = canDrag() ? 0 : -1;
    if (canDrag()) header.setAttribute('aria-label', t('Drag this window or use arrow keys to move it'));
    else header.removeAttribute('aria-label');
  }
  function clearPosition() {
    position = null;
    dialog.classList.remove('is-positioned', 'is-dragging');
    dialog.style.removeProperty('--window-left'); dialog.style.removeProperty('--window-top');
    labels();
  }
  function move(left, top) {
    const box = dialog.getBoundingClientRect();
    position = {
      left: Math.max(10, Math.min(left, Math.max(10, window.innerWidth - box.width - 10))),
      top: Math.max(10, Math.min(top, Math.max(10, window.innerHeight - box.height - 10))),
    };
    dialog.classList.add('is-positioned');
    dialog.style.setProperty('--window-left', `${position.left}px`);
    dialog.style.setProperty('--window-top', `${position.top}px`);
    centre.hidden = false;
  }
  expand.addEventListener('click', () => {
    dialog.classList.toggle('is-maximized');
    clearPosition();
    labels();
  });
  centre.addEventListener('click', clearPosition);
  header.addEventListener('pointerdown', event => {
    if (event.button !== 0 || !dialog.open || !canDrag() || event.target.closest('button, a, input, select')) return;
    const box = dialog.getBoundingClientRect();
    dragging = { pointer: event.pointerId, dx: event.clientX - box.left, dy: event.clientY - box.top };
    dialog.classList.add('is-dragging'); header.focus({ preventScroll: true });
    header.setPointerCapture?.(event.pointerId);
    event.preventDefault();
  });
  header.addEventListener('pointermove', event => {
    if (!dragging || event.pointerId !== dragging.pointer) return;
    move(event.clientX - dragging.dx, event.clientY - dragging.dy);
  });
  const stopDrag = () => { dragging = null; dialog.classList.remove('is-dragging'); };
  header.addEventListener('pointerup', stopDrag);
  header.addEventListener('pointercancel', stopDrag);
  header.addEventListener('lostpointercapture', stopDrag);
  header.addEventListener('keydown', event => {
    if (event.target !== header || !canDrag() || !dialog.open) return;
    const step = event.shiftKey ? 40 : 20;
    const directions = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] };
    if (!directions[event.key]) return;
    event.preventDefault();
    const box = dialog.getBoundingClientRect();
    move(box.left + directions[event.key][0], box.top + directions[event.key][1]);
  });
  dialog.addEventListener('close', () => { stopDrag(); dialog.classList.remove('is-maximized'); clearPosition(); });
  window.addEventListener('resize', () => { stopDrag(); if (position && canDrag()) move(position.left, position.top); else clearPosition(); labels(); });
  document.addEventListener('portfolio:language', labels);
  finePointer.addEventListener?.('change', labels);
  labels();
});
