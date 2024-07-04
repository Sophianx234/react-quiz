function Finished({points,totalPoints}) {
    let emoji = '';
    if(points >=0 && points<50){
        emoji = '🤦‍♂️'
    }
    if(points>=50 &&points<80){
        emoji = '🙃'
    }
    if(points >=80){
        emoji = '🎖️'
    }

    return (
        <div className="finished">

            {emoji} You scored {points} out of {totalPoints} ({Math.ceil((points/totalPoints)*100)}%)
        </div>
    )
}

export default Finished
