const projects = {
  get() {
    // TODO: Retrieve from firebase
    return new Promise((resolve) => {
      resolve([
        {
          id: 'chatty',
          name: 'ICHEALTH - Chatty',
          short: {
            es: 'Videojuego serio para mejorar la literatura digital en salud.',
            en: 'Serious game to improve the digital health literacy.'
          },
          description: {
            es: '<p><strong>Chatty</strong> es un juego serio para el proyecto ICHealth que busca mejorar la literatura digital en salud de los ciudadanos europeos.</p>',
            en: '<p><strong>Chatty</strong> is a serious game for the ICHealth project used to improve the digital health literacy of European citizens.</p>'
          },
          date: new Date(),
          type: 'videogame_web',
          resource: {
            type: 'website',
            url: 'https://ichealth-chatty.firebaseapp.com'
          }
        }
        // TODO: Stub data
      ]);
    });
  }
};

export default projects;
