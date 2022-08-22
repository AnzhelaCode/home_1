import React from "react";
import {Link} from "react-router-dom";
import PlayerInput from "./PlayerInput";
import PlayerPreviw from "./PlayerPreviw";

class Battle extends React.Component{
    constructor() {
        super();
        this.state= {
            playerOneName:"",
            playerTwoName: "",
            playerOneImage: null,
            playerTwoImage: null,
        }
    }

    handleSubmit =(id, userName)=>{

            this.setState({
                [id + "Name"]: userName,
                [id + "Image"]: 'https://github.com/' + userName + '.png?size=200'

            });
    }

    handleReset =(id)=>{
        this.setState({
            [id + "Name"]: "",
            [id + "Image"]: null

        });
    }

    render() {
        console.log(this.state);
        return(
            <>
                <div className="row">
                    {!this.state.playerOneImage ?
                        <PlayerInput
                            id='playerOne'
                            label="Player One"
                            onSubmit={this.handleSubmit}
                        /> :
                        <PlayerPreviw
                            avatar={this.state.playerOneImage}
                            username={this.state.playerOneName}
                        >
                            <button
                                className='reset'
                                onClick={()=>this.handleReset('playerOne')}
                            >
                                Reset
                            </button>
                            </PlayerPreviw>

                    }

                    {!this.state.playerTwoImage ?
                        <PlayerInput
                            id='playerTwo'
                            label="Player Two"
                            onSubmit={this.handleSubmit}
                        /> :
                        <PlayerPreviw
                            avatar={this.state.playerTwoImage}
                            username={this.state.playerTwoName}
                        >
                            <button
                                className='reset'
                                onClick={()=>this.handleReset('playerTwo')}
                            >
                                Reset
                            </button>
                            </PlayerPreviw>


                    }

                </div>
                {
                    this.state.playerOneImage && this.state.playerTwoImage &&
                   <Link className='button' to={{
                       pathname:'/battle/results',
                       search: `?playerOneName=${this.state.playerOneName}&playerTwoName=${this.state.playerTwoName}`
                   }}>
                        Battle
                   </Link>
                }
            </>
        )

    }
}

export default Battle;