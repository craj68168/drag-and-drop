"use client";
import styled from "styled-components";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useState } from "react";
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;

  .container {
    width: 50%;
    border: 1px solid #000;
    border-radius: 10px;
    .item-container {
      display: flex;
      flex-direction: column;
      .items {
        border: 1px solid red;
        height: 100px;
        margin: 10px;
        border-radius: 10px;
      }
    }
  }
`;
const Home = () => {
  const items = [
    { key: 1, value: "Item One" },
    { key: 2, value: "Item Two" },
    { key: 3, value: "Item Three" },
    { key: 4, value: "Item Four" },
    { key: 5, value: "Item Five" },
    { key: 6, value: "Item Six" },
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
                          {val.value}
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
