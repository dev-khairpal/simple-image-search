import ImageItem from "./ImageItem"


const ImageList = ({images}) => {
  return (
    <div className="image-list">
    {images.map(image=>(
        <ImageItem image={image} key={image.id} />
    ))}
    </div>
  )
}

export default ImageList