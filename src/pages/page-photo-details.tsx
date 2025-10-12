import { useParams } from "react-router";
import Text from "../components/text";
import Container from "../components/container";
import type { Photo } from "../contexts/photos/models/photo";
import Skeleton from "../components/skeleton";
import PhotosNavigator from "../contexts/photos/components/photos-navigator";

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

  return (
    <Container>
      <header className="flex items-center justify-between gap-8 mb-8">
        {!isLoadingPhoto ? (
          <Text variant="heading-large"> {photo?.title} </Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}


        <PhotosNavigator loading={isLoadingPhoto} />
      </header>
    </Container>
  )
}