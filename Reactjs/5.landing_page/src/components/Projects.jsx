import React from 'react'
import { Card } from 'react-bootstrap';

function Projects() {
    return (
        <div className='project-component'>
            <div className='project-header'>
                <p>SELECTED PROJECT</p>
            </div>
            <div className='project-body'>
                <div className='project-card-first'>
                    <Card style={{ width: '35rem', border: 'none', borderRadius: '0' }} className="mb-10">
                        <Card.Img variant="top" src="src\assets\1.jpg" />
                        <Card.Body style={{ backgroundColor: 'black', color: 'white', textAlign: 'right' }}>
                            <Card.Title>My Project Number - 1</Card.Title>
                            <Card.Text>
                                Website Design
                            </Card.Text>

                        </Card.Body>
                    </Card>

                    <Card style={{ width: '35rem', border: 'none', borderRadius: '0' }} className="mb-5">
                        <Card.Img variant="top" src="src\assets\1.jpg" />
                        <Card.Body style={{ backgroundColor: 'black', color: 'white', textAlign: 'right' }}>
                            <Card.Title>My Project Number - 2</Card.Title>
                            <Card.Text>
                                Website Design
                            </Card.Text>
                        </Card.Body>
                    </Card>


                </div>
                <div className='project-card-second'>


                    <Card style={{ width: '35rem', border: 'none', borderRadius: '0' }} className="mb-10">
                        <Card.Img variant="top" src="src\assets\1.jpg" />
                        <Card.Body style={{ backgroundColor: 'black', color: 'white', textAlign: 'right' }}>
                            <Card.Title>My Project Number - 3</Card.Title>
                            <Card.Text>
                                Website Design
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '35rem', border: 'none', borderRadius: '0' }} className="mb-5">
                        <Card.Img variant="top" src="src\assets\1.jpg" />
                        <Card.Body style={{ backgroundColor: 'black', color: 'white', textAlign: 'right' }}>
                            <Card.Title>My Project Number - 4</Card.Title>
                            <Card.Text>
                                Website Design
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>
    )
}

export default Projects;