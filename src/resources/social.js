const social = {
  get() {
    // TODO: Retrieve from firebase
    return new Promise((resolve) => {
      resolve([
        {
          id: 'facebook',
          url: 'https://www.facebook.com/Daniisoft',
          icon: 'brands/facebook'
        },
        {
          id: 'twitter',
          url: 'https://twitter.com/Daniisoft',
          icon: 'brands/twitter'
        },
        {
          id: 'linkedin',
          url: 'https://es.linkedin.com/in/danielherzogcruz',
          icon: 'brands/linkedin'
        },
        {
          id: 'github',
          url: 'http://github.com/wikiti',
          icon: 'brands/github'
        }
      ]);
    });
  }
};

export default social;
