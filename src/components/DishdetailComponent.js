import React from 'react';
import { Card , CardText ,CardTitle ,CardBody ,CardImg } from 'reactstrap';


    function RenderComments({comments}) {
        if(comments != null) {
      
            const comment = comments.map(comment =>{
                return(
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US' ,{ year:'numeric',month:'long',day:'2-digit',}).format(new Date(comment.date))}</p>
                    </li>
                )
            })
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4> Comments </h4>
                    <ul className="list-unstyled">{comment}</ul>
                </div>
            )
        }else{
            return(<div></div>);
        }
    }

    function RenderDish({dish}){
        if(dish!= null)
        {
            return(
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
            )
        }   
        else
        {
            return(
                <div></div>
            );
        }
    }

    const DishDetail = (props) => {
        //const dish = this.props.dish
        if(props.dish == null) {
            return(
                <div>

                </div>
            )
        }
        const dishItem  = <RenderDish dish={props.dish} />
        const commentItem = <RenderComments comments={props.dish.comments} />
        return(
            <div className="row">
                { dishItem }
                { commentItem }
            </div>
        )
    }


export default DishDetail;