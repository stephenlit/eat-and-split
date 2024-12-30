//================ Imports ==================
import { v4 as uuid4 } from "uuid";

//================ Types ========================
import { Friend } from "../types";
type AddFriendProps = {
    setFriends: React.Dispatch<React.SetStateAction<Friend[]>>;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};
function AddFriend({ setFriends, setIsActive }: AddFriendProps) {
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement;

        const nameInput = target.elements.namedItem("name") as HTMLInputElement;
        const imageInput = target.elements.namedItem(
            "image"
        ) as HTMLInputElement;

        const newFriend = {
            id: uuid4(),
            name: nameInput.value,
            amount: 0,
            image: imageInput.value,
        };
        setFriends((friends) => [...friends, newFriend]);
        setIsActive(false);
        target.reset();
    };

    return (
        <div className='add-friend'>
            <form onSubmit={handleSubmit}>
                <p>
                    Friend Name:
                    <input
                        type='text'
                        name='name'
                    />
                </p>
                <p>
                    Image URL:
                    <input
                        type='text'
                        name='image'
                    />
                </p>
                <div className='btn'>
                    <button type='submit'>Add Friend</button>
                </div>
            </form>
        </div>
    );
}

export default AddFriend;
