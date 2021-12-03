import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import classes from './User.module.css'

const Users = (props: UsersPropsType) => {

    return (
        <div>
            {props.usersPage.users.map(users => {
                return <div className={classes.container}>
                    <div className={classes.blockAvatar}>
                        <img className={classes.imageAvatar}
                             src="https://avataaars.io/?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Blue01&clotheType=Hoodie&eyeType=EyeRoll&eyebrowType=RaisedExcitedNatural&facialHairColor=Blonde&facialHairType=BeardMagestic&hairColor=Black&hatColor=White&mouthType=Sad&skinColor=Yellow&topType=ShortHairShortWaved"
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
                            <div>{users.location.country}</div>
                            <div>{users.location.city}</div>
                        </div>
                    </div>
                </div>

            })}
        </div>
    );
};

export default Users;