---
layout: main
title: Field Notes on Exploring Resonant Internet of Things on and around the Body
---

This is the door to a growing digital allotment with seedlings of notes, thoughts, reflections, some flowerbeds of code, public documentation during my PhD research on _Wearables and the Self_ as part of the [Open Design of Trusted Things (OpenDoTT)](https://opendott.org) project.

Want to get in touch or just say hello :) to drop me an email [jens.a.ewald@northumbria.ac.uk](mailto:jens.a.ewald@northumbria.ac.uk)

## Latest Notes

{% set latest = collections.all | reverse | slice(3) | first %}
{%- for note in latest %}
- {{note.date.toUTCString()}} | [{{note.fileSlug}}]({{note.url}})
{% endfor -%}

## Field Notes

[First Steps Prototyping Haptic Memories](notes/20201130180325-haptic-memories-prototyping)

## Other pages

As this little garden will evolve here are some first resources:

- A more detailed description of my research project: [https://opendott.org/self/](https://opendott.org/self/)
- A repository of notes on _working open_: [https://open.poetic.systems/readme/](https://open.poetic.systems/readme/) with the source on [https://git.sr.ht/~jens/working-open](https://git.sr.ht/~jens/working-open)
- More to follow

As part of the research I am interested in low tech approaches. Hence, for now this page is intentionally left as simple HTML with a bit of style following bit by bit.
## About OpenDoTT

OpenDoTT is a EU H2020 funded joint project of the [University of Northumbria School of Design](https://northumbria.ac.uk/about-us/academic-departments/northumbria-school-of-design/), Newcastle and the [Mozilla Foundation](https://foundation.mozilla.org/). This project has received funding from the European Union’s Horizon 2020 research and innovation programme under the Marie Skłodowska-Curie grant agreement No 813508.
