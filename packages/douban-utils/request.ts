const baseUrl = 'https://api.douban.com/v2';

export default function(url: string, methods?: string) {
  return fetch(baseUrl + url)
    .then(res => {
      return res.json();
    })
    .catch(exp => {
      console.warn(exp);
    });
}
