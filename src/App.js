import logo from './logo.svg';
import './App.scss';
import { CustomCard } from './components/Cards/CustomCard';
import CustomNavbar from './components/Navbar/Navbar';
import AddGoalForm from './components/Forms/AddGoalForm';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import AddTaskForm from './components/Forms/AddTaskForm';
import { useDispatch, useSelector } from "react-redux"
import { getGoals, getTasks } from './store/slices/thunks';


function App() {

  const [view, setView] = useState(0)
  const dispatch = useDispatch();
  const { tasks, goals } = useSelector((state) => state.goal);

  const handleAddGoal = () => {
    dispatch(getGoals())
  };

  const handleAddTask = () => {
    dispatch(getTasks())
  };

  const handleRemoveTask = async (id) => {
    const deleteItem = {
      id
    };

    await fetch('http://localhost:3003/removeTask', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `12345-mi-apikey-secreta`
      },
      body: JSON.stringify(deleteItem)
    })
    dispatch(getTasks())
  };

  const handleRemoveGoal = async (id) => {
    const deleteItem = {
      id
    };

    await fetch('http://localhost:3003/removeGoal', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `12345-mi-apikey-secreta`
      },
      body: JSON.stringify(deleteItem)
    })
    dispatch(getGoals())
  };

  const onSelectSection = (view1) => {
    setView(view1)
  }

  useEffect(() => {
    dispatch(getTasks())
    dispatch(getGoals())
  }, [])

  return (
    <div className="App">
      <CustomNavbar onSelectSection={onSelectSection} />
      <Container className="mt-4">
        {view === 0 ? (
          <Row>
            <Col md={4}>
              <AddTaskForm onAddGoal={handleAddTask} />
            </Col>
            <Col md={8}>
              {tasks.map((item) => (
                <CustomCard
                  key={item._id}
                  id={item._id}
                  name={item.nombre}
                  description={item.description}
                  dueDate={item.dueDate}
                  onRemove={handleRemoveTask}
                />
              ))}
            </Col>
          </Row>
        ) : (
          <Row>
            <Col md={4}>

              <AddGoalForm onAddGoal={handleAddGoal} />
            </Col>
            <Col md={8}>
              {goals.map((item) => (
                <CustomCard
                  key={item._id}
                  id={item._id}
                  name={item.nombre}
                  description={item.description}
                  dueDate={item.dueDate}
                  onRemove={handleRemoveGoal}
                />
              ))}
            </Col>
          </Row>
        )}

      </Container>
    </div>
  );
}

export default App;
