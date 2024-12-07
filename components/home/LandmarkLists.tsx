import LandmarkCard from "../card/LandmarkCard"


const LandmarkLists = ({ landmarks }) => {
    return (
        <div>
            {
                landmarks.map((landmark) => {
                    return <LandmarkCard key={landmark.id} landmark={landmark} />
                })
            }
        </div>
    )
}

export default LandmarkLists
