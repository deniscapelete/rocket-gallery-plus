
import type React from "react";
import { Dialog, DialogBody, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "../../../components/dialog";
import Button from "../../../components/button";
import InputText from "../../../components/input-text";
import Text from "../../../components/text";
import SelectCheckboxIlustration from "../../../assets/images/select-checkbox.svg?react"
import Skeleton from "../../../components/skeleton";
import PhotoImageSelectable from "../../photos/components/photo-image-selectable";
import { usePhotos } from "../../photos/hooks/use-photos";
import { albumNewFormSchema, type AlbumNewFormSchema } from "../schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

interface AlbumNewDialog {
  trigger: React.ReactNode;
}

export default function AlbumNewDialog({ trigger }: AlbumNewDialog) {
  const [modalOpen, setModalOpen] = useState(false);
  const form = useForm<AlbumNewFormSchema>({
    resolver: zodResolver(albumNewFormSchema)
  })

  const { photos, isLoadingPhotos } = usePhotos();
  useEffect(() => {
    if (!modalOpen) {
      form.reset();
    }
  }, [modalOpen, form])

  function handleTogglePhoto(selected: boolean, photoId: string) {
    const photosIds = form.getValues('photosIds') || [];
    let newValue = [];

    if (selected) {
      newValue = [...photosIds, photoId]
    } else {
      newValue = photosIds.filter((id) => id !== photoId)
    }

    form.setValue('photosIds', newValue)
  }
  function handleSubmit(payload: AlbumNewFormSchema) {
    console.log(payload)
  }


  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent aria-describedby={undefined}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <DialogHeader>Criar álbum</DialogHeader>

          <DialogBody className="flex flex-col gap-5">
            <InputText
              placeholder="Adicione um título"
              error={form.formState.errors.title?.message}
              {...form.register("title")}
            />

            <div className="space-y-3 ">
              <Text as="div" variant="label-small">Fotos cadastradas</Text>

              {isLoadingPhotos && (
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <Skeleton key={`photo-loading-${index}`}
                      className="w-20 h-20 rounded-lg"
                    />
                  ))}
                </div>
              )}

              {!isLoadingPhotos && photos.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {photos.map(photo => (
                    <PhotoImageSelectable
                      key={photo.id}
                      src={`${import.meta.env.VITE_IMAGES_URL}/${photo.imageId}`}
                      title={photo.title}
                      imageClassName="h-20 w-20"
                      onSelectImage={(selected) => handleTogglePhoto(selected, photo.id)}
                    />
                  ))}
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
              <Button type='button' variant="secondary">Cancelar</Button>
            </DialogClose>

            <Button type='submit'>Criar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog >
  )
}