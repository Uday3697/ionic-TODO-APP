import React from 'react';
import { IonItem, IonLabel, IonButton } from '@ionic/react';

interface TodoItemProps {
  todo: string;
  index: number;
  deleteTodo: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index, deleteTodo }) => {
  return (
    <IonItem>
      <IonLabel>{todo}</IonLabel>
      <IonButton color="danger" onClick={() => deleteTodo(index)}>
        Delete
      </IonButton>
    </IonItem>
  );
};

export default TodoItem;
