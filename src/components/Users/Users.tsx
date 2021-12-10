import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import classes from './User.module.css'
import axios from "axios";

const Users = (props: UsersPropsType) => {
    return (
        
        <div>
            <button onClick={() => {
                if (props.usersPage.users.length === 0) {
                    axios({
                        method: 'get',
                        url: 'https://social-network.samuraijs.com/api/1.0/users',
                    })
                        .then(function (response) {
                            // @ts-ignore
                            props.setUsers(response.data.items)
                        });
                }
            }
            }>setUsers</button>
            {props.usersPage.users.map(users => {
                return <div className={classes.container}>
                    <div className={classes.blockAvatar}>
                        <img className={classes.imageAvatar}
                             src= {users.text}
                             alt="avatar"/>
                        <button>follow</button>
                    </div>
                    <div className={classes.blockUserInfo}>
                        <div>
                            <div>
                                <div>
                                    {users.userName}
                                </div>
                            </div>
                            <div className={classes.blockInfoText}>
                                {users.text}
                            </div>
                        </div>
                        
                        <div>
                            <div>{"users.location.country"}</div>
                            <div>{"users.location.city"}</div>
                        </div>
                    </div>
                </div>

            })}
        </div>
    );
};


let imageSrc = "https://avataaars.io/?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Blue01&clotheType=Hoodie&eyeType=EyeRoll&eyebrowType=RaisedExcitedNatural&facialHairColor=Blonde&facialHairType=BeardMagestic&hairColor=Black&hatColor=White&mouthType=Sad&skinColor=Yellow&topType=ShortHairShortWaved"

export default Users;