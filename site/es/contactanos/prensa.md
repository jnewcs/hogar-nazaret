---
title: Prensa
layout: default
lang: es
lang_ref: press
_schema: "schemas/content_blocks_page_es.md"
content_blocks:
  - _bookshop_name: simple_header
    title: Prensa
    title_alignment: centered
    background_color: white

  - _bookshop_name: split_form_content
    content_html: >-
      <p>Si eres miembro de la prensa, te exhortamos a visitar el Hogar para conocer nuestras facilidades, nuestra historia y nuestro equipo de trabajo.</p>

      <p>Para programar tu visita o si deseas recibir un paquete con información sobre el Hogar, completa y envía la solicitud que se encuentra a continuación.</p>
    form:
      lang: es
      submit:
        text: Envíe
      form_url: "/es/form_success"
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
        company:
          label: "Compañía"
          presence: true
          required: true
        questions_and_comments:
          label: "Preguntas / Comentarios"
          presence: true
          required: true
---
