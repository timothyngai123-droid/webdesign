# Static assets

Place the Grove & Grain logo at `public/logo.png`.

The navigation bar component (`components/Nav.tsx`) references this file
directly. Until a real logo is uploaded the image will render as a broken
asset in the browser; the `alt="Grove & Grain"` text keeps the page
accessible in the meantime.
