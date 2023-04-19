---
title: Inicio
layout: default
lang: es
lang_ref: home-page
_schema: "schemas/content_blocks_page_es.md"
content_blocks:
  - _bookshop_name: carousel
    items:
      - title: "¡BIENVENIDOS AL HOGAR ALBERGUE JESÚS DE NAZARET!"
        creation_date: 2023-04-10T12:00:00.000+00:00
        content:
          content_html: >-
            <p>Nuestra misión es ofrecer hogar seguro, atención personal, alimentación, transportación, servicios médicos, educación, recreación, ayuda social y psicológica a niños y niñas víctimas de maltrato. Ante todo, en nuestro Hogar los niños reciben mucho AMOR.</p>
        hide_from_carousel: false
        always_show: true
        image: "/uploads/carousel_highlights/kids_circle.jpg"
        call_to_action:
          text: The Hogar
          opens_donate_modal: false
          url: "/en/about"
      - title: "APADRINA A UN NIÑO O NIÑA DEL HOGAR"
        creation_date: 2023-04-16T12:00:00.000+00:00
        content:
          content_html: >-
            <p>Nuestros niños se merecen un hogar, tener alimentos, ropa, ir a la escuela, jugar, recibir cuidados de salud y mucho amor. Con tu donativo mensual contribuyes a sanar las heridas de nuestros niños que han sido víctimas de maltrato. ¡Únete a nuestra familia de Padrinos!</p>
        hide_from_carousel: false
        always_show: true
        image: "/uploads/carousel_highlights/two_girls.jpg"
        image_custom_dimensions: true
        image_height: 200
        image_width: 275
        call_to_action:
          text: Donate
          opens_donate_modal: true

  - _bookshop_name: banner
    title: ¡Oportunidad de Empleo!
    content:
      show_container: false
      content_html: >-
        <p>El Hogar Albergue para Niños Jesús de Nazaret te invita a formar parte de su equipo para brindar cuido y amor a niños en la plaza de Cuidador(a) de niños</p>
    background: "pattern-dots-sm"
    banner_background: white
    call_to_action: 
      text: "Para obtener más detalles, leer aquí"
      url: "/uploads/jobs/2022/caregiver_posting.jpg"

  - _bookshop_name: simple_header
    title: ¡El Hogar te Necesita!
    title_alignment: centered
    background_color: white
    show_padding_top: true
    show_padding_bottom: false

  - _bookshop_name: content
    show_container: true
    content_html: >-
      <p>La operación del Hogar es posible en gran medida gracias a subvenciones de instituciones benéficas como Fondos Unidos y a donativos económicos de entidades gubernamentales, organizaciones cívicas y empresas privadas. No obstante, el apoyo más importante es el apoyo de la COMUNIDAD, personas como tú que se comprometen a ayudarnos a continuar nuestra labor y hacer la diferencia en la vida de nuestros niños.</p>

  - _bookshop_name: tiles
    tiles:
      - has_children: true
        children:
          - title: Dona tu Tiempo
            content:
              show_container: false
              content_html: >-
                <p>Ofrecemos muchas maneras de involucrarte directamente con el Hogar y ver los frutos de tu trabajo y dedicación.</p>
            call_to_action:
              text: Ver Cómo
              url: "/es/contribuye/dona-tu-tiempo"
              style: plain

          - title: Dona Artículos
            content:
              show_container: false
              content_html: >-
                <p>Para información sobre donaciones de artículos, o para coordinar la entrega de los artículos, llámanos al <a href="tel:7878316161">(787) 831-6161</a>.</p>
      - title: Apadrina a un Niño o Niña
        content:
          show_container: false
          content_html: >-
            <p>Mediante donativos fijos mensuales, <b>TÚ</b> puedes ayudarnos a sufragar los costos de  los servicios que damos a los niños durante su estadía en el Hogar.</p>
        call_to_action:
          text: Aprender Más
          url: es/contribuye/
          image: "/uploads/padrinos_program/padrinos.png"

  - _bookshop_name: tiles
    tiles:
      - title: Prevención Maltrato
        content:
          show_container: false
          content_html: >-
            <p>Más allá de su misión primordial de salvar la salud emocional, mental y física de niños que han sido víctimas de maltrato, el Hogar promueve iniciativas para educar a la comunidad sobre el maltrato de menores en Puerto Rico, y erradicar este triste problema a través del tiempo.</p>

            <div class="youtube-player-container has-text-centered mt-2" data-embed="biW0VL6aMfE">
              <div class="play-button"></div>
            </div>
        call_to_action:
          text: Leer Más
          url: es/que-hacemos/educacion-y-prevencion-del-maltrato-de-menores
      - has_children: true
        children:
          - title: Colaboradores
            content:
              show_container: false
              content_html: >-
                <p>El Hogar ofrece sus más sinceras gracias a todos nuestros patrocinadores y colaboradores que mediante donativos, subvenciones, trabajo voluntario y donaciones de artículos apoyan nuestra misión.</p>
            call_to_action:
              text: Ver Cómo
              url: es/quienes-somos/colaboradores
              style: plain
          - title: Cronología Histórica
            content:
              show_container: false
              content_html: >-
                <p>El Hogar Albergue para Niños Jesús de Nazaret lleva más de dos décadas años dándo amor, servicios y un mejor futuro a niños y niñas de Puerto Rico que han sido víctimas de negligencia o maltrato.</p>
            call_to_action:
              text: Aprender Más
              url: es/quienes-somos/historia
              style: plain
---