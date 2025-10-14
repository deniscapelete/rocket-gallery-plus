import { useParams } from "react-router";
import Text from "../components/text";
import Container from "../components/container";
import Skeleton from "../components/skeleton";
import PhotosNavigator from "../contexts/photos/components/photos-navigator";
import ImagePreview from "../components/image-preview";
import Button from "../components/button";
import AlbumsListSelectable from "../contexts/albums/components/albums-list-selectable";
import type { Photo } from "../contexts/photos/models/photo";

export default function PagePhotoDetails() {
  const { id } = useParams();
  // Apenas para teste do mock
  const isLoadingPhoto = false;
  const photo = {
    id: '123',
    title: 'Olá mundo',
    imageId: "portrait-tower.png",
    albums: [
      { id: '321', title: "album 1" },
      { id: '322', title: "album 2" },
      { id: '323', title: "album 3" }
    ]
  }
  const albums = [
    { id: '321', title: "album 1" },
    { id: '322', title: "album 2" },
    { id: '323', title: "album 3" }
  ]

  return (
    <Container>
      <header className="flex items-center justify-between gap-8 mb-8">
        {!isLoadingPhoto ? (
          <Text as="h2" variant="heading-large"> {photo?.title} </Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}


        <PhotosNavigator loading={isLoadingPhoto} />
      </header>

      <div className="grid grid-cols-[21rem_1fr] gap-24">
        <div className="space-y-3">
          {!isLoadingPhoto ?
            <ImagePreview
              src={`/images/${photo?.imageId}`}
              title={photo?.title}
              imageClassName="h-[21rem]"
            />
            :
            <Skeleton className="h-[21rem]" />
          }

          {!isLoadingPhoto ?
            <Button variant="destructive">Excluir</Button>
            :
            <Skeleton className="w-20 h-10" />
          }
        </div>

        <div className="py-3">
          <Text as="h3" variant="heading-medium" className="mb-6">
            Albuns
          </Text>

          <AlbumsListSelectable albums={albums} photo={photo} loading={isLoadingPhoto} />
        </div>
      </div>
    </Container>
  )
}