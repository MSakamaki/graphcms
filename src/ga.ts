import { environment } from './environments/environment';



export function gaSetting() {
  const head = document.getElementsByTagName('head')[0];

  const main = document.createElement('script');
  main.async = true;
  main.src = 'https://www.googletagmanager.com/gtag/js?id=' + environment.ga_tracking_id;

  const script = document.createElement('script');
  script.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());

  gtag('config', '${environment.ga_tracking_id}');
  `;

  head.insertBefore(main, head.firstChild);
  head.insertBefore(script, head.firstChild);
}
