import Container from "../components/container"
import PhotoWidget from "../contexts/photos/components/photo-widget"
import type { Photo } from "../contexts/photos/models/photo"

export default function PageHome() {
  return (
    <Container>
      <div className="grid grid-cols-4 gap-9">
        <PhotoWidget
          photo={{
            id: '123',
            title: 'Olá mundo',
            imageId: "portrait-tower.png",
            albums: [
              { id: '321', title: "album 1" },
              { id: '322', title: "album 2" },
              { id: '323', title: "album 3" }
            ]
          }}
        />
        <PhotoWidget
          photo={{
            id: '123',
            title: 'Olá mundo',
            imageId: "portrait-tower.png",
            albums: [
              { id: '321', title: "album 1" },
              { id: '322', title: "album 2" },
              { id: '323', title: "album 3" }
            ]
          }}
        />
        <PhotoWidget
          photo={{
            id: '123',
            title: 'Olá mundo',
            imageId: "portrait-tower.png",
            albums: [
              { id: '321', title: "album 1" },
              { id: '322', title: "album 2" },
              { id: '323', title: "album 3" }
            ]
          }}
        />

        <PhotoWidget
          photo={{} as Photo} loading
        />
      </div>
    </Container>
  )
}

