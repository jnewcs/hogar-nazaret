---
title: Home
layout: default
lang: en
lang_ref: home-page
_schema: "schemas/content_blocks_page_en.md"
content_blocks:
  - _bookshop_name: carousel
    items:
      - title: "WELCOME TO THE HOGAR ALBERGUE PARA NIÑOS JESÚS DE NAZARET!"
        creation_date: 2023-04-10T12:00:00.000+00:00
        content:
          content_html: >-
            <p>Our mission is to offer a safe home, personal care, nutrition, education, medical services, transportation, recreation, and social and psychological services to girls and boys who are victims of abuse or neglect. We provide for all their needs with lots of LOVE</p>
        hide_from_carousel: false
        always_show: true
        image:
          url: "/uploads/carousel_highlights/kids_circle.jpg"
        call_to_action:
          text: The Hogar
          opens_donate_modal: false
          url: "/en/about"
      - title: "Join Us in Fighting Child Abuse"
        creation_date: 2023-04-16T12:00:00.000+00:00
        content:
          content_html: >-
            <p>**April** is the month of child abuse prevention. We call on all citizens of the Island to ensure the safety, protection and quality of life of all children in Puerto Rico. To love and protect our children, and report child abuse is everyone's responsibility. We invite you to support our mission by donating your time, services or funds!</p>
        hide_from_carousel: false
        always_show: true
        image:
          url: "/uploads/carousel_highlights/child_prevention_month.jpg"
          height: 200
          width: 275
        call_to_action:
          text: Donate Here
          opens_donate_modal: true

  - _bookshop_name: banner
    title: Job Opportunity!
    content:
      show_container: false
      content_html: >-
        <p>The Hogar Albergue para Niños Jesús de Nazaret, Inc. invites you to be part of our team to provide loving care to our children as a Child Caregiver.</p>
    background: 'pattern-dots-sm'
    banner_background: white
    call_to_action: 
      text: For more details, read here
      url: "/uploads/jobs/2022/caregiver_posting.jpg"

  - _bookshop_name: simple_header
    title: The Hogar Invites you to get involved!
    title_alignment: centered
    background_color: white
    show_padding_top: true
    show_padding_bottom: false

  - _bookshop_name: content
    show_container: true
    content_html: >-
      <p>The operation of our shelter home for children (the Hogar) is greatly possible thanks to grants and donations from institutions such as United Way, government agencies, civic organizations, merchants and private companies. However, most important is the support of the COMMUNITY, individuals and families that are committed to help El Hogar continue its work and make a difference in the lives of its children.</p>

  - _bookshop_name: tiles
    tiles:
      - has_children: true
        children:
          - title: Donate your Time
            content:
              show_container: false
              content_html: >-
                <p>We offer many ways for you to get involved with the Hogar and see first-hand the results of your efforts and dedication.</p>
            call_to_action:
              text: See How
              url: "/en/get-involved/donate-time"
              style: plain

          - title: Donate Articles
            content:
              show_container: false
              content_html: >-
                <p>To learn more about how to donate articles, or to schedule the delivery of your donations, contact us by phone at <a href="tel:7878316161">(787) 831-6161</a>.</p>
              
      - title: Sponsor a Child
        content:
          show_container: false
          content_html: >-
            <p>Through fixed monthly donations, <b>YOU</b> could help us defray the costs of the services we provide to our children while they reside at the Hogar.</p>
        call_to_action:
          text: Learn More
          url: en/get-involved
          image: "/uploads/padrinos_program/padrinos.png"

  - _bookshop_name: tiles
    tiles:
      - title: Prevention of Child Abuse
        content:
          show_container: false
          content_html: >-
            <p>Beyond its main mission of restoring the emotional, mental and physical health of children who have been victims of abuse, the Hogar promotes initiatives to educate the community of Puerto Rico about child abuse, and to help eradicate this problem over time.</p>

            <div class="youtube-player-container has-text-centered mt-2" data-embed="biW0VL6aMfE">
              <div class="play-button"></div>
            </div>
        call_to_action:
          text: Read More
          url: en/what-we-do/child-abuse-education-and-prevention
      - has_children: true
        children:
          - title: Contributors
            content:
              show_container: false
              content_html: >-
                <p>For over two decades, the Hogar has been mainly sustained by the financial support of government agencies, private grants and donations, religious and civic organizations, corporations, businesses, and residents of the City of Mayagüez and surrounding towns.</p>
            call_to_action:
              text: See How
              url: en/about/collaborators
              style: plain

          - title: History
            content:
              content_html: >-
                <p>The Hogar Albergue para Niños Jesús de Nazaret has been providing love, services, and a better future to boys and girls who have been victims of abuse or neglect for over twenty years.</p>
              show_container: false
            call_to_action:
              text: Learn More
              url: en/about/milestones
              style: plain
---
