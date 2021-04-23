Once again, I am spending a good amount of the day to figure out how to connect the [Seeed Grove NFC tag](https://wiki.seeedstudio.com/Grove_NFC_Tag/) with an iOS phone.

The *NFC Tag* is a readable and writeable tag, which is different from the *NFC* module which is an active reader.

**tl;dr;** The Grove NFC Tag module does not work on iOS any version beacuse it does not implement the read and write commands off ISO standard. Only some base info such as UID can be read. For this one can also use a passive tag. 

---

*Here are my rough notes; maybe it'll be a post some day about the path of einlightment:*

The example code from Seeed is not helpful; only covers Android app.
No iOS NFC writer app I could find allows to write certain blocks.

The CoreNFC API, however, does.

Creating a simple app to fullfill the example code.

The Tag is an ISO15639 (NFC-V)

Helpful Links:

- https://www.ariezlabs.com/blog/ios-nfc/
- Good guide on the preparations https://itnext.io/swift-corenfc-as-quick-as-possible-79544796cd0a
- Finally found an entry in the ST forums through searching for "writeSingleBlock" CoreNFC API method: https://community.st.com/s/question/0D50X0000B09Q8SSQU/example-of-using-the-new-ios-13-corenfc

The hint for adding supported AIDs in the Info.plist is important!
Key for the entry is "ISO7816 application identifiers for NFC Tag Reader Session"

Must have an "NFC Scan Usage Description" in the Info.plist to be allowed to scan.

I had to create an identifier and profile on the developer portal where the NFC capability is included; download and import the profile and choose it for app signing. Additionally the capability had to be added in the xcode project again.

Tedious path to enable NFC in an app.

OK. The forums entry states that the version of the NFC chip on the Grove Module is not supported on iOS (any version):

> Actually, the M24LR16E (and also the M24LR64E) is not supported by iOS (any version).
> 
> Only the M24LR04E is supported by iOS in the M24LR family.

