import { useState } from "react";
import { v4 as uuid4 } from "uuid";

// ================ components ===================
import AddFriend from "./components/AddFriend";
import FriendsList from "./components/FriendsList";

//=============== Types ========================
import { Friend } from "./types";
import BillSplit from "./components/BillSplit";

const initialPayer = [
    {
        id: uuid4(),
        name: "You",
        amount: 0,
        image: "https://i.pravatar.cc/48?u=1",
    },
];

function App() {
    const [friends, setFriends] = useState<Friend[]>(initialPayer);
    const [payer, setPayer] = useState<Friend | null>(null);
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='container'>
            <div className='app-container'>
                <div className='list'>
                    <FriendsList
                        friends={friends}
                        setPayer={setPayer}
                        payer={payer}
                    />
                    {!isActive ? (
                        <div className='addBtn'>
                            <button onClick={() => setIsActive(!isActive)}>
                                Add Friend
                            </button>
                        </div>
                    ) : (
                        <AddFriend
                            setFriends={setFriends}
                            setIsActive={setIsActive}
                        />
                    )}
                </div>

                {payer && (
                    <BillSplit
                        payer={payer}
                        setPayer={setPayer}
                        setFriends={setFriends}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
