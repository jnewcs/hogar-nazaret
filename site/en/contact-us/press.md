---
title: Press
layout: default
lang: en
lang_ref: press
_schema: "schemas/content_blocks_page_en.md"
redirect_from:
  - /en/contactanos/prensa
  - /en/contactanos/prensa/
content_blocks:
  - _bookshop_name: simple_header
    title: Press
    title_alignment: centered
    background_color: white

  - _bookshop_name: split_form_content
    content_html: >-
      <p>If you are a journalist or member of the press, we encourage you to visit the Hogar and tour our facilities, learn about our trajectory and meet our dedicated team.</p>

      <p>To schedule your visit or to request a press kit with information about the Hogar, please complete the following online form. Once we receive the online request, we will get in contact with you as soon as possible. We look forward to meeting you!.</p>
    form:
      title: Press Request
      lang: en
      submit:
        text: Submit
      form_url: "/en/form_success"
      fields:
        name:
          label: "Name"
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
        company:
          label: "Company"
          presence: true
          required: true
        questions_and_comments:
          label: "Questions and Comments"
          presence: true
          required: true

---
