--- 
todos:
  - I have another extensive note on this topic that should be linked here
---

# Notes on using Markdown and static site generation

I write my notes in Markdown because it allows for a little markup such as lists, tables, emphasise, etc. More importantly using Pandoc it can also contain references to items in a bibliography. Of course those can be rendered in a reference list.

Zettlr, a simple note taking app, supports such references. But eleventy, which I use for the static site generation, does not. Or does it?

Initial research results to get it to work:

- https://gitlab.com/loupbrun/eleventy-plugin-scholar
  - upside: seems simple
  - downside: needs an eleventy config file and a plugins directory in the folder
- usign a different static site generator?
