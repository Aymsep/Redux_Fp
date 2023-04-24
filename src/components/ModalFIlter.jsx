import React,{useState} from 'react'
import {Modal,Button,Form} from 'react-bootstrap/';
import Circle from './Circle';
import { useSelector,useDispatch } from 'react-redux';
import { AddFilter } from '../feauters/Filter';

const ModalFIlter = () => {
  const [formdata, setformdata] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const handlechange = (e)=>{
      setformdata({...formdata,[e.target.name]:e.target.value})
    }
    const added = ()=>{
      dispatch(AddFilter(formdata))
      setShow(false);
    }

  return (
    <div className="app__modalfilter">
               <Button className='addfilter' onClick={handleShow}>
                    <Circle border='gray' filter={'add filter'} />
               </Button>
               <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Choose Color</Form.Label>
              <Form.Control
              onChange={handlechange}
                name='color'
                type="color"
                placeholder="Choose Your Color"
                autoFocus
                required
              />
            </Form.Group>
           
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Choose Filter</Form.Label>
              <Form.Control
              onChange={handlechange}
                type="text"
                name="text"
                placeholder="Choose Filter Type"
                autoFocus
              />
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={added}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalFIlter