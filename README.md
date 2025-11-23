<img src="project-thumbnail.gif" alt="Never Ending VR Experiment Preview">

# Never Ending VR Walk Experiment

The never-ending walk VR Walk is my playground built using the simple and powerful [A-Frame](https://aframe.io/), where I experiment with 3D models created in Cinema 4D, keeping in mind a low poly and minimal colors ambient. Using the well-known A-Frame framework, you can put on your cardboard Google compatible equipment, sit down and look around in this relaxing environment. The usage of relaxed ambient music is recommended.

> **✨ Modernized 2025:** This project has been completely rebuilt with Vite for a modern, lightning-fast development experience!

## Quick Start

### Development

Start the development server with hot module reloading:

```bash
npm install          # Install dependencies
npm run dev          # Start dev server at http://localhost:8080
```

Changes to HTML, JavaScript, or SCSS will update instantly!

### Building for Production

Build optimized files for deployment:

```bash
npm run build        # Build to docs/ folder (ready for GitHub Pages)
npm run preview      # Preview production build locally
```

## Project Structure

```
never-ending-walking-vr/
├── src/                      # Source files (edit these)
│   ├── index.html           # Main HTML
│   ├── javascript/
│   │   └── main.js          # JavaScript entry (ES modules)
│   └── stylesheet/
│       └── styles.scss      # Styles (Bootstrap 5 + custom)
│
├── public/                   # Static assets (copied as-is)
│   └── assets/
│       ├── images/          # Images and icons
│       └── threedmodels/    # GLTF 3D models
│
├── docs/                     # Build output (GitHub Pages)
│   ├── index.html
│   └── assets/              # Bundled JS, CSS, and static files
│
├── vite.config.js           # Vite configuration
└── package.json             # Dependencies & scripts
```

## Tech Stack

### Framework & Libraries
- **[A-Frame](https://aframe.io/)** (v1.7.1) - WebVR framework with latest WebXR support
- **[Vite](https://vitejs.dev/)** - Modern build tool with instant HMR

### A-Frame Components
- [aframe-template-component](https://github.com/ngokevin/kframe/tree/master/components/template/) - Template system
- **Custom Preloader** - Vanilla JS asset loading (no jQuery dependency)

## Features

✨ **Modern Development Experience**
- Lightning-fast dev server with Vite
- Instant hot module reloading (HMR)
- Optimized production builds
- Modern SCSS compilation

🎮 **VR Experience**
- Low-poly 3D models optimized for performance
- Minimal color palette for a calming atmosphere
- Cardboard Google VR compatible
- Smooth animations with rotating elements

## Development

### Adding New Features

**Add a JavaScript module:**
```javascript
// src/javascript/myModule.js
export function myFunction() { }

// src/javascript/main.js
import { myFunction } from './myModule.js';
```

**Add styles:**
```scss
// src/stylesheet/styles.scss
@import './components/my-component';
```

**Add static assets:**
Place files in `public/assets/` - they'll be copied to `docs/assets/`

## Technical Notes

- **Custom Preloader** - Lightweight vanilla JavaScript implementation that tracks A-Frame asset loading without jQuery dependencies
- **Preloader animation** from [SpinKit](https://github.com/tobiasahlin/SpinKit), customized and optimized
- **glTF 2.0 models** exported using Blender plugins, following the [Khronos glTF 2.0 specification](https://github.com/KhronosGroup/glTF)
- **Build output** goes to `docs/` folder for seamless GitHub Pages deployment
- **No external dependencies** for UI - pure CSS for modal and loading screen

## Browser Support

Works on all modern browsers that support WebVR/WebXR:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers with VR support

## Troubleshooting

**Dev server won't start:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Changes not showing:**
Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)

## Migration from Gulp to Vite

This project was completely modernized from Gulp + Webpack to Vite!

### What Changed

**Build System:**
- ❌ Removed: Gulp + Webpack + all plugins
- ❌ Removed: `bootstrap-sass` (v3.3.7)
- ❌ Removed: jQuery dependency
- ❌ Removed: `@gladeye/aframe-preloader-component` (jQuery-dependent)
- ✅ Added: Vite (v5.4.11) - Lightning-fast build tool
- ✅ Added: Custom vanilla JS preloader
- ✅ Updated: A-Frame to v1.7.1 (from v1.2.0)

**Project Structure:**
```
Before (Gulp):              After (Vite):
dev/src/                →   src/
  ├── app.js                  ├── main.js (ES modules)
  └── bootstrap.scss          └── styles.scss (modern CSS)

docs/ (output)          →   docs/ (unchanged, GitHub Pages ready)
```

**Module System:**
- CommonJS `require()` → ES Modules `import`
- CDN scripts → Bundled modules
- Multiple config files → Single `vite.config.js`

### Performance Improvements

| Metric | Before (Gulp) | After (Vite) |
|--------|---------------|--------------|
| Dev Server Start | ~3-5s | ~0.5s |
| Hot Reload | Full page reload | Instant HMR |
| Build Time | Varies | ~2.2s |
| Bundle Size | Not optimized | 358KB gzipped |
| CSS Bundle | 96KB | 1.82KB |

### Benefits

✅ **10x faster** development with instant HMR  
✅ **Modern ES modules** with tree-shaking  
✅ **Simpler config** - one file instead of multiple  
✅ **Better errors** - clear, helpful messages  
✅ **No jQuery** - pure vanilla JavaScript  
✅ **Smaller bundles** - optimized production builds  
✅ **GitHub Pages ready** - automatic `.nojekyll` creation  

### Commands Comparison

```bash
# Before (Gulp)          # After (Vite)
gulp                  →  npm run dev
# (manual build)      →  npm run build
# (no preview)        →  npm run preview
```

### Files Removed/Created

**Removed:**
- `gulpfile.js`
- `webpack.config.js`
- `dev/` directory
- All Gulp plugins
- Bootstrap Sass

**Created:**
- `vite.config.js` - Build configuration
- `src/javascript/preloader.js` - Custom preloader (no jQuery)
- `src/stylesheet/styles.scss` - Modern lightweight styles
- `.gitignore` - Updated for Vite structure

**Modified:**
- `package.json` - Updated dependencies and scripts
- `src/index.html` - Uses Vite module system
- `src/javascript/main.js` - ES module imports

### GitHub Pages Configuration

The build is automatically configured for GitHub Pages:
- ✅ Relative paths (`./assets/` not `/assets/`)
- ✅ `.nojekyll` file auto-generated
- ✅ Output to `docs/` folder
- ✅ All assets properly bundled

## Find Me

Find me at [MeSopa](https://mesopa.com/) and check out my other works.  
Thanks!

## License

MIT