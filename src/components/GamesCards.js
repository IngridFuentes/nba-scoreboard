import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';

const GamesCards = (props) => {

    console.log(props.homeTeam)

    return (
        
       <Container >
           {/* <div className="row"> */}
           <Row className='application-row'> 
            {/* <Col sm={4}> */}
            {/* <div class="column"> */}
                    <div className="card">
                    
                        <div> {props.date}</div>
                        <div> {props.homeTeam} </div>
                        <div> {props.homeTeamCity} </div>
                        <div> {props.homeTeamScore} </div>
                        <div> {props.season} </div>
                        <div> {props.status} </div>
                        <div> {props.visitorTeam} </div>
                        <div> {props.visitorTeamScore} </div>
                         
                        
                    </div>
            {/* </div> */}

            {/* <div class="column">
                    <div className="card">
                    
                        <h3>{props.date}</h3>
                        <div>{props.homeTeam}</div>
                        <p>{props.homeTeamCity}</p>
                        <p>{props.homeTeamScore}</p>
                        <p>{props.season}</p>
                        <p>{props.status}</p>
                        <p>{props.visitorTeam}</p>
                        <p>{props.visitorTeamScore}</p>
                        
                    </div>
            </div> */}
                {/* </Col> */}
                </Row>
                

                {/* <Col className="column">
                    <div className="card">
                        <h3>{props.date}</h3>
                        <div>{props.homeTeam}</div>
                        <p>{props.homeTeamCity}</p>
                        <p>{props.homeTeamScore}</p>
                        <p>{props.season}</p>
                        <p>{props.status}</p>
                        <p>{props.visitorTeam}</p>
                        <p>{props.visitorTeamScore}</p>
                    </div>
                </Col>

                <Col className="column">
                    <div className="card">
                        <h3>{props.date}</h3>
                        <div>{props.homeTeam}</div>
                        <p>{props.homeTeamCity}</p>
                        <p>{props.homeTeamScore}</p>
                        <p>{props.season}</p>
                        <p>{props.status}</p>
                        <p>{props.visitorTeam}</p>
                        <p>{props.visitorTeamScore}</p>
                    </div>
                </Col>

                <Row>

                <Col className="column">
                    <div className="card">
                        <h3>{props.date}</h3>
                        <div>{props.homeTeam}</div>
                        <p>{props.homeTeamCity}</p>
                        <p>{props.homeTeamScore}</p>
                        <p>{props.season}</p>
                        <p>{props.status}</p>
                        <p>{props.visitorTeam}</p>
                        <p>{props.visitorTeamScore}</p>
                    </div>
                </Col>

                <Col className="column">
                    <div className="card">
                        <h3>{props.date}</h3>
                        <div>{props.homeTeam}</div>
                        <p>{props.homeTeamCity}</p>
                        <p>{props.homeTeamScore}</p>
                        <p>{props.season}</p>
                        <p>{props.status}</p>
                        <p>{props.visitorTeam}</p>
                        <p>{props.visitorTeamScore}</p>
                    </div>
                </Col>

                <Col className="column">
                    <div className="card">
                        <h3>{props.date}</h3>
                        <div>{props.homeTeam}</div>
                        <p>{props.homeTeamCity}</p>
                        <p>{props.homeTeamScore}</p>
                        <p>{props.season}</p>
                        <p>{props.status}</p>
                        <p>{props.visitorTeam}</p>
                        <p>{props.visitorTeamScore}</p>
                    </div>
                </Col>

                </Row>

                <Col className="column">
                    <div className="card">
                        <h3>{props.date}</h3>
                        <div>{props.homeTeam}</div>
                        <p>{props.homeTeamCity}</p>
                        <p>{props.homeTeamScore}</p>
                        <p>{props.season}</p>
                        <p>{props.status}</p>
                        <p>{props.visitorTeam}</p>
                        <p>{props.visitorTeamScore}</p>
                    </div>
                </Col>

                <Col className="column">
                    <div className="card">
                        <h3>{props.date}</h3>
                        <div>{props.homeTeam}</div>
                        <p>{props.homeTeamCity}</p>
                        <p>{props.homeTeamScore}</p>
                        <p>{props.season}</p>
                        <p>{props.status}</p>
                        <p>{props.visitorTeam}</p>
                        <p>{props.visitorTeamScore}</p>
                    </div>
                </Col>

                <Col className="column">
                    <div className="card">
                        <h3>{props.date}</h3>
                        <div>{props.homeTeam}</div>
                        <p>{props.homeTeamCity}</p>
                        <p>{props.homeTeamScore}</p>
                        <p>{props.season}</p>
                        <p>{props.status}</p>
                        <p>{props.visitorTeam}</p>
                        <p>{props.visitorTeamScore}</p>
                    </div>
                </Col> */}

           {/* </div> */}

   </Container>
    )

}


export default GamesCards;