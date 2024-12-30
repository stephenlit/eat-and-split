// ================ components ===================
import Profile from "./Profile";

// =============== Types ==================
import { Friend } from "../types";

type FriendsListProps = {
    friends: Friend[];
    setPayer: React.Dispatch<React.SetStateAction<Friend | null>>;
    payer: Friend | null;
};

function FriendsList({ friends, setPayer, payer }: FriendsListProps) {
    const hasOnlyYou = friends.length === 1 && friends[0].name === "You";

    return (
        <>
            {!hasOnlyYou && (
                <div className='friend-list'>
                    {friends.map(
                        (friend) =>
                            friend.name !== "You" && (
                                <Profile
                                    key={friend.id}
                                    profile={friend}
                                    setPayer={setPayer}
                                    payer={payer}
                                />
                            )
                    )}
                </div>
            )}
        </>
    );
}

export default FriendsList;
