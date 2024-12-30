//============ Types ===================
import { Friend } from "../types";

type ProfileProps = {
    profile: Friend;
    setPayer: React.Dispatch<React.SetStateAction<Friend | null>>;
    payer: Friend | null;
};

function Profile({ profile, setPayer, payer }: ProfileProps) {
    const handleClick = () => {
        setPayer(() => profile);
    };

    const handleRemove = () => {
        setPayer(null);
    };

    return (
        <div className='friend'>
            <img
                width='40px'
                height='40px'
                src={profile.image}
                alt=''
            />
            <div className='profile-stats'>
                <p>{profile.name}</p>
                <p>
                    {profile.amount < 0 ? " owes you " : `you owe `}$
                    {profile.amount.toFixed(2)}
                </p>
            </div>
            {payer?.id === profile.id ? (
                <button onClick={handleRemove}>Remove</button>
            ) : (
                <button onClick={handleClick}>Add</button>
            )}
        </div>
    );
}

export default Profile;
