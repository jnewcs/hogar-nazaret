---
title: Crea un Fondo
layout: default
lang: es
lang_ref: create-fund
_schema: schemas/content_blocks_page_es.md
content_blocks:
  - _bookshop_name: simple_header
    title: Crea un Fondo
    title_alignment: centered
    background_color: white
    hide_date: true

  - _bookshop_name: split_form_content
    content_html: >-
      <p>Te ofrecemos la opción de crear un fondo de donación a beneficio del Hogar y dirigir los donativos del fondo al tipo de gastos que prefieras: ropa y alimentación, educación y recreación, servicios médicos, salud mental, o gastos generales.</p>

      <p><b>Empresas y Negocios</b>: Comerciantes y corporaciones pueden establecer un fondo a nombre de su empresa para el beneficio del Hogar haciendo una aportación monetaria inicial, y sucesivamente efectuar actividades de recaudación de fondos con sus empleados para aumentar el fondo.</p>

      <p><b>Familias e Individuos</b>: Personas y familias pueden crear un fondo en memoria de un ser querido o a nombre de su familia, para recibir donativos monetarios de familiares y amigos a beneficio del Hogar.</p>

      <p>Para más información sobre cómo establecer tu propio fondo a nombre del Hogar, llámanos al <a href="tel:7878316161">(787) 831-6161</a> o completa y envía la solicitud que aparece a continuación. Una vez nos envíes la solicitud en línea, recibirás una llamada telefónica de nuestra oficina lo más pronto posible.</p>
    form:
      title: Crea un Fondo Solicitud
      lang: es
      submit:
        text: Envíe
      form_url: "https://formspree.io/f/meqppqor"
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
        questions_and_comments:
          label: "Preguntas / Comentarios"
          presence: true
          required: true
---
