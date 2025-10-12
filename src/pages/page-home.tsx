import Container from "../components/container"
import AlbumsFilter from "../contexts/albums/components/albums-filter"
import PhotosList from "../contexts/photos/components/photos-list"

export default function PageHome() {
  return (
    <Container>
      <AlbumsFilter
        albums={[
          { id: '321', title: "album 1" },
          { id: '322', title: "album 2" },
          { id: '323', title: "album 3" }
        ]}
        className="mb-9"
        loading
      />

      <PhotosList photos={[
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
      ]} />
    </Container>
  )
}

