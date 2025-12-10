---
title: Visítanos con tu Grupo
layout: default
lang: es
lang_ref: group-visit
content_blocks:
  - _bookshop_name: simple_header
    title: Visítanos con tu Grupo
    title_alignment: centered
    background_color: white
    hide_date: true

  - _bookshop_name: split_form_content
    content_html: >-
      <p>El Hogar recibe visitas de grupos cívicos, corporativos, universitarios y religiosos. Le damos la bienvenida a tu grupo para que vengan a dar amor a los niños y a contribuir su tiempo, destrezas, donativos y celebraciones.</p>

      <p>Para más información sobre cómo programar la visita de tu grupo al Hogar, llámanos al <a href="tel:7878316161">(787) 831-6161</a> o completa y envía la solicitud que aparece a continuación. Una vez nos envíes la solicitud en línea, recibirás una llamada telefónica de nuestra oficina lo más pronto posible.</p>
    form:
      title: Visítanos con tu Grupo Solicitud
      lang: es
      submit:
        text: Envíe
      form_url: "https://formspree.io/f/mgeppevr"
      fields:
        name:
          label: "Nombre y Apellido"
          presence: true
          required: true
        email:
          label: "Email"
          presence: true
          required: true
        phone:
          label: "Teléfono"
          presence: true
          required: true
        visit_dates:
          label:
            first_preference: "Primera Opción: Fecha Deseada para la Visita"
            second_preference: "Segunda Opción: Fecha Deseada para la Visita"
          presence: true
          required: true
        questions_and_comments:
          label: "Questions / Comments"
          presence: true
          required: true
---
