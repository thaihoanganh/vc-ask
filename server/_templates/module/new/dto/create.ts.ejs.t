---
to: src/modules/<%= h.lowercaseFirstLetter(name) %>/dto/create-<%= h.lowercaseFirstLetter(name, true) %>.dto.ts
---

import { IsNotEmpty, IsString } from 'class-validator';

export class Create<%= h.capitalizeFirstLetter(name, true) %>Dto {
  @IsNotEmpty()
  @IsString()
  example: string;
}
