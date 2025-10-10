import InputText from "./input-text";
import SearchIcon from "../assets/icons/search.svg?react"

export default function PhotosSearch() {
  return (
    <InputText
      icon={SearchIcon}
      placeholder="Buscar fotos"
      className="flex-1"
    />
  )
}