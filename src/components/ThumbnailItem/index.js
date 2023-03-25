// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onUpdateStatus} = props
  const {thumbnailUrl, imageUrl, imageAltText, thumbnailAltText} = imageDetails

  const changeImage = () => {
    onUpdateStatus(imageUrl, imageAltText)
  }

  return (
    <li className="list-item">
      <button type="button" onClick={changeImage} className="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}
export default ThumbnailItem