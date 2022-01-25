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
    languages: {
      es: 'Spanish',
      en: 'English'
    },
    navbar: {
      home: 'Home',
      admin: 'Admin',
      logout: 'Logout'
    },
    admin: {
      title: 'Admin',
      confirm: 'Are you sure?',
      curriculum: {
        title: 'Curriculums',
        attachment_error:
          'There has been an error when uploading the attachment'
      },
      descriptions: {
        title: 'Descriptions',
        save: 'Save'
      },
      experience: {
        title: 'Experience',
        save: 'Save',
        new: 'New',
        delete: 'Delete'
      },
      projects: {
        title: 'Projects',
        name: 'Name',
        priority: 'Priority',
        date: 'Started date',
        short: 'Short description',
        description: 'Long description',
        url: 'Url',
        logo: 'Logo',
        select_type: 'Select a project type',
        select_resource_type: 'Select a resource type',
        select_attachment_type: 'Select an attachment type',
        attachment_error:
          'There has been an error when uploading the attachment',
        new: 'New',
        create: 'Create',
        save: 'Save',
        delete: 'Delete',
        result: {
          ok: 'Project was successfully saved',
          error: 'Something went wrong while updating the project'
        }
      },
      social: {
        title: 'Social',
        url: 'Url',
        icon: 'Icon',
        priority: 'Priority',
        error: 'Something went wrong while updating the resource',
        save: 'Save',
        delete: 'Delete',
        new: 'New'
      }
    },
    home: {
      header: {
        title: 'Daniel Herzog Cruz',
        subtitle: 'Software Engineer - Full stack developer - Game developer'
      },
      summary: {
        title: 'Summary',
        download: 'Download Curriculum Vitae'
      },
      projects: {
        title: 'Projects',
        more: 'Show more',
        info: 'More info',
        present: 'In progress',
        logo: 'Logo',
        attachment: 'Attachment',
        attachments: {
          youtube: 'YouTube',
          image: 'Image',
          none: 'None'
        },
        types: {
          website: 'Website',
          videogame_web: 'Web videogame',
          videogame_native: 'Native videogame',
          app_web: 'Web app',
          app_native: 'Native application',
          open_source: 'Open Source',
          exercises: 'Exercises and problems'
        },
        resources: {
          website: 'Website',
          play_store: 'PlayStore',
          repository: 'Repository'
        }
      },
      contact: {
        title: 'Contact form',
        name: 'Name (*)',
        contact: 'Email or phone (*)',
        message: 'Message (*)',
        submit: 'Submit',
        success: 'Your message has been sent successfully.',
        error:
          'There was an error when sending your message. Please try again later.'
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
            value: 'info@danielherzog.es'
          }
        },
        tools: `
          Made with &#9829; with <a href="https://vuejs.org/" target="_blank">Vue.js</a> and
          <a href="https://firebase.google.com/" target="_blank">Firebase</a>, available on
          <a href="https://github.com/wikiti/portfolio" target="_blank">GitHub</a>
        `
      }
    },
    login: {
      title: 'Sign in',
      email: 'Email',
      password: 'Password',
      submit: 'Sign in',
      signup: "I don't have a user account"
    },
    signup: {
      title: 'Sign up',
      email: 'Email',
      password: 'Password',
      submit: 'Sign up',
      signup: 'I already have a user account'
    }
  },
  es: {
    languages: {
      es: 'Español',
      en: 'Inglés'
    },
    navbar: {
      home: 'Inicio',
      admin: 'Admin',
      logout: 'Salir'
    },
    admin: {
      title: 'Admin',
      confirm: '¿Estás seguro?',
      curriculum: {
        title: 'Curriculums',
        attachment_error: 'Ha ocurrido un error al subir el adjunto'
      },
      descriptions: {
        title: 'Descripciones',
        save: 'Guardar'
      },
      experience: {
        title: 'Experiencia',
        save: 'Guardar',
        new: 'Nuevo',
        delete: 'Borrar'
      },
      projects: {
        title: 'Proyectos',
        name: 'Nombre',
        priority: 'Prioridad',
        short: 'Descripción corta',
        description: 'Descripción larga',
        url: 'Url',
        logo: 'Logo',
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
      },
      social: {
        title: 'Social',
        error: 'Ocurrió un error al actualizar el recurso',
        url: 'Url',
        icon: 'Icono',
        priority: 'Prioridad',
        save: 'Guardar',
        delete: 'Borrar',
        new: 'Nuevo'
      }
    },
    home: {
      header: {
        title: 'Daniel Herzog Cruz',
        subtitle:
          'Ingeniero informático - Desarrollador web - Programador de videojuegos'
      },
      summary: {
        title: 'Resumen',
        download: 'Descargar Currículum Vitae'
      },
      projects: {
        title: 'Proyectos',
        more: 'Mostrar más',
        info: 'Más info.',
        present: 'En curso',
        logo: 'Logotipo',
        attachment: 'Adjunto',
        attachments: {
          youtube: 'YouTube',
          image: 'Imagen',
          none: 'Ninguno'
        },
        types: {
          website: 'Página web',
          videogame_web: 'Videojuego web',
          videogame_native: 'Videojuego nativo',
          app_web: 'Aplicación web',
          app_native: 'Aplicación nativa',
          open_source: 'Software libre',
          exercises: 'Ejercicios y problemas'
        },
        resources: {
          website: 'Sitio web',
          play_store: 'PlayStore',
          repository: 'Repositorio'
        }
      },
      contact: {
        title: 'Formulario de contacto',
        name: 'Nombre (*)',
        contact: 'Correo o teléfono (*)',
        message: 'Mensaje (*)',
        submit: 'Enviar',
        success: 'El mensaje se ha enviado correctamente.',
        error:
          'Ha ocurrido un error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.'
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
            value: 'info@danielherzog.es'
          }
        },
        tools: `
          Hecho con &#9829; en <a href="https://vuejs.org/" target="_blank">Vue.js</a> y
          <a href="https://firebase.google.com/" target="_blank">Firebase</a>, disponible en
          <a href="https://github.com/wikiti/portfolio" target="_blank">GitHub</a>
        `
      }
    },
    login: {
      title: 'Inicio de sesión',
      email: 'Correo',
      password: 'Contraseña',
      submit: 'Iniciar sesión',
      signup: 'No tengo una cuenta de usuario'
    },
    signup: {
      title: 'Registro',
      email: 'Correo',
      password: 'Contraseña',
      submit: 'Registrarse',
      login: 'Ya tengo un usuario'
    }
  }
};

const availableLocales = Object.keys(messages);
let locale = (navigator.language || navigator.userLanguage).split(/[-_]/)[0];

if (!availableLocales.includes(locale)) {
  [locale] = availableLocales;
}

const i18n = new VueI18n({ locale, dateTimeFormats, messages });
// i18n.availableLocales = availableLocales; // Custom property

export default i18n;
