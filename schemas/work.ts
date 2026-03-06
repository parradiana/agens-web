import { defineType, defineField, Rule } from 'sanity'

export default defineType({
  name: 'work',
  title: 'Trabajo',
  type: 'document',
  fields: [
    // ── Identificación ──
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title.es', maxLength: 96 },
      validation: (Rule) => Rule.required(),
      description: 'Se usa como ID en la URL: /works/[slug]',
    }),
    defineField({
      name: 'brand',
      title: 'Marca',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Nombre de la marca/cliente. Ej: Cabify, Philco, Oral-B, Atma',
    }),
    defineField({
      name: 'title',
      title: 'Nombre de campaña',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({ name: 'es', title: 'Español', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'en', title: 'English', type: 'string', validation: (Rule) => Rule.required() }),
      ],
    }),
    defineField({
      name: 'date',
      title: 'Fecha del trabajo',
      type: 'string',
      description: 'Texto libre para mostrar como aparece en el diseño. Ej: "nov 2025 - Argentina", "dic 2025 - Argentina"',
    }),

    // ── Control de visibilidad y orden ──
    defineField({
      name: 'featured',
      title: 'Destacado en Home',
      type: 'boolean',
      initialValue: false,
      description: 'Si está activo, aparece en la grilla de trabajos seleccionados del Home',
    }),
    defineField({
      name: 'order',
      title: 'Orden de aparición',
      type: 'number',
      description: 'Número menor = aparece primero. Se usa tanto en Home como en /works',
    }),

    // ── Media (URLs del bucket externo) ──
    defineField({
      name: 'heroVideoUrl',
      title: 'URL Video Hero',
      type: 'url',
      description: 'URL del video hero (.mp4) en el bucket externo',
      validation: (Rule) => Rule.uri({ scheme: ['https'] }),
    }),
    defineField({
      name: 'portadaUrl',
      title: 'URL Imagen Portada',
      type: 'url',
      description: 'Imagen grande para la card en el Home (grid de destacados)',
      validation: (Rule) => Rule.uri({ scheme: ['https'] }),
    }),
    defineField({
      name: 'previewUrl',
      title: 'URL Imagen Preview',
      type: 'url',
      description: 'Imagen horizontal para la card en /works (listado)',
      validation: (Rule) => Rule.uri({ scheme: ['https'] }),
    }),

    // ── Racional ──
    defineField({
      name: 'racionalImageUrl',
      title: 'URL Imagen Racional',
      type: 'url',
      description: 'Imagen que acompaña al texto del racional en el detalle',
      validation: (Rule) => Rule.uri({ scheme: ['https'] }),
    }),
    defineField({
      name: 'racionalText',
      title: 'Texto del Racional',
      type: 'object',
      description: 'Texto largo que explica la estrategia/concepto de la campaña',
      fields: [
        defineField({ name: 'es', title: 'Español', type: 'text', rows: 8 }),
        defineField({ name: 'en', title: 'English', type: 'text', rows: 8 }),
      ],
    }),
    defineField({
      name: 'quote',
      title: 'Frase / Tagline',
      type: 'object',
      description: 'Frase destacada que aparece entre comillas en el detalle',
      fields: [
        defineField({ name: 'es', title: 'Español', type: 'string' }),
        defineField({ name: 'en', title: 'English', type: 'string' }),
      ],
    }),

    // ── Galería (opcional, no todos los trabajos la tienen) ──
    defineField({
      name: 'galeriaUrls',
      title: 'URLs Galería de imágenes',
      type: 'array',
      of: [{ type: 'url', validation: (Rule: Rule) => Rule.uri({ scheme: ['https'] }) }],
      description: 'Galería de fotos opcional. Solo algunos trabajos la tienen (ej: Cabify Juntadas, Philco Heladera)',
    }),

    // ── Stills del comercial ──
    defineField({
      name: 'stillsUrls',
      title: 'URLs Stills del comercial',
      type: 'array',
      of: [{ type: 'url', validation: (Rule: Rule) => Rule.uri({ scheme: ['https'] }) }],
      description: 'Capturas/frames del comercial. Generalmente 4 por trabajo',
    }),

    // ── Ficha Técnica (array de rol localizado + nombres) ──
    defineField({
      name: 'fichaTecnica',
      title: 'Ficha Técnica',
      type: 'array',
      description: 'Créditos del trabajo. El rol se traduce (es/en), los nombres no.',
      of: [
        {
          type: 'object',
          name: 'credit',
          title: 'Crédito',
          fields: [
            defineField({
              name: 'role',
              title: 'Rol',
              type: 'object',
              fields: [
                defineField({ name: 'es', title: 'Español', type: 'string', validation: (Rule) => Rule.required() }),
                defineField({ name: 'en', title: 'English', type: 'string', validation: (Rule) => Rule.required() }),
              ],
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'names',
              title: 'Nombre(s)',
              type: 'string',
              description: 'Una o más personas. Ej: "Nicolás Zarlenga & Federico Plaza Montero"',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: 'role.es', subtitle: 'names' },
          },
        },
      ],
    }),
  ],

  // Preview en Sanity Studio
  preview: {
    select: {
      title: 'title.es',
      subtitle: 'brand',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Sin título',
        subtitle: subtitle ? `[${subtitle}]` : '',
      }
    },
  },

  orderings: [
    {
      title: 'Orden manual',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
