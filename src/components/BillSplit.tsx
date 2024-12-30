//==================== Imports ==================
//import { v4 as uuid4 } from "uuid";
import { useState } from "react";

//=================== Types ===================
import { Friend } from "../types";

type PayerProps = {
    payer: Friend | null;
    setPayer: React.Dispatch<React.SetStateAction<Friend | null>>;
    setFriends: React.Dispatch<React.SetStateAction<Friend[]>>;
};

function BillSplit({ payer, setFriends, setPayer }: PayerProps) {
    const [bill, setBill] = useState(0);
    const [expense, setExpense] = useState(0);
    const [selectedValue, setSelectedValue] = useState("You");

    const friendExpense = bill - expense;

    /*************  ✨ Codeium Command 🌟  *************/
    /**
     * Handles the form submission for splitting the bill.
     * Updates the friends' amounts based on the payer and selected value.
     * Resets the payer to null after updating.
     *
     * @param e - The synthetic event triggered by form submission.
     */
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (selectedValue === "You") {
            // If the selected value is "You", decrease the payer's amount by the expense
            setFriends((friends) =>
                friends.map((friend) =>
                    friend.id === payer?.id
                        ? { ...friend, amount: friend.amount - expense }
                        : friend
                )
            );
        } else {
            // Otherwise, increase the payer's amount by the expense
            setFriends((friends) =>
                friends.map((friend) =>
                    payer?.id === friend.id
                        ? { ...friend, amount: friend.amount + friendExpense }
                        : friend
                )
            );
        }
        setPayer(null); // Reset the payer to null
    };
    /******  57926072-6f31-49f2-a002-ec154e9b23fb  *******/

    return (
        <>
            <div className='bill-split'>
                <h1>Split a bill with {payer?.name}</h1>
                <form onSubmit={handleSubmit}>
                    <p>
                        💰Bill value:
                        <input
                            type='number'
                            value={bill}
                            onChange={(e) => setBill(Number(e.target.value))}
                        />
                    </p>
                    <p>
                        🤵Your expense:
                        <input
                            type='number'
                            value={expense}
                            onChange={(e) => setExpense(Number(e.target.value))}
                        />
                    </p>
                    <p>
                        🤵{payer?.name} expense:
                        <input
                            type='number'
                            value={friendExpense}
                            disabled
                        />
                    </p>
                    <p>
                        🤑Who is paying the bill?
                        <select
                            value={selectedValue}
                            onChange={(e) => setSelectedValue(e.target.value)}
                        >
                            <option value='You'>You</option>
                            <option value={payer?.id}>{payer?.name}</option>
                        </select>
                    </p>
                    <div className='button'>
                        <button type='submit'>Split the bill</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default BillSplit;
