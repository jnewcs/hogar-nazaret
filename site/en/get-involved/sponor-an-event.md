---
title: Sponsor An Event
layout: default
lang: en
lang_ref: sponsor-event
_schema: schemas/content_blocks_page_en.md
redirect_from:
  - /en/contribuye/auspicia-un-evento
  - /en/contribuye/auspicia-un-evento/
content_blocks:
  - _bookshop_name: side_by_side_header
    title: Sponsor An Event
    hide_date: true
    image: /uploads/milestones/hogar-walk-a-thon.jpg
    image_style: cover

  - _bookshop_name: split_form_content
    content_html: >-
      <p>We invite you to join our group of collaborators and sponsors, who make it possible for the Hogar to continue operating. Our sponsors include government agencies, foundations, private businesses and corporations, merchants, civic organizations, as well as families and individuals from the general community. There are many ways to help the Hogar throughout the year, such as:</p>

      <p><ul><li>Sponsoring one of our special events (examples: our annual Open House or fundraising events such as bicycle rides, walk-a-thons and 5K races)</li><li>Funding specific operational costs (examples: Nannies, gasoline, electricity, water, other)</li><li>Underwriting capital projects, such as the expansion of the children's bedroom area</li></ul></p>

      <p>For more information on how to become one of our sponsors, please call us at <a href="tel:7878316161">(787) 831-6161</a> or complete the following form. Once you send us the completed online form, you will receive a telephone call from our office as soon as possible.</p>
    form:
      title: Sponsor an Event Request
      lang: en
      submit:
        text: Submit
      form_url: "https://formspree.io/f/mleooedn"
      fields:
        name:
          label: "First and Last Name"
          presence: true
          required: true
        email:
          label: "Email"
          presence: true
          required: true
        phone:
          label: "Phone"
          presence: true
          required: true
        sponsorship_type:
          label: "Type of Sponsorship"
          types:
            - Event
            - Operational costs
            - Capital projects
          presence: true
          required: true
        description:
          label: "Description"
          presence: true
          required: false
---
