export const valid = () => {
  let body = document.querySelector('body');
  body.addEventListener('input', (e) => {
    let target = e.target;
    if (target.classList.contains('val')) {
      target.value = target.value.replace(/[^0-9]/g, '');
    }
  });
}