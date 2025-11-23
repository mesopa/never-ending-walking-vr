/*
 * A-Frame VR Application
 * The Never Ending VR Walk Experiment
 */

// Import stylesheets
import '../stylesheet/styles.scss';

/*
 * A-Frame.
 * Latest version with improved WebXR support
 */
import 'aframe';

/*
 * A-Frame Components.
 */
import 'aframe-template-component';

/*
 * Custom Preloader (no jQuery required)
 */
import { AFramePreloader } from './preloader.js';

// Initialize preloader
const preloader = new AFramePreloader({
  modalId: 'preloader-modal',
  progressLabel: '.progress-label',
  autoClose: true,
  closeDelay: 1000
});

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => preloader.init());
} else {
  preloader.init();
}

console.log('Never Ending VR Walk initialized!');
