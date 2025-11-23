/**
 * Modern A-Frame Preloader - No jQuery Required
 * Handles asset loading progress and displays a loading screen
 */

export class AFramePreloader {
  constructor(options = {}) {
    this.modalId = options.modalId || 'preloader-modal';
    this.progressLabel = options.progressLabel || '.progress-label';
    this.autoClose = options.autoClose !== false;
    this.closeDelay = options.closeDelay || 1000;
    
    this.modal = null;
    this.label = null;
    this.scene = null;
    this.totalAssets = 0;
    this.loadedAssets = 0;
  }

  init() {
    // Get modal and label elements
    this.modal = document.getElementById(this.modalId);
    if (!this.modal) {
      console.warn('Preloader modal not found');
      return;
    }

    this.label = this.modal.querySelector(this.progressLabel);
    
    // Show modal
    this.showModal();

    // Wait for A-Frame scene to be ready
    document.addEventListener('DOMContentLoaded', () => {
      this.scene = document.querySelector('a-scene');
      if (this.scene) {
        this.attachEventListeners();
      }
    });
  }

  attachEventListeners() {
    // Listen to A-Frame asset loading events
    const assetsEl = this.scene.querySelector('a-assets');
    
    if (assetsEl) {
      // Count total assets
      this.totalAssets = assetsEl.querySelectorAll('[preload]').length;
      if (this.totalAssets === 0) {
        // If no explicit preload items, count all asset items
        this.totalAssets = assetsEl.children.length;
      }

      // Listen for loaded event on each asset
      Array.from(assetsEl.children).forEach(asset => {
        asset.addEventListener('loaded', () => {
          this.onAssetLoaded();
        });
        
        asset.addEventListener('error', (e) => {
          console.error('Asset loading error:', e);
          this.onAssetLoaded(); // Still count it to prevent hanging
        });
      });

      // Fallback: listen to scene loaded event
      this.scene.addEventListener('loaded', () => {
        this.onSceneLoaded();
      });
    } else {
      // No assets element, just wait for scene to load
      this.scene.addEventListener('loaded', () => {
        this.onSceneLoaded();
      });
    }
  }

  onAssetLoaded() {
    this.loadedAssets++;
    this.updateProgress();
  }

  updateProgress() {
    const progress = this.totalAssets > 0 
      ? Math.round((this.loadedAssets / this.totalAssets) * 100)
      : 0;

    if (this.label) {
      this.label.textContent = `Loading ${progress}%`;
    }

    if (progress >= 100 || this.loadedAssets >= this.totalAssets) {
      this.onLoadComplete();
    }
  }

  onSceneLoaded() {
    // Ensure we show 100% even if asset counting was off
    if (this.label) {
      this.label.textContent = 'Loading 100%';
    }
    this.onLoadComplete();
  }

  onLoadComplete() {
    if (this.label) {
      this.label.textContent = 'Done! Hold tight...';
    }

    // Mark modal as complete (for styling)
    if (this.modal) {
      this.modal.classList.add('preloader-modal__complete');
    }

    if (this.autoClose) {
      setTimeout(() => {
        this.hideModal();
      }, this.closeDelay);
    }
  }

  showModal() {
    if (this.modal) {
      this.modal.style.display = 'flex';
      this.modal.setAttribute('aria-hidden', 'false');
    }
  }

  hideModal() {
    if (this.modal) {
      // Fade out animation
      this.modal.style.opacity = '0';
      this.modal.style.transition = 'opacity 0.3s ease-out';
      
      setTimeout(() => {
        this.modal.style.display = 'none';
        this.modal.setAttribute('aria-hidden', 'true');
      }, 300);
    }
  }
}

// Auto-initialize if data attribute is present
document.addEventListener('DOMContentLoaded', () => {
  const preloaderModal = document.querySelector('[data-preloader]');
  if (preloaderModal) {
    const preloader = new AFramePreloader({
      modalId: preloaderModal.id,
      autoClose: preloaderModal.dataset.autoClose !== 'false'
    });
    preloader.init();
  }
});
