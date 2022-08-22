import Profile from "./Profile";

const Player=(props)=>{
return(
    <div>
        <h1 className='header'>
            {props.label}
        </h1>
        <h3 style={{textAlign:'center'}}>
            Score:{props.score}
        </h3>
        <Profile
            info={props.profile}
        />
    </div>
    )


}
export default Player;