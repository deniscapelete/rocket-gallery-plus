import {z} from 'zod';

export const albumNewFormSchema = z.object({
  title: z.string().min(1, "O título do álbum é obrigatório.").max(255, "O título do álbum deve ter no máximo 100 caracteres."),
  photosIds: z.array(z.string().uuid()).optional()
})

export type AlbumNewFormSchema = z.infer <typeof albumNewFormSchema>