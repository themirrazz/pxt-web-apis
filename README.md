# pxt-web-apis
An easy way to bridge the gap between Web Apps and Micro:bit programs.

## What is this?
This is a MakeCode extension that aims to allow JavaScript code to use web APIs on your micro:bit. This will bridge compatibility and allow code to be shared between websites and micro:bits. It works on both the original v1 as well as the v2.

## Features
* Navigator API - 47.4%
* [Permissions API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/permissions) - 0.0%
* Battery Status API - 50.0%
  * It is currently implemented using a shim; a real implementation will come using C++ eventually.
* User Agent - 100.0%
* Media Devices API - 0.0%
* [Media Session API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/mediaSession) - 0.0%
* Local Storage/Session Storage - 85.2%
  * All stored in the RAM due to limitations on the V1 board
* [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) - 100.0%
* Fetch - 0.0%
* XMLHttpRequest - 0.0%
* [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation) - 50.0%
* Document API and DOM Tree - 0.1%
* Window.close - 100.0%
  * A window close is simulated by causing a kernel panic.
* Alert/Confirm/Prompt - 66.6%
  * Prompt does not work. Alert and confirm have full support.

## How to import
* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/themirrazz/pxt-web-apis** and import

## Edit this project
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
