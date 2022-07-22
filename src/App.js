import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import BoardList from "./components/BoardList";
import CardList from "./components/CardList";
import BoardForm from "./components/BoardForm";
import CardForm from "./components/CardForm";

const kBaseUrl = "https://ssh-back-end-inspiration-board.herokuapp.com";

const boardApiToJson = (board) => {
    const { title, owner, board_id: boardId } = board;
    return { title, owner, boardId };
};

const getBoardData = () => {
    return axios
        .get(`${kBaseUrl}/boards`)
        .then((response) => {
            return response.data.map(boardApiToJson);
        })
        .catch((err) => {
            console.log(err);
        });
};

const cardApiToJson = (card) => {
    const { message, likes_count: likesCount, card_id: cardId } = card;
    return { message, likesCount, cardId };
};

const getCardData = (boardId) => {
    return axios
        .get(`${kBaseUrl}/boards/${boardId}/cards`)
        .then((response) => {
            return response.data.map(cardApiToJson);
        })
        .catch((err) => {
            console.log(err);
        });
};

const sortCardData = (unsortedCardData, sortType) => {
    const unsortedCardDataCopy = [...unsortedCardData];

    // const messages = unsortedCardDataCopy.forEach(function (message) {
    //     let key = Object.keys(message)[0];
    //     console.log(key, message[key]);
    // });

    // const id = unsortedCardDataCopy.forEach(function (id) {
    //     let key = Object.keys(id)["cardId"];
    //     console.log(key, id[key]);
    // });

    if (sortType === "idDown") {
        const idDescending = unsortedCardDataCopy.sort(
            (a, b) => b.cardId - a.cardId
        );
        console.log(idDescending);
        return idDescending;
    } else if (sortType === "idUp") {
        const idAscending = unsortedCardDataCopy.sort(
            (a, b) => a.cardId - b.cardId
        );
        console.log(idAscending);
        return idAscending;
    } else if (sortType === "messageDown") {
        const msgDescending = unsortedCardDataCopy.sort((a, b) =>
            a.message > b.message ? -1 : 1
        );
        console.log(msgDescending);
        return msgDescending;
    } else if (sortType === "messageUp") {
        const msgAscending = unsortedCardDataCopy.sort((a, b) =>
            a.message > b.message ? 1 : -1
        );
        console.log(msgAscending);
        return msgAscending;
    } else if (sortType === "plusOneDown") {
        const likesDescending = unsortedCardDataCopy.sort(
            (a, b) => b.likesCount - a.likesCount
        );
        console.log(likesDescending);
        return likesDescending;
    } else if (sortType === "plusOneUp") {
        const likesAscending = unsortedCardDataCopy.sort(
            (a, b) => a.likesCount - b.likesCount
        );
        console.log(likesAscending);
        return likesAscending;
        // } else if (sortType === "") {
        //     return unsortedCardDataCopy;
    }

    // get the key id from unsortedCardDataCopy
    // sort data.sort((a, b) => a[1] - b[1]) ascending
    // sort data.sort((a, b) => b[1] - a[1]) descending
    // const cardIdData = unsortedCardDataCopy.cardId;
    // console.log(cardIdData);
    // console.log(unsortedCardDataCopy[0]["cardId"]);
    // if (sortType === "idUp") {
    //     // get key cardId of all sorted data
    //     return cardIdData.sort((a, b) => a[1] - b[1]);
    // } else if (sortType === "idDown") {
    //     const cardIdData = unsortedCardDataCopy.cardId;
    //     return cardIdData.sort((a, b) => b[1] - a[1]);
    // } else {
    //     return unsortedCardDataCopy;
    // }

    // return unsortedCardDataCopy; //Delete later
    // get key cardId of all sorted data
    // return cardIdData.Sort((a, b) => b[1] - a[1]) descending

    //} else if sortType === "plusOneUp"
    // else if sortType === "plusOneDown"
    // else if sortType === "messageUp"
    // else if sortType === "messageDown"
    // else if sortType === ""
    // just return unsortedCardDataCopy

    // }
};

const App = () => {
    const [cardData, setCardData] = useState([]);
    const [boardData, setBoardData] = useState([]);
    const [btnText, setButtonText] = useState("Create New Dream");

    let [boardNum, setBoardNum] = useState(0);
    let [boardTitle, setBoardTitle] = useState("");
    let newText = "";

    const showBoardForm =
        btnText === "Create New Dream" ? "hideBoard" : "showBoard";

    const showCardForm = boardNum !== 0 ? "showCard" : "hideCard";

    const loadBoards = () => {
        getBoardData().then((boards) => {
            setBoardData(boards);
        });
    };

    const updateCardData = (updatedCard) => {
        return axios
            .patch(
                `${kBaseUrl}/cards/${updatedCard.cardId}?likes_count=${updatedCard.likesCount}`
            )
            .then((response) => {
                return response;
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const deleteCardData = (cardId) => {
        return axios
            .delete(`${kBaseUrl}/cards/${cardId}`)
            .then((response) => {
                return response;
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const loadCards = (boardId) => {
        getCardData(boardId).then((cards) => {
            setCardData(cards);
        });
    };

    useEffect(() => {
        loadBoards();
    }, []);

    const increaseLikeCount = (updatedCard) => {
        updateCardData(updatedCard);
        const updatedLikes = cardData.map((card) => {
            if (card.cardId === updatedCard.cardId) {
                return updatedCard;
            } else {
                return card;
            }
        });

        setCardData(updatedLikes);
    };

    const handleBoard = (boardId, title) => {
        const newNum = boardId;
        const bTitle = title;

        setBoardNum(newNum);
        loadCards(boardId);
        setBoardTitle(bTitle);
    };

    const onCardDelete = (cardId) => {
        deleteCardData(cardId);
        const currentCards = cardData.filter((card) => {
            return card.cardId !== cardId;
        });
        setCardData(currentCards);
    };

    const addBoardData = (addedBoard) => {
        const requestBody = { ...addedBoard };

        return axios
            .post(`${kBaseUrl}/boards`, requestBody)
            .then(() => loadBoards())
            .catch((err) => console.log(err));
    };

    const addCardData = (addedCard) => {
        const message = addedCard.message;
        const likes_count = addedCard.likesCount;
        const requestBody = { message, likes_count };

        return axios
            .post(`${kBaseUrl}/boards/${boardNum}/cards`, requestBody)
            .then(() => loadCards(boardNum))
            .catch((err) => console.log(err));
    };

    const boardToggle = () => {
        if (btnText === "Create New Dream") {
            newText = "Hide Dream Form";
        } else {
            newText = "Create New Dream";
        }
        setButtonText(newText);
    };

    const handleBoardDataReady = (boardName) => {
        addBoardData(boardName)
            .then((newBoard) => {
                loadBoards((oldData) => [...oldData, newBoard]);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleCardDataReady = (cardName) => {
        addCardData(cardName)
            .then((newCard) => {
                loadCards(boardNum);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleSortSelection = (sortSelection) => {
        const sortType = sortSelection.target.value;
        const sortedCardData = sortCardData(cardData, sortType);
        setCardData(sortedCardData);
    };

    return (
        <div>
            <header>
                <h2>dream board</h2>
            </header>
            <main>
                <div className="boardContainer">
                    <button onClick={boardToggle}>{btnText}</button>
                    <BoardForm
                        onAddBoard={handleBoardDataReady}
                        shouldHideBoard={showBoardForm}
                    ></BoardForm>
                    <BoardList boards={boardData} onSelectBoard={handleBoard} />
                </div>
                <h4>{boardTitle}</h4>
                <p>sort:</p>
                <select className={showCardForm} onChange={handleSortSelection}>
                    <option value="idUp">&#8657; Id &#8657;</option>
                    {/* &#8657; is up arrow html code */}
                    <option value="idDown">&#8595; Id &#8595;</option>
                    {/* &#8595; is down arrow html code */}
                    <option value="plusOneUp">&#8657; +1 &#8657;</option>
                    <option value="plusOneDown">&#8595; +1 &#8595;</option>
                    <option value="messageUp">
                        &#8657; Wish message &#8657;
                    </option>
                    <option value="messageDown">
                        &#8595; Wish message &#8595;
                    </option>
                </select>
                <CardList
                    cards={cardData}
                    onUpdateLikes={increaseLikeCount}
                    onDelete={onCardDelete}
                    boardNum={boardNum}
                />
                <CardForm
                    onAddCard={handleCardDataReady}
                    shouldHideCard={showCardForm}
                ></CardForm>
            </main>
        </div>
    );
};

export default App;
