---
layout: main
---

# A time ordered list of posts

This is a simple weblog of posts I have written during the research. They are either part of a project or just notes and reflections along the way.

<br>

{%- for post in collections.post -%}
<p>

[{{ post.data.title }}]({{ post.permalink }}) – *{{ post.date }}*

</p>
{%- endfor -%}
