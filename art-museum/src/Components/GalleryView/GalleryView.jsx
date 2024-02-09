import { useParams, Navigate } from "react-router-dom";
import ArtImagetile from "../ArtImageTile/ArtImageTile";

function GalleryView({galleries}) {
    const { galleryId } = useParams();
    const gallery = galleries.find(g => g.id == galleryId);

    if (!gallery) {
        return <Navigate to='/' replace />;
    }
    return (

        <div>
            <h2>{gallery.name}</h2>
            {gallery.objects.map(art => <ArtImagetile key={art.id} art={art} gallery={gallery}/>)}
        </div>
    )
}

export default GalleryView;