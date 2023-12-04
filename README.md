
# Lit + Tailwind + Vite Template

Built by scouring multiple plugins, templates and projects.
This is a basic template, to use native web components with
Lit for bot reactivity and components, and tailwind for
styling

### Technologies

- Lit
- Tailwind
- Vite
- Typescript

### Notes

Include the generated tailwind file in the `styles` static
property for all components, otherwise the tailwind styles
won't get applied.

Careful with css imports, importing the css can only be done
with inline query parameter. We don't want injection since,
Lit uses shadow DOM.
https://vitejs.dev/guide/features.html#disabling-css-injection-into-the-page