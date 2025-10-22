
import type React from "react";
import { Dialog, DialogBody, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "../../../components/dialog";
import Button from "../../../components/button";
import InputText from "../../../components/input-text";
import Text from "../../../components/text";
import type { Photo } from "../../photos/models/photo";
import SelectCheckboxIlustration from "../../../assets/images/select-checkbox.svg?react"
import Skeleton from "../../../components/skeleton";
import ImagePreview from "../../../components/image-preview";

interface AlbumNewDialog {
  trigger: React.ReactNode;
}

export default function AlbumNewDialog({ trigger }: AlbumNewDialog) {
  const isLoadingPhotos = false;
  const photos: Photo[] = [
    {
      id: '123',
      title: 'Olá mundo',
      imageId: "portrait-tower.png",
      albums: [
        { id: '321', title: "album 1" },
        { id: '322', title: "album 2" },
        { id: '323', title: "album 3" }
      ]
    },
    {
      id: '122',
      title: 'Olá mundo',
      imageId: "portrait-tower.png",
      albums: [
        { id: '321', title: "album 1" },
        { id: '322', title: "album 2" },
        { id: '323', title: "album 3" }
      ]
    }
  ];
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent>
        <DialogHeader>Criar álbum</DialogHeader>

        <DialogBody className="flex flex-col gap-5">
          <InputText placeholder="Adicione um título" />

          <div className="space-y-3 ">
            <Text as="div" variant="label-small">Fotos cadastradas</Text>

            {isLoadingPhotos && (
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <Skeleton key={`photo-loading-${index}`}
                    className="w-20 h-20 rounded"
                  />
                ))}
              </div>
            )}

            {!isLoadingPhotos && photos.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {photos.map(photo => <ImagePreview
                  key={photo.id}
                  src={`/images/${photo.imageId}`}
                  title={photo.title}
                  className="h-20 w-20"
                />)}
              </div>
            )}

            {!isLoadingPhotos && photos.length === 0 && (
              <div className="w-full flex flex-col justify-center items-center gap-2">
                <SelectCheckboxIlustration />
                <Text variant="paragraph-medium" className="text-center">
                  Nenhuma foto díponivel para seleção
                </Text>
              </div>
            )}

          </div>
        </DialogBody>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>

          <Button>Criar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog >
  )
}