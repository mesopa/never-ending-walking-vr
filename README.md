<img src="project-thumbnail.gif" alt="Never Ending VR Experiment Preview">

# Never Ending VR Walk Experiment
The never-ending walk VR Walk it's my playground built using the simple and strong [A-Frame](https://aframe.io/), where I experiment with 3D models created in Cinema 4D, keeping in mind a low poly and minimal colors ambient. Using the well known Aframe framework, you can put on your cardboard Google compatible equipment, sit down and look around in this relaxing environment. The usage of a relaxed ambient music it's recommended.

<div>
  <a href="#framework-used">Framework Used</a>
  &mdash;
  <a href="#components">Components</a>
  &mdash;
  <a href="#install">Install</a>
  &mdash;
  <a href="#notes">Notes</a>
  &mdash;
  <a href="#find-me">Find Me</a>
</div>

Framework Used
--------------

* [A-FRAME](https://aframe.io/)

~~I use this specific build because of the camera height changes every time user enters in VR mode, a well-known issue presented in the latest build. You can read more about it [here](https://github.com/aframevr/aframe/issues/3051)~~

Components
----------

* [aframe-template-component](https://github.com/ngokevin/kframe/tree/master/components/template/)
* [aframe-animation-component](https://github.com/ngokevin/kframe/tree/master/components/animation/)
* [aframe-preloader-component](https://github.com/gladeye/aframe-preloader-component)

Install
-------

Copy it into your PC

```sh
git clone https://github.com/mesopa/never-ending-walking-vr.git # Clone the repository.
npm install # Install dependencies.
gulp # Build it.
```

Notes
-----

The Bootstrap framework was trimmed out to the basics, only the necessaries components are utilized for the proper usage of the preloader. Preloader animation was grabbed from [SpinKit](https://github.com/tobiasahlin/SpinKit), also trimmed and inline inside the HTML header.

The glTF models follow the new version [2.0](https://github.com/KhronosGroup/glTF) and were exported using the Blender plugin [Blendergltf](https://github.com/Kupoman/blendergltf).

Find Me
-------

Find me in [MeSopa](https://mesopa.com/) and check my other works.
Thanks!