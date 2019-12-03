---
title: Child Abuse Education and Prevention
header_layout: simple
layout: page
lang: en
lang_ref: education-and-prevention
redirect_from:
  - /en/que-hacemos/educacion-y-prevencion-del-maltrato-de-menores
  - /en/que-hacemos/educacion-y-prevencion-del-maltrato-de-menores/
---
Beyond its main mission of restoring the emotional, mental and physical health of children who have been victims of abuse, the Hogar promotes initiatives to educate the community of Puerto Rico about child abuse, and to help eradicate this problem over time.

Our executive director and members of the Board regularly participate in programs that educate professionals who work with children and the general public about the problem of child abuse, its magnitude, as well as how to detect and prevent it.

The Hogar has participated in the following programs for the prevention of child abuse:

<ul>
  <li>Public walks denouncing child abuse</li>
  <li>Talks in schools and community organizations</li>
  <li>Radio programs and TV interviews with experts in the field</li>
  <li>Workshops and presentations on topics such as "Taking Care of Our Children, Detection of Signs of Child Abuse and The Importance of Family", among others.</li>
</ul>

We encourage you to join us on our mission to eradicate child abuse by offering your time to give talks and presentations about this serious problem on behalf of the Hogar.

For more information about how to become a volunteer presenter, please contact our Executive Director at {% include phone.html %}

<h3 class="is-size-3">
  Download the National Plan for the Prevention of Child Abuse in Puerto Rico 2014-2024
</h3>

{% assign plan_link = '/uploads/education-and-prevention/Puerto Rico National Plan - 2014 to 2024.pdf' %}
<a href="{{ plan_link | relative_url }}" class="button is-secondary is-medium" target="_blank">
  {{ site.data.languages[page.lang].read_more }}
</a>

<hr />

<div class="columns is-multiline">
  <div class="column is-one-third">
    <h4 class="is-size-4">
      Types of Child Abuse
    </h4>

    {% assign abuse_types_page = site.pages | where: "lang", page.lang | where: "lang_ref", "types-of-abuse" | first %}
    <a href="{{ abuse_types_page.url | relative_url }}" class="button">
      {{ site.data.languages[page.lang].learn_more }}
    </a>
  </div>

  <div class="column is-one-third">
    <h4 class="is-size-4">
      Physical Child Abuse
    </h4>
    <a href="https://medlineplus.gov/ency/article/001552.htm" class="button" target="_blank">
      {{ site.data.languages[page.lang].read_more }}
    </a>
  </div>

  <div class="column is-one-third">
    <h4 class="is-size-4">
      Child Abuse
    </h4>
    <a href="https://kidshealth.org/en/parents/child-abuse.html" class="button" target="_blank">
      Know the Signs
    </a>
  </div>
</div>
