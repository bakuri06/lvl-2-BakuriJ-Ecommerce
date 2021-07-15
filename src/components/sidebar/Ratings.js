import { Box } from "@material-ui/core"
import './Ratings.css'

const Ratings = () => {
    return (
        <Box mt={4}>
            <h3 className='margin_null'>Avg. Customer Review</h3>

            <a href="#!">
                <ul className="rating">
                    <li>
                        <i className="fas fa-star fa-sm text-primary"></i>
                    </li>
                    <li>
                        <i className="fas fa-star fa-sm text-primary"></i>
                    </li>
                    <li>
                        <i className="fas fa-star fa-sm text-primary"></i>
                    </li>
                    <li>
                        <i className="fas fa-star fa-sm text-primary"></i>
                    </li>
                    <li>
                        <i className="far fa-star fa-sm text-primary"></i>
                    </li>
                    <li>
                        <p className="small text-uppercase card-link-secondary px-2">&amp; Up</p>
                    </li>
                </ul>
            </a>
            <a href="#!">
                <ul className="rating">
                    <li>
                        <i className="fas fa-star fa-sm text-primary"></i>
                    </li>
                    <li>
                        <i className="fas fa-star fa-sm text-primary"></i>
                    </li>
                    <li>
                        <i className="fas fa-star fa-sm text-primary"></i>
                    </li>
                    <li>
                        <i className="far fa-star fa-sm text-primary"></i>
                    </li>
                    <li>
                        <i className="far fa-star fa-sm text-primary"></i>
                    </li>
                    <li>
                        <p className="small text-uppercase card-link-secondary px-2">&amp; Up</p>
                    </li>
                </ul>
            </a>
            <a href="#!">
                <ul className="rating">
                    <li>
                        <i className="fas fa-star fa-sm text-primary"></i>
                    </li>
                    <li>
                        <i className="fas fa-star fa-sm text-primary"></i>
                    </li>
                    <li>
                        <i className="far fa-star fa-sm text-primary"></i>
                    </li>
                    <li>
                        <i className="far fa-star fa-sm text-primary"></i>
                    </li>
                    <li>
                        <i className="far fa-star fa-sm text-primary"></i>
                    </li>
                    <li>
                        <p className="small text-uppercase card-link-secondary px-2">&amp; Up</p>
                    </li>
                </ul>
            </a>
            <a href="#!">
                <ul className="rating">
                    <li>
                        <i className="fas fa-star fa-sm text-primary"></i>
                    </li>
                    <li>
                        <i className="far fa-star fa-sm text-primary"></i>
                    </li>
                    <li>
                        <i className="far fa-star fa-sm text-primary"></i>
                    </li>
                    <li>
                        <i className="far fa-star fa-sm text-primary"></i>
                    </li>
                    <li>
                        <i className="far fa-star fa-sm text-primary"></i>
                    </li>
                    <li>
                        <p className="small text-uppercase card-link-secondary px-2">&amp; Up</p>
                    </li>
                </ul>
            </a>
        </Box>

    )
}

export default Ratings;
