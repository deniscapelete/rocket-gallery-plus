import { useParams } from "react-router";
import Text from "../components/text";

export default function PagePhotoDetails() {
  const { id } = useParams();

  return (
    <>
      <Text variant="heading-medium">Página detalhe da foto</Text>
      <Text variant="heading-medium">Id: {id}</Text>
    </>
  )
}