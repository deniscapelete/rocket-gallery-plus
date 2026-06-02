import { api } from "@/helpers/api";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function usePhotoAlbums() {
const queriClient = useQueryClient();

  async function managePhotoOnAlbum(photoId: string, albumsIds: string[]) {
    try {
      await api.put(`/photos/${photoId}/albums`, {
       albumsIds
      })

      queriClient.invalidateQueries({queryKey:["photo", photoId]})
      queriClient.invalidateQueries({queryKey:["photos"]})

      toast.success("Álbuns da foto atualizados com sucesso!")
    } catch (error) {
      toast.error("Erro ao gerenciar os álbuns da foto. Tente novamente mais tarde.")
      throw error;
    }
  }
  return { managePhotoOnAlbum };
}