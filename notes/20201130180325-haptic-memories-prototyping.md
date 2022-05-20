# First Steps Prototyping Haptic Memories

Notes along the way.

Starting a prototype with Xcode as we are targeting iOS in a first step. The choice for iOS is because of the easy access to the steps data in a responsible way, additionally the TapticEngine in the iPhone and the watch is likely to provide an interesting playground.
There is also Swift Playgrounds as a quick and easy way to prototype. Using Xcode for now because I the University restrict access to the AppStore. This is unfortunately the only way to install Swift Playgrounds.

Other ideas and notes:

- have a library which is platform agnostic and translates step data to rhythmic patterns of distance over time
  - the goal would be to be used also for a webapp or for an embedded device
  - a function to create a context to keep state of distance and duration
  - a function which returns true or false for a given context update—meaning an update on distance and duration
  - could be written in Rust for the fun of it :)
- build it web app first and embed for iOS and Android
- OpenFrameworks?
  - would be a good fit to have the library in C++ for embed use too
  - Is too laborious to set up. Has not changed in years.

Meanwhile: waiting for the download of Xcode 12.2. It is a 10.6GB download

I cannot use the AppStore to download Xcode because of permission constraints on the laptop.
Downloading from Apple’s developer portal.

Looking for an example project while wating for the download to complete.

Taking notes on links:

Drawing with iOS https://www.raywenderlich.com/12198216-drawing-with-pencilkit-getting-started
More in depth for pencil: https://www.raywenderlich.com/1407-apple-pencil-tutorial-getting-started

Download is done. Trying to install.

Installation took a long time; unpacking and the first launch of the app took about 45 min on the university laptop.

Interesting that the wait time does not decrease the same rate the machines get faster.

Xcode takes a long time again to prepare for iOS development installing another ca 7 GB for simulators

It is very slow.

Got a basic canvas (pixel buffer) working with the PencilKit.
Works in the simulator.

Adding a basic scribble function was very easy.

Next steps:

- Figure out how to influence the pen in realtime
  - somethign along the lines of “on touch move”
- stutter the stroke randomly
- save the drawing via a sharing button
- access to steps data
- compute a line based on a selected time period

Overall experience, downloading many gigabytes and installing Xcode aside, is ok. Felling I will learn Swift through this.

Also downloading the current OpenFrameworks 0.11.1 release for iOS target to have an alternative way to code.

The last time I have seriously used OpenFrameworks was during my diploma and a little later.
Going to be fun :)
