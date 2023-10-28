import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import 'flowbite';
 
function Example({visible , setVisible , handleClick}) {
//   const [show, setShow] = useState(false);

  const handleClose = () => setVisible(false);
  const handleShow = () => setVisible(true);

  return (
    <>
    {visible ? (
                   <Modal show={visible} onHide={handleClose}>
                   <Modal.Header>
                     <Modal.Title>Menu</Modal.Title>
                   </Modal.Header>
                   <Modal.Body>
                    <div style={{display :"flex" , alignItems :"center" , flexDirection :"column"}}>
                    <Link to="/" style={{textDecoration :"none"}}><a onClick={handleClick} href=""  style={{textDecoration :"none" , fontSize : 25 , color :"black" , fontWeight : "bold"}}>Home</a></Link>
                    <AnchorLink href="#footer" style={{textDecoration :"none" , fontSize : 25 , color :"black" , fontWeight : "bold"}} onClick={handleClick}>About Us</AnchorLink>
                   <Link to="/contact" style={{textDecoration :"none"}}><a onClick={handleClick} href="" style={{textDecoration :"none" , fontSize : 25 , color :"black" , fontWeight : "bold"}} >Contact</a></Link> 
                </div>
                   </Modal.Body>
                   <Modal.Footer>
                     <Button variant="secondary" onClick={handleClick}>
                       Close
                     </Button>

                   </Modal.Footer>
                 </Modal>
    ) : null}
   


    </>
  );
}

export default Example;