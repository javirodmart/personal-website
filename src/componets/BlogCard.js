import { Card, Button } from "react-bootstrap"
function BlogCard({ title, image, description,url }) {
    return (
        <Card className="blog-card" bg="success">
            <Card.Body >
                <Card.Title>{title}</Card.Title>
            <Card.Img variant="top" src={image} />
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary" ><a href={url} target="_blank">See Full Blog</a> </Button>
            </Card.Body>
        </Card>
    )
}

export default BlogCard