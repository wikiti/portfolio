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
    admin: {
      title: 'Admin',
      confirm: 'Are you sure?',
      curriculum: {
        title: 'Curriculums',
        attachment_error: 'There has been an error when uploading the attachment'
      },
      projects: {
        title: 'Projects',
        select_type: 'Select a project type',
        select_resource_type: 'Select a resource type',
        select_attachment_type: 'Select an attachment type',
        attachment_error: 'There has been an error when uploading the attachment',
        new: 'New',
        create: 'Create',
        save: 'Save',
        delete: 'Delete',
        result: {
          ok: 'Project was successfully saved',
          error: 'Something went wrong while updating the project'
        }
      }
    },
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
      logo: 'Logo',
      attachment: 'Attachment',
      attachments: {
        youtube: 'YouTube',
        image: 'Image'
      },
      types: {
        website: 'Website',
        videogame_web: 'Web videogame',
        videogame_native: 'Native videogame',
        app_web: 'Web app',
        app_native: 'Native application'
      },
      resources: {
        website: 'Website',
        play_store: 'PlayStore',
        repository: 'Repository'
      }
    },
    contact: {
      title: 'Contact',
      name: 'Name (*)',
      contact: 'Email or phone (*)',
      message: 'Message (*)',
      submit: 'Submit',
      success: 'Your message has been sent successfully.',
      error: 'There was an error when sending your message. Please try again later.'
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
    admin: {
      title: 'Admin',
      confirm: '¿Estás seguro?',
      curriculum: {
        title: 'Curriculums',
        attachment_error: 'Ha ocurrido un error al subir el adjunto'
      },
      projects: {
        title: 'Proyectos',
        select_type: 'Seleccione un tipo de proyecto',
        select_resource_type: 'Seleccione un tipo de recurso',
        select_attachment_type: 'Seleccione un tipo de adjunto',
        attachment_error: 'Ha ocurrido un error al subir el adjunto',
        new: 'Nuevo',
        create: 'Crear',
        save: 'Guardar',
        delete: 'Borrar',
        result: {
          ok: 'El proyecto se guardó correctamente',
          error: 'Ocurrió un error al actualizar el proyecto'
        }
      }
    },
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
      logo: 'Logotipo',
      attachment: 'Adjunto',
      attachments: {
        youtube: 'YouTube',
        image: 'Imagen'
      },
      types: {
        website: 'Página web',
        videogame_web: 'Videojuego web',
        videogame_native: 'Videojuego nativo',
        app_web: 'Aplicación web',
        app_native: 'Aplicación nativa'
      },
      resources: {
        website: 'Sitio web',
        play_store: 'PlayStore',
        repository: 'Repositorio'
      }
    },
    contact: {
      title: 'Contacto',
      name: 'Nombre (*)',
      contact: 'Correo o teléfono (*)',
      message: 'Mensaje (*)',
      submit: 'Enviar',
      success: 'El mensaje se ha enviado correctamente.',
      error: 'Ha ocurrido un error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.'
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

const availableLocales = Object.keys(messages);
let locale = (navigator.language || navigator.userLanguage).split(/[-_]/)[0];

if (!availableLocales.includes(locale)) {
  locale = 'en';
}

const i18n = new VueI18n({ locale, dateTimeFormats, messages });
i18n.availableLocales = availableLocales; // Custom property

export default i18n;
