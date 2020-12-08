---
layout: main
tags: none
---

# A Raw Collection of Public Notes

These notes are **really** just meant for sharing on occasion. They are not curated ro anything near this.

<ul>
{%- for note in collections.note -%}
  <li><a href="{{note.url}}">{{note.fileSlug}}</a></li>
{%- endfor -%}
</ul>
