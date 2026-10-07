// Mock browser environment for Node.js
const { JSDOM } = require('jsdom');

const dom = new JSDOM('<!DOCTYPE html><html><body><div id="root"></div></body></html>', {
  url: 'http://localhost:3001/',
  contentType: 'text/html',
  includeNodeLocations: true,
  storageQuota: 10000000
});

global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;
global.localStorage = dom.window.localStorage;
global.sessionStorage = dom.window.sessionStorage;
global.location = dom.window.location;
global.matchMedia = dom.window.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {},
    addEventListener: function() {},
    removeEventListener: function() {}
  };
};

// Mock observers
global.MutationObserver = dom.window.MutationObserver || class {
  observe() {}
  disconnect() {}
};
global.IntersectionObserver = dom.window.IntersectionObserver || class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
global.ResizeObserver = dom.window.ResizeObserver || class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

console.log("Loading bundle...");
try {
  // Use dynamic import for ESM bundle
  import('./dist/assets/index-B8fBRtCy.js')
    .then((module) => {
      console.log("Bundle loaded successfully!", Object.keys(module));
      // Give React some time to render and check if there are errors
      setTimeout(() => {
        console.log("DOM HTML length:", dom.window.document.body.innerHTML.length);
        console.log("DOM HTML snippet:", dom.window.document.body.innerHTML.substring(0, 1000));
        process.exit(0);
      }, 2000);
    })
    .catch((err) => {
      console.error("Bundle runtime execution failed:", err);
      process.exit(1);
    });
} catch (e) {
  console.error("Loading bundle failed:", e);
  process.exit(1);
}

// Catch unhandled rejections or exceptions
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});
