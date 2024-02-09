import { Link } from "react-router-dom";

function ArtImagetile ({art, gallery}) {
    console.log(art.images)
    return (
        <Link to={`/galleries/${gallery.id}/art/${art.id}`}>
            <img src={art.images[0].baseimageurl} />
        </Link>
    )
}

export default ArtImagetile;