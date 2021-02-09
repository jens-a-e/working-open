---
tags:
  - code
  - haptic memories
  - ios
---

Progressing with the ios hapic memories sandbox.

some notes along the code:

finding better handling of data query from the healthkit store.

When defining the `initialResultsHandler` for the query there is also the option to get `result.statistics(for: Date)` which might be better suited to retrieve the data on demand while drawing further into the past.

To test this it would need a change in the RhythmProvider protocol.

Is it worth the effort?

There is value to getting used to the querying of stored data. Apple’s HealthKit is providing a good starting point instead of rolling our own.

Alternatives data stores to think about when moving away from iOS?

Quick notes from the agenda of upcoming Thursday’s coversation:


* Progress  on the Drawing Thing
    
* New framing of the buzzy thing and the drawingin thing
    
* Naming is still open
    

* Tracing, drawing, doodle, dotting, …?
    

* The drawing things a a collection of connected objects to pass on 
    

* Containers of data, recorderds of…, capsules
    

* Modes of Drawing
    

* Lines, and ellipses
    
* How to treat the data
    
* Walking into the past or from the past into the now?
    
