import type { SchemaTypeDefinition } from "sanity";

import { projectType } from "./project";
import { testimonialType } from "./testimonial";

export const schemaTypes: SchemaTypeDefinition[] = [projectType, testimonialType];
