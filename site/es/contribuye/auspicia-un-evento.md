---
title: Auspicia un Evento
layout: default
lang: es
lang_ref: sponsor-event
_schema: schemas/content_blocks_page_es.md
content_blocks:
  - _bookshop_name: side_by_side_header
    title: Auspicia un Evento
    hide_date: true
    image: /uploads/milestones/hogar-walk-a-thon.jpg
    image_style: cover

  - _bookshop_name: split_form_content
    content_html: >-
      <p>El Hogar te exhorta a unirte a nuestro grupo de colaboradores y auspiciadores, los cuales hacen posible la operación del Hogar. Nuestros auspiciadores incluyen empresas y corporaciones privadas, agencias de gobierno, fundaciones, comerciantes, organizaciones cívicas y familias e individuos de la comunidad en general. Existen muchas maneras de ayudar al Hogar a través del año, ya sea auspiciando nuestros eventos especiales (La Gran Bicicletada, Casa Abierta, caminatas/carreras 5K), nuestros gastos operativos (costo de nanas, gasolina, electricidad), o proyectos de capital.</p>

      <p>Para más información sobre cómo ser auspiciador del Hogar, llámanos al <a href="tel:7878316161">(787) 831-6161</a> o completa y envía la solicitud que aparece a continuación. Una vez nos envíes la solicitud en línea, recibirás una llamada telefónica de nuestra oficina lo más pronto posible.</p>
    form:
      title: Auspicia un Evento Solicitud
      lang: es
      submit:
        text: Envíe
      form_url: "https://formspree.io/f/xoqppqvp"
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
        sponsorship_type:
          label: "Tipo de Auspicio"
          types:
            - Evento
            - Costos Operativos
            - Proyectos de Capital
          presence: true
          required: true
        description:
          label: "Descripción"
          presence: true
          required: false
---
