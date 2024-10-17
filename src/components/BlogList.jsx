import PropTypes from "prop-types";

const BlogList = ({ blogs,subheading }) => {
    return ( 
        <div className="blog-list">
            <h2>{ subheading }</h2>
            {blogs.map((blog) => ( 
                 <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>By{ blog.author }</p>
                    <p>{ blog.body }</p>
                </div>
            ))}
        </div>
    );
}

BlogList.propTypes = {
    blogs: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired
        })
    ).isRequired,
    subheading: PropTypes.string.isRequired
}

export default BlogList;