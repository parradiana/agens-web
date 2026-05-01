import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { apiVersion, dataset, projectId } from './lib/sanity/env';

export default defineConfig({
  basePath: '/es/studio',
  projectId: projectId!,
  dataset,
  schema: { types: schemaTypes },
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
});
