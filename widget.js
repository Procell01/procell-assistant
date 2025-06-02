
(function() {
  const button = document.createElement('div');
  button.innerHTML = '💬';
  button.style.position = 'fixed';
  button.style.bottom = '20px';
  button.style.right = '20px';
  button.style.background = '#4CAF50';
  button.style.color = '#fff';
  button.style.borderRadius = '50%';
  button.style.width = '60px';
  button.style.height = '60px';
  button.style.display = 'flex';
  button.style.alignItems = 'center';
  button.style.justifyContent = 'center';
  button.style.fontSize = '30px';
  button.style.cursor = 'pointer';
  button.style.zIndex = '9999';
  button.title = 'Chat con Procell';

  const iframe = document.createElement('iframe');
  iframe.src = 'https://chat.openai.com/g/g-xyz12345-procell-assistant';
  iframe.style.position = 'fixed';
  iframe.style.bottom = '90px';
  iframe.style.right = '20px';
  iframe.style.width = '400px';
  iframe.style.height = '600px';
  iframe.style.border = '1px solid #ccc';
  iframe.style.borderRadius = '10px';
  iframe.style.zIndex = '9999';
  iframe.style.display = 'none';

  button.onclick = () => {
    iframe.style.display = iframe.style.display === 'none' ? 'block' : 'none';
  };

  document.body.appendChild(button);
  document.body.appendChild(iframe);
})();
