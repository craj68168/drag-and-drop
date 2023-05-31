"use client";
import styled from "styled-components";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useState } from "react";
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    width: 50%;
    border: 1px solid #000;
    border-radius: 10px;
    .item-container {
      display: flex;
      flex-direction: column;
      .items {
        margin: 10px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 40px;
        margin:20px 15px;
      }
    }
  }
`;
const Home = () => {
  const items = [
    {
      key: 1,
      value: "This picture is about the dog and its loyality with its owners",
      image: "https://picsum.photos/id/237/400/500",
    },
    {
      key: 2,
      value: "This picture show the mountains and its beauty. Lets climb mount everest together",
      image: "https://picsum.photos/seed/picsum/400/500",
    },
    {
      key: 3,
      value: "Life is short enjoy your every day be happy and make other happy",
      image: "https://picsum.photos/200/300?grayscale",
    },
    {
      key: 4,
      value: "Wanna travell different beautiful places of different county with your close ones",
      image: "https://picsum.photos/200/300/",
    },
    {
      key: 5,
      value: "Its a good friday lets meet in the bar to celebrate with friends",
      image: "https://picsum.photos/200/300.jpg",
    },
  ];
  const [characters, updateCharacter] = useState(items);
  const handleOnDragEnd = (val: any) => {
    if (!val.destination) return;
    const items = Array.from(characters);
    const [reorderItems] = items.splice(val.source.index, 1);
    items.splice(val.destination.index, 0, reorderItems);
    updateCharacter(items);
  };
  return (
    <Wrapper>
      <div className="container">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="items">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={"item-container"}
              >
                {characters.map((val, i) => {
                  return (
                    <Draggable key={val.key} draggableId={val.value} index={i}>
                      {(provided) => (
                        <div
                          className="items"
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <img
                            src={val?.image}
                            width={"100px"}
                            height={"100px"}
                          />
                          <h2>{val.value}</h2>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </Wrapper>
  );
};
export default Home;
