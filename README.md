# pdfjs
Electron app for viewing PDF with simple vim binding.

Using:
- Electron https://github.com/electron/electron
- PDF.js https://mozilla.github.io/pdf.js/

Update keyboard shortcuts:
- PDF.js support many keyboard shortcuts https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#what-are-the-pdfjs-keyboard-shortcuts, but unfortunately does not support j/k to move up/down.
- Switch old `j`/`k` (page down/page up) to `d/u`
- Implement new keybind `j`/`k` to move `down`/`up`

# Install

```
npm install

npm start
```

# PDF.js source

Modified source: https://github.com/trietphm/pdf.js
https://github.com/trietphm/pdf.js/commit/d7c3371b1ba6a31d2d2121378d7442313be6548f
