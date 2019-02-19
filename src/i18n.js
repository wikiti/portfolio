import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const dateTimeFormats = {
  en: {
    short: {
      year: 'numeric',
      month: 'short'
    }
  },
  es: {
    short: {
      year: 'numeric',
      month: 'short'
    }
  }
};

const messages = {
  en: {
    title: 'Daniel Herzog Cruz',
    subtitle: 'Software Engineer - Full stack developer - Game developer',
    summary: {
      title: 'Summary',
      left:
        'Enthusiastic, autonomous and responsible. A software engineer whose passion is to be able to work on projects that go beyond his horizons, allowing him to gain experience in the field of computer engineering and programming.',
      right:
        "Whether it's about programming business applications or personal projects, the goal will always be to try to create the product with the highest quality, providing a comfortable experience to the end-user.",
      download: 'Download Curriculum Vitae'
    },
    projects: {
      title: 'Projects',
      more: 'Show more',
      info: 'More info',
      loading: 'Loading projects',
      types: {
        videogame_web: 'Web videogame'
      },
      resources: {
        website: 'Website'
      }
    },
    contact: {
      title: 'Contact',
      name: 'Name',
      contact: 'Email or phone',
      message: 'Message',
      submit: 'Submit'
    },
    footer: {
      location: {
        title: 'Address',
        body: '38190 Santa Cruz de Tenerife'
      },
      social: {
        title: 'Social'
      },
      contact: {
        title: 'Contact',
        email: {
          label: 'Email:',
          value: 'info@danielherzog.es'
        }
      }
    }
  },
  es: {
    title: 'Daniel Herzog Cruz',
    subtitle:
      'Ingeniero informático - Desarrollador web - Programador de videojuegos',
    summary: {
      title: 'Resumen',
      left:
        'Entusiasta, autónomo y responsable. Un ingeniero informático cuya pasión es poder trabajar en proyectos que vayan más allá de sus horizontes, permitiendo así ganar experiencia en el campo de la ingeniería informática y la programación.',
      right:
        'Ya sea programando aplicaciones comerciales o proyectos personales, el objetivo será siempre tratar de crear el producto con la mayor calidad posible, proporcionando al usuario final una experiencia cómoda.',
      download: 'Descargar Currículum Vitae'
    },
    projects: {
      title: 'Proyectos',
      more: 'Mostrar más',
      info: 'Más info.',
      loading: 'Cargando proyectos',
      types: {
        videogame_web: 'Videojuego web'
      },
      resources: {
        website: 'Sitio web'
      }
    },
    contact: {
      title: 'Contacto',
      name: 'Nombre',
      contact: 'Correo o teléfono',
      message: 'Mensaje',
      submit: 'Enviar'
    },
    footer: {
      location: {
        title: 'Localidad',
        body: '38190 Santa Cruz de Tenerife'
      },
      social: {
        title: 'Redes sociales'
      },
      contact: {
        title: 'Contacto',
        email: {
          label: 'Correo:',
          value: 'info@danielherzog.es'
        }
      }
    }
  }
};

export default new VueI18n({
  locale: 'es',
  dateTimeFormats,
  messages
});
