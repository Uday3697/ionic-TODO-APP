import React, { useState } from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonInput, IonButton, IonList } from '@ionic/react';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Todo App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput
          value={input}
          placeholder="Enter a new task"
          onIonChange={(e) => setInput(e.detail.value!)}
        />
        <IonButton expand="block" onClick={addTodo}>
          Add Todo
        </IonButton>
        <IonList>
          {todos.map((todo, index) => (
            <TodoItem key={index} index={index} todo={todo} deleteTodo={deleteTodo} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default TodoList;
