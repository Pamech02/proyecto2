import logo from './logo.svg';
import './App.scss';
import { CustomCard } from './components/Cards/CustomCard';
import CustomNavbar from './components/Navbar/Navbar';
import AddGoalForm from './components/Forms/AddGoalForm';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

function App() {

   const [tasks, setTasks] = useState([{ id: 1, name: 'nada', description: 'nada' }]);

  const handleAddGoal = (newGoal) => {
    const newTask = {
      id: Date.now(), 
      ...newGoal
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleRemoveTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
  };

  return (
      <div className="App">
      <CustomNavbar />
      <Container className="mt-4">
        <Row>
          <Col md={4}>
            <AddGoalForm onAddGoal={handleAddGoal} />
          </Col>
          <Col md={8}>
            {tasks.map((item) => (
              <CustomCard
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                dueDate={item.dueDate}
                onRemove={handleRemoveTask}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
