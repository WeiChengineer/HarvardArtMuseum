import { useParams, Navigate } from "react-router-dom";

function GalleryView({galleries}) {
    const { galleryId } = useParams();
    const gallery = galleries.find(g => g.id == galleryId);

    if (!gallery) {
        return <Navigate to='/' replace />;
    }
    return (

        <div>
            <h2>{gallery.name}</h2>
        </div>
    )
}

export default GalleryView;