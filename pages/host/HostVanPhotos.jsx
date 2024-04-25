import { useOutletContext } from "react-router-dom"

export function HostVanPhotos() {
    const { currentVan } = useOutletContext()
    return (
        <img src={currentVan.imageUrl} className="host-van-detail-image" />
    )
}